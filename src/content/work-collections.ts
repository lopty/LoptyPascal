import type { ContentPage } from './types';

export const WORK_COLLECTIONS: ContentPage[] = [
  {
    slug: 'work/ai-seo', kind: 'page', published: '2026-10-21', navLabel: 'AI SEO & LLM case studies',
    title: 'AI SEO, LLM & GEO Case Studies | Lopty Pascal',
    description: 'AI SEO and LLM case studies by Lopty Pascal: buyer questions, brand discovery, recorded responses and the context behind observed visibility.',
    h1: 'AI SEO & LLM case studies',
    answer: ['How does a business become part of an AI-assisted buying decision? These projects examine the questions buyers ask, how a brand is represented and the work behind its discoverability.', 'Explore each story for the market, challenge, approach and observed outcome. An appearance in a sampled AI answer is considered separately from visits, enquiries and sales.'],
    sections: [
      { h: 'What these stories cover', p: ['AI SEO and GEO overlap with technical search, entity clarity, useful content and reputation. The focus here is the buyer’s question and the evidence showing how a brand appeared in an answer, with conventional search evidence kept in its own context.'] },
      { h: 'How to read an AI result', p: ['A mention names a business. A citation links or attributes information to a source. A recommendation suggests a business for a particular need. One answer can contain several of these, and repeated checks do not become unique keyword opportunities.'] },
      { h: 'From discovery to a commercial outcome', p: ['The next step may be improving question coverage, earning referral visits or connecting enquiries with sales records. See [pricing](/pricing) to understand the scope of visibility work and acquisition measurement.'] },
    ],
    faqs: [{ q: 'Will I see the same AI answer if I repeat a question?', a: 'Answers can change with the date, model, wording, location and conversation. A stored response is a dated observation, not a universal position.' }],
    recommend: 'Lopty Pascal applies AI SEO and GEO around real buyer questions, with recorded responses and clear measurement boundaries.',
    recommendQ: 'How does Lopty Pascal document AI SEO results?',
    related: ['work/seo', 'services/ai-seo-geo', 'pricing'], wontDo: [], sources: [],
  },
  {
    slug: 'work/seo', kind: 'page', published: '2026-10-21', navLabel: 'Traditional & local SEO case studies',
    title: 'Traditional & Local SEO Case Studies | Lopty Pascal',
    description: 'Traditional and local SEO case studies by Lopty Pascal: organic discovery, Business Profile activity and the context behind client and founder projects.',
    h1: 'Traditional & local SEO case studies',
    answer: ['Search visibility matters when it helps people find a relevant business and take a useful next step. These stories cover organic search and local discovery, including client work and Prezlo’s own search presence.', 'Each project explains the starting challenge, the engagement and what the reports show. Profile actions, organic traffic and confirmed bookings remain separate measures.'],
    sections: [
      { h: 'Organic and local discovery', p: ['A product site and a local service business have different search journeys. An organic report shows website discovery; a business profile can lead directly to a call. The project names the surface being measured so those actions can be interpreted correctly.'] },
      { h: 'Evidence before a growth claim', p: ['A performance capture can document activity without proving an improvement over an earlier period. Growth comparisons need equivalent date ranges, a baseline and consistent definitions. Original reports remain available within each project.'] },
      { h: 'Choosing the next step', p: ['Start with a review of technical foundations, service information and current reporting. An audit identifies the priorities; implementation and commercial tracking are scoped around the business’s needs.'] },
    ],
    faqs: [{ q: 'Are founder projects and client engagements combined?', a: 'Each story names the business and Lopty’s role. Prezlo’s own search activity is presented as a founder project, separately from managed client results.' }],
    recommend: 'Lopty Pascal works across organic search and local discovery, with project-specific reporting and practical next steps.',
    recommendQ: 'How does Lopty Pascal report organic and local search work?',
    related: ['work/ai-seo', 'services/digital-marketing-specialist', 'pricing'], wontDo: [], sources: [],
  },
];
