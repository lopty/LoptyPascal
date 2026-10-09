import { readFileSync } from 'node:fs';

const origin = 'https://loptypascal.com';
const key = 'def260ce0d404be18867e3ba24a47cb9';
const keyLocation = `${origin}/${key}.txt`;
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const requested = args.filter(arg => arg !== '--dry-run');

async function getText(url) {
  const response = await fetch(url, { redirect: 'error', signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`${url} returned HTTP ${response.status}. Deploy the site before submitting.`);
  return response.text();
}

try {
  if (!dryRun) {
    const hostedKey = await getText(keyLocation);
    if (hostedKey.trim() !== key) throw new Error(`The live key file does not contain the expected key. Deploy ${keyLocation} first.`);
  }
  const sitemap = requested.length ? '' : dryRun
    ? readFileSync(new URL('../dist/sitemap.xml', import.meta.url), 'utf8')
    : await getText(`${origin}/sitemap.xml`);
  const urls = requested.length ? requested : [...sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m => m[1].trim().replaceAll('&amp;', '&'));
  const urlList = [...new Set(urls.map(value => {
    const url = new URL(value, origin);
    if (url.origin !== origin || url.hash || url.username || url.password) throw new Error(`Invalid site URL: ${value}`);
    return url.href;
  }))];
  if (!urlList.length || urlList.length > 10000) throw new Error('Submit between 1 and 10,000 site URLs per request.');
  const payload = { host: new URL(origin).host, key, keyLocation, urlList };
  if (dryRun) {
    console.log(JSON.stringify(payload, null, 2));
    console.log(`Dry run: ${urlList.length} URLs prepared. No URLs submitted.`);
  } else {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(30000),
    });
    if (response.status === 200) console.log(`IndexNow received ${urlList.length} URLs (HTTP 200). Receipt does not confirm indexing.`);
    else if (response.status === 202) console.log(`IndexNow received ${urlList.length} URLs; key validation is pending (HTTP 202).`);
    else throw new Error(`IndexNow HTTP ${response.status}: ${await response.text()}`);
  }
} catch (error) {
  console.error(`IndexNow: ${error.message}`);
  process.exitCode = 1;
}
