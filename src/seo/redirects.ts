// Old URL -> closest current page. The build writes a redirect stub for each
// one. Every other retired URL is left to return a real 404.
const TO: Record<string, string[]> = {
  '/insights': ['/blog'],
  '/work': ['/results'],
  '/about': ['/lopty-pascal-story', '/cameroon-to-dubai-digital-marketing'],
  '/methodology': ['/seo-process-dubai'],
  '/prezlo': [
    '/prezlo-ai-agency-dubai', '/prezlo-ai-systems', '/prezlo-vs-traditional-agency', '/prezlo-case-studies',
    '/prezlo-neha-jakhar', '/prezlo-gulf-expansion-strategy', '/blog/prezlo-future-ai-identity-infrastructure',
  ],
  '/services/ai-seo-geo': [
    '/ai-seo-architect', '/seo-architect-dubai', '/ai-seo-specialist-dubai', '/ai-visibility-strategist-uae',
    '/geo-expert-dubai', '/seo-specialist-uae', '/services/ai-seo', '/services/ai-visibility',
    '/services/geo-optimization', '/services/seo-audit-dubai', '/services/programmatic-seo',
    '/blog/dubai-seo-best-specialist',
  ],
  '/services/digital-marketing-specialist': ['/digital-marketing-specialist-dubai'],
  '/insights/what-is-geo': ['/what-is-geo-seo', '/blog/geo-vs-seo-2026'],
  '/insights/what-is-ai-seo': ['/ai-seo-vs-traditional-seo', '/traditional-seo-vs-ai-seo', '/blog/what-is-ai-seo'],
  '/insights/how-to-get-recommended-by-chatgpt': [
    '/what-is-ai-visibility', '/blog/appear-in-chatgpt-perplexity', '/blog/how-to-get-chatgpt-recommend-your-business-2026',
  ],
  '/insights/what-is-entity-seo': ['/what-is-entity-seo'],
  '/insights/structured-data-for-ai-answers': ['/schema-markup-strategy'],
  '/insights/does-seo-still-matter': ['/how-ai-changes-seo'],
  '/insights/how-to-measure-seo': ['/how-to-measure-seo-success', '/understanding-seo-roi'],
  '/insights/seo-vs-google-ads-dubai': ['/seo-vs-paid-ads-dubai', '/organic-vs-paid-search'],
  '/insights/specialist-vs-consultant-vs-agency': [
    '/seo-agency-vs-freelancer-dubai', '/in-house-seo-vs-agency-dubai', '/blog/freelance-seo-vs-agency-2026',
  ],
  '/insights/real-estate-lead-generation-dubai': ['/seo-for-real-estate-dubai'],
  '/insights/why-crawlers-see-an-empty-page': ['/what-is-technical-seo'],
};

export const REDIRECTS: { from: string; to: string }[] = Object.entries(TO).flatMap(([to, froms]) =>
  froms.map(from => ({ from, to })),
);
