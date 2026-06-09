import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import { seoRoutes } from './seo/routes';

export { seoRoutes };

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
