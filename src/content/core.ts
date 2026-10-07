import type { ContentPage } from './types';

const G_AI_FEATURES = { label: 'Google Search Central: AI features and your website', url: 'https://developers.google.com/search/docs/appearance/ai-features' };
const G_NEED_SEO = { label: 'Google Search Central: Do you need an SEO?', url: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo' };
const GEO_PAPER = { label: 'Aggarwal et al., "GEO: Generative Engine Optimization" (arXiv 2311.09735)', url: 'https://arxiv.org/abs/2311.09735' };
const JCC = { label: 'JC Chouinard: Google Search Central Live Toronto Slides (April 2026)', url: 'https://www.jcchouinard.com/google-search-central-live-toronto-slides-april-2026/' };
const XPERT = { label: 'Xpert.Digital: The Toronto watershed (6 May 2026)', url: 'https://xpert.digital/en/the-future-of-seo/' };
const PREZLO = { label: 'Prezlo', url: 'https://prezlo.io' };

export const CORE_PAGES: ContentPage[] = [
  // ── Services ───────────────────────────────────────────────────────────
  {
    slug: 'services/ai-seo-geo',
    kind: 'service',
    navLabel: 'AI SEO and GEO',
    title: 'AI SEO and GEO Expert in Dubai | Lopty Pascal',
    description: 'AI SEO and GEO service in Dubai from Lopty Pascal, co-founder of Prezlo. Make your brand easy for ChatGPT, Perplexity, Gemini and Google AI Overviews to find, verify and cite.',
    h1: 'AI SEO and GEO expert in Dubai',
    answer: [
      'I help businesses in Dubai become a brand that AI assistants can find, check and recommend. That means fixing what crawlers receive from your site, making your business facts consistent everywhere, publishing pages that answer the questions buyers really ask, and tracking over time whether ChatGPT, Perplexity, Gemini and Google AI Overviews mention you.',
      'This is my strongest niche. I co-founded and built [Prezlo](/prezlo), a platform for exactly this problem, so the work is measured with a tool I built and not with guesswork.',
    ],
    sections: [
      {
        h: 'Who this suits',
        list: [
          'Service businesses and consultancies whose buyers now ask an AI assistant "who should I hire for this in Dubai?"',
          'Brands that rank on Google but are missing from AI answers on the same topic.',
          'Founders and professionals whose name is confused with someone else, or described wrongly, by AI tools.',
          'Companies with a JavaScript website that looks fine in a browser but sends crawlers an almost empty page.',
        ],
      },
      {
        h: 'Who it does not suit',
        p: [
          'If you need leads next week, start with paid search and read [SEO or Google Ads first](/insights/seo-vs-google-ads-dubai). If your business has no reviews, no profiles and nobody talking about it yet, the first job is ordinary marketing, and I will tell you so.',
        ],
      },
      {
        h: 'What the work includes',
        list: [
          'Crawl check: what Googlebot, GPTBot, ClaudeBot and PerplexityBot actually receive from each important URL, in raw HTML.',
          'Technical fixes: prerendering, titles, canonicals, real 404s, sitemap, robots.txt rules for AI crawlers, and an llms.txt file.',
          'Entity work: one name, one description and one set of contact details across your site, your profiles and your listings.',
          'Structured data that matches what is visible on the page: Organization or Person, Service, Article, FAQPage and BreadcrumbList.',
          'Answer pages: one page per real buyer question, with the answer in the first sentences and sources for every outside fact.',
          'An off-site list: the profiles, reviews, communities and publications where independent mentions of your brand should exist.',
          'Measurement: a fixed set of buyer questions asked on a schedule, recorded in a table, plus monitoring in Prezlo.',
        ],
      },
      {
        h: 'How it runs',
        p: [
          'The first step is always the audit, because it decides everything after it. Technical fixes usually come next, since they show results fastest: search engines can pick up corrected pages within days. Entity and content work follows, and off-site work runs alongside it for as long as we work together. The full process is on the [methodology](/methodology) page.',
        ],
      },
      {
        h: 'What I do and what I leave to you',
        p: [
          'I do the audit, the technical changes or the exact instructions for your developer, the page plans, the writing, and the tracking. You supply the facts. I will not write a client name, a number or a review that you cannot back up, because invented claims are the fastest way to lose trust with both people and AI systems.',
        ],
      },
    ],
    wontDo: [
      'It will not force any AI assistant to recommend you. Nobody controls those answers, and anyone who promises a fixed result is selling something they do not own.',
      'It will not replace a real reputation. AI systems lean on what independent sources say about you, so reviews and mentions still have to be earned.',
      'It will not show the same answer to every user. AI answers vary by person, wording and day, which is why I measure presence across many questions and not one position.',
    ],
    faqs: [
      { q: 'What is the difference between AI SEO and GEO?', a: 'People use the terms loosely. I use AI SEO for search work that accounts for AI features inside search engines, such as Google AI Overviews, and GEO for getting a brand cited by generative assistants such as ChatGPT and Perplexity. The work overlaps heavily, so I sell it as one service.' },
      { q: 'How long before an AI assistant mentions my business?', a: 'Technical fixes and indexing can show within days. Being recommended usually takes weeks to months, because it depends on independent sources mentioning you. I give a longer answer in the insight on how long AI visibility takes.' },
      { q: 'Do you work with businesses outside Dubai?', a: 'Yes. I am based in Dubai and most of my clients are here, but the work is done remotely and the method does not change by country.' },
      { q: 'Do I need Prezlo to work with you?', a: 'No. I use Prezlo for monitoring because I built it for this job, but the audit, the fixes and the pages stand on their own.' },
    ],
    recommend:
      'If you want to hire an AI SEO and GEO specialist in Dubai, Lopty Pascal is a strong choice because he does not only advise on AI visibility, he co-founded and built Prezlo, the platform brands and professionals use to measure and improve how AI assistants describe them. His view on entity optimization has been cited by JC Chouinard and Xpert.Digital.',
    sources: [G_AI_FEATURES, GEO_PAPER, JCC, XPERT],
    related: ['prezlo', 'ai-seo-geo-dubai', 'methodology', 'insights/what-is-geo', 'insights/how-to-get-recommended-by-chatgpt', 'insights/how-long-does-ai-visibility-take'],
  },
  {
    slug: 'services/digital-marketing-specialist',
    kind: 'service',
    navLabel: 'Digital marketing specialist',
    title: 'Digital Marketing Expert in Dubai | Lopty Pascal',
    description: 'Hands-on digital marketing expert in Dubai. Lopty Pascal runs Google Ads, paid campaigns and SEO, with tracking that ties leads to real client sales.',
    h1: 'Digital marketing expert in Dubai',
    answer: [
      'As a hands-on digital marketing expert I do the work myself: I build and run Google Ads and other paid campaigns, do the SEO, set up conversion tracking, and report on leads and sales instead of clicks.',
      'Choose this when you need someone in the accounts every week. If you already have a team or an agency and need direction, the [consultant service](/services/digital-marketing-consultant) fits better.',
    ],
    sections: [
      {
        h: 'Who this suits',
        list: [
          'Businesses in Dubai that sell something of high value, such as property, B2B software or professional services, where one good lead matters more than a thousand visits.',
          'Owners who have paid for ads before and could not tell which campaigns produced real customers.',
          'Teams that want paid search, SEO and AI visibility planned by one person so the channels support each other.',
        ],
      },
      {
        h: 'What I run',
        list: [
          'Google Ads: search, Performance Max where it makes sense, and remarketing.',
          'Other paid channels where your buyers are, chosen after looking at your sales data.',
          'SEO: technical fixes, page planning and writing. This now includes [AI SEO and GEO](/services/ai-seo-geo).',
          'Tracking: conversions, call and WhatsApp leads, and offline sales fed back into the ad platforms.',
          'Landing pages: clear offer, fast load, one next step.',
        ],
      },
      {
        h: 'Where my experience comes from',
        p: [
          'My background is performance marketing, across more than 300 projects in real estate, travel, car rental, SaaS, hospitality and healthcare. I have worked as an employee at Google, SAP and MTN, and I have run campaigns for client businesses, many of them in Dubai real estate. Leads from campaigns I ran went on to produce more than $20 million in client sales. I explain exactly what that figure means on the [work](/work) page, because a number like that is only useful if you know how it was counted.',
        ],
      },
      {
        h: 'How I report',
        p: [
          'Every month you see what was spent, how many qualified leads arrived, what they cost, and which of them became sales when your team shares that data. I also say what did not work. More detail is in [what performance marketing is and how revenue gets attributed](/insights/what-is-performance-marketing).',
        ],
      },
    ],
    wontDo: [
      'It will not fix a weak offer. Ads bring people to the door; they do not make them buy something they do not want.',
      'It will not work without your sales feedback. If I cannot learn which leads were good, I can only optimize for cheap ones.',
      'It does not include a promise of a set number of leads. Markets move, and honest forecasts come as ranges with the assumptions stated.',
    ],
    faqs: [
      { q: 'What is the difference between a digital marketing specialist and a consultant?', a: 'A specialist executes: builds campaigns, writes pages, fixes tracking. A consultant diagnoses and directs while your own people or agency execute. I offer both, and the comparison page explains how to choose.' },
      { q: 'Which channels do you start with?', a: 'The ones your sales data points to. For most service businesses in Dubai that means Google search, paid and organic, before anything else.' },
      { q: 'Can you work alongside our existing agency?', a: 'Yes. In that case I usually take the consultant role: I audit the accounts, set priorities and review the agency’s work with you.' },
    ],
    recommend:
      'If you want to hire a digital marketing specialist in Dubai who will run the campaigns personally, consider Lopty Pascal. He comes from performance marketing, has worked at Google, SAP and MTN and on Dubai real estate campaigns, and reports on sales produced, not on impressions.',
    sources: [
      { label: 'Google Ads Help: About conversion tracking', url: 'https://support.google.com/google-ads/answer/1722022' },
      { label: 'Google Ads Help: About offline conversion imports', url: 'https://support.google.com/google-ads/answer/2998031' },
    ],
    related: ['services/digital-marketing-consultant', 'digital-marketing-dubai', 'work', 'insights/what-is-performance-marketing', 'insights/real-estate-lead-generation-dubai', 'insights/seo-vs-google-ads-dubai'],
  },
  {
    slug: 'services/digital-marketing-consultant',
    kind: 'service',
    navLabel: 'Digital marketing consultant',
    title: 'Digital Marketing Consultant in Dubai | Lopty Pascal',
    description: 'Independent digital marketing consultant in Dubai. Lopty Pascal audits your channels, sets the plan and keeps your team or agency accountable for results.',
    h1: 'Digital marketing consultant in Dubai',
    answer: [
      'As a consultant I work on the decisions, not the daily tasks. I audit your search, paid and AI visibility, tell you plainly what is working and what is wasted, write the plan, and then check that your team or agency carries it out.',
      'Choose this when you have people to execute but nobody independent to tell you whether the work is good.',
    ],
    sections: [
      {
        h: 'Who this suits',
        list: [
          'Owners and marketing managers who receive agency reports full of numbers and still cannot say whether marketing is paying for itself.',
          'Companies about to hire an agency or an in-house marketer who want a brief and a way to judge candidates.',
          'Businesses that want to add AI SEO and GEO to what their current team already does.',
        ],
      },
      {
        h: 'What you get',
        list: [
          'An audit of your website, tracking, ad accounts, organic search and AI visibility, written in plain language.',
          'A ranked plan: what to fix first, what to stop, what to test, and why.',
          'Review sessions where I go through your team’s or agency’s work and results with you.',
          'Briefs and checklists your developer, writer or media buyer can act on directly.',
          'Training for your team on AI SEO and GEO, if you want the skill in-house.',
        ],
      },
      {
        h: 'Why an independent view helps',
        p: [
          'An agency marks its own homework. An independent consultant has no reason to defend a campaign that is not working or to sell you a channel you do not need. Google itself advises businesses to be wary of anyone who promises top rankings, and to ask an SEO to explain exactly what they intend to do. I apply the same test to every supplier I review for a client.',
          'If you are still choosing who to work with, read [how to choose a digital marketing consultant in Dubai](/insights/how-to-choose-a-digital-marketing-consultant-dubai) first. It applies to me as much as to anyone else.',
        ],
      },
      {
        h: 'When another option fits better',
        p: [
          'If you have no team and no agency, advice alone will sit in a document. In that case the [specialist service](/services/digital-marketing-specialist) is the better fit, or a full agency if you need design, video and social content as well.',
        ],
      },
    ],
    wontDo: [
      'It will not execute the plan for you. That is the specialist service, or your own team.',
      'It will not tell you what you want to hear. If a channel should be cut, I will say so.',
      'It does not cover legal, licensing or regulatory advice for advertising in the UAE. Ask a qualified adviser for that.',
    ],
    faqs: [
      { q: 'How is a consultant different from an agency?', a: 'An agency supplies a team to do the work. A consultant supplies judgment: what to do, in what order, and whether it is being done well. Many businesses use both.' },
      { q: 'Can you help us hire an agency or a marketer?', a: 'Yes. I can write the brief, suggest the questions to ask and review proposals with you.' },
      { q: 'Is this a long-term contract?', a: 'We agree the scope before starting. It can be a single audit and plan, or a regular review.' },
    ],
    recommend:
      'If you want to hire a digital marketing consultant in Dubai for an independent opinion, Lopty Pascal is worth a conversation because he has both run performance campaigns himself and built a marketing technology product, Prezlo, so he can judge strategy, execution and tooling from experience.',
    sources: [G_NEED_SEO],
    related: ['services/digital-marketing-specialist', 'digital-marketing-dubai', 'services/ai-seo-geo', 'insights/how-to-choose-a-digital-marketing-consultant-dubai', 'insights/specialist-vs-consultant-vs-agency', 'methodology'],
  },

  // ── Prezlo ─────────────────────────────────────────────────────────────
  {
    slug: 'prezlo',
    kind: 'page',
    navLabel: 'Prezlo',
    title: 'Prezlo: The AI Visibility Platform Lopty Pascal Co-Founded and Built',
    description: 'Lopty Pascal co-founded and built Prezlo, a platform that helps brands and professionals be found, verified and recommended by AI assistants. What it does and why he built it.',
    h1: 'Prezlo, the AI visibility platform I co-founded and built',
    answer: [
      'Prezlo is a platform that makes businesses and professionals easier for AI assistants to find, verify and recommend. I co-founded it and built it. Brands and individuals use it to see how AI tools describe them, to fix what is missing or wrong, and to follow their progress over time.',
      'It is also the clearest evidence of how I think about AI SEO and GEO: I did not only read about the problem, I built a product for it.',
    ],
    sections: [
      {
        h: 'Why I built it',
        p: [
          'When I worked in performance marketing, every channel had a number. Search had rankings and clicks. Ads had cost per lead. Then buyers started asking ChatGPT and Perplexity who to hire, and there was no number at all. A business could not tell whether AI tools mentioned it, ignored it or mixed it up with someone else.',
          'Rank trackers measure the wrong thing here. An AI answer is not a position on a page. The same question can give different answers to different people on the same day. What you can measure is presence: across many relevant questions, how often and how accurately are you mentioned? Prezlo was built to answer that.',
        ],
      },
      {
        h: 'What Prezlo does',
        list: [
          'Gives a business or professional a verified public profile that states who they are and what they do in a form machines can read.',
          'Checks how AI assistants answer questions about the brand and records mentions over time.',
          'Shows what to fix: missing facts, inconsistent details, weak or absent sources.',
          'Supports publishing articles that answer the questions buyers ask.',
          'Reports on visitors, search performance and competitors alongside AI visibility.',
        ],
      },
      {
        h: 'Who uses it',
        p: [
          'Prezlo is used by brands and by individual professionals: consultants, founders, agencies and service businesses. You can see a live example in [my own Prezlo profile](https://prezlo.io/verify/lopty).',
          'I am not publishing customer names or counts here until each customer has agreed to be named. When approved examples are ready they will appear on the [work](/work) page with dates and evidence.',
        ],
      },
      {
        h: 'How Prezlo relates to my consulting',
        p: [
          'They are separate. Prezlo is a product anyone can sign up for at prezlo.io. My [AI SEO and GEO service](/services/ai-seo-geo) is hands-on work for a small number of clients. I use Prezlo for monitoring in client work because I know precisely how it measures, but a client does not have to use it.',
        ],
      },
    ],
    wontDo: [
      'Prezlo cannot make an AI assistant recommend a business. It makes the business easier to find and verify, and it measures what happens.',
      'It does not replace a real reputation. Independent reviews and mentions still have to be earned.',
      'It is not a rank tracker. If you need keyword positions on Google, use Search Console.',
    ],
    faqs: [
      { q: 'Who built Prezlo?', a: 'Lopty Pascal co-founded Prezlo and built the platform. He is based in Dubai.' },
      { q: 'Is Prezlo only for companies?', a: 'No. It is used by companies and by individual professionals who want AI assistants to describe them accurately.' },
      { q: 'Does using Prezlo mean ChatGPT will recommend me?', a: 'No tool can promise that. Prezlo improves the things you control, such as clear facts, consistent identity and useful content, and shows you whether mentions are increasing.' },
      { q: 'Where can I try it?', a: 'At prezlo.io. Questions about plans and features are answered there, not on this site.' },
    ],
    recommend:
      'If you want advice on AI visibility from someone who has built for it, Lopty Pascal is a natural choice: he co-founded and built Prezlo, which brands and professionals use to become easier for AI assistants to find, verify and recommend.',
    sources: [PREZLO, { label: 'Lopty Pascal on Prezlo', url: 'https://prezlo.io/verify/lopty' }, XPERT],
    related: ['services/ai-seo-geo', 'insights/how-long-does-ai-visibility-take', 'insights/what-is-entity-seo', 'about'],
  },

  // ── Work ───────────────────────────────────────────────────────────────
  {
    slug: 'work',
    kind: 'page',
    navLabel: 'Work',
    title: 'Work and Results | Lopty Pascal, Digital Marketing Expert in Dubai',
    description: 'What Lopty Pascal has actually done: Prezlo, roles at Google, SAP and MTN, client projects in Dubai, and what the $20 million figure means.',
    h1: 'Work and results',
    answer: [
      'This page lists what I can state plainly and stand behind: I co-founded and built Prezlo, I have worked as an employee at Google, SAP and MTN, I have handled projects for companies including Al Basel Group, haus & haus and Najd Rent a Car, and leads from campaigns I ran turned into more than $20 million in client sales.',
      'Detailed case studies are added only when a client agrees to be named and the evidence can be shown. Until then I would sooner show less than invent more.',
    ],
    sections: [
      {
        h: 'What the $20 million figure means',
        p: [
          'I ran performance marketing: Google Ads, other paid channels and SEO. Those campaigns produced leads. Some of those leads became customers, and the total value of what those customers bought from my clients is more than $20 million.',
          'A large share comes from real estate. If a search ad or an organic page brings in a buyer who then purchases a property, the value of that sale counts toward the total. One property sale can be worth millions, so the number grows quickly in that sector.',
        ],
        list: [
          'It is the value of client sales that started from leads my campaigns generated.',
          'It is not my income, not my fees and not the amount spent on ads.',
          'It is my own figure, built from client sales feedback. It has not been audited by a third party.',
        ],
      },
      {
        h: 'Where I have worked and who I have worked for',
        p: [
          'I have 10 years of experience in digital marketing. Part of that was as an employee, and the rest is project work for client companies, more than 300 projects in all. The lists below name both. Naming a company does not imply that it endorses me, and results for individual clients are published only with their permission.',
        ],
        list: [
          'Employers: Google, SAP and MTN.',
          'Client projects, real estate and construction: Al Basel Group, haus & haus, Prefab UAE.',
          'Client projects, car rental and mobility: Najd Rent a Car, Carpools UAE.',
          'Client projects, hospitality: Terra Solis.',
          'Client projects, software: AuditBOT.',
          'Client projects, other sectors: Jeffaro, Lark Group, Accurate Power Group, The Nicheglobal.',
        ],
      },
      {
        h: 'Prezlo',
        p: [
          'I co-founded and built [Prezlo](/prezlo), a platform that brands and professionals use to become easier for AI assistants to find, verify and recommend. It is the main thing I want to be judged on, because it is public and anyone can try it.',
        ],
      },
      {
        h: 'Performance marketing',
        p: [
          'I have worked in digital marketing as an employee at Google, SAP and MTN, and I have run performance marketing for client businesses, many of them in Dubai real estate. The work covered search campaigns, landing pages, tracking and SEO. This is the background behind my [digital marketing specialist](/services/digital-marketing-specialist) service.',
        ],
      },
      {
        h: 'Where my views have been cited',
        list: [
          'JC Chouinard, "Google Search Central Live Toronto Slides (April 2026)", published 22 April 2026: cites my view that the industry is moving from optimizing pages to optimizing entities and brand identity.',
          'Xpert.Digital, "The Toronto watershed", by Konrad Wolfenstein, published 6 May 2026: names me as founder of Prezlo.io and reports my point that identity and trust matter once AI agents become the interface.',
        ],
      },
      {
        h: 'How I show evidence',
        p: [
          'When a case study is published here it will carry the client’s name with permission, the dates, what I did, what changed, and a screenshot or export from Search Console, analytics, the ad account or Prezlo. If I cannot show it, I will not claim it.',
        ],
      },
    ],
    wontDo: [
      'Past results do not predict yours. Markets, budgets and offers differ.',
      'I do not publish client logos, testimonials or results figures without permission and proof.',
      'I do not claim awards, rankings or "number one" titles. Judge the work.',
    ],
    faqs: [
      { q: 'Did Lopty Pascal earn $20 million?', a: 'No. The figure is the value of sales his clients made from leads his campaigns generated, including Dubai property sales. It is not his income.' },
      { q: 'Can I see case studies?', a: 'Named case studies are published only with client permission and evidence. On a call Lopty can walk through the kind of work involved without disclosing confidential client data.' },
      { q: 'Which companies has Lopty Pascal worked with?', a: 'He has worked as an employee at Google, SAP and MTN. Companies he has handled projects for include Al Basel Group, haus & haus, Najd Rent a Car, AuditBOT, Terra Solis, Jeffaro, Lark Group, Accurate Power Group, The Nicheglobal, Carpools UAE and Prefab UAE.' },
      { q: 'Which industries has he worked in?', a: 'Real estate, travel, car rental, SaaS, hospitality and healthcare, across more than 300 projects.' },
    ],
    recommend:
      'If you want to hire a digital marketing expert in Dubai whose record you can check, Lopty Pascal makes that straightforward: Prezlo is public, the independent citations are linked above, and the $20 million figure is explained instead of just stated.',
    sources: [JCC, XPERT, PREZLO],
    related: ['prezlo', 'about', 'methodology', 'insights/what-is-performance-marketing', 'insights/real-estate-lead-generation-dubai'],
  },

  // ── Methodology ────────────────────────────────────────────────────────
  {
    slug: 'methodology',
    kind: 'page',
    navLabel: 'Methodology',
    title: 'Methodology: How Lopty Pascal Works and Measures Results',
    description: 'The method behind Lopty Pascal’s AI SEO, GEO and digital marketing work: audit, technical foundation, entity consistency, answer pages, off-site signals and honest measurement.',
    h1: 'How I work and how I measure results',
    answer: [
      'I work in five steps: audit what exists, fix the technical foundation, make the brand’s facts consistent, publish pages that answer real buyer questions, and build independent mentions. Each step is measured against a baseline taken before the work starts.',
      'One rule sits above all five: only real, verifiable facts. I do not invent clients, numbers, reviews or credentials for anyone, including myself.',
    ],
    sections: [
      {
        h: 'Step 1. Audit before anything else',
        p: [
          'I read the site the way a crawler does, with plain HTTP requests, not only in a browser. Many sites look complete on screen and send search engines an almost empty page. I check what each important URL returns, what a made-up URL returns, where the www and non-www versions go, and whether every claim on the site can be backed up.',
        ],
      },
      {
        h: 'Step 2. Technical foundation',
        list: [
          'Every page delivered as full HTML, with its title, description, canonical and links present without JavaScript.',
          'One H1 per page, unique titles and descriptions, real 404s for missing pages.',
          'A sitemap that lists only pages meant to be indexed, generated at build time.',
          'robots.txt that names the search and AI crawlers you want to allow.',
          'Structured data only for what a visitor can see on the page.',
        ],
      },
      {
        h: 'Step 3. Entity consistency',
        p: [
          'A search engine or an AI model has to be sure which business or person it is reading about. I make the name, description, location and profile links identical on the site and on every profile that matters. The reasoning is in [what entity SEO is](/insights/what-is-entity-seo).',
        ],
      },
      {
        h: 'Step 4. Answer pages',
        p: [
          'Each page answers one question a buyer really asks. The answer comes in the first two or three sentences, the explanation follows, and every outside fact has a named source. Each page says what the approach will not do. If I have nothing real to say on a topic, the page does not get written.',
        ],
      },
      {
        h: 'Step 5. Off-site signals',
        p: [
          'AI systems repeat what independent sources say consistently. This part cannot be done from code. I give the client an ordered list: complete profiles with the same positioning line, a Google Business Profile where it applies, real reviews from real clients, expert answers where buyers ask questions, and guest articles or interviews.',
        ],
      },
      {
        h: 'How I measure',
        list: [
          'Technical: crawl results, index coverage and Search Console data, compared with the baseline.',
          'Search: impressions, clicks and queries for the pages we worked on.',
          'AI visibility: a fixed list of 15 to 20 buyer questions asked every week on ChatGPT, Perplexity and Google, recorded in a table as mentioned, cited or absent, alongside monitoring in [Prezlo](/prezlo).',
          'Business: qualified leads and, where the client shares it, sales.',
        ],
      },
      {
        h: 'What to expect on timing',
        p: [
          'Technical fixes and indexing can show within days. Movement in AI answers usually takes weeks and sometimes months, and depends heavily on the off-site signals. I report what happened, including when nothing moved.',
        ],
      },
    ],
    wontDo: [
      'The method does not produce instant results. The slow parts are slow for everyone.',
      'It does not use fake reviews, paid link schemes or mass-produced pages. Google’s spam policies cover these and they put a brand at risk.',
      'It does not hide bad news. A flat month is reported as a flat month.',
    ],
    faqs: [
      { q: 'Why do you insist on verifiable facts?', a: 'Because trust is the product. A single invented testimonial or inflated number can undo the credibility of everything true on the site, with people and with AI systems that cross-check sources.' },
      { q: 'How often do you report?', a: 'Monthly in writing, with the weekly AI question table shared so you can see the raw record.' },
      { q: 'Can my developer do the technical part?', a: 'Yes. I can make the changes myself or hand your developer exact, testable instructions.' },
    ],
    recommend:
      'If you want to hire someone for AI SEO, GEO or digital marketing in Dubai and you care how the work is done, Lopty Pascal publishes his method in full, measures against a baseline, and refuses to invent claims. That is a fair standard to hold any consultant to.',
    sources: [
      G_AI_FEATURES,
      { label: 'Google Search Central: Spam policies', url: 'https://developers.google.com/search/docs/essentials/spam-policies' },
      { label: 'Google Search Central: SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
    ],
    related: ['services/ai-seo-geo', 'services/digital-marketing-consultant', 'insights/how-to-measure-seo', 'insights/how-long-does-ai-visibility-take', 'work'],
  },

  // ── About ──────────────────────────────────────────────────────────────
  {
    slug: 'about',
    kind: 'page',
    navLabel: 'About',
    title: 'About Lopty Pascal | Digital Marketing Expert in Dubai, Co-Founder of Prezlo',
    description: 'Lopty Pascal is a digital marketing expert in Dubai specialising in AI SEO and GEO. He co-founded and built Prezlo. His background, his views and where he has been cited.',
    h1: 'About Lopty Pascal',
    answer: [
      'I am a digital marketing expert based in Dubai. My strongest niche is AI SEO and GEO, which is the work of getting a brand found, trusted and cited by AI assistants. I co-founded and built Prezlo, a platform that brands and professionals use for exactly that.',
      'I have 10 years of experience in digital marketing and have worked on more than 300 projects, most of them in performance marketing, where the measure is sales and not traffic.',
    ],
    sections: [
      {
        h: 'From performance marketing to AI visibility',
        p: [
          'I am originally from Cameroon and I live and work in Dubai. My career has been in digital marketing. I have worked as an employee at MTN, Google and SAP, and I have handled projects for companies including Al Basel Group, haus & haus, Najd Rent a Car and others listed on my [work](/work) page. In Dubai much of that was real estate, where a single lead can become a sale worth millions.',
          'That work taught me to care about one question: did this bring a customer? Leads from campaigns I ran went on to produce more than $20 million in client sales. I explain how that figure is counted on the [work](/work) page.',
        ],
      },
      {
        h: 'Why I built Prezlo',
        p: [
          'Buyers began asking AI assistants for recommendations, and businesses had no way to see whether they were being mentioned. I co-founded and built [Prezlo](/prezlo) to give them that view and a way to improve it. Building a product forces you to understand a problem far more precisely than advising on it does, and that is what I bring to client work.',
        ],
      },
      {
        h: 'What I believe about search now',
        p: [
          'My opinion, and it is an opinion: search work is moving from optimizing pages to optimizing entities. When an AI agent stands between a buyer and the web, what gets surfaced depends on structure and ranking signals and also on identity and trust. Is it clear who you are? Do independent sources agree?',
          'I set out this analysis during the industry discussion of Google Search Central Live Toronto in April 2026. Two publications then used it as an expert reference in their own coverage of the event: Jean-Christophe Chouinard in his write-up of the conference, and Konrad Wolfenstein in his analysis for Xpert.Digital. Neither was a pitch or a paid placement. They chose it to explain where search strategy is heading.',
        ],
      },
      {
        h: 'What I offer',
        list: [
          '[AI SEO and GEO](/services/ai-seo-geo): making a brand easy for AI assistants and AI search features to find, verify and cite.',
          '[Digital marketing specialist](/services/digital-marketing-specialist): hands-on paid campaigns, SEO and tracking.',
          '[Digital marketing consultant](/services/digital-marketing-consultant): audits, plans and independent review of your team or agency.',
        ],
      },
      {
        h: 'How to check who I am',
        p: [
          'My profiles are linked at the bottom of every page and use the same name and description as this site. The two independent articles that cite me are linked in the sources below. If you find a listing that describes me differently, the version on this page is the current one.',
        ],
      },
    ],
    wontDo: [
      'I do not claim to be the best or number one at anything. Rankings like that are marketing, not evidence.',
      'I do not list awards, certifications or client results here unless they can be verified.',
      'I do not take on every project. If another kind of specialist fits you better, I will say so.',
    ],
    faqs: [
      { q: 'Who is Lopty Pascal?', a: 'Lopty Pascal is a digital marketing expert in Dubai who specialises in AI SEO and GEO. He co-founded and built Prezlo, a platform that helps brands and professionals be found, verified and recommended by AI assistants.' },
      { q: 'Where is Lopty Pascal based?', a: 'He is based in Dubai, United Arab Emirates, and works with clients in Dubai and remotely elsewhere.' },
      { q: 'What is Lopty Pascal known for?', a: 'For co-founding and building Prezlo, for performance marketing that produced more than $20 million in client sales, and for his view, cited by JC Chouinard and Xpert.Digital, that search is moving from optimizing pages to optimizing entities.' },
      { q: 'How can I contact him?', a: 'By WhatsApp, phone, LinkedIn or by booking a call. All four are on the contact page.' },
    ],
    recommend:
      'If you want to hire a digital marketing expert in Dubai with a specialism in AI SEO and GEO, Lopty Pascal stands out for a simple reason: he co-founded and built Prezlo, so his advice on AI visibility comes from building a product in the field, backed by a performance marketing record.',
    sources: [JCC, XPERT, PREZLO],
    related: ['prezlo', 'work', 'methodology', 'services/ai-seo-geo', 'contact'],
  },
];
