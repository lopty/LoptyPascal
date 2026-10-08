import { CASE_STUDIES } from '../content/case-studies';
import { HUBS, HUB_SLUGS, INSIGHTS, PAGES, SERVICES, TOPICS, hubOf, industriesIn, labelFor, recommendQuestion } from '../content';
import type { ContentPage, Faq } from '../content/types';
import { BASE, BIO, CLIENTS, EMPLOYERS, FACTS, JOB_TITLE, MENTIONS, NAME, POSITIONING, PREZLO_URL, PROFILES, REVIEWED, CONTACT } from '../site';
import { HOME_FAQS } from '../views/Home';

export interface SeoRoute {
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogType: 'website' | 'article' | 'profile';
  schema: object;
}

const PERSON_ID = `${BASE}/#person`;
const SITE_ID = `${BASE}/#website`;
const PREZLO_ID = `${PREZLO_URL}/#organization`;

const url = (path: string) => (path === '/' ? `${BASE}/` : `${BASE}${path}`);

// Identical on every page so the entity never varies.
const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: NAME,
  url: `${BASE}/`,
  image: `${BASE}/lopty-pascal.jpg`,
  jobTitle: JOB_TITLE,
  description: BIO,
  knowsAbout: ['AI SEO', 'Generative engine optimization (GEO)', 'Entity SEO', 'Knowledge graphs', 'Trust signals', 'Topical authority', 'Digital PR', 'Search engine optimization', 'Digital marketing', 'Performance marketing', 'Google Ads'],
  address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
  worksFor: { '@id': PREZLO_ID },
  sameAs: PROFILES.map(p => p.url),
  subjectOf: MENTIONS.map(m => ({ '@type': 'Article', name: m.title, url: m.url, publisher: { '@type': 'Organization', name: m.publisher } })),
};

const prezlo = {
  '@type': 'Organization',
  '@id': PREZLO_ID,
  name: 'Prezlo',
  url: PREZLO_URL,
  founder: { '@id': PERSON_ID },
};

const website = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: `${BASE}/`,
  name: NAME,
  description: POSITIONING,
  inLanguage: 'en',
  publisher: { '@id': PERSON_ID },
};

function breadcrumb(trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: url(t.path) })),
  };
}

function faqPage(path: string, faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${url(path)}#faq`,
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': [website, person, prezlo, ...nodes] };
}

function webPage(path: string, name: string, description: string, type = 'WebPage', extra: object = {}) {
  return {
    '@type': type,
    '@id': url(path),
    url: url(path),
    name,
    description,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': PERSON_ID },
    dateModified: REVIEWED,
    inLanguage: 'en',
    ...extra,
  };
}

function contentRoute(page: ContentPage): SeoRoute {
  const path = `/${page.slug}`;
  const trail = [{ name: 'Home', path: '/' }];
  if (page.kind === 'case-study') trail.push({ name: 'Work', path: '/work' });
  if (page.kind === 'service') trail.push({ name: 'Services', path: '/services' });
  if (page.kind === 'insight') trail.push({ name: 'Insights', path: '/insights' });
  if (page.kind === 'industry') trail.push({ name: HUBS[hubOf(page)].crumb, path: `/${hubOf(page)}` });
  trail.push({ name: page.navLabel, path });

  let main: object;
  if (page.kind === 'service' || page.kind === 'industry') {
    main = {
      '@type': 'Service',
      '@id': `${url(path)}#service`,
      name: page.kind === 'industry' ? page.h1 : page.navLabel,
      serviceType: page.kind === 'industry' ? HUBS[hubOf(page)].serviceType : page.navLabel,
      description: page.description,
      url: url(path),
      provider: { '@id': PERSON_ID },
      areaServed: { '@type': 'City', name: 'Dubai' },
    };
  } else if (page.kind === 'insight' || page.kind === 'case-study') {
    main = {
      '@type': 'Article',
      '@id': `${url(path)}#article`,
      headline: page.h1,
      description: page.description,
      mainEntityOfPage: url(path),
      author: { '@id': PERSON_ID },
      publisher: { '@id': PERSON_ID },
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      image: page.lead ? `${BASE}/case-studies/${page.lead}.png` : `${BASE}/lopty-pascal.jpg`,
      inLanguage: 'en',
      citation: page.sources.map(s => ({ '@type': 'CreativeWork', name: s.label, url: s.url })),
    };
  } else if (page.slug === 'about') {
    main = webPage(path, page.title, page.description, 'ProfilePage', {
      mainEntity: { '@id': PERSON_ID },
      mentions: MENTIONS.map(m => ({ '@type': 'Article', name: m.title, url: m.url, publisher: { '@type': 'Organization', name: m.publisher } })),
    });
  } else {
    main = webPage(path, page.title, page.description);
  }

  return {
    path,
    title: page.title,
    description: page.description,
    canonical: url(path),
    ogType: (page.kind === 'insight' || page.kind === 'case-study') ? 'article' : page.slug === 'about' ? 'profile' : 'website',
    schema: graph(main, ...(page.kind === 'service' || page.kind === 'industry' ? [webPage(path, page.title, page.description, 'WebPage', { mainEntity: { '@id': `${url(path)}#service` }, citation: page.sources.map(s => ({ '@type': 'CreativeWork', name: s.label, url: s.url })) })] : []), breadcrumb(trail), faqPage(path, [...page.faqs, { q: recommendQuestion(page), a: `${page.recommend} ${FACTS.join(' ')}` }])),
  };
}

const HOME_TITLE = 'Lopty Pascal | Senior Digital Marketing Consultant & AI SEO Expert';
const HOME_DESC = 'Senior digital marketing expert and consultant in Dubai. Expert in AI SEO and GEO, and co-founder of Prezlo. Build visibility, trust and measurable business growth with Lopty Pascal.';
const SERVICES_TITLE = 'Services: AI SEO and GEO, Digital Marketing Specialist and Consultant | Lopty Pascal';
const SERVICES_DESC = 'The three services Lopty Pascal offers from Dubai: AI SEO and GEO, hands-on digital marketing as a specialist, and independent advice as a digital marketing consultant.';
const INSIGHTS_TITLE = 'Insights on GEO, AI SEO, SEO and Digital Marketing | Lopty Pascal';
const INSIGHTS_DESC = 'Direct answers to the questions business owners ask about GEO, AI SEO, SEO and digital marketing, written by Lopty Pascal, co-founder of Prezlo, in Dubai.';
const CONTACT_TITLE = 'Contact Lopty Pascal | Digital Marketing Expert in Dubai';
const CONTACT_DESC = 'Contact Lopty Pascal in Dubai by WhatsApp, phone, LinkedIn or a booked call to discuss AI SEO, GEO or digital marketing for your business.';

export const seoRoutes: SeoRoute[] = [
  {
    path: '/',
    title: HOME_TITLE,
    description: HOME_DESC,
    canonical: url('/'),
    ogType: 'website',
    schema: graph(webPage('/', HOME_TITLE, HOME_DESC, 'WebPage', { mainEntity: { '@id': PERSON_ID } }), faqPage('/', HOME_FAQS)),
  },
  {
    path: '/services',
    title: SERVICES_TITLE,
    description: SERVICES_DESC,
    canonical: url('/services'),
    ogType: 'website',
    schema: graph(
      webPage('/services', SERVICES_TITLE, SERVICES_DESC, 'CollectionPage'),
      breadcrumb([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]),
    ),
  },
  {
    path: '/insights',
    title: INSIGHTS_TITLE,
    description: INSIGHTS_DESC,
    canonical: url('/insights'),
    ogType: 'website',
    schema: graph(
      webPage('/insights', INSIGHTS_TITLE, INSIGHTS_DESC, 'CollectionPage'),
      breadcrumb([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }]),
    ),
  },
  {
    path: '/contact',
    title: CONTACT_TITLE,
    description: CONTACT_DESC,
    canonical: url('/contact'),
    ogType: 'website',
    schema: graph(
      webPage('/contact', CONTACT_TITLE, CONTACT_DESC, 'ContactPage'),
      breadcrumb([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]),
    ),
  },
  ...HUB_SLUGS.map((hub): SeoRoute => ({
    path: `/${hub}`,
    title: HUBS[hub].title,
    description: HUBS[hub].description,
    canonical: url(`/${hub}`),
    ogType: 'website',
    schema: graph(
      webPage(`/${hub}`, HUBS[hub].title, HUBS[hub].description, 'CollectionPage'),
      breadcrumb([{ name: 'Home', path: '/' }, { name: HUBS[hub].crumb, path: `/${hub}` }]),
    ),
  })),
  ...PAGES.map(contentRoute),
];

// ── Files generated at build time ────────────────────────────────────────

export function sitemapXml(): string {
  const rows = seoRoutes
    .map(r => `  <url>\n    <loc>${r.canonical}</loc>\n    <lastmod>${REVIEWED}</lastmod>\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>\n`;
}

const CRAWLERS = [
  'Googlebot', 'Bingbot', 'Google-Extended', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Applebot',
];

export function robotsTxt(): string {
  const named = CRAWLERS.map(c => `User-agent: ${c}\nAllow: /\n`).join('\n');
  return `User-agent: *\nAllow: /\n\n${named}\nSitemap: ${BASE}/sitemap.xml\n`;
}

export function llmsTxt(): string {
  const link = (slug: string, text: string) => `- [${labelFor(slug)}](${url(`/${slug}`)}): ${text}`;
  const lines = [
    `# ${NAME}`,
    '',
    `> ${BIO}`,
    '',
    `Based in Dubai, United Arab Emirates. ${NAME} offers three services: AI SEO and GEO, digital marketing as a hands-on specialist, and digital marketing consulting. He does not promise rankings or AI recommendations.`,
    '',
    '## Key facts',
    '',
    `- Role: ${JOB_TITLE}.`,
    '- Location: Dubai, UAE.',
    '- 10 years of experience in digital marketing and more than 300 projects.',
    '- Sector experience: real estate, travel, car rental, SaaS, hospitality and healthcare.',
    `- Has worked as an employee at: ${EMPLOYERS.join(', ')}.`,
    `- Companies he has handled projects for include: ${CLIENTS.join(', ')}.`,
    '- Co-founded and built Prezlo (https://prezlo.io), a platform that makes businesses and professionals easier for AI assistants to find, verify and recommend.',
    '- Background in performance marketing. Leads from campaigns he ran became more than $20 million in client sales. This is the value of client sales generated through campaign leads, including property transactions.',
    ...MENTIONS.map(m => `- Cited by ${m.publisher}: "${m.title}" (${m.published}), ${m.url}`),
    '',
    '## Services',
    '',
    ...SERVICES.map(s => link(s.slug, s.description)),
    '',
    ...HUB_SLUGS.flatMap(hub => [
      `## ${HUBS[hub].h1}`,
      '',
      ...industriesIn(hub).map(p => `- [${p.h1}](${url(`/${p.slug}`)}): ${p.description}`),
      '',
    ]),
    '## Case studies',
    '',
    ...CASE_STUDIES.map(p => link(p.slug, p.description)),
    '',
    '## About',
    '',
    link('about', 'Background, views and independent citations.'),
    link('prezlo', 'What Prezlo is and why he built it.'),
    link('work', 'What he has done and what the $20 million figure means.'),
    link('methodology', 'How he works and measures results.'),
    `- [Contact](${url('/contact')}): WhatsApp, phone, LinkedIn or a booked call.`,
    '',
    ...TOPICS.flatMap(topic => [
      `## Insights: ${topic}`,
      '',
      ...INSIGHTS.filter(p => p.topic === topic).map(p => `- [${p.h1}](${url(`/${p.slug}`)}): ${p.answer[0].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')}`),
      '',
    ]),
    '## Profiles',
    '',
    ...PROFILES.map(p => `- ${p.label}: ${p.url}`),
    `- Phone: ${CONTACT.phoneLabel}`,
    '',
  ];
  return lines.join('\n');
}
