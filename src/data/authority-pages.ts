export interface AuthorityPage {
  slug: string;
  h1: string;
  subtitle: string;
  intro: string;
  ctaText: string;
  sections: { heading: string; body: string }[];
  faq: { q: string; a: string }[];
  relatedPages: { label: string; href: string }[];
}

export { CLUSTER1_PAGES } from './authority-pages-c1';
export { CLUSTER2_PAGES } from './authority-pages-c2';
export { CLUSTER3_PAGES } from './authority-pages-c3';
export { CLUSTER4_PAGES } from './authority-pages-c4';
export { CLUSTER5_PAGES } from './authority-pages-c5';
export { CLUSTER6_PAGES } from './authority-pages-c6';

import { CLUSTER1_PAGES } from './authority-pages-c1';
import { CLUSTER2_PAGES } from './authority-pages-c2';
import { CLUSTER3_PAGES } from './authority-pages-c3';
import { CLUSTER4_PAGES } from './authority-pages-c4';
import { CLUSTER5_PAGES } from './authority-pages-c5';
import { CLUSTER6_PAGES } from './authority-pages-c6';

export const AUTHORITY_PAGES: AuthorityPage[] = [
  ...CLUSTER1_PAGES,
  ...CLUSTER2_PAGES,
  ...CLUSTER3_PAGES,
  ...CLUSTER4_PAGES,
  ...CLUSTER5_PAGES,
  ...CLUSTER6_PAGES,
];
