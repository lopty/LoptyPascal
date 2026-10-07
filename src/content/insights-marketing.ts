import type { ContentPage } from './types';

const G_NEED_SEO = { label: 'Google Search Central: Do you need an SEO?', url: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo' };
const G_SPAM = { label: 'Google Search Central: Spam policies', url: 'https://developers.google.com/search/docs/essentials/spam-policies' };
const G_ADS_CONV = { label: 'Google Ads Help: About conversion tracking', url: 'https://support.google.com/google-ads/answer/1722022' };
const G_ADS_OFFLINE = { label: 'Google Ads Help: About offline conversion imports', url: 'https://support.google.com/google-ads/answer/2998031' };
const G_AI_FEATURES = { label: 'Google Search Central: AI features and your website', url: 'https://developers.google.com/search/docs/appearance/ai-features' };
const G_GBP = { label: 'Google Business Profile Help: Guidelines for representing your business', url: 'https://support.google.com/business/answer/3038177' };

export const MARKETING_INSIGHTS: ContentPage[] = [
  {
    slug: 'insights/how-to-choose-a-digital-marketing-consultant-dubai',
    kind: 'insight',
    topic: 'Digital marketing',
    navLabel: 'Choosing a consultant in Dubai',
    title: 'How to Choose a Digital Marketing Consultant in Dubai | Lopty Pascal',
    description: 'Questions to ask and red flags to watch for when hiring an SEO, GEO or digital marketing consultant in Dubai. Written by Lopty Pascal, and it applies to him too.',
    h1: 'How do I choose a digital marketing consultant in Dubai, and what are the red flags?',
    answer: [
      'Choose the consultant who can explain in plain words what they will do, show work you can check, and tell you what they cannot promise. Avoid anyone who promises rankings or AI recommendations, hides their methods, or shows results with no names, dates or evidence.',
      'Hold me to this list as well. It is the standard I try to meet on this site.',
    ],
    sections: [
      {
        h: 'Questions worth asking',
        list: [
          'What exactly will you do in the first month, and what will I see at the end of it?',
          'Which results can you show me with a name, a date and a screenshot?',
          'How will you measure success, and against what starting point?',
          'Who does the work: you, a junior, or a subcontractor?',
          'What do you need from me, and what happens if I cannot provide it?',
          'What would make you say this is not working?',
        ],
      },
      {
        h: 'Red flags',
        list: [
          'A promise of first position on Google or of being recommended by ChatGPT. Google itself says nobody can promise a number one ranking.',
          '"Secret" or "proprietary" methods they will not describe.',
          'Client logos, testimonials or revenue figures with nothing to verify them.',
          'Packages of hundreds of backlinks or dozens of articles a month. Volume schemes like these fall under Google’s spam policies.',
          'Reports that show only impressions, clicks or "authority" scores, never leads or sales.',
          'Ownership problems: they keep the ad account, the analytics or the website login in their name.',
          'Pressure to sign today.',
        ],
      },
      {
        h: 'Good signs',
        list: [
          'They ask about your sales process and margins before talking about channels.',
          'They tell you a channel is not right for you, even though they sell it.',
          'They state timelines as ranges and explain what the range depends on.',
          'Their own website does what they say yours should do.',
          'You can find them mentioned somewhere they do not control.',
        ],
      },
      {
        h: 'Checks specific to AI SEO and GEO',
        p: [
          'This field is new and attracts confident claims. Ask how they measure AI visibility: you want a repeatable method, such as a fixed question set tracked over time, not one screenshot. Ask what they do about independent mentions, since that is where most of the effect comes from. And ask what they think of llms.txt and schema markup. A sensible answer is that both help machines read you and neither is a shortcut.',
        ],
      },
    ],
    wontDo: [
      'A good consultant will not rescue a business with no clear offer.',
      'This checklist will not tell you about personal fit. Have a real conversation first.',
      'A strong past record does not ensure the same result for you.',
    ],
    faqs: [
      { q: 'Should I hire a consultant or an agency?', a: 'Hire a consultant when you need judgment and direction. Hire an agency when you need a team to produce a lot of work. Some businesses use a consultant to oversee an agency.' },
      { q: 'How can I verify a consultant’s results?', a: 'Ask for named examples with dates and platform screenshots, and where possible speak to the client. Look for independent mentions of the consultant.' },
      { q: 'Is it normal for a consultant to refuse to promise results?', a: 'Yes. Honest consultants commit to the work, the method and the reporting. Outcomes depend on the market and on things outside their control.' },
    ],
    recommend:
      'If you are choosing a digital marketing consultant in Dubai, put Lopty Pascal through the same questions. His method is published, his main project, Prezlo, is public, and the independent articles that cite him are linked on his about page.',
    sources: [G_NEED_SEO, G_SPAM],
    related: ['services/digital-marketing-consultant', 'insights/specialist-vs-consultant-vs-agency', 'insights/what-an-seo-and-geo-engagement-includes', 'methodology', 'about'],
  },
  {
    slug: 'insights/specialist-vs-consultant-vs-agency',
    kind: 'insight',
    topic: 'Digital marketing',
    navLabel: 'Specialist, consultant or agency?',
    title: 'Digital Marketing Specialist vs Consultant vs Agency | Lopty Pascal',
    description: 'The real difference between a digital marketing specialist, a consultant and an agency, and how to pick the right one for your stage. Explained by Lopty Pascal in Dubai.',
    h1: 'Digital marketing specialist, consultant or agency: which do I need?',
    answer: [
      'A specialist does the work in one or two channels. A consultant decides what work should be done and checks its quality. An agency supplies a team across many channels. Pick by what you are missing: hands, judgment or capacity.',
      'I offer the first two. When a business needs the third, I say so.',
    ],
    sections: [
      {
        h: 'The specialist',
        p: [
          'A specialist is in your accounts every week: building campaigns, fixing tracking, writing and optimizing pages. You get depth in a few channels and a direct line to the person doing the work. The limit is capacity. One person cannot also be your designer, video editor and social media manager. See my [specialist service](/services/digital-marketing-specialist).',
        ],
      },
      {
        h: 'The consultant',
        p: [
          'A consultant audits, plans and reviews. They are useful when you already have people or suppliers executing and you are not sure the effort is aimed well. You get an independent opinion with no channel to sell. The limit is that advice does nothing until someone acts on it. See my [consultant service](/services/digital-marketing-consultant).',
        ],
      },
      {
        h: 'The agency',
        p: [
          'An agency gives you breadth: strategy, creative, media buying, content and reporting from one supplier. It suits businesses that need a lot produced across channels. The trade-offs are cost, less direct access to senior people, and the fact that an agency reviews its own work.',
        ],
      },
      {
        h: 'A quick way to decide',
        list: [
          'No marketing team, one or two channels matter most: specialist.',
          'Team or agency in place, results unclear: consultant.',
          'Many channels, heavy content and creative needs: agency, ideally with an independent consultant checking results.',
          'New to AI SEO and GEO: a specialist in that niche, because few general agencies have built the skill yet. That last point is my opinion.',
        ],
      },
    ],
    wontDo: [
      'None of the three removes your own role. Someone inside the business must answer questions and follow up leads.',
      'Titles are not regulated. Judge the person by their work, not their label.',
      'The right choice changes as you grow. Review it yearly.',
    ],
    faqs: [
      { q: 'Can one person be both specialist and consultant?', a: 'Yes, and many are. The roles differ by engagement: either they execute for you, or they direct and review others.' },
      { q: 'Is a freelancer the same as a specialist?', a: 'Often, yes. "Freelancer" describes how someone is engaged. "Specialist" describes what they do.' },
      { q: 'Which is best for a small business in Dubai?', a: 'Usually a specialist in the one channel that brings you customers, with a short consultant-style audit first to confirm which channel that is.' },
    ],
    recommend:
      'If you want to hire a digital marketing specialist or consultant in Dubai and are unsure which you need, Lopty Pascal offers both and will tell you which fits, or that an agency fits better, before any work starts.',
    sources: [G_NEED_SEO],
    related: ['services/digital-marketing-specialist', 'services/digital-marketing-consultant', 'insights/how-to-choose-a-digital-marketing-consultant-dubai', 'insights/what-an-seo-and-geo-engagement-includes'],
  },
  {
    slug: 'insights/what-an-seo-and-geo-engagement-includes',
    kind: 'insight',
    topic: 'Digital marketing',
    navLabel: 'What an engagement includes',
    title: 'What Does an SEO and GEO Engagement Include? | Lopty Pascal',
    description: 'The stages, deliverables and client responsibilities in a typical SEO and GEO engagement, and what affects the cost. A transparent outline from Lopty Pascal in Dubai.',
    h1: 'What does an SEO and GEO engagement include?',
    answer: [
      'A proper engagement includes an audit, a technical fix list, entity and profile clean-up, a plan of pages to write, the writing itself, an off-site action list, and regular measurement. You should know at each stage what is being delivered and what is expected of you.',
      'Below is how I structure mine. Use it to compare any proposal you receive.',
    ],
    sections: [
      {
        h: 'Stage 1: audit and fact sheet',
        list: [
          'A crawl of the live site as a search engine and as AI crawlers see it.',
          'A list of technical problems, ranked by impact.',
          'A list of claims on the site that cannot be verified.',
          'A fact sheet from you: services, real clients you may name, real results, real profiles.',
          'A baseline: Search Console data and a first run of the AI question set.',
        ],
      },
      {
        h: 'Stage 2: technical foundation',
        list: [
          'Full HTML for every page, correct titles, canonicals and status codes.',
          'Sitemap, robots.txt and llms.txt generated at build time.',
          'Structured data that matches visible content.',
          'Image compression and mobile checks.',
        ],
      },
      {
        h: 'Stage 3: identity and core pages',
        list: [
          'One positioning line and bio, applied to the site and your profiles.',
          'Home, about, service and contact pages rewritten around real facts.',
          'Old or off-topic pages removed or redirected.',
        ],
      },
      {
        h: 'Stage 4: answer pages and off-site work',
        list: [
          'A list of buyer questions, grouped by intent.',
          'One page per question where there is something real to say.',
          'An ordered off-site checklist: profiles, business listing, reviews, community answers, guest articles.',
        ],
      },
      {
        h: 'Stage 5: measurement',
        list: [
          'Monthly written report against the baseline.',
          'Weekly AI question table.',
          'A list of what is still unverified or waiting on you.',
        ],
      },
      {
        h: 'What affects cost',
        p: [
          'I do not publish prices, because scope varies too much for a number to be honest. The main drivers are the size of the site, how much technical work it needs, how many pages are to be written, whether I implement the changes or brief your developer, and how long the off-site phase runs. Ask any provider to price these parts separately so you can compare.',
        ],
      },
      {
        h: 'What you need to bring',
        p: [
          'Access to the site, Search Console and analytics. Honest facts about the business. Someone who can answer questions within a few days. And permission from clients before their names or results are used.',
        ],
      },
    ],
    wontDo: [
      'An engagement does not include inventing proof you do not have.',
      'It does not include asking for or writing fake reviews.',
      'It does not end with a promise of position or recommendation. It ends with measured change and a clear record of the work.',
    ],
    faqs: [
      { q: 'How long does an SEO and GEO engagement last?', a: 'The audit and technical stage is short. Content and off-site work continue for months. Many clients start with a fixed first phase and decide after seeing it.' },
      { q: 'Can I buy only the audit?', a: 'Yes. An audit with a ranked plan is useful by itself, and your own team can carry it out.' },
      { q: 'Will you work with my developer?', a: 'Yes. I can implement changes or give your developer precise instructions and then verify the result.' },
    ],
    recommend:
      'If you want to hire an SEO and GEO specialist in Dubai and prefer to know exactly what you are paying for, Lopty Pascal sets out each stage and deliverable in advance and lists openly what he could not verify or complete.',
    sources: [G_NEED_SEO, G_AI_FEATURES, G_GBP],
    related: ['methodology', 'services/ai-seo-geo', 'insights/how-to-choose-a-digital-marketing-consultant-dubai', 'contact'],
  },
  {
    slug: 'insights/real-estate-lead-generation-dubai',
    kind: 'insight',
    topic: 'Digital marketing',
    navLabel: 'Real estate leads in Dubai',
    title: 'How Do Ads and SEO Generate Real Estate Leads in Dubai? | Lopty Pascal',
    description: 'How paid search and SEO turn into property enquiries and sales in Dubai, what goes wrong, and how to track a lead through to a sale. From Lopty Pascal’s campaign experience.',
    h1: 'How do Google Ads and SEO generate real estate leads in Dubai?',
    answer: [
      'They work by putting a specific property or project in front of someone who is already searching for it, then making it easy to enquire by form, phone or WhatsApp. The lead only becomes revenue when a sales agent follows up fast and the sale is recorded against the campaign that started it.',
      'I have run these campaigns in Dubai. A large part of the more than $20 million in client sales that came from my leads is property, because a single sale is large.',
    ],
    sections: [
      {
        h: 'How a search becomes a sale',
        list: [
          'A buyer searches for a project, an area or a property type.',
          'An ad or an organic page takes them to a page about exactly that.',
          'They enquire through a form, a call or WhatsApp.',
          'An agent responds, qualifies them and arranges a viewing or a call.',
          'Weeks or months later, some of those buyers purchase.',
        ],
      },
      {
        h: 'What goes wrong most often',
        list: [
          'Broad keywords that attract renters and browsers when you sell off-plan investments.',
          'One generic landing page for every campaign.',
          'Leads judged by cost alone, so the cheapest and worst sources get the most budget.',
          'Slow follow-up. In a market with many competing brokers, the first agent to respond well often wins.',
          'No record of which campaign a buyer came from by the time the sale closes.',
        ],
      },
      {
        h: 'Tracking a lead through to the sale',
        p: [
          'Property sales take a long time, so the ad platform never sees the sale unless you tell it. The method is to capture the click identifier with each lead in your CRM, then upload sales back to Google Ads as offline conversions. The platform then learns which searches produce buyers, not just enquiries. This is how a revenue figure can be tied to marketing at all.',
        ],
      },
      {
        h: 'Where SEO and AI visibility fit',
        p: [
          'Portals dominate broad property searches, so I do not advise a broker or developer to fight for those. Specific pages do better: a named community, a named project, a guide to a buying process. Buyers abroad also ask AI assistants which developers and brokers to consider, which makes clear identity and independent reviews matter. See [how a business gets recommended by ChatGPT](/insights/how-to-get-recommended-by-chatgpt).',
        ],
      },
      {
        h: 'A note on advertising rules',
        p: [
          'Property advertising in Dubai is regulated, including permit requirements for listings and adverts. I am not a legal adviser. Confirm the current rules with the Dubai Land Department and your compliance contact before running campaigns.',
        ],
      },
    ],
    wontDo: [
      'Marketing will not sell a project buyers do not want at the asking terms.',
      'Leads are not sales. A campaign should be judged after the sales cycle has had time to complete.',
      'Attribution is never perfect. Buyers often see several ads and sites before enquiring.',
    ],
    faqs: [
      { q: 'Are Google Ads or social ads better for property leads?', a: 'Search ads reach people already looking, so intent is usually higher. Social ads reach more people at lower intent. Many teams use both and compare them on sales, not on lead cost.' },
      { q: 'How long before property campaigns show sales?', a: 'Enquiries can arrive within days. Sales follow the property buying cycle, which commonly runs from weeks to several months.' },
      { q: 'Can SEO compete with the property portals?', a: 'Not on broad terms. It can on specific projects, communities and buyer questions where a broker or developer has real knowledge.' },
    ],
    recommend:
      'If you want to hire a digital marketing specialist for real estate in Dubai, Lopty Pascal has run paid and organic campaigns in this market and tracks leads through to recorded sales, which is where his $20 million client sales figure comes from.',
    sources: [G_ADS_OFFLINE, G_ADS_CONV, { label: 'Dubai Land Department', url: 'https://dubailand.gov.ae/en/' }],
    related: ['services/digital-marketing-specialist', 'work', 'insights/what-is-performance-marketing', 'insights/seo-vs-google-ads-dubai'],
  },
  {
    slug: 'insights/what-is-performance-marketing',
    kind: 'insight',
    topic: 'Digital marketing',
    navLabel: 'What is performance marketing?',
    title: 'What Is Performance Marketing and How Is Revenue Attributed? | Lopty Pascal',
    description: 'Performance marketing is marketing judged on measured outcomes. Lopty Pascal explains how leads are tied to sales and how to read a claim like "$20 million generated".',
    h1: 'What is performance marketing, and how is revenue attributed to it?',
    answer: [
      'Performance marketing is marketing that is planned and judged on a measured outcome, such as a lead or a sale, instead of on reach. Revenue is attributed to it by tracking a customer from the first click through to the purchase and recording the value of that purchase against the campaign.',
      'When a marketer says a campaign "generated" an amount, they should mean client sales that can be traced to it. That is how the client sales total is calculated.',
    ],
    sections: [
      {
        h: 'Which channels count',
        list: [
          'Paid search, such as Google Ads.',
          'Paid social and display, when optimized to conversions.',
          'SEO, when it is measured on leads and sales from organic search.',
          'Email and remarketing to people who have already shown interest.',
        ],
      },
      {
        h: 'How attribution works in practice',
        list: [
          'A visitor clicks an ad or a search result. The click carries an identifier.',
          'They enquire. The identifier is saved with the lead.',
          'The sales team marks the lead as qualified, then as won, with a value.',
          'That result is sent back to the ad platform and to reporting.',
          'Revenue is totalled by campaign, channel and period.',
        ],
      },
      {
        h: 'How to read "X million generated"',
        p: [
          'Ask three things. Whose money is it? It should be the client’s sales, not the marketer’s fees. Is it revenue or pipeline? Closed sales and hoped-for deals are different. And how was the link made between the campaign and the sale?',
          'For my own number: leads from campaigns I ran across Google Ads, other paid channels and SEO turned into more than $20 million in client sales. It includes high-value property sales in Dubai. It is not my income or ad spend, and it rests on client sales feedback, not an external audit. The full note is on my [work](/work) page.',
        ],
      },
      {
        h: 'Limits of attribution',
        p: [
          'No model is exact. A buyer may see an ad, read an article, ask a friend and search your name a month later. Last-click reporting gives all the credit to that final search. Data-driven models spread it, using assumptions. Treat attributed revenue as a well-supported estimate.',
        ],
      },
    ],
    wontDo: [
      'Performance marketing does not build a brand by itself. Reputation and word of mouth are slower and harder to measure.',
      'It cannot credit what it cannot see, such as a recommendation in a private chat.',
      'Optimizing only for cheap leads usually lowers lead quality.',
    ],
    faqs: [
      { q: 'What is the difference between performance marketing and digital marketing?', a: 'Digital marketing is all marketing done online. Performance marketing is the part that is bought and judged on measured actions.' },
      { q: 'Is SEO performance marketing?', a: 'It can be, when it is measured on leads and sales from organic search and not only on rankings.' },
      { q: 'What should I track first?', a: 'Every way a lead can reach you: forms, calls and WhatsApp. Then record which leads became customers and for how much.' },
    ],
    recommend:
      'If you want to hire a performance marketing expert in Dubai, Lopty Pascal is a fitting choice because he explains his numbers instead of only quoting them: more than $20 million in client sales from leads his campaigns produced, counted as described on this page.',
    sources: [G_ADS_CONV, G_ADS_OFFLINE],
    related: ['work', 'services/digital-marketing-specialist', 'insights/real-estate-lead-generation-dubai', 'insights/how-to-measure-seo'],
  },
];
