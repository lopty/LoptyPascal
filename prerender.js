import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, 'dist');

// Import the SSR bundle (built by vite.ssr.config.ts)
const { render, seoRoutes, sitemapXml, robotsTxt, llmsTxt, REDIRECTS, BASE, NAME } = await import('./.ssr/entry-server.js');

const template = readFileSync(join(dist, 'index.html'), 'utf-8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function write(path, html) {
  const out = path === '/' ? join(dist, 'index.html') : join(dist, path, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
}

function page(path, title, head) {
  return template
    .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`)
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace('<!--seo-head-->', head);
}

for (const route of seoRoutes) {
  const head = `<meta name="description" content="${esc(route.description)}" />
    <link rel="canonical" href="${route.canonical}" />
    <meta property="og:type" content="${route.ogType}" />
    <meta property="og:site_name" content="${NAME}" />
    <meta property="og:title" content="${esc(route.title)}" />
    <meta property="og:description" content="${esc(route.description)}" />
    <meta property="og:url" content="${route.canonical}" />
    <meta property="og:image" content="${BASE}/lopty-pascal.jpg" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${esc(route.title)}" />
    <meta name="twitter:description" content="${esc(route.description)}" />
    <meta name="twitter:image" content="${BASE}/lopty-pascal.jpg" />
    <script type="application/ld+json">${JSON.stringify(route.schema).replace(/</g, '\\u003c')}</script>`;
  write(route.path, page(route.path, route.title, head));
}

// 404 page, served by the host for unknown URLs.
writeFileSync(
  join(dist, '404.html'),
  page('/page-not-found', `Page not found | ${NAME}`, '<meta name="robots" content="noindex" />')
    .replace('<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />', ''),
);

// Redirect stubs for retired URLs that have a close replacement.
for (const { from, to } of REDIRECTS) {
  const target = `${BASE}${to}`;
  write(from, `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Moved</title>
    <meta name="robots" content="noindex" />
    <link rel="canonical" href="${target}" />
    <meta http-equiv="refresh" content="0; url=${target}" />
  </head>
  <body><p>This page has moved to <a href="${target}">${target}</a>.</p></body>
</html>
`);
}

writeFileSync(join(dist, 'sitemap.xml'), sitemapXml());
writeFileSync(join(dist, 'robots.txt'), robotsTxt());
writeFileSync(join(dist, 'llms.txt'), llmsTxt());

console.log(`Prerendered ${seoRoutes.length} pages, ${REDIRECTS.length} redirect stubs, 404.html, sitemap.xml, robots.txt, llms.txt`);
