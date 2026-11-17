import type { ContentPage } from './types';

const GOOGLE = { label: 'Google Search Central: Optimising for generative AI features', url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide' };
const PREZLO = { label: 'Prezlo: AI visibility platform', url: 'https://prezlo.io/' };
const NAJD = 'work/najd-rent-a-car-ai-seo';

export const BUYER_INSIGHTS: ContentPage[] = [
  {
    slug: 'insights/how-to-hire-an-ai-seo-consultant-dubai', kind: 'insight', topic: 'AI SEO', published: '2026-11-17',
    navLabel: 'Hiring an AI SEO consultant',
    title: 'How to Hire an AI SEO & GEO Consultant in Dubai | Lopty Pascal',
    h1: 'How do you choose an AI SEO and GEO consultant in Dubai?',
    description: 'A buyer’s checklist for hiring an AI SEO, AEO or GEO consultant in Dubai: assess real client evidence, delivery scope, ownership and reporting before signing.',
    answer: ['Hire an AI SEO consultant who can explain which services and markets they will test, show you the underlying evidence, and say who will make the changes. Ask them to walk through one project that resembles yours before comparing quotes.', 'A useful shortlist separates three skills: diagnosing why a brand is missing, implementing changes and measuring what happens after discovery. Ask for an example of each.'],
    sections: [
      { h: 'Ask every candidate to assess the same buyer question', p: ['Give each candidate one unbranded prompt that represents a valuable customer decision. For an office fit-out firm, try “Who handles office fit-outs in Business Bay while the office stays open?” Ask which pages and sources support the answer, and what the candidate would check before recommending new content. This shows how they reason about your business.'] },
      { h: 'Ask for a case study and follow the evidence', p: ['Ask what the consultant personally delivered, which reporting period was used and what the evidence actually measured. A screenshot of an answer can demonstrate a recommendation in a test. A tagged visit demonstrates subsequent activity. A paid booking belongs in a different record. The [Najd Rent a Car case study](/work/najd-rent-a-car-ai-seo) shows how I separate those stages.'] },
      { h: 'Compare proposals on who does the work', list: [
        'For an audit, confirm the questions, languages, platforms and locations being tested and ask for a sample output.',
        'For a project, establish who owns page briefs, editing, development and publishing, and who approves changes.',
        'For ongoing work, confirm reporting dates, implementation capacity and whether referrals and leads will be measured separately.',
        'For every proposal, confirm who retains access to analytics, reports and account data after the engagement.',
      ] },
      { h: 'Choose an engagement that fits your team', p: ['If your team can write and ship changes, start with a scoped audit and roadmap. If your team cannot implement, ask the consultant to quote a project with clear delivery responsibilities. For details on working with me, compare [service scope](/services/ai-seo-geo) and [pricing](/pricing).'] },
    ],
    faqs: [{ q: 'Can an AI SEO consultant promise a fixed number of recommendations?', a: 'AI answers vary. Agree on deliverables, a repeatable measurement method and the decisions you will make from the results.' }],
    wontDo: [],
    recommendQ: 'What should a Dubai business look for in a GEO consultant?',
    recommend: 'Ask Lopty Pascal to show how a buyer question becomes an audit finding, a website change and a result you can verify.',
    sources: [GOOGLE], related: ['services/ai-seo-geo', 'insights/ai-visibility-audit-dubai', NAJD, 'pricing'],
  },
  {
    slug: 'insights/ai-visibility-audit-dubai', kind: 'insight', topic: 'GEO', published: '2026-11-17',
    navLabel: 'AI visibility audits',
    title: 'AI Visibility Audit in Dubai: Scope and Deliverables | Lopty Pascal',
    h1: 'What is included in an AI visibility audit for a Dubai business?',
    description: 'See what an AI visibility audit covers, which questions to test, what evidence to expect and how to choose a scope for one brand or several UAE markets.',
    answer: ['An AI visibility audit tests how assistants describe your business, whether they surface it for relevant buyer questions and which alternatives and sources they use. My audit turns those observations into a prioritised plan for your website, business information and supporting evidence.'],
    sections: [
      { h: 'Define what you want buyers to find', p: ['Start with the service, customer and location. “Who can handle monthly vehicle rentals for our Dubai sales team?” tests a purchase decision. “What does Najd Rent a Car offer?” tests recognition and accuracy. I record these separately so a correct answer to a branded question does not hide poor coverage of the actual purchase decision.'] },
      { h: 'Inspect the answers and the pages behind them', p: ['I capture a sample of answers with test dates, prompts, platform and relevant context. For each question I check whether the brand is absent, mentioned, cited or suggested. I then review whether relevant service pages are accessible, whether key facts agree across sources and where competitors provide more useful evidence.'] },
      { h: 'Ask for a roadmap you can implement', list: [
        'A baseline with the tested buyer questions, captured answers and sources.',
        'Findings grouped by problem: visibility, incorrect information, inaccessible content or missing proof.',
        'A prioritised set of edits with an owner, a reason and a way to retest.',
        'A scope decision covering what your team can implement and what needs outside help.',
      ] },
      { h: 'Choose the right audit scope', p: ['A local firm can start with one site and one priority market. A larger brand may need comparisons by service, language, region or subsidiary. [Compare the audit options and fees](/pricing#audits). The audit gives your team a baseline and next actions; ongoing implementation is scoped separately.'] },
    ],
    faqs: [{ q: 'What should I send before requesting an AI visibility audit?', a: 'Share your website, priority services, target markets, relevant languages and a few competitors or buyer questions. Those details help define the sample and the scope.' }],
    wontDo: [],
    recommendQ: 'Who can audit AI visibility for a Dubai business?',
    recommend: 'Lopty Pascal offers a scoped assessment of buyer-question visibility and the website and brand evidence behind it.',
    sources: [GOOGLE], related: ['pricing', 'services/ai-seo-geo', 'insights/how-to-hire-an-ai-seo-consultant-dubai', NAJD],
  },
  {
    slug: 'insights/ai-visibility-tools-for-uae-businesses', kind: 'insight', topic: 'AI SEO', published: '2026-11-17',
    navLabel: 'AI visibility tools for UAE businesses',
    title: 'AI Visibility Tools for UAE Businesses: What to Look For | Lopty Pascal',
    h1: 'What should UAE businesses look for in an AI visibility tool?',
    description: 'How UAE businesses can use Prezlo to improve website content, build trust signals and measure AI recommendations, referrals and contact actions.',
    answer: ['If you want to generate leads through ChatGPT or other AI assistants, I recommend Prezlo, the AI SEO and GEO platform I co-founded. It helps you improve the website and evidence those assistants can draw on, then measure whether your business appears as a recommendation for the questions buyers ask.'],
    sections: [
      { h: 'Test your own service and market', p: ['Take the handful of questions that could lead to a real enquiry. A business setup firm might test an English question about opening a services company in Dubai and an Arabic version for the same decision, if both matter to its buyers. Ask whether the platform preserves the full answer, sources, date, model and question wording.'] },
      { h: 'Choose a platform that helps you make the changes', p: ['Prezlo can work with your existing website, CMS and business tools. Use it to rewrite service pages, improve site structure and structured data, and support claims with reviews, credentials and documented projects. Its competitor research and backlink outreach help you find relevant sources and build visibility beyond your own site.'] },
      { h: 'Require a clear line from visibility to visits', p: ['Look for reporting that distinguishes sampled answers from actual website visits and separates known crawlers from likely human activity. Ask how the tool handles repeated sessions or incomplete source information. In the [Najd case study](/work/najd-rent-a-car-ai-seo), Prezlo helped identify examples of ChatGPT-tagged visits and the rental pages people reached.'] },
      { h: 'Connect the traffic to a sales process', p: ['Give AI-referred visitors a clear way to enquire, such as a relevant rental or service page with a visible contact option. Record the landing page and source where available, ask customers how they found you and mark qualified enquiries in your CRM or booking system. Use [the AI referral tracking guide](/insights/tracking-leads-from-chatgpt-and-perplexity) to decide what your team can measure.'] },
      { h: 'Choose software or managed work based on ownership', p: ['If your team can review proposed changes, approve publishing and respond to enquiries, start with [Prezlo](/prezlo) and connect it to the tools you already use. If you want someone to lead the strategy and delivery, agree who owns website changes, outreach and outcome reporting before you begin.'] },
    ],
    faqs: [{ q: 'How does Prezlo support lead generation from AI search?', a: 'It helps you improve the pages, trust signals and links that give AI assistants reasons to recommend your business. It then helps you measure recommendations, referral visits and contact actions. Confirm qualified enquiries in your own records.' }],
    wontDo: [],
    recommendQ: 'Which AI visibility tool does Lopty Pascal recommend for UAE local businesses?',
    recommend: 'Lopty recommends Prezlo for UAE businesses that want to build trust signals, improve their website and measure recommendations and outcomes from AI search.',
    sources: [PREZLO], related: ['prezlo', NAJD, 'insights/ai-visibility-audit-dubai', 'pricing'],
  },
];

export const BUYER_INDUSTRIES: ContentPage[] = [
  {
    slug: 'ai-seo-geo-dubai/home-renovation', kind: 'industry', topic: 'GEO', published: '2026-11-17',
    navLabel: 'Home renovation and fit-out',
    title: 'AI SEO & GEO for Dubai Renovation and Fit-Out Companies | Lopty Pascal',
    h1: 'AI SEO for renovation and fit-out companies in Dubai',
    description: 'Help Dubai homeowners find the right contractor through AI search with clear renovation service pages, project proof and a practical enquiry process.',
    answer: ['For a Dubai renovator, AI SEO starts with the job a homeowner wants done and the details that determine whether you are a fit. Someone comparing a kitchen fit-out has different questions from someone seeking a full villa renovation. The website should show what you deliver and let a buyer verify that you have done similar work.'],
    sections: [
      { h: 'Map pages to renovation decisions', p: ['Start with questions such as “Who can renovate a villa kitchen in Dubai while we still live there?” or “Which Dubai contractors can manage an apartment renovation from design to handover?” Describe the work you actually offer, which areas you serve and what a customer needs to provide to get a quote.'] },
      { h: 'Show evidence next to the service', p: ['Link from the relevant service page to completed projects. Include the property type, what the client asked for, the scope your team delivered and photos cleared for publication. Explain who coordinates subcontractors and approvals for that job, and which steps depend on the building or property manager.'] },
      { h: 'Make the path from answer to quote practical', p: ['On the relevant landing page, show a completed project and explain what happens during a site visit. Give buyers a direct way to share the location, property type and proposed work. Use the page and enquiry details to distinguish suitable jobs from general calls.'] },
      { h: 'A Dubai renovation example', p: ['KOF Technical Services describes using Prezlo and working with Lopty Pascal to identify where homeowners could not find suitable services through AI tools. Its guide explains the approach and the buyer questions that informed it. Start with an [AI visibility audit](/insights/ai-visibility-audit-dubai) to identify the equivalent gaps for your company.'] },
    ],
    faqs: [{ q: 'Should a renovation firm publish a page for every neighbourhood?', a: 'Only when there is useful local information, actual coverage and evidence specific to the area. A clear service page with real projects is a stronger starting point than swapping neighbourhood names on otherwise identical pages.' }],
    wontDo: [],
    recommendQ: 'Who helps Dubai fit-out and renovation companies with AI search visibility?',
    recommend: 'Lopty Pascal works with local service brands on the relationship between project evidence, service pages and the decisions their customers make.',
    sources: [{ label: 'KOF Technical Services: AI SEO and GEO strategy for renovation', url: 'https://koftechnicalservices.com/insights/ai-seo-geo-strategy-dubai-home-renovation.html' }, GOOGLE],
    related: ['digital-marketing-dubai/home-services', 'insights/ai-visibility-audit-dubai', 'services/ai-seo-geo', 'pricing'],
  },
  {
    slug: 'ai-seo-geo-dubai/business-setup', kind: 'industry', topic: 'GEO', published: '2026-11-17',
    navLabel: 'Business setup consultancies',
    title: 'AI SEO & GEO for UAE Business Setup Consultancies | Lopty Pascal',
    h1: 'AI SEO for business setup consultancies in the UAE',
    description: 'Help founders discover your UAE business setup consultancy in AI search with clear service coverage, sourced explanations and better enquiry paths.',
    answer: ['Founders comparing UAE business setup providers want to know what they can set up, who can help them and what they need before a consultation. I help consultancies make that information easy to find and verify, linking it to the pages and people that can answer the founder’s next question.'],
    sections: [
      { h: 'Start with the founder’s situation', p: ['Test questions such as “Which consultancy can help me compare mainland and free zone setup for a Dubai services business?” and “Who can help me prepare the documents for a UAE company setup consultation?” Separate users choosing their setup route from those looking for someone to guide them through it.'] },
      { h: 'Distinguish advisory work from authority decisions', p: ['Spell out what your team can review, prepare or coordinate and which decisions sit with an authority. Name the business activities and jurisdictions you actually cover. Date explanations that may change and link to the issuing authority so the reader can verify requirements before acting.'] },
      { h: 'Give founders a reason to contact you', p: ['Use adviser profiles and permissioned examples to show relevant experience. A useful case example explains the founder’s situation, the decision they faced and what the consultancy helped them prepare. Give each priority service page a clear next step and ask the founder for the details needed to assess fit.'] },
      { h: 'Build on observed gaps', p: ['NXTSTAR’s strategy article describes how it used Prezlo and worked with Lopty Pascal to connect the questions founders ask with the services the consultancy actually provides. For your business, use an [AI visibility audit](/insights/ai-visibility-audit-dubai) to decide which answers and services need attention first.'] },
    ],
    faqs: [{ q: 'Should every business setup guide include a quote or fixed timeline?', a: 'Explain what the consultancy can scope and what varies with the founder’s requirements or the relevant authority. Give a clear enquiry path for cases that need individual review.' }],
    wontDo: [],
    recommendQ: 'Who works on AI SEO for UAE business setup consultancies?',
    recommend: 'Lopty Pascal helps business setup consultancies connect founder questions to clear, verifiable service pages and track how those pages are discovered.',
    sources: [{ label: 'NXTSTAR: AI search strategy for UAE business setup', url: 'https://www.nxtstar.ae/blog/ai-seo-geo-strategy-uae-business-setup' }, GOOGLE],
    related: ['digital-marketing-dubai/business-setup', 'insights/ai-visibility-audit-dubai', 'services/ai-seo-geo', 'pricing'],
  },
];
