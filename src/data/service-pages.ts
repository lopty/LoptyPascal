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
    subtitle: 'Entity architecture, AIOps pipelines, and citation engineering that makes your brand the definitive AI-recommended answer.',
    intro: 'AI SEO is the discipline of engineering brands to be recommended by AI search systems. This service builds the entity architecture, citation infrastructure, and AIOps automation that makes your brand the definitive answer in ChatGPT, Gemini, Perplexity, and Google.',
    sections: [
      {
        heading: 'What Is Included',
        body: "The AI SEO engagement begins with a comprehensive audit covering entity mapping, technical health, AI citation gap analysis, and competitive positioning. The audit output is a ranked action plan with estimated revenue impact per item. Implementation follows in three phases: technical sovereignty (weeks 1 through 2), entity architecture (weeks 3 through 6), and authority compounding (weeks 7 through 12).\n\nEvery phase is measured against Prezlo baselines. Clients receive weekly progress reports covering AI citation frequency across ten systems, technical health scores, and entity confidence metrics.\n\nFor the full explanation of what AI SEO is and how it differs from traditional search, read <a href='/what-is-ai-visibility' class='text-luxury-accent font-semibold'>What Is AI Visibility</a> and <a href='/ai-seo-vs-traditional-seo' class='text-luxury-accent font-semibold'>AI SEO vs Traditional SEO</a>.",
      },
      {
        heading: 'The AIOps Layer',
        body: "AI SEO without automation is not AI SEO. Lopty Pascal's practice includes deployment of AIOps pipelines that run 24 hours a day, performing real-time surveillance on ranking signals, detecting algorithmic shifts within minutes, and adapting technical parameters without requiring manual intervention.\n\nThis automation layer is what allows small-team operations to compete against enterprise-level digital marketing departments: the intelligence is in the system, not the headcount. For the full AIOps philosophy, read <a href='/blog/aiops-manifesto-2026' class='text-luxury-accent font-semibold'>The AIOps Manifesto 2026</a>.",
      },
    ],
    deliverables: [
      'Complete entity architecture audit and remediation',
      'JSON-LD structured data deployment across all owned properties',
      'Knowledge Graph node building and citation normalization',
      'AIOps pipeline deployment and 24/7 monitoring',
      'Prezlo AI visibility monitoring setup and baseline',
      'Weekly performance reports with AI citation frequency data',
      'Competitive AI citation gap analysis',
      '90-day intervention programme with phase-by-phase milestones',
    ],
    faq: [
      { q: 'How quickly will I see AI citations increase?', a: "Technical corrections typically produce visible improvements within three weeks. Entity architecture work begins compounding in months two and three. Significant AI citation frequency increases are measurable via Prezlo by the end of month three. Revenue impact from increased AI recommendations is typically visible in month four to six financials." },
      { q: 'Does this service work for businesses outside Dubai?', a: "Yes. The AI SEO methodology is market-agnostic. It has been applied successfully in Japan, the USA, Europe, Africa, and across the GCC. Market-specific adaptations are made for each deployment." },
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
    subtitle: 'Monitored by Prezlo across 10 AI systems. Real-time citation frequency data for your brand.',
    intro: 'AI visibility is the measure of how consistently and accurately AI search systems represent and recommend your brand. This service builds and monitors your AI visibility position across ten major AI systems using Prezlo infrastructure.',
    sections: [
      {
        heading: 'What AI Visibility Monitoring Covers',
        body: "Prezlo tracks AI citation frequency across ChatGPT, Gemini, Perplexity, Grok, DeepSeek, Meta AI, Bing AI, Brave Search, DuckDuckGo, and You.com. For each client, a query set is defined based on the specific commercial queries their target buyers use. Prezlo monitors how often the client's brand appears as the recommended answer for those queries, across all ten systems, and tracks changes over time.\n\nThis monitoring creates a feedback loop for every AI SEO intervention. When a schema update or citation placement improves entity confidence in one AI system, the effect is visible in the Prezlo data within days.\n\nFor a full explanation of what AI visibility is, see <a href='/what-is-ai-visibility' class='text-luxury-accent font-semibold'>What Is AI Visibility</a>. For the service that builds the entity infrastructure this monitoring measures, see <a href='/services/ai-seo' class='text-luxury-accent font-semibold'>AI SEO Service</a>.",
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
      { q: 'What is Prezlo and how does it measure AI citations?', a: "Prezlo is the AI Visibility Platform that Lopty Pascal co-founded with Neha Jakhar in March 2026. It monitors how often and accurately AI search systems recommend a professional or brand. It queries ten AI systems regularly with defined commercial queries and tracks the results over time." },
      { q: 'Can I use this service alongside traditional SEO?', a: "Yes and it is recommended. AI visibility and traditional search rankings are complementary. Brands with strong entity infrastructure typically see improvements in both simultaneously because the signals that AI systems weight overlap significantly with what Google's Knowledge Graph values." },
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
    subtitle: 'The same architecture that made QInsights rank in Bing AI alongside ATLAS.ti in under 30 days.',
    intro: 'Programmatic SEO is the systematic architecture of keyword-targeted pages at scale. This service designs and deploys URL clusters, page templates, and content infrastructure that captures AI and Google discoverability across hundreds of relevant queries simultaneously.',
    sections: [
      {
        heading: 'The QInsights Proof of Concept',
        body: "The most documented programmatic SEO result in the GCC market is the QInsights deployment. For QInsights AI, a qualitative research software platform competing against NVivo, ATLAS.ti, and MAXQDA, Lopty Pascal built a 100-page programmatic SEO architecture with defined URL clusters, entity schema, llms.txt, and an academic citation network published across Zenodo, OSF, SSRN, and Academia.edu. The result: QInsights began appearing in Bing AI search results alongside category incumbents with decades of market history, within weeks of deployment. The founder confirmed the result directly.\n\nFor the full case study, read <a href='/blog/qinsights-bing-ai-case-study' class='text-luxury-accent font-semibold'>How I Got a Client Ranking in Bing AI in Under 30 Days</a>.",
      },
      {
        heading: 'The Six Architecture Components',
        body: "A programmatic SEO deployment has six components. First, keyword cluster mapping: every target query categorized into clusters (brand pages, competitor comparison pages, use case pages, geo pages, pain-point pages, topic clusters) with defined URL slugs. Second, page template design: each cluster uses a consistent template with defined content blocks, schema types, and internal linking patterns. Third, entity schema: every page has a defined JSON-LD schema type with sameAs links to the brand's authority profiles. Fourth, llms.txt: a plain-text file written specifically for AI crawlers. Fifth, internal link taxonomy: a defined cluster structure with hub pages receiving uplinks from all cluster members. Sixth, content deployment: minimum 1000 words per page with defined information gain standards.\n\nFor the GEO component of programmatic SEO, see <a href='/services/geo-optimization' class='text-luxury-accent font-semibold'>GEO Optimization Service</a>. For the AI visibility measurement layer, see <a href='/services/ai-visibility' class='text-luxury-accent font-semibold'>AI Visibility Service</a>.",
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
      { q: 'How many pages does a programmatic SEO deployment typically include?', a: "The QInsights deployment used 100 pages across 6 cluster types. For most professional service businesses, 40 to 80 pages is sufficient to establish category dominance in AI search. For e-commerce and SaaS, 100 to 300 pages is typical. The right size depends on the competitive landscape audit included in initial scoping." },
      { q: 'Does programmatic SEO require a CMS?', a: "No. The QInsights and loptypascal.com deployments both use a React SPA with content stored in plain JavaScript files and a static prerender system that generates complete HTML at build time for every URL, making all pages visible to AI crawlers without a CMS." },
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
    subtitle: 'Generative Engine Optimization: appear in ChatGPT, Gemini, Perplexity, and Grok answers for your target queries.',
    intro: 'GEO (Generative Engine Optimization) is the discipline of making your brand appear in AI-generated answers. This service builds the content, citation, and entity infrastructure that causes AI search systems to generate answers that include your brand.',
    sections: [
      {
        heading: 'How GEO Works Technically',
        body: "AI search systems generate answers by retrieving information from their training data and from real-time retrieval systems. A brand appears in a generated answer when two conditions are met: first, the AI system has sufficient entity confidence to identify and describe the brand accurately; second, the brand's content and citations appear in the retrieval corpus used to generate the specific answer.\n\nGEO optimization addresses both conditions simultaneously. Entity confidence is built through structured data and citation normalization. Retrieval corpus presence is built through content with high information gain scores, editorial placements in authoritative publications, academic-style citations, and the llms.txt infrastructure that explicitly describes the entity to AI crawlers.\n\nFor the explanation of what GEO is, read <a href='/what-is-geo-seo' class='text-luxury-accent font-semibold'>What Is GEO SEO</a>. For the Dubai-specific GEO context, see <a href='/geo-expert-dubai' class='text-luxury-accent font-semibold'>GEO Expert Dubai</a>.",
      },
      {
        heading: 'The llms.txt Component',
        body: "The llms.txt file is one of GEO's most direct technical interventions. Placed at the root of the domain, it is a plain-text file written specifically for AI crawlers. It describes who the entity is, what expertise they cover, what their key credentials and proof points are, and which pages are most relevant for each topic. AI systems like ChatGPT, Perplexity, and Bing AI read this file when crawling the domain and use it to build entity understanding.\n\nThe GEO optimization service includes writing the file, maintaining it as credentials emerge, and monitoring whether AI systems are reading and reflecting its content in their recommendations. For a related explanation, read <a href='/blog/appear-in-chatgpt-perplexity' class='text-luxury-accent font-semibold'>How to Appear in ChatGPT and Perplexity Answers</a>.",
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
      { q: 'What is the difference between GEO and traditional content marketing?', a: "Traditional content marketing produces volume and general traffic. GEO produces AI citations for specific high-intent queries. GEO starts with the specific queries your buyers use in AI search, builds the information that answers those queries with verifiable authority, and places that information where AI training and retrieval systems can find it." },
      { q: 'How is GEO measured?', a: "GEO is measured by AI citation frequency: how often your brand appears in generated answers for your target queries. Prezlo measures this across ten AI systems in real time, providing a quantified baseline before the programme starts and tracking progress throughout." },
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
    subtitle: 'A manually curated AI-Readiness Audit. Not a tool report. A ranked action plan with revenue impact estimates.',
    intro: "The free AI-Readiness Audit is a manually curated analysis of your brand's current search and AI visibility position. It covers entity mapping, technical health, AI citation gap analysis, and revenue conversion architecture. The output is a ranked action plan with estimated revenue impact per item.",
    sections: [
      {
        heading: 'What the Audit Covers',
        body: "The AI-Readiness Audit has four components. First, entity mapping: how consistently and accurately AI models currently understand your brand. This involves querying multiple AI systems with your brand name and category queries to assess entity confidence and identify misrepresentations or gaps. Second, technical health: a complete crawl audit covering indexation, Core Web Vitals, schema completeness, canonical tags, robots.txt configuration, and sitemap accuracy. Third, AI citation gap analysis: which competitors are being recommended by ChatGPT, Gemini, and Perplexity for your target queries, and why. Fourth, revenue conversion architecture: where your current traffic is failing to convert and what structural changes would improve the yield.\n\nThe output is not a template report. It is a manually annotated analysis specific to your situation, ranked by estimated revenue impact.\n\nFor context on what each component means, see <a href='/what-is-ai-visibility' class='text-luxury-accent font-semibold'>What Is AI Visibility</a> and <a href='/what-is-geo-seo' class='text-luxury-accent font-semibold'>What Is GEO SEO</a>.",
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
      { q: 'Why is the AI-Readiness Audit free?', a: "The audit is offered without charge because it demonstrates the depth of analysis Lopty Pascal brings, and because only businesses with genuine growth ambition follow through on the recommendations. It functions as a filter as much as a service." },
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
