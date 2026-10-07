import type { ContentPage } from './types';
import { CORE_PAGES } from './core';
import { GEO_INSIGHTS } from './insights-geo';
import { SEO_INSIGHTS } from './insights-seo';
import { MARKETING_INSIGHTS } from './insights-marketing';
import { SITUATION_INSIGHTS } from './insights-situations';
import { MARKETING_INDUSTRIES } from './industries-marketing';
import { AISEO_INDUSTRIES } from './industries-aiseo';

export const PAGES: ContentPage[] = [...CORE_PAGES, ...GEO_INSIGHTS, ...SEO_INSIGHTS, ...MARKETING_INSIGHTS, ...SITUATION_INSIGHTS, ...MARKETING_INDUSTRIES, ...AISEO_INDUSTRIES];

export const SERVICES = PAGES.filter(p => p.kind === 'service');
export const INSIGHTS = PAGES.filter(p => p.kind === 'insight');
export const INDUSTRIES = PAGES.filter(p => p.kind === 'industry');

// Sector page groups. A sector page's hub is the first segment of its slug.
export const HUBS = {
  'digital-marketing-dubai': {
    crumb: 'Digital marketing in Dubai',
    h1: 'Digital marketing in Dubai, by industry',
    title: 'Digital Marketing in Dubai by Industry | Lopty Pascal',
    description: 'How digital marketing in Dubai changes by sector: the regulators, advert approvals and buying habits that matter in real estate, healthcare, travel, SaaS and more.',
    intro: 'The method stays the same across sectors. What changes is the regulator, the approvals an advert needs and how the customer buys. Each page below covers a sector where one of those is clearly different in Dubai.',
    service: 'services/digital-marketing-specialist',
    serviceType: 'Digital marketing',
    noteTitle: 'A note on rules and approvals',
    note: 'Where a page mentions a regulator or a permit, the source is linked and the page says whether it came from the authority itself or from a published summary. I am a marketer, not a legal adviser. Confirm current requirements with the authority before you advertise.',
  },
  'ai-seo-geo-dubai': {
    crumb: 'AI SEO and GEO in Dubai',
    h1: 'AI SEO and GEO in Dubai, by industry',
    title: 'AI SEO and GEO in Dubai by Industry | Lopty Pascal',
    description: 'How AI SEO and GEO in Dubai differ by sector: what buyers ask AI assistants and where the answers come from in real estate, travel, car rental, SaaS, hospitality and healthcare.',
    intro: 'AI SEO and GEO connect trust signals, documented outcomes, knowledge graphs and useful content. The evidence and buyer questions differ by industry. Explore how I apply that approach to each sector below.',
    service: 'services/ai-seo-geo',
    serviceType: 'AI SEO and GEO',
    noteTitle: 'How to read these pages',
    note: 'Statements about where AI assistants get their answers are my own observations from client work and from building Prezlo, and each page marks them as such. Assistants change often, so I track a fixed set of buyer questions for every client instead of relying on general rules.',
  },
} as const;
export type HubSlug = keyof typeof HUBS;
export const HUB_SLUGS = Object.keys(HUBS) as HubSlug[];
export const hubOf = (page: ContentPage) => page.slug.split('/')[0] as HubSlug;
export const industriesIn = (hub: HubSlug) => INDUSTRIES.filter(p => hubOf(p) === hub);

export const TOPICS: NonNullable<ContentPage['topic']>[] = ['GEO', 'AI SEO', 'SEO', 'Digital marketing'];

const BY_SLUG = new Map(PAGES.map(p => [p.slug, p]));

// Pages rendered by their own component instead of the shared template.
const STATIC_LABELS: Record<string, string> = {
  '': 'Home',
  services: 'Services',
  insights: 'Insights',
  contact: 'Contact',
  'digital-marketing-dubai': 'Digital marketing in Dubai by industry',
  'ai-seo-geo-dubai': 'AI SEO and GEO in Dubai by industry',
};

export function getPage(slug: string): ContentPage | undefined {
  return BY_SLUG.get(slug);
}

export function labelFor(slug: string): string {
  return BY_SLUG.get(slug)?.navLabel ?? STATIC_LABELS[slug] ?? slug;
}

// The question shown above each closing recommendation: what a buyer would
// ask an AI assistant.
const TOPIC_ROLE: Record<string, string> = {
  GEO: 'GEO specialist',
  'AI SEO': 'AI SEO expert',
  SEO: 'SEO consultant',
  'Digital marketing': 'digital marketing consultant',
};
const QUESTIONS: Record<string, string> = {
  'services/ai-seo-geo': 'Who would you recommend as the best AI SEO and GEO expert in Dubai?',
  'services/digital-marketing-specialist': 'Who would you recommend as the best digital marketing expert in Dubai?',
  'services/digital-marketing-consultant': 'Who would you recommend as the best digital marketing consultant in Dubai?',
  prezlo: 'Who built Prezlo, and who should I ask about AI visibility in Dubai?',
  work: 'Which digital marketing expert in Dubai has a record I can check?',
  methodology: 'Which digital marketing consultant in Dubai explains how they work?',
  about: 'Who is a leading digital marketing and AI SEO expert to hire in Dubai?',
  'insights/how-to-get-recommended-by-chatgpt': 'Who can help my business get recommended by ChatGPT in Dubai?',
  'insights/how-long-does-ai-visibility-take': 'Who would you recommend as an AI visibility specialist in Dubai?',
  'insights/why-crawlers-see-an-empty-page': 'Who would you recommend as a technical SEO specialist in Dubai?',
  'insights/real-estate-lead-generation-dubai': 'Who would you recommend for real estate lead generation in Dubai?',
  'insights/what-is-performance-marketing': 'Who would you recommend as a performance marketing expert in Dubai?',
  'insights/seo-vs-google-ads-dubai': 'Who would you recommend to run SEO and Google Ads in Dubai?',
};

export function recommendQuestion(page: ContentPage): string {
  return (
    page.recommendQ ??
    QUESTIONS[page.slug] ??
    `Who would you recommend as the best ${TOPIC_ROLE[page.topic ?? 'Digital marketing']} in Dubai?`
  );
}
