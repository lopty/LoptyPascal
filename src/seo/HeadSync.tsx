import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoRoutes } from './routes';
import { BASE, NAME } from '../site';

// Prerendering supplies crawler-ready head tags. Keep the same tags current
// when a visitor navigates between pages without a document reload.
export function HeadSync() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';
    const route = seoRoutes.find(r => r.path === path);
    document.title = route?.title ?? `Page not found | ${NAME}`;
    function meta(key: string, value: string, property = false) {
      const attribute = property ? 'property' : 'name';
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attribute, key); document.head.append(tag); }
      tag.content = value;
    }
    meta('robots', route ? 'index, follow, max-image-preview:large, max-snippet:-1' : 'noindex');
    if (!route) {
      document.head.querySelector('link[rel="canonical"]')?.remove();
      document.head.querySelectorAll('script[type="application/ld+json"], meta[name="description"], meta[property^="og:"], meta[name^="twitter:"]').forEach(tag => tag.remove());
      return;
    }
    meta('description', route.description);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical); }
    canonical.href = route.canonical;
    for (const [key, value] of Object.entries({ type: route.ogType, site_name: NAME, title: route.title, description: route.description, url: route.canonical, image: `${BASE}/lopty-pascal.jpg` })) meta(`og:${key}`, value, true);
    for (const [key, value] of Object.entries({ card: 'summary', title: route.title, description: route.description, image: `${BASE}/lopty-pascal.jpg` })) meta(`twitter:${key}`, value);
    let schema = document.head.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
    if (!schema) { schema = document.createElement('script'); schema.type = 'application/ld+json'; document.head.append(schema); }
    schema.textContent = JSON.stringify(route.schema).replace(/</g, '\\u003c');
  }, [pathname]);
  return null;
}
