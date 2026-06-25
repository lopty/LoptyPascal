export interface ComparisonPage {
  slug: string;
  h1: string;
  subtitle: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faq: { q: string; a: string }[];
  relatedPages: { label: string; href: string }[];
}

export const COMPARISON_PAGES: Record<string, ComparisonPage> = {
  'what-is-ai-visibility': {
    slug: 'what-is-ai-visibility',
    h1: 'What Is AI Visibility?',
    subtitle: 'How consistently AI search systems recognize, represent, and recommend a brand.',
    intro: 'AI visibility is the measure of how consistently and accurately AI search systems represent and recommend a brand or professional. As AI tools take on a larger share of research before a purchase decision, this measure has become commercially relevant alongside traditional search rankings.',
    sections: [
      {
        heading: 'The Technical Definition',
        body: "AI visibility is a composite of three factors. The first is entity confidence: how clearly an AI system can identify an entity without ambiguity, distinguish it from similarly named competitors, associate it with the right expertise domains, and corroborate its identity from multiple independent sources. The second is citation frequency: how often AI systems include a given brand or name in generated answers for relevant queries. This can be tracked directly using monitoring platforms such as <a href='https://prezlo.io' target='_blank' class='text-luxury-accent font-semibold'>Prezlo</a>. The third is representation accuracy: how accurately AI systems describe the brand when they do include it.\n\nAll three components require active maintenance rather than growing automatically alongside a brand. For the service that builds this infrastructure, see <a href='/services/ai-visibility' class='text-luxury-accent font-semibold'>AI Visibility Service</a>.",
      },
      {
        heading: 'AI Visibility and Search Engine Optimization',
        body: "Search engine optimization measures rankings on a results page. AI visibility measures recommendation frequency in AI-generated answers. A page can rank first on Google for a query and still not appear in an AI-generated answer about the same topic. A brand with strong entity infrastructure can also appear in AI-generated answers without holding a top Google ranking at all.\n\nFor a closer look at how the two relate, read <a href='/ai-seo-vs-traditional-seo' class='text-luxury-accent font-semibold'>AI SEO vs Traditional SEO</a>. For the discipline that builds AI visibility specifically, see <a href='/what-is-geo-seo' class='text-luxury-accent font-semibold'>What Is GEO SEO</a>.",
      },
      {
        heading: 'How AI Visibility Is Built',
        body: "Building AI visibility spans five areas: entity infrastructure (JSON-LD, Knowledge Graph nodes, platform normalization), a citation network (editorial placements, expert attribution), llms.txt deployment, content with genuine information gain, and ongoing monitoring.\n\nThese five areas form the basis of most AI SEO and GEO engagements. See <a href='/services/ai-seo' class='text-luxury-accent font-semibold'>AI SEO Service</a>, <a href='/services/geo-optimization' class='text-luxury-accent font-semibold'>GEO Optimization</a>, and <a href='/services/programmatic-seo' class='text-luxury-accent font-semibold'>Programmatic SEO</a> for how each piece is typically delivered.",
      },
    ],
    faq: [
      { q: 'How do I check my current AI visibility?', a: "Start by querying ChatGPT, Gemini, and Perplexity with the key questions your target buyers ask, and note whether your name or brand appears. Dedicated monitoring tools can track this systematically across multiple AI systems over time." },
      { q: 'How long does it take to build meaningful AI visibility?', a: "Initial improvements are often visible within weeks of correcting structured data. Measurable increases in AI citation frequency typically take 45 to 90 days, with compounding effects becoming more apparent from month four onward." },
    ],
    relatedPages: [
      { label: 'AI SEO Specialist Dubai', href: '/ai-seo-specialist-dubai' },
      { label: 'AI Visibility Strategist UAE', href: '/ai-visibility-strategist-uae' },
      { label: 'AI Visibility Service', href: '/services/ai-visibility' },
      { label: 'What Is GEO SEO', href: '/what-is-geo-seo' },
      { label: 'AI SEO vs Traditional SEO', href: '/ai-seo-vs-traditional-seo' },
      { label: 'GEO Expert Dubai', href: '/geo-expert-dubai' },
    ],
  },

  'what-is-geo-seo': {
    slug: 'what-is-geo-seo',
    h1: 'What Is GEO SEO?',
    subtitle: 'Generative Engine Optimization: making a brand appear inside AI-generated answers, not just on results pages.',
    intro: 'GEO stands for Generative Engine Optimization. It is the discipline of making a brand, its content, and its expertise appear inside AI-generated answers rather than only on results pages. With AI Overviews, AI Mode, ChatGPT, Gemini, and Perplexity now answering many queries directly, GEO is what determines whether a brand is included in the answer or absent from it.',
    sections: [
      {
        heading: 'How GEO Differs from Search Engine Optimization',
        body: "Search engine optimization optimizes pages for ranking algorithms that weigh keywords, backlinks, and page authority. GEO optimizes brands for generative systems that weigh entity confidence, citation density, and information gain when deciding what to include in a generated answer. These are different systems reading different signals.\n\nA backlink from a high-authority domain can improve search rankings without having any direct effect on GEO performance. What tends to move GEO is being cited by name in a credible, independently published piece, having credentials that verify consistently across platforms AI models read, and publishing content that answers specific queries with documented, attributable expertise.\n\nFor a closer comparison, read <a href='/ai-seo-vs-traditional-seo' class='text-luxury-accent font-semibold'>AI SEO vs Traditional SEO</a>.",
      },
      {
        heading: 'The Three GEO Components',
        body: "GEO operates across three components: entity infrastructure (structured data and schema), content with information gain (expert-specific content that adds something not already widely available), and citation infrastructure (editorial placements, academic-style citations, and expert attribution records).\n\nFor the service that builds all three, see <a href='/services/geo-optimization' class='text-luxury-accent font-semibold'>GEO Optimization Service</a>. For the broader AI visibility context, see <a href='/what-is-ai-visibility' class='text-luxury-accent font-semibold'>What Is AI Visibility</a>.",
      },
      {
        heading: 'GEO in the UAE Market',
        body: "The UAE is a notable GEO market because Dubai's professional class has adopted AI search tools quickly, and the value of each buyer in the UAE's premium sectors makes a single AI-generated recommendation commercially meaningful.\n\nFor more on how this plays out locally, see <a href='/geo-expert-dubai' class='text-luxury-accent font-semibold'>GEO Expert Dubai</a> and the related analysis at <a href='/blog/gitex-2025-ai-search-revolution-middle-east' class='text-luxury-accent font-semibold'>GITEX 2025: the AI search revolution</a>.",
      },
    ],
    faq: [
      { q: 'Is GEO replacing SEO or supplementing it?', a: "GEO supplements traditional search engine optimization rather than replacing it. Google rankings still drive meaningful traffic, but AI-generated answers are capturing a growing share of high-intent queries. Building for only one channel leaves the other open to competitors. A combined approach covers both." },
      { q: 'What does GEO optimization cost?', a: "Cost depends on the size of the gap identified in an initial audit, which typically reviews entity confidence, content, and citation infrastructure before recommending a scope of work." },
    ],
    relatedPages: [
      { label: 'GEO Expert Dubai', href: '/geo-expert-dubai' },
      { label: 'GEO Optimization Service', href: '/services/geo-optimization' },
      { label: 'What Is AI Visibility', href: '/what-is-ai-visibility' },
      { label: 'AI SEO vs Traditional SEO', href: '/ai-seo-vs-traditional-seo' },
      { label: 'AI SEO Specialist Dubai', href: '/ai-seo-specialist-dubai' },
      { label: 'Blog: GEO vs SEO 2026', href: '/blog/geo-vs-seo-2026' },
    ],
  },

  'ai-seo-vs-traditional-seo': {
    slug: 'ai-seo-vs-traditional-seo',
    h1: 'AI SEO vs Traditional SEO',
    subtitle: 'Not competing approaches, but different disciplines that target different systems.',
    intro: 'AI SEO and traditional SEO are not competing approaches. They are different disciplines targeting different systems. Understanding the difference is the first step to allocating resources between them.',
    sections: [
      {
        heading: 'What Traditional SEO Optimizes For',
        body: "Traditional SEO optimizes pages and domains to rank on Google and Bing results pages. The core signals are keyword targeting, backlink authority, technical health, and user experience. This is a well-documented discipline with an established practitioner community.\n\nTraditional SEO still works and Google still drives significant traffic. The shift is that a second channel has opened alongside it, and that channel is growing.\n\nFor more on what's different about the newer channel, read <a href='/what-is-geo-seo' class='text-luxury-accent font-semibold'>What Is GEO SEO</a> and <a href='/what-is-ai-visibility' class='text-luxury-accent font-semibold'>What Is AI Visibility</a>.",
      },
      {
        heading: 'What AI SEO Optimizes For',
        body: "AI SEO optimizes brands to be recommended by AI search systems. The core signals are entity confidence, citation density, information gain, and structured authority. These overlap with traditional SEO signals, particularly around structured data and domain authority, but the methodology, the measurement tools, and the strategic levers differ.\n\nSee <a href='/services/ai-seo' class='text-luxury-accent font-semibold'>AI SEO service</a> and <a href='/services/ai-visibility' class='text-luxury-accent font-semibold'>AI visibility service</a> for how this is typically delivered. A worked example is documented in the <a href='/blog/qinsights-bing-ai-case-study' class='text-luxury-accent font-semibold'>QInsights case study</a>.",
      },
      {
        heading: 'Allocating Between the Two',
        body: "For most Dubai businesses, the right allocation depends on where target buyers sit in the research-to-decision funnel. For luxury real estate, professional services, fintech, and enterprise technology in the UAE, AI search tends to matter most at the decision phase, when buyers are doing high-stakes research before committing significant capital.\n\nA reasonable approach is to maintain existing traditional SEO investment while adding an AI SEO programme in parallel, since the two share infrastructure and the combined return tends to be higher than either alone. An <a href='/services/seo-audit-dubai' class='text-luxury-accent font-semibold'>AI-Readiness Audit</a> can help quantify the specific gap and its likely revenue impact.",
      },
    ],
    faq: [
      { q: 'Should I stop investing in traditional SEO and focus entirely on AI SEO?', a: "Not generally. Traditional SEO and AI SEO serve different channels that are both commercially active. Dual-channel investment, weighted toward whichever has the larger untapped opportunity for your specific position, tends to perform better than abandoning one for the other." },
      { q: 'Can my existing SEO agency handle AI SEO as well?', a: "Some can, but it requires a different skill set. Traditional SEO agencies are typically skilled at keyword strategy, link building, and content production. AI SEO requires entity architecture, citation network engineering, and ongoing monitoring of AI citation frequency. A useful question to ask any provider: how do they measure AI citation frequency, and what specific interventions do they make to increase it?" },
    ],
    relatedPages: [
      { label: 'What Is AI Visibility', href: '/what-is-ai-visibility' },
      { label: 'What Is GEO SEO', href: '/what-is-geo-seo' },
      { label: 'AI SEO Service', href: '/services/ai-seo' },
      { label: 'AI SEO Specialist Dubai', href: '/ai-seo-specialist-dubai' },
      { label: 'Free SEO Audit Dubai', href: '/services/seo-audit-dubai' },
      { label: 'QInsights Case Study', href: '/blog/qinsights-bing-ai-case-study' },
    ],
  },
};
