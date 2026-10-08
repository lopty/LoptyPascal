// Quality gate. Run after `npm run build`. Exits 1 on any failure.
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const { seoRoutes, REDIRECTS, BASE } = await import('../.ssr/entry-server.js');

const failures = [];
const fail = (msg) => failures.push(msg);

const fileFor = (path) => (path === '/' ? join(dist, 'index.html') : join(dist, path, 'index.html'));
const decode = (s) =>
  s.replace(/<!--.*?-->/g, '').replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const text = (html) => decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

const BANNED = [/guaranteed/i, /no hidden costs/i, /100% success/i, /lifetime/i, /\bnumber one (seo|expert|marketer)/i, /#1\b/, /post not found/i];
// The only money figure allowed on the site is the explained $20 million.
const PRICE = /(?:AED|USD|EUR|GBP|Dhs?\.?)\s?\d|\d[\d,.]*\s?(?:AED|USD|dirhams)|\$\s?\d[\d,.]*/gi;
const PRICE_ALLOWED = /^\$\s?20$/;

const titles = new Map();
const descriptions = new Map();
const canonicals = new Map();
const blocks = new Map(); // long text block -> first page seen
const known = new Set([...seoRoutes.map((r) => r.path), ...REDIRECTS.map((r) => r.from)]);
const redirectFroms = new Set(REDIRECTS.map((r) => r.from));

for (const route of seoRoutes) {
  const file = fileFor(route.path);
  if (!existsSync(file)) {
    fail(`${route.path}: no prerendered file`);
    continue;
  }
  const html = readFileSync(file, 'utf-8');
  const body = html.slice(html.indexOf('<body'));
  const main = (body.match(/<main[^>]*>([\s\S]*)<\/main>/) || [, ''])[1];

  // Head
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  if (!title) fail(`${route.path}: missing title`);
  if (!desc) fail(`${route.path}: missing meta description`);
  if (canon !== route.canonical) fail(`${route.path}: canonical is ${canon}, expected ${route.canonical}`);
  if (!canon?.startsWith(BASE)) fail(`${route.path}: canonical not on ${BASE}`);
  for (const [map, value, label] of [[titles, title, 'title'], [descriptions, desc, 'description'], [canonicals, canon, 'canonical']]) {
    if (map.has(value)) fail(`${route.path}: duplicate ${label} with ${map.get(value)}`);
    else map.set(value, route.path);
  }
  if (desc && (desc.length < 70 || desc.length > 200)) fail(`${route.path}: description length ${desc.length}`);

  // One H1
  const h1s = (main.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) fail(`${route.path}: ${h1s} H1 elements`);

  // JSON-LD parses
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch {
      fail(`${route.path}: invalid JSON-LD`);
    }
  }

  // FAQ markup only for visible questions
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (ld) {
    const visible = text(main);
    const graph = JSON.parse(ld[1])['@graph'] || [];
    for (const node of graph.filter((n) => n['@type'] === 'FAQPage')) {
      for (const q of node.mainEntity) {
        if (!visible.includes(q.name)) fail(`${route.path}: FAQ markup for a question not visible on the page: "${q.name}"`);
      }
    }
  }

  // Internal links resolve; images have alt, width and height
  for (const m of body.matchAll(/<a\s[^>]*href="([^"]*)"/g)) {
    const href = m[1].split('#')[0];
    if (!href.startsWith('/')) continue;
    if (/^\/case-studies\/[a-z-]+\.png$/.test(href) && existsSync(join(dist, href))) continue;
    const path = href.length > 1 ? href.replace(/\/$/, '') : '/';
    if (redirectFroms.has(path)) fail(`${route.path}: links to redirected URL ${path}`);
    else if (!known.has(path)) fail(`${route.path}: link to missing page ${path}`);
  }
  for (const m of body.matchAll(/<img\s[^>]*>/g)) {
    if (!/alt="[^"]{10,}"/.test(m[0])) fail(`${route.path}: image without descriptive alt`);
    if (!/width="/.test(m[0]) || !/height="/.test(m[0])) fail(`${route.path}: image without width and height`);
  }

  // Copy rules
  const visible = text(main);
  if (visible.includes('—')) fail(`${route.path}: em dash in copy`);
  if (html.includes('—')) fail(`${route.path}: em dash in HTML or metadata`);
  for (const re of BANNED) {
    const hit = visible.match(re) || `${title} ${desc}`.match(re);
    if (hit) fail(`${route.path}: banned phrase "${hit[0]}"`);
  }
  for (const m of visible.matchAll(PRICE)) {
    if (!PRICE_ALLOWED.test(m[0].trim())) fail(`${route.path}: price or money figure "${m[0]}"`);
  }
  if (visible.split(' ').length < 150) fail(`${route.path}: thin page (${visible.split(' ').length} words)`);

  // Repeated long text blocks across pages (shared layout is outside <main>)
  for (const m of main.matchAll(/<(p|li|dd|dt)[^>]*>([\s\S]*?)<\/\1>/g)) {
    const t = text(m[2]);
    if (t.length <= 140) continue;
    if (blocks.has(t) && blocks.get(t) !== route.path) fail(`${route.path}: paragraph repeated from ${blocks.get(t)}: "${t.slice(0, 70)}..."`);
    else blocks.set(t, route.path);
  }
}

// Sitemap must list exactly the indexable pages
const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf-8');
const locs = [...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]).sort();
const expected = seoRoutes.map((r) => r.canonical).sort();
if (JSON.stringify(locs) !== JSON.stringify(expected)) fail('sitemap.xml does not match the indexable pages');
if (new Set(locs).size !== locs.length) fail('sitemap.xml has duplicate URLs');

// Redirect stubs exist and point at a real page
for (const { from, to } of REDIRECTS) {
  if (!existsSync(fileFor(from))) fail(`redirect stub missing for ${from}`);
  if (!seoRoutes.some((r) => r.path === to)) fail(`redirect ${from} points at missing page ${to}`);
  if (seoRoutes.some((r) => r.path === from)) fail(`redirect ${from} collides with a live page`);
}

// Generated files
const robots = readFileSync(join(dist, 'robots.txt'), 'utf-8');
for (const bot of ['Googlebot', 'Bingbot', 'GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended']) {
  if (!robots.includes(`User-agent: ${bot}`)) fail(`robots.txt does not name ${bot}`);
}
if (!robots.includes(`Sitemap: ${BASE}/sitemap.xml`)) fail('robots.txt missing sitemap line');
const llms = readFileSync(join(dist, 'llms.txt'), 'utf-8');
if (llms.includes('—')) fail('llms.txt contains an em dash');
for (const m of llms.matchAll(/\]\((https:\/\/loptypascal\.com[^)]*)\)/g)) {
  if (!expected.includes(m[1])) fail(`llms.txt links to a page that does not exist: ${m[1]}`);
}
if (!existsSync(join(dist, '404.html'))) fail('404.html missing');

if (failures.length) {
  console.error(`AUDIT FAILED: ${failures.length} problem(s)`);
  for (const f of failures) console.error(' - ' + f);
  process.exit(1);
}
console.log(`Audit passed: ${seoRoutes.length} pages, ${REDIRECTS.length} redirects, ${blocks.size} long text blocks checked for repeats.`);
