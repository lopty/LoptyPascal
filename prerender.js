import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Import the SSR bundle (built by vite.ssr.config.ts)
const { render, seoRoutes } = await import('./dist/server/entry-server.js');

const template = readFileSync(join(__dirname, 'dist/index.html'), 'utf-8');

let rendered = 0;
let failed = 0;

for (const route of seoRoutes) {
  const url = route.path;

  // Build per-page head injection
  const schemaTag = route.schema
    ? `<script type="application/ld+json">\n    ${JSON.stringify(route.schema, null, 2)}\n    </script>`
    : '';

  const perPageHead = `
    <title>${route.title}</title>
    <meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />
    <link rel="canonical" href="${route.canonical}" />
    <meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />
    <meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />
    <meta property="og:url" content="${route.canonical}" />
    <meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />
    <meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />
    ${schemaTag}`;

  try {
    // Render React app to HTML string
    const appHtml = render(url);

    // Replace title and inject per-page head before </head>
    let html = template
      // Inject app HTML
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      // Replace title tag
      .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
      // Replace meta description
      .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`)
      // Replace canonical
      .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${route.canonical}" />`)
      // Replace OG title
      .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />`)
      // Replace OG description
      .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`)
      // Replace OG url
      .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${route.canonical}" />`);

    // For non-homepage routes, inject page-specific schema before </head>
    if (url !== '/' && schemaTag) {
      html = html.replace('</head>', `  ${schemaTag}\n  </head>`);
    }

    // Determine output path
    const outputPath = url === '/'
      ? join(__dirname, 'dist/index.html')
      : join(__dirname, `dist${url}/index.html`);

    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, html);

    rendered++;
    if (rendered % 10 === 0) console.log(`Prerendered ${rendered}/${seoRoutes.length} routes...`);
  } catch (err) {
    failed++;
    console.error(`Failed to prerender ${url}:`, err.message);

    // Fallback: inject meta without app HTML
    let html = template
      .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
      .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`)
      .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${route.canonical}" />`);

    if (schemaTag) {
      html = html.replace('</head>', `  ${schemaTag}\n  </head>`);
    }

    const outputPath = url === '/'
      ? join(__dirname, 'dist/index.html')
      : join(__dirname, `dist${url}/index.html`);

    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, html);
  }
}

console.log(`\nPrerender complete: ${rendered} succeeded, ${failed} failed (fallback meta-only)`);
console.log(`Total routes: ${seoRoutes.length}`);
