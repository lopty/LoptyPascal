# IndexNow

The public verification file is copied by Vite into the root of the production build:
https://loptypascal.com/def260ce0d404be18867e3ba24a47cb9.txt

Deploy the build before submitting. The URL must return HTTP 200 with the key as plain UTF-8 text, not the site's HTML fallback.

After the initial deployment, submit the live sitemap's URLs:

```sh
npm run indexnow
```

For later content changes, submit only the added, updated or deleted URLs:

```sh
npm run indexnow -- / /work/ad-residences-ai-seo
```

Preview the payload without network requests (uses the local built sitemap when no URLs are supplied):

```sh
npm run indexnow -- --dry-run
```

The script verifies the live key before sending, rejects other hosts, and distinguishes HTTP 200 receipt from HTTP 202 pending key validation. It does not run during builds or visitor page loads. Run it after a successful production deployment, not before files are live.

Submission notifies participating search engines, including Bing; it does not guarantee indexing. Check receipt and indexing separately in Bing Webmaster Tools.

Protocol: https://www.indexnow.org/documentation
