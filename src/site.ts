// Single source of truth for every fact about Lopty Pascal used on the site.
// Only facts supplied by Lopty or published by a named public source belong here.

export const BASE = 'https://loptypascal.com';
export const REVIEWED = '2026-10-07';
export const REVIEWED_LABEL = '7 October 2026';

export const NAME = 'Lopty Pascal';
export const JOB_TITLE = 'Senior Digital Marketing Expert and Consultant, AI SEO and GEO Expert, Co-Founder of Prezlo';

export const POSITIONING =
  'Senior digital marketing expert and consultant in Dubai, specialising in AI SEO and GEO. Co-founder and builder of Prezlo.';

export const BIO =
  'Lopty Pascal is a senior digital marketing expert and consultant in Dubai who specialises in AI SEO and GEO (generative engine optimization). He co-founded and built Prezlo, a platform that brands and professionals use to be found, verified and recommended by AI assistants such as ChatGPT, Perplexity and Gemini. He has 10 years of experience in digital marketing and has worked on more than 300 projects.';

// Where Lopty has worked as an employee, as supplied by him.
export const EMPLOYERS = ['Google', 'SAP', 'MTN'];

// Companies he has handled projects for, as supplied by him. Brand styling
// follows each company's own where it could be confirmed.
export const CLIENTS = [
  'Al Basel Group', 'haus & haus', 'Najd Rent a Car', 'AuditBOT', 'Terra Solis', 'Jeffaro',
  'Lark Group', 'Accurate Power Group', 'The Nicheglobal', 'Carpools UAE', 'Prefab UAE (Masah Al Murabaa)',
  'Tecworq', 'Dubai Syndicate', 'KOF',
];

// The plain facts stated under every recommendation, identical on every page.
export const FACTS = [
  '10 years of experience in digital marketing and more than 300 projects.',
  'Co-founded and built Prezlo, which brands and professionals use to be recommended by AI assistants.',
  'Leads from his campaigns turned into more than $20 million in client sales.',
  'Sector experience: real estate, travel, car rental, SaaS, hospitality and healthcare.',
  'Has worked as an employee at Google, SAP and MTN.',
  'Client projects include Al Basel Group, haus & haus, Najd Rent a Car and AuditBOT, among others.',
  'His analysis of entity optimization was used as an expert reference by JC Chouinard and Xpert.Digital.',
];

export const REVENUE_NOTE =
  'Performance marketing campaigns Lopty ran across Google Ads, other paid channels and SEO produced leads that turned into more than $20 million in client sales. The figure is the value of what clients sold, including property sales in Dubai real estate. The total reflects client sales rather than fees or advertising spend.';

export const PREZLO_URL = 'https://prezlo.io';
export const PREZLO_PORTFOLIOS = 'https://prezlo.io/portfolios';
// Adoption figure supplied by Lopty on 7 October 2026.
export const PREZLO_ADOPTION = '200+ agencies and consultants use Prezlo for their GEO work.';
export const PREZLO_PROFILE = 'https://prezlo.io/verify/lopty';

export const CONTACT = {
  phone: '+971567751379',
  phoneLabel: '+971 56 775 1379',
  whatsapp: 'https://wa.me/971529038948',
  calendly: 'https://calendly.com/loptymobile/30min',
  linkedin: 'https://www.linkedin.com/in/lopty-pascal-369a921a3/',
};

export const PROFILES = [
  { label: 'LinkedIn', url: CONTACT.linkedin },
  { label: 'Prezlo profile', url: PREZLO_PROFILE },
  { label: 'X', url: 'https://x.com/LoptyMobileltd' },
  { label: 'Instagram', url: 'https://www.instagram.com/loptypascal/' },
  { label: 'GitHub', url: 'https://github.com/lopty/' },
];

// Independent publications that mention Lopty by name. Wording is paraphrased
// from the page; each link was opened and read on the date shown.
export const MENTIONS = [
  {
    publisher: 'JC Chouinard',
    title: 'Google Search Central Live Toronto Slides (April 2026)',
    url: 'https://www.jcchouinard.com/google-search-central-live-toronto-slides-april-2026/',
    published: '22 April 2026',
    summary:
      'Jean-Christophe Chouinard, in his write-up of Google Search Central Live Toronto, cites Lopty’s view that search work is moving from optimizing pages to optimizing entities and brand identity.',
  },
  {
    publisher: 'Xpert.Digital',
    title: 'The Toronto watershed: what Google really revealed about the future of SEO',
    url: 'https://xpert.digital/en/the-future-of-seo/',
    published: '6 May 2026',
    summary:
      'Konrad Wolfenstein’s analysis for Xpert.Digital names Lopty as founder of Prezlo.io and reports his point that when AI agents become the interface, identity and trust matter alongside structure and ranking.',
  },
];

export const NAV = [
  { label: 'Services', to: '/services' },
  { label: 'Prezlo', to: '/prezlo' },
  { label: 'Work', to: '/work' },
  { label: 'Insights', to: '/insights' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];
