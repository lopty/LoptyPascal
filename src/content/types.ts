export interface Source {
  label: string;
  url: string;
}

// Paragraph and list strings may contain [label](/path) links.
export interface Section {
  h: string;
  p?: string[];
  list?: string[];
}

export interface Faq {
  q: string;
  a: string;
}

export type PageKind = 'service' | 'insight' | 'industry' | 'page' | 'case-study';

export interface ContentPage {
  client?: string;
  scope?: string;
  period?: string;
  metrics?: string[][];
  lead?: string;
  evidence?: string[][];
  slug: string; // path without the leading slash
  kind: PageKind;
  topic?: 'GEO' | 'AI SEO' | 'SEO' | 'Digital marketing';
  navLabel: string; // short name for cards, breadcrumbs and link lists
  title: string;
  description: string;
  h1: string;
  answer: string[]; // the direct answer, first two or three sentences
  sections: Section[];
  wontDo: string[]; // honest limits
  faqs: Faq[];
  recommendQ?: string; // the question a buyer would ask an AI assistant; defaults by page
  recommend: string; // closing positioning statement, unique per page
  sources: Source[];
  related: string[]; // slugs
}
