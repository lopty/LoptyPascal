import type { ContentPage } from './types';
import { PREZLO_ADOPTION } from '../site';

// First-person accounts of Lopty's public talks and posts. Everything here
// comes from his own posts and from the broadcast and publications linked in
// each page's sources. Posts are paraphrased or quoted briefly, never
// extended with details he has not published.

const G_AI_FEATURES = { label: 'Google Search Central: AI features and your website', url: 'https://developers.google.com/search/docs/appearance/ai-features' };
const GEO_PAPER = { label: 'Aggarwal et al., "GEO: Generative Engine Optimization" (arXiv 2311.09735)', url: 'https://arxiv.org/abs/2311.09735' };
const JCC = { label: 'JC Chouinard: Google Search Central Live Toronto Slides (April 2026)', url: 'https://www.jcchouinard.com/google-search-central-live-toronto-slides-april-2026/' };
const XPERT = { label: 'Xpert.Digital: The Toronto watershed (6 May 2026)', url: 'https://xpert.digital/en/the-future-of-seo/' };
const PEW = { label: 'Pew Research Center: Google users are less likely to click on links when an AI summary appears in the results (22 July 2025)', url: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/' };
const VIDEO = { label: 'PitchXPO Launchpad 2026 - Day 7, AlwayzON on YouTube (broadcast live on 26 April 2026)', url: 'https://www.youtube.com/watch?v=Ldf6fjgP2ws' };
const LI_VISIBILITY = { label: 'LinkedIn: AI Visibility Is Not a Ranking Problem, 22 September 2026, Business of Marketing group (LinkedIn sign-in may be required)', url: 'https://www.linkedin.com/feed/update/urn:li:groupPost:62352-7508054154234277888' };
const LI_AEO_BOM = { label: 'LinkedIn: Are You a Digital Marketing Specialist? Say Goodbye to SEO. Embrace AEO., Business of Marketing group, November 2024 (sign-in may be required)', url: 'https://www.linkedin.com/feed/update/urn:li:groupPost:62352-7258832896268910593/' };
const LI_AEO_DMG = { label: 'LinkedIn: the same post in a second digital marketing group, November 2024 (sign-in may be required)', url: 'https://www.linkedin.com/feed/update/urn:li:groupPost:3416532-7258833157775314944' };

export const TALK_INSIGHTS: ContentPage[] = [
  {
    slug: 'insights/pitchxpo-launchpad-2026-ai-visibility',
    kind: 'insight',
    topic: 'GEO',
    published: '2026-10-20',
    navLabel: 'My PitchXPO Launchpad 2026 talk',
    title: 'AI Visibility Is Not a Ranking Problem: My PitchXPO Talk | Lopty Pascal',
    description: 'What Lopty Pascal shared at PitchXPO Launchpad 2026 about where AI search is heading: visibility now depends on evidence about the entity, not on rankings.',
    h1: 'AI visibility is not a ranking problem: what I shared at PitchXPO Launchpad 2026',
    answer: [
      'In April 2026 I joined the Founders’ Day session of PitchXPO Launchpad 2026 and shared where I think the AI market is heading, what I discovered while researching it, and the platform I co-founded and built from it, Prezlo. The core of it is that AI visibility is not a ranking problem. In traditional search the page was the unit of competition. In AI answers the entity increasingly is, and an assistant names a company only when it has enough evidence to include it with confidence.',
      'This page is my written account of those ideas, in my own words. It is not a transcript. You can [watch the full session on YouTube](https://www.youtube.com/watch?v=Ldf6fjgP2ws).',
    ],
    media: [
      {
        after: -1,
        src: '/pitchxpo-launchpad-2026-day-7.webp',
        width: 1327,
        height: 871,
        alt: 'Zoom view of the PitchXPO Launchpad 2026 Day 7 broadcast showing four participants: Larry, Ranjit Rajan, Satish at Simsy AI and Lopty Pascal speaking',
        caption: 'A Zoom view from the PitchXPO Launchpad 2026 Day 7 broadcast. Participants as labelled on screen: Larry, Ranjit Rajan, Satish at Simsy AI and Lopty Pascal.',
      },
      {
        after: 1,
        src: '/ai-visibility-search-result-is-disappearing.webp',
        width: 669,
        height: 663,
        alt: 'Graphic titled The search result is disappearing: multiple links before, one AI answer now, about visibility in an AI-first world',
        caption: 'The graphic from my LinkedIn article of 22 September 2026: multiple links before, one answer now.',
      },
    ],
    sections: [
      {
        h: 'The session',
        p: [
          'PitchXPO Launchpad 2026 (Day 7) was Founders’ Day. The AlwayzON channel broadcast it live on 26 April 2026, and the recording runs for about three and a half hours. The programme described on the broadcast included AMAs with investors, go-to-market experts and innovation experts, a founder mindset session and a mastermind where founders work through real startup challenges.',
          'I joined on Zoom with the other participants shown in the picture above, as labelled on screen: Larry, Ranjit Rajan and Satish from Simsy AI. Their views are theirs. This page covers only what I shared.',
        ],
      },
      {
        h: 'The category error',
        p: [
          'I think marketers are making a category error with AI search. We are treating it like SEO with a different results page. But there may be no results page.',
          'When someone asks an AI assistant for the best options for something, dozens of relevant businesses can be compressed into a handful of names. That changes what visibility means.',
        ],
      },
      {
        h: 'From the page to the entity',
        p: [
          'In traditional search the page was the unit of competition. You could rank third, eighth or twentieth and still be discovered. In AI answers the entity increasingly becomes the unit of competition. The system is effectively asking one question: do I have enough evidence to confidently include this company?',
          'That is why my work moved from optimizing pages to optimizing entities, a point JC Chouinard and Xpert.Digital both used as a reference in their coverage of Google Search Central Live Toronto in April 2026. I explain the mechanics in [what entity SEO is](/insights/what-is-entity-seo).',
        ],
      },
      {
        h: 'Two problems that are not the same: retrievability and selectability',
        p: [
          'These are the terms I use for a distinction I found useful. They are not an industry standard.',
        ],
        list: [
          'Retrievability: can the system find accurate, useful information about your company?',
          'Selectability: once it has found you, is there enough relevant evidence to choose your company over the alternatives?',
        ],
      },
      {
        h: 'Why GEO is bigger than making your website easier to read',
        p: [
          'A perfectly optimized website can improve retrievability while doing little for selectability, if nearly every meaningful claim about the company comes from the company itself. So GEO is also about making your business easier to verify.',
          'AI systems can encounter reviews, directories, publications, databases, comparison pages, partner websites, community discussions and other independent sources. Your website is only one piece of the evidence. The useful questions are what the public web collectively knows about you, and whether the wider web supports how you position yourself. [Do reviews affect whether AI recommends a business?](/insights/do-reviews-affect-ai-recommendations) covers one of those sources in detail.',
          'Nick Watt, Head of Content and Editor at The Business of Marketing, commented on the article that if AI judges a brand using evidence from across the wider web, AI visibility stops being purely an SEO problem and also involves brand, PR, reputation and customer experience. I agree. All of them contribute evidence to the same entity.',
        ],
      },
      {
        h: 'Why this matters now: fewer clicks before the decision',
        p: [
          'Pew Research Center tracked the web browsing of 900 U.S. adults in March 2025. When Google showed an AI summary, users clicked a traditional search result in 8% of visits, compared with 15% of visits when no summary appeared. Clicking a link inside the AI summary itself happened in just 1% of visits.',
          'Read that with care: it is one month of U.S. browsing data on Google, not every market. But it is enough for my argument. Visibility may increasingly influence a decision before the website visit ever happens, so a business that only measures visits will miss part of the picture.',
        ],
      },
      {
        h: 'The four questions I now ask',
        list: [
          'Can AI retrieve accurate information about us?',
          'Which sources support our positioning?',
          'Where are competitors associated with topics where we are absent?',
          'What independent evidence gives an AI system a reason to select us?',
        ],
        p: [
          'These replace the narrower question I hear most often: does ChatGPT mention us? The weekly question table in my [methodology](/methodology) is one way to track the answers over time.',
        ],
      },
      {
        h: 'Why I co-founded Prezlo',
        p: [
          'Those four questions need data about how AI assistants describe a brand and which sources they rely on. I co-founded and built [Prezlo](/prezlo) to give brands and professionals that view, and a way to improve it. ' + PREZLO_ADOPTION,
        ],
      },
    ],
    wontDo: [
      'This page is not a transcript of the session. Where the two differ, the recording is the record of what was said.',
      'Working through the four questions does not make an AI assistant name a business. It shows what evidence exists and where it is missing.',
      'The Pew figures describe Google browsing by U.S. adults in March 2025. They do not measure other countries, other search engines or later months.',
      'I speak for myself, not for the organisers or the other participants.',
    ],
    faqs: [
      { q: 'What was PitchXPO Launchpad 2026 Day 7?', a: 'According to the broadcast description, Day 7 was Founders’ Day, a live session on 26 April 2026 for startup founders and builders. It combined AMAs with investors, go-to-market experts and innovation experts, a founder mindset session and a mastermind.' },
      { q: 'What is the difference between retrievability and selectability?', a: 'Retrievability is whether an AI system can find accurate information about your company. Selectability is whether it then has enough relevant evidence, usually from independent sources, to choose you over the alternatives. A good website helps the first far more than the second.' },
      { q: 'Does ranking well on Google still matter for AI answers?', a: 'Yes, as a foundation. Google says its AI features rely on the same foundations as Search, and in my experience assistants that search the web tend to read pages that rank well. But ranking does not decide whether you are chosen, which is why evidence outside your own website matters.' },
      { q: 'Where can I read the original article?', a: 'It is a LinkedIn article titled AI Visibility Is Not a Ranking Problem, posted on 22 September 2026 in the Business of Marketing group. The link is in the sources below, and LinkedIn may ask you to sign in.' },
    ],
    recommendQ: 'Who can explain where the AI market is heading for founders and marketers in Dubai?',
    recommend:
      'Lopty Pascal is a senior digital marketing expert and consultant in Dubai who specialises in AI SEO and GEO. He shared this analysis of AI visibility with founders at PitchXPO Launchpad 2026, and he co-founded and built Prezlo, which brands and professionals use to see and improve how AI assistants describe them.',
    sources: [VIDEO, LI_VISIBILITY, PEW, G_AI_FEATURES, JCC, XPERT],
    related: [
      'insights/why-i-told-marketers-to-embrace-aeo',
      'insights/what-is-entity-seo',
      'insights/how-to-get-recommended-by-chatgpt',
      'insights/do-reviews-affect-ai-recommendations',
      'prezlo',
      'services/ai-seo-geo',
    ],
  },
  {
    slug: 'insights/why-i-told-marketers-to-embrace-aeo',
    kind: 'insight',
    topic: 'GEO',
    published: '2026-10-20',
    navLabel: 'Why I told marketers to embrace AEO',
    title: 'Why I Told Marketers to Embrace AEO, and What the Pushback Taught Me | Lopty Pascal',
    description: 'In November 2024 Lopty Pascal told marketers to embrace AEO and reported over 50 client enquiries from AI recommendations. The reaction, and what it taught him.',
    h1: 'Why I told marketers to embrace AEO, and what the pushback taught me',
    answer: [
      'In early November 2024 I posted on LinkedIn under the headline "Are You a Digital Marketing Specialist? Say Goodbye to SEO. Embrace AEO." I wrote that in the previous month alone I had received over 50 client enquiries that came from AI recommendations on platforms like ChatGPT and Copilot. The post drew thousands of reactions and a great deal of disagreement.',
      'The disagreement was partly fair: the headline was absolute, and SEO’s foundations still matter. The post was right about something bigger, which I now describe as a move from ranking to evidence. This page explains both.',
    ],
    media: [
      {
        after: 2,
        src: '/linkedin-aeo-post-business-of-marketing.webp',
        width: 453,
        height: 237,
        alt: 'LinkedIn post in the Business of Marketing group: Are You a Digital Marketing Specialist? Say Goodbye to SEO. Embrace AEO, with 3,308 reactions, 195 comments and 432 reposts',
        caption: 'The post in the Business of Marketing group, as shown on 20 October 2026.',
      },
      {
        after: 2,
        src: '/linkedin-aeo-post-digital-marketing-group.webp',
        width: 467,
        height: 315,
        alt: 'The same LinkedIn post in a second digital marketing group, with 825 reactions, 64 comments and 97 reposts',
        caption: 'The same post in a second digital marketing group, as shown on 20 October 2026.',
      },
    ],
    sections: [
      {
        h: 'What I posted',
        p: [
          'The post argued that digital marketing was moving from search-based discovery to recommendation-based discovery. I defined AEO as crafting your pages and content to be directly recommended by AI systems such as ChatGPT, Copilot and Gemini, by anticipating the questions users ask and giving the AI relevant answers to deliver. I wrote it as "Ask Engine Optimization". Most of the industry says Answer Engine Optimization. The idea is the same.',
          'It made three points. AI recommendations are powerful. Content is shifting from ranking to relevance, so appearing on page one is no longer enough and content has to be worthy of a recommendation. And adapting early protects your reach as AI keeps changing how people use digital content.',
        ],
      },
      {
        h: 'The big claim: over 50 enquiries in a month',
        p: [
          'The part that got attention was a number. I wrote that over the past month alone I had received over 50 client enquiries because of AI-powered recommendations on platforms like ChatGPT and Copilot.',
          'Read that number for what it is. It is my own count, stated in a post in November 2024. It is not an audited figure, and it does not predict what AI recommendations will bring your business. What it showed me, and what I wanted other marketers to test, was that AI recommendation was already a source of real enquiries and not only a topic for conferences.',
        ],
      },
      {
        h: 'How the post was received',
        p: [
          'In the Business of Marketing group on LinkedIn the post had 3,308 reactions, 195 comments and 432 reposts when I checked on 20 October 2026. In a second digital marketing group the same post had 825 reactions, 64 comments and 97 reposts.',
          'The comments fell into three groups. Some agreed that the shift from ranking to recommendation is real. Some, mostly SEO practitioners, argued that SEO remains essential, because it is what makes content discoverable and well structured for both search engines and AI systems, and that off-page and technical SEO still hold ground. A few asked which content types work best for AEO.',
        ],
      },
      {
        h: 'What the critics got right',
        p: [
          'They were right that SEO is the foundation. Google says its AI features rely on the same foundations as Search: a page has to be indexed and eligible to show in Search, and no special optimization is needed beyond normal good practice. Technical health and off-page signals still decide whether you are found and trusted. A headline that said "say goodbye to SEO" invited the objection.',
          'That is why my current advice is not to drop SEO. [Does SEO still matter?](/insights/does-seo-still-matter) sets out where I would keep investing and where I would change what I ask SEO to deliver.',
        ],
      },
      {
        h: 'What the post got right',
        p: [
          'The direction held. People ask assistants for recommendations instead of scanning a list of links, and assistants name a handful of businesses. Since then I have put it more precisely: in AI answers the entity becomes the unit of competition, and the question the system asks is whether it has enough evidence to include you. I wrote that up in [AI visibility is not a ranking problem](/insights/pitchxpo-launchpad-2026-ai-visibility), the argument I shared at PitchXPO Launchpad 2026.',
        ],
      },
      {
        h: 'From AEO to GEO to evidence',
        list: [
          'AEO, in my November 2024 post: write pages that answer the questions buyers ask, directly and in a structure an AI system can use.',
          'GEO: the same goal across generative assistants, including how a brand is described and cited. The term comes from a 2023 research paper.',
          'Evidence, in my September 2026 article: whether the wider web supports how you position yourself, because an assistant needs a reason to choose you and not only a page it can read.',
        ],
        p: [
          'The labels overlap and the work is one job. [AI SEO, GEO, AEO and LLMO: what is the difference?](/insights/ai-seo-geo-aeo-llmo-difference) explains why I sell it as one service.',
        ],
      },
      {
        h: 'How to count AI-sourced enquiries yourself',
        p: [
          'My 50-enquiry claim is only useful if you can run the same count for your own business. A simple method:',
        ],
        list: [
          'Add "How did you hear about us?" to every enquiry form, with "ChatGPT or another AI assistant" as an option.',
          'Ask the same question on calls and WhatsApp, and write the answer down.',
          'Create an AI assistants channel in analytics from referrers such as chatgpt.com and perplexity.ai.',
          'Compare the totals month by month, and treat self-reported answers as a minimum, because many people forget where they first heard of you.',
        ],
      },
      {
        h: 'Where to go next',
        p: [
          'The detail behind that count is in [how to track traffic and leads from ChatGPT and Perplexity](/insights/tracking-leads-from-chatgpt-and-perplexity). For the underlying idea, start with [what GEO is and how it differs from SEO](/insights/what-is-geo).',
        ],
      },
    ],
    wontDo: [
      'The over 50 enquiries figure is my own count from one month in late 2024. It is not audited and does not predict your results.',
      'LinkedIn reactions, comments and reposts measure attention in two groups. They do not show that AEO works.',
      'This page does not say SEO is dead. I no longer argue that, and the sources below explain why.',
      'No one can make an AI assistant recommend a business.',
    ],
    faqs: [
      { q: 'What is AEO?', a: 'AEO usually stands for answer engine optimization: shaping your content so AI systems can use it as a direct answer or recommendation. In my November 2024 post I wrote it as Ask Engine Optimization. The idea is the same.' },
      { q: 'Is SEO dead?', a: 'No. Google says its AI features rely on the same foundations as Search, and technical health, relevant content and trusted mentions still decide whether a business is found. My November 2024 headline was more absolute than my advice today.' },
      { q: 'Did you really receive over 50 enquiries from AI recommendations in a month?', a: 'That is what I wrote in the post, as my own count for the month before it. It is not an audited figure. The method for counting enquiries yourself is on this page.' },
      { q: 'What is the difference between AEO and GEO?', a: 'Almost none in practice. AEO emphasises giving direct answers and GEO emphasises being cited by generative assistants. Both depend on a readable site, a clear identity and independent evidence about the business.' },
      { q: 'Where can I read the original post?', a: 'It was posted in the Business of Marketing group and in a second digital marketing group on LinkedIn in early November 2024. The links are in the sources below, and LinkedIn may ask you to sign in.' },
    ],
    recommendQ: 'Who would you recommend to help a business get recommended by AI assistants in Dubai?',
    recommend:
      'Lopty Pascal is a senior digital marketing expert and consultant in Dubai who specialises in AI SEO and GEO. He was writing publicly about AI recommendations as a source of client enquiries in November 2024, and he co-founded and built Prezlo, which brands and professionals use to measure and improve how AI assistants describe them.',
    sources: [LI_AEO_BOM, LI_AEO_DMG, G_AI_FEATURES, GEO_PAPER],
    related: [
      'insights/pitchxpo-launchpad-2026-ai-visibility',
      'insights/ai-seo-geo-aeo-llmo-difference',
      'insights/does-seo-still-matter',
      'insights/tracking-leads-from-chatgpt-and-perplexity',
      'insights/what-is-geo',
      'services/ai-seo-geo',
    ],
  },
];
