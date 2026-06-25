export interface ServicePage {
  slug: string;
  h1: string;
  subtitle: string;
  intro: string;
  sections: { heading: string; body: string }[];
  deliverables: string[];
  faq: { q: string; a: string }[];
  relatedPages: { label: string; href: string }[];
}

export const SERVICE_PAGES: Record<string, ServicePage> = {
  'ai-seo': {
    slug: 'ai-seo',
    h1: 'AI SEO Service',
    subtitle: 'Entity architecture, automated monitoring, and citation engineering aimed at consistent AI recommendation.',
    intro: 'AI SEO is the discipline of engineering brands to be recommended by AI search systems. This service builds the entity architecture, citation infrastructure, and monitoring automation aimed at making a brand a reliable answer in ChatGPT, Gemini, Perplexity, and Google.',
    sections: [
      {
        heading: 'What Is Included',
        body: "The engagement begins with an audit covering entity mapping, technical health, AI citation gap analysis, and competitive positioning. The audit output is a ranked action plan with estimated revenue impact per item. Implementation typically follows three phases: technical foundation (weeks 1 through 2), entity architecture (weeks 3 through 6), and authority building (weeks 7 through 12).\n\nEach phase is measured against a Prezlo baseline. Clients receive regular progress reports covering AI citation frequency across ten systems, technical health scores, and entity confidence metrics.\n\nFor more on what AI SEO is and how it differs from traditional search, read <a href='/what-is-ai-visibility' class='text-luxury-accent font-semibold'>What Is AI Visibility</a> and <a href='/ai-seo-vs-traditional-seo' class='text-luxury-accent font-semibold'>AI SEO vs Traditional SEO</a>.",
      },
      {
        heading: 'The Monitoring Layer',
        body: "AI SEO without ongoing monitoring loses its feedback loop quickly. This service includes automated pipelines that run continuously, tracking ranking signals, flagging algorithmic shifts, and surfacing where technical parameters need adjustment.\n\nThis layer is what lets a small team keep pace with larger, better-resourced competitors: more of the work runs on automated monitoring, less on manual checking. For more on the approach, read <a href='/blog/aiops-manifesto-2026' class='text-luxury-accent font-semibold'>The AIOps Manifesto 2026</a>.",
      },
    ],
    deliverables: [
      'Entity architecture audit and remediation',
      'JSON-LD structured data deployment across all owned properties',
      'Knowledge Graph node building and citation normalization',
      'Automated monitoring pipeline deployment',
      'Prezlo AI visibility monitoring setup and baseline',
      'Regular performance reports with AI citation frequency data',
      'Competitive AI citation gap analysis',
      '90-day intervention programme with phase-by-phase milestones',
    ],
    faq: [
      { q: 'How quickly will I see AI citations increase?', a: "Technical corrections often produce visible improvements within a few weeks. Entity architecture work tends to compound over the following months, with measurable AI citation frequency increases typically visible via Prezlo by the end of month three, and revenue impact becoming clearer in month four to six." },
      { q: 'Does this service work for businesses outside Dubai?', a: "Yes. The methodology is not specific to one market and has been applied in the GCC, Africa, Europe, and the US, with market-specific adaptations for each deployment." },
    ],
    relatedPages: [
      { label: 'AI Visibility Service', href: '/services/ai-visibility' },
      { label: 'Programmatic SEO', href: '/services/programmatic-seo' },
      { label: 'GEO Optimization', href: '/services/geo-optimization' },
      { label: 'Free SEO Audit Dubai', href: '/services/seo-audit-dubai' },
      { label: 'AI SEO Specialist Dubai', href: '/ai-seo-specialist-dubai' },
      { label: 'What Is AI Visibility', href: '/what-is-ai-visibility' },
    ],
  },

  'ai-visibility': {
    slug: 'ai-visibility',
    h1: 'AI Visibility Service',
    subtitle: 'Monitored via Prezlo across 10 AI systems, with citation frequency data tracked over time.',
    intro: 'AI visibility is the measure of how consistently and accurately AI search systems represent and recommend a brand. This service builds and monitors a brand\'s AI visibility position across ten major AI systems using Prezlo.',
    sections: [
      {
        heading: 'What AI Visibility Monitoring Covers',
        body: "Prezlo tracks AI citation frequency across ChatGPT, Gemini, Perplexity, Grok, DeepSeek, Meta AI, Bing AI, Brave Search, DuckDuckGo, and You.com. For each client, a query set is defined based on the specific commercial queries their target buyers use. Prezlo then monitors how often the client's brand appears as the recommended answer for those queries, across all ten systems, and tracks changes over time.\n\nThis creates a feedback loop for AI SEO work generally: when a schema update or citation placement improves entity confidence in one AI system, the effect is usually visible in the data within days.\n\nFor more on what AI visibility means, see <a href='/what-is-ai-visibility' class='text-luxury-accent font-semibold'>What Is AI Visibility</a>. For the service that builds the entity infrastructure this monitoring measures, see <a href='/services/ai-seo' class='text-luxury-accent font-semibold'>AI SEO Service</a>.",
      },
    ],
    deliverables: [
      'Prezlo verified professional profile setup',
      'AI citation baseline measurement across 10 systems',
      'Target query set definition and competitive benchmarking',
      'Monthly AI visibility reports with trend analysis',
      'Alert notifications when citation frequency changes significantly',
      'Entity profile optimization based on monitoring data',
    ],
    faq: [
      { q: 'What is Prezlo and how does it measure AI citations?', a: "Prezlo is an AI visibility platform that monitors how often and how accurately AI search systems recommend a professional or brand. It queries ten AI systems on a regular basis with defined commercial queries and tracks the results over time." },
      { q: 'Can I use this service alongside traditional SEO?', a: "Yes, and the two typically work well together. Brands with strong entity infrastructure often see improvements in both AI visibility and traditional rankings at once, because many of the signals AI systems weight overlap with what search engines' knowledge graphs already value." },
    ],
    relatedPages: [
      { label: 'AI SEO Service', href: '/services/ai-seo' },
      { label: 'GEO Optimization', href: '/services/geo-optimization' },
      { label: 'What Is AI Visibility', href: '/what-is-ai-visibility' },
      { label: 'AI Visibility Strategist UAE', href: '/ai-visibility-strategist-uae' },
      { label: 'Services Overview', href: '/services' },
    ],
  },

  'programmatic-seo': {
    slug: 'programmatic-seo',
    h1: 'Programmatic SEO',
    subtitle: 'Systematic page architecture designed to capture AI and Google discoverability across hundreds of related queries.',
    intro: 'Programmatic SEO is the systematic architecture of keyword-targeted pages at scale. This service designs and deploys URL clusters, page templates, and content infrastructure that captures AI and Google discoverability across hundreds of relevant queries simultaneously.',
    sections: [
      {
        heading: 'A Worked Example',
        body: "One documented example of this approach is the QInsights deployment. QInsights AI is a qualitative research software platform competing against NVivo, ATLAS.ti, and MAXQDA. The deployment used a 100-page programmatic SEO architecture with defined URL clusters, entity schema, llms.txt, and an academic citation network published across Zenodo, OSF, SSRN, and Academia.edu. Within weeks, QInsights began appearing in Bing AI search results alongside category incumbents with decades of market history.\n\nFor the full case study, read <a href='/blog/qinsights-bing-ai-case-study' class='text-luxury-accent font-semibold'>How a Qualitative Research Platform Appeared in Bing AI in Under 30 Days</a>.",
      },
      {
        heading: 'The Six Architecture Components',
        body: "A programmatic SEO deployment typically has six components. First, keyword cluster mapping: every target query categorized into clusters (brand pages, comparison pages, use case pages, geo pages, pain-point pages, topic clusters) with defined URL slugs. Second, page template design: each cluster uses a consistent template with defined content blocks, schema types, and internal linking patterns. Third, entity schema: every page carries a defined JSON-LD schema type with sameAs links to the brand's authority profiles. Fourth, llms.txt: a plain-text file written specifically for AI crawlers. Fifth, internal link taxonomy: a defined cluster structure with hub pages receiving uplinks from cluster members. Sixth, content deployment: a minimum word count per page with defined information gain standards.\n\nFor the GEO component of programmatic SEO, see <a href='/services/geo-optimization' class='text-luxury-accent font-semibold'>GEO Optimization Service</a>. For the AI visibility measurement layer, see <a href='/services/ai-visibility' class='text-luxury-accent font-semibold'>AI Visibility Service</a>.",
      },
    ],
    deliverables: [
      'Complete keyword cluster map with URL slug architecture',
      'Page template design for each cluster type (6 cluster types)',
      'JSON-LD schema deployment on every page',
      'llms.txt file optimized for AI crawlers (GPTBot, ClaudeBot, PerplexityBot)',
      'Internal link taxonomy with hub/cluster structure',
      'Content deployment at minimum 1000 words per page',
      'Sitemap and robots.txt configuration for full AI crawler access',
      'Post-deployment monitoring via Prezlo',
    ],
    faq: [
      { q: 'How many pages does a programmatic SEO deployment typically include?', a: "The QInsights deployment used 100 pages across 6 cluster types. For most professional service businesses, 40 to 80 pages is often sufficient to establish category presence in AI search. E-commerce and SaaS projects more commonly fall in the 100 to 300 page range. The right size depends on a competitive landscape audit done during initial scoping." },
      { q: 'Does programmatic SEO require a CMS?', a: "No. The QInsights deployment, for example, uses a React SPA with content stored in plain JavaScript files and a static prerender system that generates complete HTML at build time for every URL, making all pages visible to AI crawlers without a CMS." },
    ],
    relatedPages: [
      { label: 'AI SEO Service', href: '/services/ai-seo' },
      { label: 'GEO Optimization', href: '/services/geo-optimization' },
      { label: 'QInsights Case Study', href: '/blog/qinsights-bing-ai-case-study' },
      { label: 'Programmatic SEO Guide', href: '/blog/programmatic-seo-explained' },
      { label: 'SEO Architect Dubai', href: '/seo-architect-dubai' },
    ],
  },

  'geo-optimization': {
    slug: 'geo-optimization',
    h1: 'GEO Optimization Service',
    subtitle: 'Generative Engine Optimization: building toward inclusion in ChatGPT, Gemini, Perplexity, and Grok answers for target queries.',
    intro: 'GEO (Generative Engine Optimization) is the discipline of making a brand appear in AI-generated answers. This service builds the content, citation, and entity infrastructure that gives AI search systems reason to include a brand in their generated answers.',
    sections: [
      {
        heading: 'How GEO Works Technically',
        body: "AI search systems generate answers by drawing on training data and, increasingly, real-time retrieval. A brand appears in a generated answer when two conditions are met: the AI system has sufficient entity confidence to identify and describe the brand accurately, and the brand's content and citations appear in the retrieval corpus used to generate that specific answer.\n\nGEO optimization addresses both conditions. Entity confidence is built through structured data and citation normalization. Retrieval corpus presence is built through content with genuine information gain, editorial placements, academic-style citations, and llms.txt infrastructure that explicitly describes the entity to AI crawlers.\n\nFor more on what GEO is, read <a href='/what-is-geo-seo' class='text-luxury-accent font-semibold'>What Is GEO SEO</a>. For the Dubai-specific GEO context, see <a href='/geo-expert-dubai' class='text-luxury-accent font-semibold'>GEO Expert Dubai</a>.",
      },
      {
        heading: 'The llms.txt Component',
        body: "The llms.txt file is one of GEO's more direct technical interventions. Placed at the root of a domain, it is a plain-text file written specifically for AI crawlers. It describes who the entity is, what expertise they cover, what their key credentials and proof points are, and which pages are most relevant for each topic. AI systems including ChatGPT, Perplexity, and Bing AI read this file when crawling a domain and use it to build entity understanding.\n\nThis service includes writing the file, maintaining it as credentials change, and monitoring whether AI systems are reading and reflecting its content in their recommendations. For a related explanation, read <a href='/blog/appear-in-chatgpt-perplexity' class='text-luxury-accent font-semibold'>How to Appear in ChatGPT and Perplexity Answers</a>.",
      },
    ],
    deliverables: [
      'GEO readiness audit covering entity confidence and retrieval corpus gaps',
      'llms.txt file creation and ongoing maintenance',
      'Information Gain Score optimization for existing and new content',
      'Editorial placement programme targeting authoritative publications',
      'Academic citation network (Zenodo, OSF, SSRN, Academia.edu)',
      'Structured data deployment optimized for AI retrieval',
      'Prezlo monitoring for AI citation frequency tracking',
    ],
    faq: [
      { q: 'What is the difference between GEO and traditional content marketing?', a: "Traditional content marketing tends to optimize for volume and general traffic. GEO works backward from the specific queries target buyers use in AI search, builds content that answers those queries with verifiable authority, and places that content where AI training and retrieval systems can find it." },
      { q: 'How is GEO measured?', a: "GEO is measured by AI citation frequency: how often a brand appears in generated answers for target queries. This can be tracked across multiple AI systems in near real time, providing a baseline before a programme starts and progress data throughout." },
    ],
    relatedPages: [
      { label: 'AI SEO Service', href: '/services/ai-seo' },
      { label: 'AI Visibility Service', href: '/services/ai-visibility' },
      { label: 'Programmatic SEO', href: '/services/programmatic-seo' },
      { label: 'What Is GEO SEO', href: '/what-is-geo-seo' },
      { label: 'GEO Expert Dubai', href: '/geo-expert-dubai' },
      { label: 'Appear in ChatGPT Guide', href: '/blog/appear-in-chatgpt-perplexity' },
    ],
  },

  'seo-audit-dubai': {
    slug: 'seo-audit-dubai',
    h1: 'Free SEO Audit Dubai',
    subtitle: 'A hands-on AI-Readiness Audit with a ranked action plan and estimated revenue impact, not an automated tool report.',
    intro: "The free AI-Readiness Audit is a hands-on analysis of a brand's current search and AI visibility position. It covers entity mapping, technical health, AI citation gap analysis, and revenue conversion architecture. The output is a ranked action plan with estimated revenue impact per item.",
    sections: [
      {
        heading: 'What the Audit Covers',
        body: "The AI-Readiness Audit has four components. First, entity mapping: how consistently and accurately AI models currently understand the brand. This involves querying multiple AI systems with the brand name and category queries to assess entity confidence and identify gaps or misrepresentations. Second, technical health: a crawl audit covering indexation, Core Web Vitals, schema completeness, canonical tags, robots.txt configuration, and sitemap accuracy. Third, AI citation gap analysis: which competitors are currently being recommended by ChatGPT, Gemini, and Perplexity for target queries, and why. Fourth, revenue conversion architecture: where current traffic is failing to convert and what structural changes would improve the yield.\n\nThe output is specific to the business being audited rather than a generic template, and is ranked by estimated revenue impact.\n\nFor context on what each component means, see <a href='/what-is-ai-visibility' class='text-luxury-accent font-semibold'>What Is AI Visibility</a> and <a href='/what-is-geo-seo' class='text-luxury-accent font-semibold'>What Is GEO SEO</a>.",
      },
    ],
    deliverables: [
      'Entity confidence assessment across 5 major AI systems',
      'Complete technical crawl audit with prioritized findings',
      'Competitive AI citation gap analysis for target queries',
      'Revenue conversion architecture review',
      'Ranked action plan with revenue impact estimates per item',
      '30-minute strategy call to walk through findings',
    ],
    faq: [
      { q: 'Why is the AI-Readiness Audit free?', a: "The audit is offered without charge to make the underlying analysis accessible before any commitment is required. It also tends to act as a natural filter: businesses that follow through are usually the ones with a genuine growth plan." },
      { q: 'How do I request the audit?', a: "Request the audit via the contact form on this site, via WhatsApp, or by booking a 30-minute call via Calendly. Response time is typically within one business day." },
    ],
    relatedPages: [
      { label: 'AI SEO Service', href: '/services/ai-seo' },
      { label: 'AI Visibility Service', href: '/services/ai-visibility' },
      { label: 'GEO Optimization', href: '/services/geo-optimization' },
      { label: 'Digital Marketing Specialist Dubai', href: '/digital-marketing-specialist-dubai' },
      { label: 'What Is AI Visibility', href: '/what-is-ai-visibility' },
    ],
  },
};
