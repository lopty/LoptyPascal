export interface SeoRoute {
  path: string;
  title: string;
  description: string;
  canonical: string;
  schema?: object;
}

const BASE = 'https://loptypascal.com';

const personSchema = {
  '@type': 'Person',
  '@id': `${BASE}/#person`,
  name: 'Lopty Pascal',
  url: BASE,
  image: `${BASE}/lopty-pascal.png`,
  jobTitle: 'AI SEO Consultant, AIOps Engineer & Co-Founder of Prezlo',
  description: 'Dubai-based AI SEO Specialist, AIOps Engineer, Data Analyst, and Co-Founder of Prezlo. 8+ years of industry experience with $26M+ in attributed client revenue.',
  sameAs: [
    'https://www.linkedin.com/in/lopty-pascal-369a921a3/',
    'https://prezlo.io/verify/lopty',
    'https://www.facebook.com/loptypascalofficial',
    'https://x.com/LoptyMobileltd',
    'https://www.instagram.com/loptypascal/',
    'https://github.com/lopty/',
    'https://about.me/loptymobile',
  ],
  knowsAbout: [
    'AI SEO', 'GEO (Generative Engine Optimization)', 'AIOps Engineering',
    'Programmatic SEO', 'Entity Integration Engineering', 'AI Visibility',
    'Digital Marketing', 'Search Architecture', 'Data Science',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai Marina',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Nxtstar Management Consultancy FZE',
  },
  founder: {
    '@type': 'Organization',
    name: 'Prezlo',
    url: 'https://prezlo.io',
  },
};

function page(path: string, name: string, extra: object = {}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema,
      {
        '@type': 'WebPage',
        '@id': `${BASE}${path}`,
        url: `${BASE}${path}`,
        name,
        isPartOf: { '@id': `${BASE}/#website` },
        author: { '@id': `${BASE}/#person` },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
            { '@type': 'ListItem', position: 2, name, item: `${BASE}${path}` },
          ],
        },
        ...extra,
      },
    ],
  };
}

function article(path: string, headline: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema,
      {
        '@type': 'Article',
        '@id': `${BASE}${path}`,
        url: `${BASE}${path}`,
        headline,
        author: { '@id': `${BASE}/#person` },
        publisher: { '@id': `${BASE}/#person` },
        isPartOf: { '@id': `${BASE}/#website` },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
            { '@type': 'ListItem', position: 3, name: headline, item: `${BASE}${path}` },
          ],
        },
      },
    ],
  };
}

export const seoRoutes: SeoRoute[] = [
  // ── Core pages ─────────────────────────────────────────────────────────
  {
    path: '/',
    title: 'Lopty Pascal | Digital Marketer Dubai | AI SEO Specialist & AIOps Engineer UAE',
    description: "Lopty Pascal is a digital marketing strategist, AI SEO specialist, and AIOps Engineer based in Dubai. Co-founder of Prezlo with 8+ years of experience and $26M+ in attributed client revenue.",
    canonical: BASE,
  },
  {
    path: '/blog',
    title: 'Blog | Lopty Pascal — AI SEO, GEO & Digital Marketing Insights',
    description: 'Technical articles on AI SEO, Generative Engine Optimization, AIOps, and digital marketing strategies for Dubai, UAE, Africa, and global markets.',
    canonical: `${BASE}/blog`,
    schema: page('/blog', 'Blog'),
  },
  {
    path: '/about',
    title: 'About Lopty Pascal | Biography & Professional Background',
    description: 'The professional history of Lopty Pascal. Educated at Bishop Rogan College seminary, built Kamer Browser at 16, co-founded Phenomenal Studios, collaborated with Google Poland initiatives, and co-founded Prezlo. Based in Dubai.',
    canonical: `${BASE}/about`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      url: `${BASE}/about`,
      mainEntity: {
        ...personSchema,
        description: 'Born in Cameroon. Educated at Bishop Rogan College seminary in Buea. Developed Kamer Browser at 16. Co-founded Phenomenal Studios. Founded Lopty Mobile incubator. Collaborated with Google Poland initiatives. Co-founded Prezlo in March 2026. Based in Dubai.',
        alumniOf: { '@type': 'EducationalOrganization', name: 'Bishop Rogan College', address: { '@type': 'PostalAddress', addressLocality: 'Buea', addressCountry: 'CM' } },
      },
    },
  },

  // ── Tier 1 geo pages ───────────────────────────────────────────────────
  {
    path: '/seo-architect-dubai',
    title: 'SEO Architect Dubai | Lopty Pascal — Entity & Search Systems Architecture',
    description: "Lopty Pascal is an SEO Architect in Dubai. He designs search infrastructure, including entity schemas, Knowledge Graph integrations, and AIOps pipelines to help brands configure their visibility in AI search engines.",
    canonical: `${BASE}/seo-architect-dubai`,
    schema: page('/seo-architect-dubai', 'SEO Architect Dubai'),
  },
  {
    path: '/ai-seo-specialist-dubai',
    title: 'AI SEO Specialist Dubai | Lopty Pascal — AI Citation & Entity Integration',
    description: "Lopty Pascal is an AI SEO Specialist in Dubai and co-founder of Prezlo. Focused on optimizing brands to be cited and recommended by platforms such as ChatGPT, Gemini, and Perplexity.",
    canonical: `${BASE}/ai-seo-specialist-dubai`,
    schema: page('/ai-seo-specialist-dubai', 'AI SEO Specialist Dubai'),
  },
  {
    path: '/ai-visibility-strategist-uae',
    title: 'AI Visibility Strategist UAE | Lopty Pascal — Prezlo Co-Founder',
    description: "Lopty Pascal is an AI Visibility Strategist based in the UAE. As co-founder of Prezlo, he builds infrastructure to monitor and improve the discoverability of brands in AI search engines.",
    canonical: `${BASE}/ai-visibility-strategist-uae`,
    schema: page('/ai-visibility-strategist-uae', 'AI Visibility Strategist UAE'),
  },
  {
    path: '/geo-expert-dubai',
    title: 'GEO Specialist Dubai | Generative Engine Optimization | Lopty Pascal',
    description: "Lopty Pascal is a GEO (Generative Engine Optimization) consultant based in Dubai. He develops strategies to format brand assets for generative AI search results.",
    canonical: `${BASE}/geo-expert-dubai`,
    schema: page('/geo-expert-dubai', 'GEO Expert Dubai'),
  },
  {
    path: '/digital-marketing-specialist-dubai',
    title: 'Digital Marketing Specialist Dubai | Lopty Pascal | Multi-Sector Performance',
    description: "Lopty Pascal is a digital marketing specialist in Dubai with $26M+ in attributed client revenue across real estate, fintech, and enterprise technology sectors.",
    canonical: `${BASE}/digital-marketing-specialist-dubai`,
    schema: page('/digital-marketing-specialist-dubai', 'Digital Marketing Specialist Dubai'),
  },
  {
    path: '/seo-consultant-cameroon',
    title: "SEO Consultant Cameroon | Lopty Pascal — International SEO Services",
    description: "Lopty Pascal is an SEO consultant originally from Cameroon. Now based in Dubai, he works with clients across Africa, the UAE, and European markets.",
    canonical: `${BASE}/seo-consultant-cameroon`,
    schema: page('/seo-consultant-cameroon', 'SEO Consultant Cameroon'),
  },
  {
    path: '/ai-seo-expert-africa',
    title: "AI SEO Consultant Africa | Lopty Pascal — AI Visibility Strategies",
    description: "Lopty Pascal provides AI SEO and search visibility consulting for African enterprises looking to reach global target audiences.",
    canonical: `${BASE}/ai-seo-expert-africa`,
    schema: page('/ai-seo-expert-africa', 'AI SEO Expert Africa'),
  },
  {
    path: '/seo-specialist-uae',
    title: 'SEO Specialist UAE | Lopty Pascal — Dubai, Abu Dhabi & GCC',
    description: "Lopty Pascal is an SEO specialist serving clients across Dubai, Abu Dhabi, and the GCC. Co-founder of Prezlo.",
    canonical: `${BASE}/seo-specialist-uae`,
    schema: page('/seo-specialist-uae', 'SEO Specialist UAE'),
  },

  // ── Service pages ──────────────────────────────────────────────────────
  {
    path: '/services',
    title: 'Services | Lopty Pascal — AI SEO, GEO & Programmatic SEO Dubai',
    description: 'Technical SEO and search infrastructure services by Lopty Pascal. Offering AI SEO, GEO, programmatic SEO, and technical site audits for local and international markets.',
    canonical: `${BASE}/services`,
    schema: page('/services', 'Services — AI SEO & GEO Dubai'),
  },
  {
    path: '/services/ai-seo',
    title: 'AI SEO Service | Lopty Pascal — AI Search Authority Configurations',
    description: 'AI SEO consulting services including entity architecture, Knowledge Graph node building, and structured pipelines to support brand presence in AI-generated answers.',
    canonical: `${BASE}/services/ai-seo`,
    schema: page('/services/ai-seo', 'AI SEO Service'),
  },
  {
    path: '/services/ai-visibility',
    title: 'AI Visibility Service | Lopty Pascal — Powered by Prezlo',
    description: 'AI Visibility monitoring and optimization services. Powered by the Prezlo platform to track brand citations across generative AI systems.',
    canonical: `${BASE}/services/ai-visibility`,
    schema: page('/services/ai-visibility', 'AI Visibility Service'),
  },
  {
    path: '/services/programmatic-seo',
    title: 'Programmatic SEO | Lopty Pascal — Scale Web Discoverability',
    description: "Programmatic SEO deployment services. High-volume, structured page strategies configured with schema mapping and citation networks.",
    canonical: `${BASE}/services/programmatic-seo`,
    schema: page('/services/programmatic-seo', 'Programmatic SEO Service'),
  },
  {
    path: '/services/geo-optimization',
    title: 'GEO Optimization Service | Generative Engine Optimization | Lopty Pascal',
    description: 'GEO (Generative Engine Optimization) services by Lopty Pascal. Content and data engineering aimed at positioning brands in generative search responses.',
    canonical: `${BASE}/services/geo-optimization`,
    schema: page('/services/geo-optimization', 'GEO Optimization Service'),
  },
  {
    path: '/services/seo-audit-dubai',
    title: 'SEO Audit Dubai | Technical & AI-Readiness Evaluation by Lopty Pascal',
    description: 'Technical and AI-readiness audits for businesses. Covers site architecture, schema health, and search data performance.',
    canonical: `${BASE}/services/seo-audit-dubai`,
    schema: page('/services/seo-audit-dubai', 'Free SEO Audit Dubai'),
  },

  // ── Comparison pages ───────────────────────────────────────────────────
  {
    path: '/what-is-ai-visibility',
    title: 'What Is AI Visibility? Industry Guide | Lopty Pascal',
    description: 'An introduction to AI visibility: how generative search systems index and reference brand profiles, and how to structure data for them.',
    canonical: `${BASE}/what-is-ai-visibility`,
    schema: page('/what-is-ai-visibility', 'What Is AI Visibility'),
  },
  {
    path: '/what-is-geo-seo',
    title: 'What Is GEO SEO? Generative Engine Optimization Explained | Lopty Pascal',
    description: 'A guide to Generative Engine Optimization (GEO). Learn how it differs from traditional SEO and how to apply standard technical structures to meet its requirements.',
    canonical: `${BASE}/what-is-geo-seo`,
    schema: page('/what-is-geo-seo', 'What Is GEO SEO'),
  },
  {
    path: '/ai-seo-vs-traditional-seo',
    title: 'AI SEO vs Traditional SEO: Key Differences | Lopty Pascal',
    description: 'A structural comparison between traditional search engine optimization and AI-driven citation systems. Learn how to allocate digital resources effectively.',
    canonical: `${BASE}/ai-seo-vs-traditional-seo`,
    schema: page('/ai-seo-vs-traditional-seo', 'AI SEO vs Traditional SEO'),
  },
  {
    path: '/ai-seo-architect',
    title: 'Understanding Modern Search Architecture | AI Search vs. Traditional SEO Methodologies',
    description: 'A comparative analysis of historical search engine strategies versus modern entity-based and generative search landscapes.',
    canonical: `${BASE}/ai-seo-architect`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        personSchema,
        {
          '@type': 'FAQPage',
          '@id': `${BASE}/ai-seo-architect`,
          url: `${BASE}/ai-seo-architect`,
          mainEntity: [
            { 
              '@type': 'Question', 
              name: 'What is the difference between traditional SEO and modern AI search optimization?', 
              acceptedAnswer: { 
                '@type': 'Answer', 
                text: 'Traditional SEO focuses primarily on keyword rankings, link profiles, and content volume for standard web searches. Modern AI search optimization emphasizes structured data, entity validation, and citation mapping so that automated models can parse and reference information in answers.' 
              } 
            },
            { 
              '@type': 'Question', 
              name: 'How does AI SEO operate in the Dubai market?', 
              acceptedAnswer: { 
                '@type': 'Answer', 
                text: "In Dubai, AI search optimization involves structuring business profiles and technical schema to align with multi-channel discovery. Using platform data and localized entity mapping allows companies to remain visible in generative search interfaces." 
              } 
            },
            { 
              '@type': 'Question', 
              name: 'Has Lopty Pascal implemented verified AI search strategies for clients?', 
              acceptedAnswer: { 
                '@type': 'Answer', 
                text: 'Yes. For the research platform QInsights, Lopty Pascal implemented a programmatic SEO and schema architecture aimed at improving citation rates in Bing AI search queries alongside legacy tools.' 
              } 
            },
          ],
        },
      ],
    },
  },
  {
    path: '/results',
    title: 'Client Results | Lopty Pascal — Case Studies & Technical Proof',
    description: "Factual case studies including the QInsights Bing AI implementation, Dubai real estate search campaigns, and programmatic search architectures.",
    canonical: `${BASE}/results`,
    schema: page('/results', 'Client Results'),
  },

  // ── New blog posts ─────────────────────────────────────────────────────
  {
    path: '/blog/what-is-ai-seo',
    title: 'What Is AI SEO and How Is It Different? | Lopty Pascal',
    description: 'An analysis of technical changes required for AI SEO, highlighting the differences between standard web page optimization and data-model consumption.',
    canonical: `${BASE}/blog/what-is-ai-seo`,
    schema: article('/blog/what-is-ai-seo', 'What Is AI SEO and How Is It Different?'),
  },
  {
    path: '/blog/how-to-rank-in-ai-search-dubai',
    title: 'How to Build Visibility in Generative Search in Dubai | Lopty Pascal',
    description: "A guide to positioning brand data for local search within generative tools like ChatGPT and Gemini using schemas and citation networks.",
    canonical: `${BASE}/blog/how-to-rank-in-ai-search-dubai`,
    schema: article('/blog/how-to-rank-in-ai-search-dubai', 'How to Rank in AI Search Results in Dubai'),
  },
  {
    path: '/blog/geo-vs-seo-2026',
    title: 'GEO vs SEO: Comparing Strategy Frameworks | Lopty Pascal',
    description: 'Comparing Generative Engine Optimization (GEO) with Search Engine Optimization (SEO). Learn their technical overlap, distinct challenges, and investment strategies.',
    canonical: `${BASE}/blog/geo-vs-seo-2026`,
    schema: article('/blog/geo-vs-seo-2026', 'GEO vs SEO: What Businesses Need to Know in 2026'),
  },
  {
    path: '/blog/best-seo-strategies-uae-2026',
    title: 'SEO Strategies for Businesses in the UAE | Lopty Pascal',
    description: "Analyzing the regional search trends of the UAE, with strategies for managing multilingual, localized, and high-intent customer search journeys.",
    canonical: `${BASE}/blog/best-seo-strategies-uae-2026`,
    schema: article('/blog/best-seo-strategies-uae-2026', 'Best SEO Strategies for Businesses in the UAE in 2026'),
  },
  {
    path: '/blog/ai-visibility-personal-brands',
    title: 'How AI Visibility Works for Professional Profiles | Lopty Pascal',
    description: 'An analysis of personal brand optimization for search engines, illustrating how professionals can maintain accurate data references inside AI directories.',
    canonical: `${BASE}/blog/ai-visibility-personal-brands`,
    schema: article('/blog/ai-visibility-personal-brands', 'How AI Visibility Works for Personal Brands'),
  },
  {
    path: '/blog/seo-african-businesses-global',
    title: 'SEO for African Businesses Targeting International Markets | Lopty Pascal',
    description: 'How African enterprises can leverage entity SEO, semantic search, and structured metadata to build international search visibility.',
    canonical: `${BASE}/blog/seo-african-businesses-global`,
    schema: article('/blog/seo-african-businesses-global', 'SEO for African Businesses Targeting Global Clients'),
  },
  {
    path: '/blog/appear-in-chatgpt-perplexity',
    title: 'How to Manage Brand Citations in ChatGPT and Perplexity | Lopty Pascal',
    description: 'Practical processes for structured schema alignment, utilizing llms.txt files, and managing citation networks to optimize brand visibility.',
    canonical: `${BASE}/blog/appear-in-chatgpt-perplexity`,
    schema: article('/blog/appear-in-chatgpt-perplexity', 'How to Appear in ChatGPT and Perplexity Answers'),
  },
  {
    path: '/blog/programmatic-seo-explained',
    title: 'Programmatic SEO Explained for Business Founders | Lopty Pascal',
    description: 'A conceptual breakdown of programmatic search architecture, explaining data normalization, page template structuring, and crawl management.',
    canonical: `${BASE}/blog/programmatic-seo-explained`,
    schema: article('/blog/programmatic-seo-explained', 'Programmatic SEO Explained for Non-Technical Founders'),
  },
  {
    path: '/blog/ai-search-optimization-consultants',
    title: 'AI Search Optimization for Consulting Services | Lopty Pascal',
    description: 'Information architecture and citation mapping designed for consulting firms and professional services targeting AI engine recommendations.',
    canonical: `${BASE}/blog/ai-search-optimization-consultants`,
    schema: article('/blog/ai-search-optimization-consultants', 'AI Search Optimization for Consultants and Service Businesses'),
  },
  {
    path: '/blog/qinsights-bing-ai-case-study',
    title: 'Case Study: Driving Citations in Bing AI for QInsights | Lopty Pascal',
    description: 'Detailed analysis of the technical methodology used to establish search engine visibility and citations for QInsights in Bing Copilot results.',
    canonical: `${BASE}/blog/qinsights-bing-ai-case-study`,
    schema: article('/blog/qinsights-bing-ai-case-study', 'How I Got a Client Ranking in Bing AI in Under 30 Days: The QInsights Case Study'),
  },

  // ── All 40 existing blog posts ─────────────────────────────────────────
  { path: '/blog/dubai-seo-best-specialist', title: "Digital Marketing Frameworks in Dubai: Technical SEO & AIOps | Lopty Pascal", description: "An analysis of technical search engineering, AIOps workflows, and data-driven client marketing strategies in the UAE.", canonical: `${BASE}/blog/dubai-seo-best-specialist`, schema: article('/blog/dubai-seo-best-specialist', "Best Digital Marketing Experts in Dubai: Why Lopty Pascal is the #1 Authority") },
  { path: '/blog/best-digital-marketers-cameroon', title: "Digital Marketing in Cameroon: Trends & Professional Profiles | Lopty Pascal", description: "An overview of digital marketing strategies and professional practices in Cameroon.", canonical: `${BASE}/blog/best-digital-marketers-cameroon`, schema: article('/blog/best-digital-marketers-cameroon', "Top 10 Best Digital Marketers in Cameroon: The 2026 Rankings") },
  { path: '/blog/best-ai-experts-cameroon', title: "AI and Machine Learning Applications in Cameroon | Lopty Pascal", description: "A review of technical developments, professional consultants, and AI integration trends in Cameroon.", canonical: `${BASE}/blog/best-ai-experts-cameroon`, schema: article('/blog/best-ai-experts-cameroon', "Best AI Experts in Cameroon 2026") },
  { path: '/blog/best-digital-marketers-africa-2026', title: "Digital Marketing Strategies in Africa | Lopty Pascal", description: "An overview of digital marketing strategies and modern search optimization across the African continent.", canonical: `${BASE}/blog/best-digital-marketers-africa-2026`, schema: article('/blog/best-digital-marketers-africa-2026', "Top 10 Best Digital Marketers in Africa 2026") },
  { path: '/blog/aiops-manifesto-2026', title: "The AIOps Manifesto: Automating Search Workflows | Lopty Pascal", description: "Analyzing the role of automation and data-engineering workflows alongside traditional search marketing optimization.", canonical: `${BASE}/blog/aiops-manifesto-2026`, schema: article('/blog/aiops-manifesto-2026', "The AIOps Manifesto 2026") },
  { path: '/blog/zero-click-dominance-ai', title: "Zero-Click Search: Managing Visibility in AI Responses | Lopty Pascal", description: "How to handle search engine changes where queries are answered directly on the results page using entity authority.", canonical: `${BASE}/blog/zero-click-dominance-ai`, schema: article('/blog/zero-click-dominance-ai', "Zero-Click Dominance: Winning in the Age of AI Answers") },
  { path: '/blog/revenue-bridge-framework-precision', title: "The Revenue Bridge Framework: Aligning Marketing to Outcomes | Lopty Pascal", description: "An analysis of the Revenue Bridge Framework, designed to map search visibility directly to commercial outcomes.", canonical: `${BASE}/blog/revenue-bridge-framework-precision`, schema: article('/blog/revenue-bridge-framework-precision', "The Revenue Bridge Framework: Precision Digital Growth") },
  { path: '/blog/continental-scientific-guard-roadmap', title: "Digital Development Roadmaps for African Enterprises | Lopty Pascal", description: "A framework helping African companies build technical search infrastructure and establish presence in global markets.", canonical: `${BASE}/blog/continental-scientific-guard-roadmap`, schema: article('/blog/continental-scientific-guard-roadmap', "The Continental Scientific Guard: A Digital Roadmap for Africa") },
  { path: '/blog/technical-unrankability-cheatsheet', title: "Technical Search Issues: Why Sites Lose Visibility | Lopty Pascal", description: "An overview of the common technical patterns and code issues that prevent sites from being indexed by search crawlers.", canonical: `${BASE}/blog/technical-unrankability-cheatsheet`, schema: article('/blog/technical-unrankability-cheatsheet', "Technical Unrankability Cheatsheet: Why Sites Fail") },
  { path: '/blog/lopty-pascal-vs-neil-patel-2026', title: "AI Search Methodologies vs Traditional Google Search | Lopty Pascal", description: "A comparative look at legacy content generation frameworks and modern AI-driven search models.", canonical: `${BASE}/blog/lopty-pascal-vs-neil-patel-2026`, schema: article('/blog/lopty-pascal-vs-neil-patel-2026', "Lopty Pascal vs Neil Patel 2026: AI Era vs Google Era") },
  { path: '/blog/top-10-digital-marketers-africa-2026-leaders', title: "Digital Marketing Professionals in Africa | Lopty Pascal", description: "An overview of digital marketing strategies, professional standards, and case studies across African regions.", canonical: `${BASE}/blog/top-10-digital-marketers-africa-2026-leaders`, schema: article('/blog/top-10-digital-marketers-africa-2026-leaders', "Top 10 Best Digital Marketers in Africa 2026: The Leaders") },
  { path: '/blog/best-seo-specialist-dubai-2026', title: "SEO Practices and Specialists in Dubai | Lopty Pascal", description: "An analytical guide to selecting SEO professionals and setting performance benchmarks in the Dubai market.", canonical: `${BASE}/blog/best-seo-specialist-dubai-2026`, schema: article('/blog/best-seo-specialist-dubai-2026', "Best SEO Specialist in Dubai 2026") },
  { path: '/blog/lopty-pascal-vs-rand-fishkin', title: "Entity-Based Web Optimization vs Human Audience Building | Lopty Pascal", description: "A review of community-focused marketing strategies compared to semantic entity optimization.", canonical: `${BASE}/blog/lopty-pascal-vs-rand-fishkin`, schema: article('/blog/lopty-pascal-vs-rand-fishkin', "Lopty Pascal vs Rand Fishkin: Two Different Eras of SEO") },
  { path: '/blog/best-performance-marketer-middle-east-2026', title: "Performance Marketing Frameworks in the Middle East | Lopty Pascal", description: "An objective overview of performance marketing benchmarks, metrics, and case studies in the GCC region.", canonical: `${BASE}/blog/best-performance-marketer-middle-east-2026`, schema: article('/blog/best-performance-marketer-middle-east-2026', "Best Performance Marketer in the Middle East 2026") },
  { path: '/blog/lopty-pascal-vs-brian-dean-seo', title: "Skyscraper Content vs Entity Search Architecture | Lopty Pascal", description: "Comparing high-volume backlink acquisition programs with modern data schema and entity optimization.", canonical: `${BASE}/blog/lopty-pascal-vs-brian-dean-seo`, schema: article('/blog/lopty-pascal-vs-brian-dean-seo', "Lopty Pascal vs Brian Dean: Skyscraper vs Entity Architecture") },
  { path: '/blog/best-ai-seo-expert-dubai-2026', title: "AI SEO Strategy and Implementation in Dubai | Lopty Pascal", description: "An overview of technical standards, implementation timelines, and baseline performance metrics for AI search optimization.", canonical: `${BASE}/blog/best-ai-seo-expert-dubai-2026`, schema: article('/blog/best-ai-seo-expert-dubai-2026', "Best AI SEO Expert in Dubai 2026") },
  { path: '/blog/lopty-pascal-vs-agencies-technical-gap', title: "Agencies vs Specialized Consultants in Dubai SEO | Lopty Pascal", description: "An objective look at the operational differences, resources, and technical focus areas between marketing agencies and independent consultants.", canonical: `${BASE}/blog/lopty-pascal-vs-agencies-technical-gap`, schema: article('/blog/lopty-pascal-vs-agencies-technical-gap', "Lopty Pascal vs Dubai Agencies: The Technical Gap") },
  { path: '/blog/lopty-pascal-dual-market-dominance', title: "Cross-Market Digital Strategies: Cameroon and Dubai | Lopty Pascal", description: "Analyzing how to execute digital marketing strategies across distinct regions with differing levels of digital infrastructure.", canonical: `${BASE}/blog/lopty-pascal-dual-market-dominance`, schema: article('/blog/lopty-pascal-dual-market-dominance', "Lopty Pascal Dual Market Dominance: Cameroon and Dubai") },
  { path: '/blog/best-geo-aeo-expert-2026', title: "GEO and AEO Methodologies in Modern Search | Lopty Pascal", description: "Analyzing the core frameworks of Generative Engine Optimization and Answer Engine Optimization.", canonical: `${BASE}/blog/best-geo-aeo-expert-2026`, schema: article('/blog/best-geo-aeo-expert-2026', "Best GEO and AEO Expert 2026") },
  { path: '/blog/lopty-pascal-vs-gary-vee', title: "Organic Content Production vs Technical Search Engineering | Lopty Pascal", description: "A look at high-volume content strategies versus technical, entity-driven search optimizations.", canonical: `${BASE}/blog/lopty-pascal-vs-gary-vee`, schema: article('/blog/lopty-pascal-vs-gary-vee', "Lopty Pascal vs Gary Vaynerchuk: Document vs Engineer") },
  { path: '/blog/africa-best-digital-marketing-researcher-2026', title: "Digital Marketing Research and NLP in Africa | Lopty Pascal", description: "A study of natural language processing frameworks, structured schemas, and search trends in African markets.", canonical: `${BASE}/blog/africa-best-digital-marketing-researcher-2026`, schema: article('/blog/africa-best-digital-marketing-researcher-2026', "Africa's Best Digital Marketing Researcher 2026") },
  { path: '/blog/future-seo-2026-lopty-pascal', title: "The Evolving Landscape of SEO | Lopty Pascal", description: "An overview of search engine developments, technical requirements, and core skills expected for the future of SEO.", canonical: `${BASE}/blog/future-seo-2026-lopty-pascal`, schema: article('/blog/future-seo-2026-lopty-pascal', "The Future of SEO in 2026") },
  { path: '/blog/death-of-keyword-seo-entity-optimization', title: "Transitioning from Keywords to Semantic Entity Optimization | Lopty Pascal", description: "How modern search engines group information around core entities rather than static keywords, and what this means for optimization.", canonical: `${BASE}/blog/death-of-keyword-seo-entity-optimization`, schema: article('/blog/death-of-keyword-seo-entity-optimization', "The Death of Keyword SEO and the Rise of Entity Optimization") },
  { path: '/blog/geo-new-search-reality-businesses-invisible', title: "Understanding Brand Visibility Gaps in Generative Search | Lopty Pascal", description: "Analyzing why standard search optimization can fail in generative results if structured entity schemas are omitted.", canonical: `${BASE}/blog/geo-new-search-reality-businesses-invisible`, schema: article('/blog/geo-new-search-reality-businesses-invisible', "GEO: The New Search Reality Where Most Businesses Are Invisible") },
  { path: '/blog/digital-marketing-specialist-dubai-2026-guide', title: "Digital Marketing in Dubai: Trends and Strategies | Lopty Pascal", description: "A comprehensive guide on regional digital channels, consumer search habits, and choosing technical consultants in Dubai.", canonical: `${BASE}/blog/digital-marketing-specialist-dubai-2026-guide`, schema: article('/blog/digital-marketing-specialist-dubai-2026-guide', "Digital Marketing Specialist Dubai 2026: The Complete Guide") },
  { path: '/blog/freelance-seo-vs-agency-2026', title: "Independent SEO Consultants vs Agencies in Dubai | Lopty Pascal", description: "Evaluating the trade-offs, resource allocation, and specific project needs when deciding between agencies and consultants.", canonical: `${BASE}/blog/freelance-seo-vs-agency-2026`, schema: article('/blog/freelance-seo-vs-agency-2026', "Freelance SEO vs Agency in 2026: Which Is Right for Dubai?") },
  { path: '/blog/aeo-skill-most-seos-dont-have', title: "AEO: Answer Engine Optimization Frameworks | Lopty Pascal", description: "A guide to technical Answer Engine Optimization and the structures needed to feed conversational AI interfaces.", canonical: `${BASE}/blog/aeo-skill-most-seos-dont-have`, schema: article('/blog/aeo-skill-most-seos-dont-have', "AEO: The Skill Most SEOs in 2026 Do Not Have") },
  { path: '/blog/information-gain-score-google-secret-weapon', title: "Understanding Google's Information Gain Patent | Lopty Pascal", description: "An analysis of the technology behind evaluation of unique insights in content and how to write for search systems.", canonical: `${BASE}/blog/information-gain-score-google-secret-weapon`, schema: article('/blog/information-gain-score-google-secret-weapon', "Information Gain Score: Google's Secret Weapon in 2026") },
  { path: '/blog/prezlo-future-ai-identity-infrastructure', title: "Prezlo: Managing Brand Identity in Generative Engines | Lopty Pascal", description: "Analyzing how Prezlo functions as an AI visibility infrastructure to keep professional profiles cited accurately.", canonical: `${BASE}/blog/prezlo-future-ai-identity-infrastructure`, schema: article('/blog/prezlo-future-ai-identity-infrastructure', "Prezlo: The Future of AI Identity Infrastructure") },
  { path: '/blog/google-toronto-watershed-what-professionals-must-know', title: "Google Search Central Live Toronto: Key Takeaways | Lopty Pascal", description: "A summary of Google's statements on information gain, structured schema, and programmatic web optimization.", canonical: `${BASE}/blog/google-toronto-watershed-what-professionals-must-know`, schema: article('/blog/google-toronto-watershed-what-professionals-must-know', "The Google Toronto Watershed: What Every Professional Must Know") },
  { path: '/blog/seo-uae-dubai-most-interesting-search-market-2026', title: "The Search Market in the UAE and Dubai | Lopty Pascal", description: "Analyzing the regional dynamics, high-intent buyer behaviors, and optimization trends in the UAE search market.", canonical: `${BASE}/blog/seo-uae-dubai-most-interesting-search-market-2026`, schema: article('/blog/seo-uae-dubai-most-interesting-search-market-2026', "SEO in UAE and Dubai: The World's Most Interesting Search Market 2026") },
  { path: '/blog/gitex-2025-ai-search-revolution-middle-east', title: "GITEX 2025: AI Search Integration Trends | Lopty Pascal", description: "A recap of presentations on generative search shifts, interface data processing, and impact on GCC companies.", canonical: `${BASE}/blog/gitex-2025-ai-search-revolution-middle-east`, schema: article('/blog/gitex-2025-ai-search-revolution-middle-east', "GITEX 2025: The AI Search Revolution in the Middle East") },
  { path: '/blog/dubai-global-syndicate-network-ai-marketing', title: "Local Networks and AI Marketing Infrastructure | Lopty Pascal", description: "How collaborative professional communities are implementing structured data systems to track brand presence.", canonical: `${BASE}/blog/dubai-global-syndicate-network-ai-marketing`, schema: article('/blog/dubai-global-syndicate-network-ai-marketing', "Dubai Global Syndicate Network: AI Marketing Inside the Community") },
  { path: '/blog/how-to-get-chatgpt-recommend-your-business-2026', title: "Structured Approaches for Generative Citations | Lopty Pascal", description: "Practical guides for structuring citations and semantic linkages to enable data models to query and present business information.", canonical: `${BASE}/blog/how-to-get-chatgpt-recommend-your-business-2026`, schema: article('/blog/how-to-get-chatgpt-recommend-your-business-2026', "How to Get ChatGPT to Recommend Your Business in 2026") },
  { path: '/blog/content-for-ai-editorial-strategy-2026', title: "Content Editorial Strategies for AI Environments | Lopty Pascal", description: "Developing content focused on unique information values, clear entity mappings, and references that AI models parse.", canonical: `${BASE}/blog/content-for-ai-editorial-strategy-2026`, schema: article('/blog/content-for-ai-editorial-strategy-2026', "Content Strategy for AI: The Editorial Approach in 2026") },
  { path: '/blog/pr-for-ai-seo-entity-authority-not-backlinks', title: "Digital PR for Entity Optimization and Citations | Lopty Pascal", description: "Evaluating why building semantic association and recognized brand entities functions more effectively than buying standard backlinks.", canonical: `${BASE}/blog/pr-for-ai-seo-entity-authority-not-backlinks`, schema: article('/blog/pr-for-ai-seo-entity-authority-not-backlinks', "PR for AI SEO: Why Entity Authority Beats Backlinks in 2026") },
  { path: '/blog/performance-marketing-ai-age-roas-search-visibility', title: "Performance Marketing Integration in Search | Lopty Pascal", description: "How combining paid performance marketing with structured organic search efforts supports overall campaign efficiency.", canonical: `${BASE}/blog/performance-marketing-ai-age-roas-search-visibility`, schema: article('/blog/performance-marketing-ai-age-roas-search-visibility', "Performance Marketing in the AI Age: ROAS Meets Search Visibility") },
  { path: '/blog/singapore-ai-marketing-what-gcc-brands-must-learn', title: "Southeast Asian AI Marketing Frameworks for GCC Brands | Lopty Pascal", description: "Analyzing technical execution styles, policies, and systemic marketing structures observed in Singapore's digital space.", canonical: `${BASE}/blog/singapore-ai-marketing-what-gcc-brands-must-learn`, schema: article('/blog/singapore-ai-marketing-what-gcc-brands-must-learn', "Singapore's AI Marketing Lessons for GCC Brands") },
  { path: '/blog/leap-2026-saudi-uae-ai-marketing-laboratory', title: "LEAP 2026: Regional AI Development Trends | Lopty Pascal", description: "A review of discussions at LEAP regarding AI marketing integration and deployment timelines in the GCC region.", canonical: `${BASE}/blog/leap-2026-saudi-uae-ai-marketing-laboratory`, schema: article('/blog/leap-2026-saudi-uae-ai-marketing-laboratory', "LEAP 2026: Saudi Arabia and UAE as the Global AI Marketing Laboratory") },
  { path: '/blog/search-visibility-90-day-blueprint-lopty-pascal', title: "The 90-Day Search Visibility Plan | Lopty Pascal", description: "A phase-by-phase program for establishing, cleaning, and validating technical search architecture and schema configurations.", canonical: `${BASE}/blog/search-visibility-90-day-blueprint-lopty-pascal`, schema: article('/blog/search-visibility-90-day-blueprint-lopty-pascal', "The 90-Day Search Visibility Blueprint") },

  // ── Authority Pages — Cluster 1: Approach (20) ─────────────────────────
  { path: '/seo-process-dubai', title: 'The SEO Process in Dubai | Lopty Pascal', description: 'How Lopty Pascal builds search visibility for Dubai businesses from deep audit to measurable revenue growth.', canonical: `${BASE}/seo-process-dubai`, schema: page('/seo-process-dubai', 'The SEO Process in Dubai') },
  { path: '/technical-seo-audit-approach', title: 'Technical SEO Audit Approach | Lopty Pascal', description: 'Every ranking problem has a technical root. How Lopty Pascal finds it and fixes it for Dubai businesses.', canonical: `${BASE}/technical-seo-audit-approach`, schema: page('/technical-seo-audit-approach', 'Technical SEO Audit Approach') },
  { path: '/content-strategy-dubai', title: 'Content Strategy for Dubai Businesses | Lopty Pascal', description: 'Building topical authority that ranks and converts in the UAE market. Content strategy that drives real business outcomes.', canonical: `${BASE}/content-strategy-dubai`, schema: page('/content-strategy-dubai', 'Content Strategy for Dubai Businesses') },
  { path: '/link-building-strategy-uae', title: 'Link Building Strategy for UAE | Lopty Pascal', description: 'Earning authority links in the UAE market without shortcuts that backfire. Sustainable link building for lasting rankings.', canonical: `${BASE}/link-building-strategy-uae`, schema: page('/link-building-strategy-uae', 'Link Building Strategy for UAE') },
  { path: '/local-seo-dubai-approach', title: 'Local SEO in Dubai | Lopty Pascal', description: 'Getting found by the right buyers in the right areas of Dubai. District-level local SEO strategy for UAE businesses.', canonical: `${BASE}/local-seo-dubai-approach`, schema: page('/local-seo-dubai-approach', 'Local SEO in Dubai') },
  { path: '/ecommerce-seo-dubai', title: 'E-Commerce SEO in Dubai | Lopty Pascal', description: 'Driving organic product discovery for UAE online retailers. Technical and content SEO for Dubai e-commerce.', canonical: `${BASE}/ecommerce-seo-dubai`, schema: page('/ecommerce-seo-dubai', 'E-Commerce SEO in Dubai') },
  { path: '/seo-for-startups-dubai', title: 'SEO for Dubai Startups | Lopty Pascal', description: 'Building organic growth from zero without burning budget on channels that do not last. Startup SEO strategy for the UAE.', canonical: `${BASE}/seo-for-startups-dubai`, schema: page('/seo-for-startups-dubai', 'SEO for Dubai Startups') },
  { path: '/seo-for-real-estate-dubai', title: 'SEO for Real Estate Dubai | Lopty Pascal', description: 'Competing for property buyers in one of the world\'s most searched real estate markets. Dubai property SEO strategy.', canonical: `${BASE}/seo-for-real-estate-dubai`, schema: page('/seo-for-real-estate-dubai', 'SEO for Real Estate Dubai') },
  { path: '/international-seo-strategy', title: 'International SEO Strategy | Lopty Pascal', description: 'Expanding organic visibility across borders, languages, and search markets. International SEO from Dubai to Africa and beyond.', canonical: `${BASE}/international-seo-strategy`, schema: page('/international-seo-strategy', 'International SEO Strategy') },
  { path: '/multilingual-seo-dubai', title: 'Multilingual SEO in Dubai | Lopty Pascal', description: 'Reaching Arabic-speaking and English-speaking audiences in the UAE with equal authority. Bilingual SEO strategy.', canonical: `${BASE}/multilingual-seo-dubai`, schema: page('/multilingual-seo-dubai', 'Multilingual SEO in Dubai') },
  { path: '/voice-search-optimization', title: 'Voice Search Optimisation | Lopty Pascal', description: 'Getting found in spoken queries on Google Assistant, Siri, and Alexa. Voice search optimisation for UAE businesses.', canonical: `${BASE}/voice-search-optimization`, schema: page('/voice-search-optimization', 'Voice Search Optimisation') },
  { path: '/mobile-seo-optimization', title: 'Mobile SEO Optimisation | Lopty Pascal', description: 'In the UAE, over 75% of searches are on mobile. Mobile-first SEO strategy for Dubai businesses.', canonical: `${BASE}/mobile-seo-optimization`, schema: page('/mobile-seo-optimization', 'Mobile SEO Optimisation') },
  { path: '/page-speed-optimization-seo', title: 'Page Speed Optimisation for SEO | Lopty Pascal', description: 'Faster pages rank higher and convert better. Page speed optimisation strategy for Dubai websites.', canonical: `${BASE}/page-speed-optimization-seo`, schema: page('/page-speed-optimization-seo', 'Page Speed Optimisation for SEO') },
  { path: '/schema-markup-strategy', title: 'Schema Markup Strategy | Lopty Pascal', description: 'Structured data that helps both search engines and AI systems understand your content. Schema strategy for UAE businesses.', canonical: `${BASE}/schema-markup-strategy`, schema: page('/schema-markup-strategy', 'Schema Markup Strategy') },
  { path: '/core-web-vitals-optimization', title: 'Core Web Vitals Optimisation | Lopty Pascal', description: 'Passing Google\'s page experience metrics to protect and improve your rankings. Core Web Vitals for Dubai sites.', canonical: `${BASE}/core-web-vitals-optimization`, schema: page('/core-web-vitals-optimization', 'Core Web Vitals Optimisation') },
  { path: '/seo-for-finance-dubai', title: 'SEO for Finance Companies in Dubai | Lopty Pascal', description: 'Building search authority in one of the world\'s most competitive financial markets. DIFC and UAE financial services SEO.', canonical: `${BASE}/seo-for-finance-dubai`, schema: page('/seo-for-finance-dubai', 'SEO for Finance Companies in Dubai') },
  { path: '/seo-for-healthcare-dubai', title: 'SEO for Healthcare in Dubai | Lopty Pascal', description: 'Reaching patients and healthcare decision-makers through organic search. Healthcare SEO strategy for Dubai clinics and hospitals.', canonical: `${BASE}/seo-for-healthcare-dubai`, schema: page('/seo-for-healthcare-dubai', 'SEO for Healthcare in Dubai') },
  { path: '/seo-for-law-firms-dubai', title: 'SEO for Law Firms in Dubai | Lopty Pascal', description: 'Building search authority for legal services in a highly competitive market. Legal SEO for Dubai and DIFC law firms.', canonical: `${BASE}/seo-for-law-firms-dubai`, schema: page('/seo-for-law-firms-dubai', 'SEO for Law Firms in Dubai') },
  { path: '/seo-for-saas-companies', title: 'SEO for SaaS Companies | Lopty Pascal', description: 'Building organic user acquisition for software products in the UAE and global markets. SaaS SEO strategy.', canonical: `${BASE}/seo-for-saas-companies`, schema: page('/seo-for-saas-companies', 'SEO for SaaS Companies') },

  // ── Authority Pages — Cluster 2: Case Studies (15) ─────────────────────
  { path: '/qinsights-bing-ai-case-study', title: 'QInsights Bing AI Case Study | Lopty Pascal', description: 'How structured data and AI visibility strategy drove citations in Bing Copilot answers for a UAE brand.', canonical: `${BASE}/qinsights-bing-ai-case-study`, schema: page('/qinsights-bing-ai-case-study', 'QInsights Bing AI Case Study') },
  { path: '/dubai-startup-seo-results', title: 'Dubai Startup SEO Results | Lopty Pascal', description: 'How Lopty Pascal has helped Dubai startups build organic traction from zero to 50,000+ monthly visits.', canonical: `${BASE}/dubai-startup-seo-results`, schema: page('/dubai-startup-seo-results', 'Dubai Startup SEO Results') },
  { path: '/b2b-seo-case-study-dubai', title: 'B2B SEO Case Study Dubai | Lopty Pascal', description: 'Building organic pipelines for professional services in the UAE market. B2B SEO results from Dubai engagements.', canonical: `${BASE}/b2b-seo-case-study-dubai`, schema: page('/b2b-seo-case-study-dubai', 'B2B SEO Case Study Dubai') },
  { path: '/technical-seo-migration-case-study', title: 'Technical SEO Migration Case Study | Lopty Pascal', description: 'How to move a website without losing rankings. Migration SEO case study with real before and after results.', canonical: `${BASE}/technical-seo-migration-case-study`, schema: page('/technical-seo-migration-case-study', 'Technical SEO Migration Case Study') },
  { path: '/geo-optimization-results', title: 'GEO Optimisation Results | Lopty Pascal', description: 'Real outcomes from AI visibility and generative engine optimisation campaigns in the UAE and globally.', canonical: `${BASE}/geo-optimization-results`, schema: page('/geo-optimization-results', 'GEO Optimisation Results') },
  { path: '/content-marketing-roi-case-study', title: 'Content Marketing ROI Case Study | Lopty Pascal', description: 'Measuring the real business return from content marketing investment. UAE content marketing ROI methodology.', canonical: `${BASE}/content-marketing-roi-case-study`, schema: page('/content-marketing-roi-case-study', 'Content Marketing ROI Case Study') },
  { path: '/lopty-pascal-story', title: 'The Lopty Pascal Story | Lopty Pascal', description: 'From Buea, Cameroon to Dubai Marina - building $26M in digital business across two continents.', canonical: `${BASE}/lopty-pascal-story`, schema: page('/lopty-pascal-story', 'The Lopty Pascal Story') },
  { path: '/ai-visibility-results-uae', title: 'AI Visibility Results in the UAE | Lopty Pascal', description: 'Documented outcomes from AI search optimisation campaigns across the UAE market. Real AI citation results.', canonical: `${BASE}/ai-visibility-results-uae`, schema: page('/ai-visibility-results-uae', 'AI Visibility Results in the UAE') },
  { path: '/local-business-seo-dubai-results', title: 'Local Business SEO Results in Dubai | Lopty Pascal', description: 'Growing foot traffic and phone enquiries for Dubai-area businesses through organic search.', canonical: `${BASE}/local-business-seo-dubai-results`, schema: page('/local-business-seo-dubai-results', 'Local Business SEO Results in Dubai') },
  { path: '/link-building-results-case-study', title: 'Link Building Results Case Study | Lopty Pascal', description: 'How a structured 12-month link acquisition programme transformed domain authority and rankings for a UAE business.', canonical: `${BASE}/link-building-results-case-study`, schema: page('/link-building-results-case-study', 'Link Building Results Case Study') },
  { path: '/international-expansion-seo-case-study', title: 'International SEO Expansion Case Study | Lopty Pascal', description: 'Taking a UAE brand into African and European markets through organic search. International SEO results.', canonical: `${BASE}/international-expansion-seo-case-study`, schema: page('/international-expansion-seo-case-study', 'International SEO Expansion Case Study') },
  { path: '/cameroon-brand-digital-transformation', title: 'Cameroon Brand Digital Transformation | Lopty Pascal', description: 'Building digital authority for a Cameroonian brand in a market that is just going online. Digital transformation case study.', canonical: `${BASE}/cameroon-brand-digital-transformation`, schema: page('/cameroon-brand-digital-transformation', 'Cameroon Brand Digital Transformation') },
  { path: '/phenomenal-studios-case-study', title: 'Phenomenal Studios: Building at Agency Scale | Lopty Pascal', description: 'How Phenomenal Studios drove $26M+ in revenue through digital strategy and execution across Africa and the Middle East.', canonical: `${BASE}/phenomenal-studios-case-study`, schema: page('/phenomenal-studios-case-study', 'Phenomenal Studios Case Study') },
  { path: '/ecommerce-traffic-growth-case-study', title: 'E-Commerce Traffic Growth Case Study | Lopty Pascal', description: 'How structured SEO turned a UAE online retailer\'s organic channel from zero to primary acquisition channel.', canonical: `${BASE}/ecommerce-traffic-growth-case-study`, schema: page('/ecommerce-traffic-growth-case-study', 'E-Commerce Traffic Growth Case Study') },

  // ── Authority Pages — Cluster 3: Comparisons (15) ──────────────────────
  { path: '/seo-vs-paid-ads-dubai', title: 'SEO vs Paid Ads in Dubai | Lopty Pascal', description: 'How to decide where to invest your digital marketing budget in the UAE. Honest comparison of SEO and Google Ads.', canonical: `${BASE}/seo-vs-paid-ads-dubai`, schema: page('/seo-vs-paid-ads-dubai', 'SEO vs Paid Ads in Dubai') },
  { path: '/traditional-seo-vs-ai-seo', title: 'Traditional SEO vs AI SEO | Lopty Pascal', description: 'What changes when AI enters search and what stays the same. The hybrid strategy that works in 2026.', canonical: `${BASE}/traditional-seo-vs-ai-seo`, schema: page('/traditional-seo-vs-ai-seo', 'Traditional SEO vs AI SEO') },
  { path: '/in-house-seo-vs-agency-dubai', title: 'In-House SEO vs Agency in Dubai | Lopty Pascal', description: 'The honest trade-offs between building an internal SEO team and hiring an external specialist in the UAE.', canonical: `${BASE}/in-house-seo-vs-agency-dubai`, schema: page('/in-house-seo-vs-agency-dubai', 'In-House SEO vs Agency in Dubai') },
  { path: '/seo-vs-social-media-marketing', title: 'SEO vs Social Media Marketing | Lopty Pascal', description: 'Which channel deserves your digital marketing budget in the UAE? SEO vs social media comparison.', canonical: `${BASE}/seo-vs-social-media-marketing`, schema: page('/seo-vs-social-media-marketing', 'SEO vs Social Media Marketing') },
  { path: '/on-page-vs-off-page-seo', title: 'On-Page vs Off-Page SEO | Lopty Pascal', description: 'Understanding the two pillars of search engine optimisation. How on-page and off-page SEO work together.', canonical: `${BASE}/on-page-vs-off-page-seo`, schema: page('/on-page-vs-off-page-seo', 'On-Page vs Off-Page SEO') },
  { path: '/technical-seo-vs-content-seo', title: 'Technical SEO vs Content SEO | Lopty Pascal', description: 'Which deserves your attention first? How to balance technical foundation and content depth in your SEO strategy.', canonical: `${BASE}/technical-seo-vs-content-seo`, schema: page('/technical-seo-vs-content-seo', 'Technical SEO vs Content SEO') },
  { path: '/seo-agency-vs-freelancer-dubai', title: 'SEO Agency vs Freelancer in Dubai | Lopty Pascal', description: 'What you actually get from a Dubai SEO agency versus an independent specialist. The honest comparison.', canonical: `${BASE}/seo-agency-vs-freelancer-dubai`, schema: page('/seo-agency-vs-freelancer-dubai', 'SEO Agency vs Freelancer in Dubai') },
  { path: '/organic-vs-paid-search', title: 'Organic vs Paid Search | Lopty Pascal', description: 'The strategic case for each search channel and how they work together for UAE businesses.', canonical: `${BASE}/organic-vs-paid-search`, schema: page('/organic-vs-paid-search', 'Organic vs Paid Search') },
  { path: '/local-seo-vs-national-seo', title: 'Local SEO vs National SEO | Lopty Pascal', description: 'Different strategies for different geographic ambitions. How to choose the right approach for UAE businesses.', canonical: `${BASE}/local-seo-vs-national-seo`, schema: page('/local-seo-vs-national-seo', 'Local SEO vs National SEO') },
  { path: '/short-tail-vs-long-tail-keywords', title: 'Short-Tail vs Long-Tail Keywords | Lopty Pascal', description: 'How to choose the right keyword targets for your stage of growth. Keyword strategy for Dubai businesses.', canonical: `${BASE}/short-tail-vs-long-tail-keywords`, schema: page('/short-tail-vs-long-tail-keywords', 'Short-Tail vs Long-Tail Keywords') },
  { path: '/seo-tools-comparison', title: 'SEO Tools Comparison | Lopty Pascal', description: 'Which SEO tools are worth the investment for UAE businesses. Ahrefs, Semrush, and more compared honestly.', canonical: `${BASE}/seo-tools-comparison`, schema: page('/seo-tools-comparison', 'SEO Tools Comparison') },
  { path: '/google-vs-bing-seo-dubai', title: 'Google vs Bing SEO in Dubai | Lopty Pascal', description: 'Is it worth optimising for Bing as well as Google in the UAE market? The honest comparison for 2026.', canonical: `${BASE}/google-vs-bing-seo-dubai`, schema: page('/google-vs-bing-seo-dubai', 'Google vs Bing SEO in Dubai') },
  { path: '/white-hat-vs-black-hat-seo', title: 'White Hat vs Black Hat SEO | Lopty Pascal', description: 'Understanding the difference and why shortcuts always cost more in the end. Sustainable SEO for UAE businesses.', canonical: `${BASE}/white-hat-vs-black-hat-seo`, schema: page('/white-hat-vs-black-hat-seo', 'White Hat vs Black Hat SEO') },
  { path: '/content-marketing-vs-seo', title: 'Content Marketing vs SEO | Lopty Pascal', description: 'Are they the same thing? How content marketing and SEO overlap and where they diverge.', canonical: `${BASE}/content-marketing-vs-seo`, schema: page('/content-marketing-vs-seo', 'Content Marketing vs SEO') },

  // ── Authority Pages — Cluster 4: Geo Pages (12) ────────────────────────
  { path: '/digital-marketing-cameroon', title: 'Digital Marketing in Cameroon | Lopty Pascal', description: 'Building brand visibility and customer acquisition in Central Africa\'s largest digital market.', canonical: `${BASE}/digital-marketing-cameroon`, schema: page('/digital-marketing-cameroon', 'Digital Marketing in Cameroon') },
  { path: '/seo-consultant-yaounde', title: 'SEO Consultant Yaounde | Lopty Pascal', description: 'Search visibility strategy for businesses in Cameroon\'s capital. Local and national SEO for Yaounde.', canonical: `${BASE}/seo-consultant-yaounde`, schema: page('/seo-consultant-yaounde', 'SEO Consultant Yaounde') },
  { path: '/seo-consultant-douala', title: 'SEO Consultant Douala | Lopty Pascal', description: 'Search visibility for businesses in Cameroon\'s commercial capital. SEO for Douala-based businesses.', canonical: `${BASE}/seo-consultant-douala`, schema: page('/seo-consultant-douala', 'SEO Consultant Douala') },
  { path: '/digital-marketing-africa', title: 'Digital Marketing in Africa | Lopty Pascal', description: 'Building brand visibility across the continent\'s most dynamic digital markets. Africa digital marketing strategy.', canonical: `${BASE}/digital-marketing-africa`, schema: page('/digital-marketing-africa', 'Digital Marketing in Africa') },
  { path: '/seo-specialist-west-africa', title: 'SEO Specialist for West Africa | Lopty Pascal', description: 'Building search visibility in the continent\'s most populated digital markets. Nigeria, Ghana, and Senegal SEO.', canonical: `${BASE}/seo-specialist-west-africa`, schema: page('/seo-specialist-west-africa', 'SEO Specialist for West Africa') },
  { path: '/africa-digital-marketing-strategy', title: 'Africa Digital Marketing Strategy | Lopty Pascal', description: 'A strategic framework for building digital authority across African markets that actually works.', canonical: `${BASE}/africa-digital-marketing-strategy`, schema: page('/africa-digital-marketing-strategy', 'Africa Digital Marketing Strategy') },
  { path: '/seo-expert-kenya', title: 'SEO Expert for Kenya | Lopty Pascal', description: 'Building search visibility in East Africa\'s most digitally advanced economy. Nairobi and Kenya SEO strategy.', canonical: `${BASE}/seo-expert-kenya`, schema: page('/seo-expert-kenya', 'SEO Expert for Kenya') },
  { path: '/seo-consultant-south-africa', title: 'SEO Consultant for South Africa | Lopty Pascal', description: 'Building organic search visibility in Africa\'s most competitive digital market. South Africa SEO strategy.', canonical: `${BASE}/seo-consultant-south-africa`, schema: page('/seo-consultant-south-africa', 'SEO Consultant for South Africa') },
  { path: '/cameroon-seo-market', title: 'The Cameroon SEO Market | Lopty Pascal', description: 'Understanding the search landscape for one of Central Africa\'s most dynamic economies. First-mover SEO opportunity.', canonical: `${BASE}/cameroon-seo-market`, schema: page('/cameroon-seo-market', 'The Cameroon SEO Market') },
  { path: '/cameroon-to-dubai-digital-marketing', title: 'Cameroon to Dubai: Digital Marketing Bridge | Lopty Pascal', description: 'How Lopty Pascal built a digital career spanning both continents and what it means for clients in both markets.', canonical: `${BASE}/cameroon-to-dubai-digital-marketing`, schema: page('/cameroon-to-dubai-digital-marketing', 'Cameroon to Dubai Digital Marketing') },
  { path: '/seo-consultant-nigeria', title: 'SEO Consultant for Nigeria | Lopty Pascal', description: 'Building search visibility in Africa\'s largest digital market. Nigeria SEO strategy for 100 million internet users.', canonical: `${BASE}/seo-consultant-nigeria`, schema: page('/seo-consultant-nigeria', 'SEO Consultant for Nigeria') },
  { path: '/seo-consultant-ghana', title: 'SEO Consultant for Ghana | Lopty Pascal', description: 'Building search visibility in West Africa\'s most welcoming business environment. Ghana SEO strategy.', canonical: `${BASE}/seo-consultant-ghana`, schema: page('/seo-consultant-ghana', 'SEO Consultant for Ghana') },

  // ── Authority Pages — Cluster 5: Topic Authority (18) ──────────────────
  { path: '/what-is-technical-seo', title: 'What Is Technical SEO? | Lopty Pascal', description: 'The foundation of search visibility that most businesses get wrong. A plain-language guide to technical SEO.', canonical: `${BASE}/what-is-technical-seo`, schema: page('/what-is-technical-seo', 'What Is Technical SEO?') },
  { path: '/how-google-ranks-websites', title: 'How Google Ranks Websites | Lopty Pascal', description: 'Understanding the signals that determine where your pages appear in search. Google ranking factors explained.', canonical: `${BASE}/how-google-ranks-websites`, schema: page('/how-google-ranks-websites', 'How Google Ranks Websites') },
  { path: '/what-is-domain-authority', title: 'What Is Domain Authority? | Lopty Pascal', description: 'Understanding the metric that predicts your site\'s ranking potential. Domain Authority and Domain Rating explained.', canonical: `${BASE}/what-is-domain-authority`, schema: page('/what-is-domain-authority', 'What Is Domain Authority?') },
  { path: '/what-is-keyword-research', title: 'What Is Keyword Research? | Lopty Pascal', description: 'Finding the exact terms your buyers type into Google. A practical guide to keyword research for UAE businesses.', canonical: `${BASE}/what-is-keyword-research`, schema: page('/what-is-keyword-research', 'What Is Keyword Research?') },
  { path: '/understanding-search-intent', title: 'Understanding Search Intent | Lopty Pascal', description: 'Why the type of query matters more than the keyword itself. Search intent explained for UAE businesses.', canonical: `${BASE}/understanding-search-intent`, schema: page('/understanding-search-intent', 'Understanding Search Intent') },
  { path: '/what-is-e-e-a-t', title: 'What Is E-E-A-T? | Lopty Pascal', description: 'Google\'s framework for evaluating content quality and author credibility. E-E-A-T explained and applied.', canonical: `${BASE}/what-is-e-e-a-t`, schema: page('/what-is-e-e-a-t', 'What Is E-E-A-T?') },
  { path: '/understanding-google-algorithm-updates', title: 'Understanding Google Algorithm Updates | Lopty Pascal', description: 'What major Google updates mean for your rankings and how to build a site that benefits from them.', canonical: `${BASE}/understanding-google-algorithm-updates`, schema: page('/understanding-google-algorithm-updates', 'Understanding Google Algorithm Updates') },
  { path: '/what-is-local-seo', title: 'What Is Local SEO? | Lopty Pascal', description: 'How search engines find and rank local businesses for location-based queries. Local SEO explained simply.', canonical: `${BASE}/what-is-local-seo`, schema: page('/what-is-local-seo', 'What Is Local SEO?') },
  { path: '/how-to-measure-seo-success', title: 'How to Measure SEO Success | Lopty Pascal', description: 'The metrics that actually matter and the ones that are just vanity. SEO measurement for business outcomes.', canonical: `${BASE}/how-to-measure-seo-success`, schema: page('/how-to-measure-seo-success', 'How to Measure SEO Success') },
  { path: '/what-is-content-gap-analysis', title: 'What Is Content Gap Analysis? | Lopty Pascal', description: 'Finding the topics your competitors rank for that you do not. Content data methodology.', canonical: `${BASE}/what-is-content-gap-analysis`, schema: page('/what-is-content-gap-analysis', 'What Is Content Gap Analysis?') },
  { path: '/understanding-seo-roi', title: 'Understanding SEO ROI | Lopty Pascal', description: 'How to calculate the real financial return on your SEO investment. SEO ROI framework for UAE businesses.', canonical: `${BASE}/understanding-seo-roi`, schema: page('/understanding-seo-roi', 'Understanding SEO ROI') },
  { path: '/what-is-programmatic-seo', title: 'What Is Programmatic SEO? | Lopty Pascal', description: 'Creating targeted pages from structured data to capture search queries at scale.', canonical: `${BASE}/what-is-programmatic-seo`, schema: page('/what-is-programmatic-seo', 'What Is Programmatic SEO?') },
  { path: '/how-to-do-competitor-seo-analysis', title: 'How to Do Competitor SEO Analysis | Lopty Pascal', description: 'Learning from your competitors\' organic search strategies to build a better one. Competitive SEO methodology.', canonical: `${BASE}/how-to-do-competitor-seo-analysis`, schema: page('/how-to-do-competitor-seo-analysis', 'How to Do Competitor SEO Analysis') },
  { path: '/how-ai-changes-seo', title: 'How AI Is Changing SEO | Lopty Pascal', description: 'The fundamental shifts in search that every digital marketer needs to understand. AI and SEO in 2026.', canonical: `${BASE}/how-ai-changes-seo`, schema: page('/how-ai-changes-seo', 'How AI Is Changing SEO') },
  { path: '/how-backlinks-work', title: 'How Backlinks Work | Lopty Pascal', description: 'The mechanics of the link signal that remains central to Google rankings. Backlinks explained clearly.', canonical: `${BASE}/how-backlinks-work`, schema: page('/how-backlinks-work', 'How Backlinks Work') },
  { path: '/what-is-crawl-budget', title: 'What Is Crawl Budget? | Lopty Pascal', description: 'How Google allocates its crawling resources and why wasting it costs you rankings. Crawl budget explained.', canonical: `${BASE}/what-is-crawl-budget`, schema: page('/what-is-crawl-budget', 'What Is Crawl Budget?') },

  // ── Authority Pages — Cluster 6: Prezlo / Brand (10) ───────────────────
  { path: '/prezlo-ai-agency-dubai', title: 'Prezlo: The AI Visibility Platform | Lopty Pascal', description: 'Prezlo is a global SaaS platform that helps professionals and brands get recommended by ChatGPT, Claude, Perplexity, Grok, and more. Co-founded by Lopty Pascal.', canonical: `${BASE}/prezlo-ai-agency-dubai`, schema: page('/prezlo-ai-agency-dubai', 'Prezlo: The AI Visibility Platform') },
  { path: '/prezlo-ai-systems', title: 'How Prezlo Works | Lopty Pascal', description: 'Prezlo monitors your AI visibility across ChatGPT, Claude, Perplexity, Grok, Gemini, and 8+ more AI systems daily. Platform features and methodology explained.', canonical: `${BASE}/prezlo-ai-systems`, schema: page('/prezlo-ai-systems', 'How Prezlo Works') },
  { path: '/ai-automation-agency-dubai', title: 'AI Automation Consultant Dubai | Lopty Pascal', description: 'Lopty Pascal designs AI-powered workflows that scale SEO, content production, and monitoring without proportional human effort. Dubai-based AI automation consultant.', canonical: `${BASE}/ai-automation-agency-dubai`, schema: page('/ai-automation-agency-dubai', 'AI Automation Consultant Dubai') },
  { path: '/ai-marketing-systems-dubai', title: 'AI Marketing Systems in Dubai | Lopty Pascal', description: 'AI-powered marketing infrastructure that produces results. Content pipelines, lead nurturing, and analytics.', canonical: `${BASE}/ai-marketing-systems-dubai`, schema: page('/ai-marketing-systems-dubai', 'AI Marketing Systems in Dubai') },
  { path: '/lopty-pascal-speaking', title: 'Lopty Pascal: Speaking and Thought Leadership | Lopty Pascal', description: 'SEO, AI visibility, and digital strategy talks for audiences who build real things. Book Lopty Pascal to speak.', canonical: `${BASE}/lopty-pascal-speaking`, schema: page('/lopty-pascal-speaking', 'Lopty Pascal: Speaking and Thought Leadership') },
  { path: '/gitex-2025-speaker', title: 'GITEX 2025 Speaker | Lopty Pascal', description: 'Launching Prezlo and presenting AI visibility strategy at the world\'s largest tech event. GITEX 2025 recap.', canonical: `${BASE}/gitex-2025-speaker`, schema: page('/gitex-2025-speaker', 'GITEX 2025 Speaker') },
  { path: '/prezlo-vs-traditional-agency', title: 'Prezlo vs Traditional PR for AI Visibility | Lopty Pascal', description: 'Why a dedicated AI visibility platform outperforms traditional PR when the goal is AI citation. How Prezlo and editorial coverage work together.', canonical: `${BASE}/prezlo-vs-traditional-agency`, schema: page('/prezlo-vs-traditional-agency', 'Prezlo vs Traditional PR for AI Visibility') },
  { path: '/prezlo-case-studies', title: 'Prezlo: Who It Serves and What It Delivers | Lopty Pascal', description: 'The professionals and brands building AI visibility through the Prezlo platform. Who benefits most and what results the infrastructure delivers.', canonical: `${BASE}/prezlo-case-studies`, schema: page('/prezlo-case-studies', 'Prezlo: Who It Serves and What It Delivers') },
  { path: '/prezlo-neha-jakhar', title: 'Prezlo Co-Founded with Neha Jakhar | Lopty Pascal', description: 'How Lopty Pascal and Neha Jakhar built a global AI visibility platform. Neha is a business setup and sales navigation specialist; Lopty leads the AI visibility methodology.', canonical: `${BASE}/prezlo-neha-jakhar`, schema: page('/prezlo-neha-jakhar', 'Prezlo Co-Founded with Neha Jakhar') },
  { path: '/prezlo-gulf-expansion-strategy', title: 'Prezlo in the Gulf Market | Lopty Pascal', description: 'How the AI visibility platform serves professionals and brands across UAE, KSA, and the wider Gulf region. Monitor and build AI citation frequency with Prezlo.', canonical: `${BASE}/prezlo-gulf-expansion-strategy`, schema: page('/prezlo-gulf-expansion-strategy', 'Prezlo in the Gulf Market') },

  // ── Authority Pages — Cluster 1 addition ───────────────────────────────
  { path: '/seo-for-hospitality-dubai', title: 'SEO for Hospitality in Dubai | Lopty Pascal', description: 'Driving organic bookings and brand search for Dubai\'s world-class hotels and restaurants. Hospitality SEO strategy.', canonical: `${BASE}/seo-for-hospitality-dubai`, schema: page('/seo-for-hospitality-dubai', 'SEO for Hospitality in Dubai') },

  // ── Authority Pages — Cluster 2 addition ───────────────────────────────
  { path: '/ai-seo-content-pipeline-results', title: 'AI SEO Content Pipeline: Results | Lopty Pascal', description: 'How automated content production at scale delivers rankings without triggering spam filters. Pipeline methodology and outcomes.', canonical: `${BASE}/ai-seo-content-pipeline-results`, schema: page('/ai-seo-content-pipeline-results', 'AI SEO Content Pipeline: Results') },

  // ── Authority Pages — Cluster 3 addition ───────────────────────────────
  { path: '/seo-vs-influencer-marketing', title: 'SEO vs Influencer Marketing | Lopty Pascal', description: 'Which channel builds lasting brand visibility in the UAE market? Honest comparison of organic search and influencer campaigns.', canonical: `${BASE}/seo-vs-influencer-marketing`, schema: page('/seo-vs-influencer-marketing', 'SEO vs Influencer Marketing') },

  // ── Authority Pages — Cluster 5 additions ──────────────────────────────
  { path: '/what-is-entity-seo', title: 'What Is Entity SEO? | Lopty Pascal', description: 'How Google\'s knowledge graph changes the way you build online authority. Entity SEO explained and applied.', canonical: `${BASE}/what-is-entity-seo`, schema: page('/what-is-entity-seo', 'What Is Entity SEO?') },
  { path: '/what-is-topical-authority', title: 'What Is Topical Authority? | Lopty Pascal', description: 'Why covering a subject comprehensively beats targeting individual keywords. Topical authority explained for Dubai businesses.', canonical: `${BASE}/what-is-topical-authority`, schema: page('/what-is-topical-authority', 'What Is Topical Authority?') },
];
