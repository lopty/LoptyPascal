import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import { seoRoutes, sitemapXml, robotsTxt, llmsTxt } from './seo/routes';
import { REDIRECTS } from './seo/redirects';
import { BASE, NAME } from './site';

export { seoRoutes, sitemapXml, robotsTxt, llmsTxt, REDIRECTS, BASE, NAME };

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}
