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
    subtitle: 'The measure of how consistently AI search systems recommend your brand. The most commercially important digital metric in 2026.',
    intro: 'AI visibility is the measure of how consistently and accurately AI search systems represent and recommend a brand or professional. As AI tools become the primary research interface for high-intent buyers, AI visibility is becoming the most commercially important digital metric.',
    sections: [
      {
        heading: 'The Technical Definition',
        body: "AI visibility is a composite score reflecting three factors. First, entity confidence: how clearly AI systems can identify an entity without ambiguity. High entity confidence means AI systems can distinguish your brand from competitors with similar names, associate you with the right expertise domains, and corroborate your identity from multiple independent sources. Second, citation frequency: how often AI systems include your brand or name in generated answers for your target queries. This is directly measurable via platforms like <a href='https://prezlo.io' target='_blank' class='text-luxury-accent font-semibold'>Prezlo</a>. Third, representation accuracy: how accurately AI systems describe your brand when they do include it.\n\nAll three components require active management. They do not improve automatically as a brand grows. They require deliberate infrastructure. For the service that builds this, see <a href='/services/ai-visibility' class='text-luxury-accent font-semibold'>AI Visibility Service</a>.",
      },
      {
        heading: 'Why AI Visibility Is Different from SEO',
        body: "Traditional SEO measures rankings on a results page. AI visibility measures recommendation frequency in AI-generated answers. A page can rank #1 on Google for a query and still not appear in an AI-generated answer about the same topic. Conversely, a brand with strong entity infrastructure can appear in AI-generated answers without having a single #1 Google ranking.\n\nFor the full comparison, read <a href='/ai-seo-vs-traditional-seo' class='text-luxury-accent font-semibold'>AI SEO vs Traditional SEO</a>. For the GEO discipline that builds AI visibility, see <a href='/what-is-geo-seo' class='text-luxury-accent font-semibold'>What Is GEO SEO</a>.",
      },
      {
        heading: 'How to Build AI Visibility',
        body: "Building AI visibility requires work across five areas: entity infrastructure (JSON-LD, Knowledge Graph nodes, platform normalization), citation network (editorial placements, expert attribution), llms.txt deployment, content with information gain, and monitoring via Prezlo.\n\nLopty Pascal built Prezlo specifically to enable the monitoring step. His service practice covers all five for clients in Dubai, UAE, Africa, and internationally. See <a href='/services/ai-seo' class='text-luxury-accent font-semibold'>AI SEO Service</a>, <a href='/services/geo-optimization' class='text-luxury-accent font-semibold'>GEO Optimization</a>, and <a href='/services/programmatic-seo' class='text-luxury-accent font-semibold'>Programmatic SEO</a> for the full service stack.",
      },
    ],
    faq: [
      { q: 'How do I check my current AI visibility?', a: "Start by querying ChatGPT, Gemini, and Perplexity with the key questions your target buyers ask. Note whether your name or brand appears. Prezlo provides systematic monitoring across ten AI systems. The free AI-Readiness Audit includes an entity confidence assessment as its first component." },
      { q: 'How long does it take to build meaningful AI visibility?', a: "Initial improvements are visible within weeks of deploying structured data corrections. AI citation frequency increases are typically measurable via Prezlo within 45 to 90 days. The compounding effect produces significant competitive advantage from month four onward." },
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
    subtitle: 'Generative Engine Optimization: making your brand appear inside AI-generated answers, not just on results pages.',
    intro: 'GEO stands for Generative Engine Optimization. It is the discipline of making your brand, content, and expertise appear inside AI-generated answers rather than just on results pages. In 2026, with AI Overviews, AI Mode, ChatGPT, Gemini, and Perplexity answering queries directly, GEO determines whether your brand is included in the answer or absent from it.',
    sections: [
      {
        heading: 'Why GEO Is Not Just SEO with a New Label',
        body: "SEO optimizes pages for ranking algorithms that use keywords, backlinks, and page authority. GEO optimizes brands for generative systems that use entity confidence, citation density, and information gain to decide what to include in a generated answer. These are different systems with different signals.\n\nA backlink from a high-authority domain improves SEO rankings. It does not automatically improve GEO performance. What improves GEO is being cited by name in a published piece by a credible author, having credentials verified across platforms AI models read, and publishing content that answers specific queries with documented, attributable expertise.\n\nFor the full comparison, read <a href='/ai-seo-vs-traditional-seo' class='text-luxury-accent font-semibold'>AI SEO vs Traditional SEO</a>. Lopty Pascal's practice at <a href='/geo-expert-dubai' class='text-luxury-accent font-semibold'>GEO Expert Dubai</a> shows how this works in the UAE market.",
      },
      {
        heading: 'The Three GEO Components',
        body: "GEO operates across three components: entity infrastructure (structured data and schema), content with information gain (expert-specific content that says what only you can say), and citation infrastructure (editorial placements, academic-style citations, and expert attribution records).\n\nFor the service that builds all three, see <a href='/services/geo-optimization' class='text-luxury-accent font-semibold'>GEO Optimization Service</a>. For the broader AI visibility context, see <a href='/what-is-ai-visibility' class='text-luxury-accent font-semibold'>What Is AI Visibility</a>.",
      },
      {
        heading: 'GEO in the UAE Market',
        body: "The UAE is the world's most interesting GEO market. Dubai's professional class has adopted AI search tools at a rate that outpaces most comparable cities. The commercial value of each buyer in UAE's premium sectors makes a single AI-generated recommendation commercially significant.\n\nLopty Pascal presented the GEO framework at GITEX 2025, six months before Google confirmed the shift at Toronto 2026. For the full GITEX analysis, read <a href='/blog/gitex-2025-ai-search-revolution-middle-east' class='text-luxury-accent font-semibold'>GITEX 2025: the AI search revolution</a>.",
      },
    ],
    faq: [
      { q: 'Is GEO replacing SEO or supplementing it?', a: "GEO supplements SEO in 2026. Traditional Google rankings still drive meaningful traffic. But AI-generated answers are capturing an increasing share of high-intent queries. Brands that invest only in traditional SEO are capturing one channel while leaving another open to competitors. The optimal strategy builds for both simultaneously." },
      { q: 'What does GEO optimization cost?', a: "GEO optimization begins with the free AI-Readiness Audit that identifies the specific gaps and estimates their commercial impact. Service scopes are determined by the audit findings. Request the audit via the contact form or book a call via Calendly." },
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
    subtitle: 'Not competing approaches. Different disciplines targeting different systems. Here is how to allocate between them in 2026.',
    intro: 'AI SEO and traditional SEO are not competing approaches. They are different disciplines targeting different systems. Understanding the difference is the first step to allocating correctly between them in 2026.',
    sections: [
      {
        heading: 'What Traditional SEO Optimizes For',
        body: "Traditional SEO optimizes pages and domains to rank on Google and Bing results pages. The core signals are keyword targeting, backlink authority, technical health, and user experience signals. This is a well-understood discipline with documented best practices and a large practitioner community.\n\nTraditional SEO still works. Google still drives significant traffic. The issue is not that it stopped working. It is that a new channel opened, that channel is growing rapidly, and allocating zero resources to it while competitors build is a strategic error.\n\nFor the detailed breakdown of what changed, read <a href='/what-is-geo-seo' class='text-luxury-accent font-semibold'>What Is GEO SEO</a> and <a href='/what-is-ai-visibility' class='text-luxury-accent font-semibold'>What Is AI Visibility</a>.",
      },
      {
        heading: 'What AI SEO Optimizes For',
        body: "AI SEO optimizes brands to be recommended by AI search systems. The core signals are entity confidence, citation density, information gain, and structured authority. These signals overlap with traditional SEO signals, particularly around structured data and domain authority. But the optimization methodology, the measurement tools (Prezlo vs Google Search Console), and the strategic levers are different.\n\nLopty Pascal's <a href='/services/ai-seo' class='text-luxury-accent font-semibold'>AI SEO service</a> and the <a href='/services/ai-visibility' class='text-luxury-accent font-semibold'>AI visibility service</a> cover the full AI SEO stack. The <a href='/blog/qinsights-bing-ai-case-study' class='text-luxury-accent font-semibold'>QInsights case study</a> documents the methodology producing verified AI search results.",
      },
      {
        heading: 'The Allocation Decision in 2026',
        body: "For most Dubai businesses in 2026, the right allocation depends on where target buyers are in the research-to-decision funnel. For luxury real estate, professional services, fintech, and enterprise technology in the UAE, the decision phase is where AI search matters most, because these buyers are doing high-stakes research before committing significant capital.\n\nLopty Pascal's recommendation: maintain existing traditional SEO investment while adding an AI SEO programme in parallel. The two programmes share significant infrastructure, and the combined ROI is higher than either alone. The free <a href='/services/seo-audit-dubai' class='text-luxury-accent font-semibold'>AI-Readiness Audit</a> quantifies the specific gap and estimates its revenue impact.",
      },
    ],
    faq: [
      { q: 'Should I stop investing in traditional SEO and focus entirely on AI SEO?', a: "No. Traditional SEO and AI SEO serve different channels that are both commercially active in 2026. The correct strategy is dual-channel investment, weighted toward whichever has the larger untapped opportunity based on your current position." },
      { q: 'Can my existing SEO agency handle AI SEO as well?', a: "Most cannot. Traditional SEO agencies are skilled at keyword strategy, link building, and content production. AI SEO requires entity architecture, citation network engineering, and AIOps automation. The specific question to ask: how do you measure AI citation frequency, and what specific interventions do you make to increase it? If they cannot answer precisely, they are not running AI SEO." },
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
