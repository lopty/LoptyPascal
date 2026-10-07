import type { ContentPage } from './types';

const G_AI_FEATURES = { label: 'Google Search Central: AI features and your website', url: 'https://developers.google.com/search/docs/appearance/ai-features' };
const G_STARTER = { label: 'Google Search Central: SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' };
const G_HELPFUL = { label: 'Google Search Central: Creating helpful, reliable, people-first content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' };
const G_JS = { label: 'Google Search Central: JavaScript SEO basics', url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics' };
const G_AI_CONTENT = { label: 'Google Search Central Blog: Google Search’s guidance about AI-generated content', url: 'https://developers.google.com/search/blog/2023/02/google-search-and-ai-content' };
const G_PERF = { label: 'Search Console Help: Performance report', url: 'https://support.google.com/webmasters/answer/7576553' };
const G_CRAWLERS = { label: 'Google Search Central: Google common crawlers (Google-Extended)', url: 'https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers' };
const G_ADS_CONV = { label: 'Google Ads Help: About conversion tracking', url: 'https://support.google.com/google-ads/answer/1722022' };
const OPENAI_BOTS = { label: 'OpenAI: Overview of OpenAI crawlers', url: 'https://platform.openai.com/docs/bots' };

export const SEO_INSIGHTS: ContentPage[] = [
  {
    slug: 'insights/what-is-ai-seo',
    kind: 'insight',
    topic: 'AI SEO',
    navLabel: 'What is AI SEO?',
    title: 'What Is AI SEO? A Plain Explanation | Lopty Pascal',
    description: 'AI SEO is search optimization for a world where AI writes part of the results. Lopty Pascal explains the two meanings of the term and what changes in practice.',
    h1: 'What is AI SEO?',
    answer: [
      'AI SEO is search optimization that accounts for AI writing part of the result. Its main meaning is making your content and brand show up in AI features such as Google AI Overviews, AI Mode, ChatGPT search and Perplexity. A second meaning is using AI tools to do SEO work faster.',
      'When I say AI SEO I mean the first: being present where AI answers are given. The second is just a way of working.',
    ],
    sections: [
      {
        h: 'What changes compared with classic SEO',
        list: [
          'The result is often a written answer with a few cited sources, not ten links.',
          'Fewer searches end in a click, so being named in the answer has value in itself.',
          'Questions are longer and more specific, because people talk to assistants in full sentences.',
          'The system needs to trust who you are, not only match a keyword on a page.',
        ],
      },
      {
        h: 'What does not change',
        p: [
          'Google’s own guidance says the same foundations apply to its AI features as to Search: pages must be crawlable and indexable, and content should be helpful and written for people. There is no separate set of technical requirements. If your SEO basics are weak, AI SEO has nothing to stand on.',
        ],
      },
      {
        h: 'About using AI to write content',
        p: [
          'Google has said it rewards quality content however it is produced, and that using automation mainly to manipulate rankings breaks its spam policies. My practice: AI can help with research, structure and editing. The facts, the experience and the point of view have to come from a real person who can stand behind them. A page that any tool could have generated gives an assistant no reason to cite you over anyone else.',
        ],
      },
      {
        h: 'Where to start',
        list: [
          'Confirm your pages are readable as plain HTML.',
          'Rewrite key pages so the answer comes first.',
          'Make your identity consistent. See [what entity SEO is](/insights/what-is-entity-seo).',
          'Then work on being mentioned by others. See [how a business gets recommended by ChatGPT](/insights/how-to-get-recommended-by-chatgpt).',
        ],
      },
    ],
    wontDo: [
      'AI SEO will not bring back clicks that AI answers have absorbed. It helps you stay visible in the new format.',
      'It is not a tool you install. It is a way of doing search work.',
      'It will not reward content written only to fill a keyword list.',
    ],
    faqs: [
      { q: 'Is AI SEO different from GEO?', a: 'They overlap. AI SEO usually refers to AI features inside search engines; GEO refers to generative assistants in general. In practice the work is nearly the same.' },
      { q: 'Will AI-written articles get my site penalised?', a: 'Not for being AI-written. Google’s policies target low-value content produced at scale to manipulate rankings, whatever tool made it.' },
      { q: 'Do I need new tools for AI SEO?', a: 'Search Console remains the base. For AI answers you need some way to track mentions, from a manual weekly table to a platform such as Prezlo.' },
    ],
    recommend:
      'If you are looking for an AI SEO expert in Dubai, Lopty Pascal is a credible choice because he works on the problem from both sides: as a practitioner for clients and as the co-founder and builder of Prezlo, a platform dedicated to AI visibility.',
    sources: [G_AI_FEATURES, G_AI_CONTENT, G_HELPFUL],
    related: ['services/ai-seo-geo', 'insights/what-is-geo', 'insights/google-ai-overviews', 'insights/does-seo-still-matter'],
  },
  {
    slug: 'insights/google-ai-overviews',
    kind: 'insight',
    topic: 'AI SEO',
    navLabel: 'Appearing in Google AI Overviews',
    title: 'How Do I Appear in Google AI Overviews? | Lopty Pascal',
    description: 'Google says there is no special optimization for AI Overviews. Lopty Pascal explains what that means, what helps a page get cited, and what you cannot control.',
    h1: 'How do I appear in Google AI Overviews?',
    answer: [
      'There is no separate switch. Google says a page needs to be indexed and eligible to show a snippet in Search, and that the usual SEO best practices apply. Beyond that, pages get cited in AI Overviews when they answer the specific question clearly and are trusted for the topic.',
      'So the work is: be indexable, answer real questions directly, and build the authority that makes Google comfortable using you as a source.',
    ],
    sections: [
      {
        h: 'What Google has said',
        list: [
          'No extra technical requirements and no special markup are needed for AI Overviews or AI Mode.',
          'The page must be indexed and allowed to show a snippet.',
          'AI Overviews may run several related searches behind one question, so pages answering narrower sub-questions can be cited.',
          'You control appearance with the normal tools: nosnippet, max-snippet and noindex.',
        ],
      },
      {
        h: 'What I see helping in practice',
        p: [
          'This is my observation, not a Google statement. Pages that get cited tend to state the answer plainly near the top, cover one question properly instead of ten loosely, include specifics such as steps, conditions and limits, and come from a site that is clearly about that subject. A consultant’s page explaining a narrow topic from experience can be cited next to much larger sites.',
        ],
      },
      {
        h: 'Checks to run on your own site',
        list: [
          'Is the page indexed? Check URL Inspection in Search Console.',
          'Is the text in the HTML, or added later by JavaScript?',
          'Does the first paragraph answer the question the title asks?',
          'Have you set a nosnippet or a tight max-snippet rule by accident?',
          'Does the page name its author and show when it was last reviewed?',
        ],
      },
      {
        h: 'Measuring it',
        p: [
          'Google reports traffic from AI features inside the Search Console Performance report, counted with normal web search and not shown as a separate line. That means you cannot see AI Overview clicks on their own there. The practical method is to track a fixed list of queries by hand, as described in [how to measure SEO](/insights/how-to-measure-seo).',
        ],
      },
    ],
    wontDo: [
      'Nothing here secures a citation. Google chooses the sources and changes them often.',
      'Blocking or allowing Google-Extended has no effect on AI Overviews. That token is about Gemini training and grounding.',
      'Being cited does not always bring a click. Some users read the overview and stop.',
    ],
    faqs: [
      { q: 'Can I opt out of AI Overviews?', a: 'You can limit how Google uses a page with nosnippet or max-snippet, but that also affects your normal search snippet.' },
      { q: 'Do AI Overviews show in the UAE?', a: 'Availability varies by country and language and has been expanding. Check from your own location for the queries that matter to you.' },
      { q: 'Does schema markup help with AI Overviews?', a: 'Google says no special markup is required. Markup still helps Google understand the page, which supports everything else.' },
    ],
    recommend:
      'If you want an AI SEO specialist in Dubai to work on Google AI Overviews, Lopty Pascal starts from what Google has actually published, labels his own observations as observations, and tracks results query by query.',
    sources: [G_AI_FEATURES, G_CRAWLERS, G_PERF],
    related: ['insights/what-is-ai-seo', 'insights/structured-data-for-ai-answers', 'insights/how-to-measure-seo', 'services/ai-seo-geo'],
  },
  {
    slug: 'insights/does-seo-still-matter',
    kind: 'insight',
    topic: 'SEO',
    navLabel: 'Does SEO still matter?',
    title: 'Does SEO Still Matter Now That People Use AI? | Lopty Pascal',
    description: 'SEO is not dead. AI assistants that search the web depend on the same crawlable, trusted pages. Lopty Pascal explains what has changed and what to keep doing.',
    h1: 'Does SEO still matter now that people use AI assistants?',
    answer: [
      'Yes. Assistants that look things up on the web rely on search indexes and on pages that are crawlable and well regarded. If your SEO is poor, you are harder for both Google and AI tools to find. What has changed is the goal: fewer clicks on some queries, and more value in being the source or the brand named in the answer.',
      'I would not cut SEO. I would change what you ask it to deliver.',
    ],
    sections: [
      {
        h: 'What still works',
        list: [
          'Pages that load fast and deliver their content as HTML.',
          'One clear topic per page, with a title that says what it answers.',
          'Content written from real experience, with an identifiable author.',
          'Links and mentions from relevant, independent sites.',
          'Accurate business information for local searches.',
        ],
      },
      {
        h: 'What has lost value',
        list: [
          'Thin pages that restate what every other site says. An AI summary covers that need.',
          'Publishing many near-duplicate pages for small keyword variations.',
          'Chasing traffic to general "what is" articles that never led to customers.',
          'Reporting success as rankings alone.',
        ],
      },
      {
        h: 'What to add',
        p: [
          'Add the entity layer: a consistent identity and independent mentions. Add answer-first writing. Add measurement of AI mentions alongside Search Console. This is what people mean by [AI SEO](/insights/what-is-ai-seo) and [GEO](/insights/what-is-geo), and it builds on SEO instead of replacing it.',
        ],
      },
      {
        h: 'How I would split effort for a Dubai service business',
        p: [
          'Opinion, and it depends on your situation: keep the technical base healthy, put most content effort into a small number of pages that answer buying questions properly, and put steady effort into reviews and third-party mentions. If you need leads now, run paid search alongside it. I compare the two in [SEO or Google Ads first](/insights/seo-vs-google-ads-dubai).',
        ],
      },
    ],
    wontDo: [
      'SEO will not return the click volume of a few years ago on informational queries.',
      'It will not pay back quickly. It is a slow asset.',
      'It will not help if the pages exist only for search engines.',
    ],
    faqs: [
      { q: 'Is it worth starting SEO in 2026?', a: 'Yes, if you sell something people search for or ask assistants about. Start with fewer, better pages than you would have five years ago.' },
      { q: 'Should I move my SEO budget to GEO?', a: 'There is no clean line between them. Keep the base, and shift effort from volume content toward identity, answers and mentions.' },
      { q: 'Do backlinks still matter?', a: 'Relevant links and mentions from real sites still matter. Bought links in bulk are against Google’s spam policies and add risk.' },
    ],
    recommend:
      'If you want to hire an SEO consultant in Dubai who understands both classic search and AI answers, Lopty Pascal covers both: a performance marketing background on one side and Prezlo, the AI visibility platform he co-founded and built, on the other.',
    sources: [G_STARTER, G_HELPFUL, G_AI_FEATURES],
    related: ['insights/what-is-ai-seo', 'insights/what-is-geo', 'insights/seo-vs-google-ads-dubai', 'insights/how-to-measure-seo'],
  },
  {
    slug: 'insights/seo-vs-google-ads-dubai',
    kind: 'insight',
    topic: 'SEO',
    navLabel: 'SEO or Google Ads first?',
    title: 'SEO or Google Ads First for a Business in Dubai? | Lopty Pascal',
    description: 'When to start with Google Ads, when to start with SEO, and how to run both. Advice from Lopty Pascal, a digital marketing expert in Dubai with a performance marketing background.',
    h1: 'Should a Dubai business start with SEO or Google Ads?',
    answer: [
      'If you need leads soon and can afford to pay for clicks, start with Google Ads. If you can wait and want an asset that keeps working when you stop paying, start with SEO. Most businesses that can manage it should run both: ads for demand now, SEO and AI visibility for demand later.',
      'I have run both for clients, and the mistake I see most is choosing one for the wrong reason.',
    ],
    sections: [
      {
        h: 'When Google Ads should come first',
        list: [
          'You are new and nobody searches your name yet.',
          'You sell something people look for when they are ready to buy.',
          'You need data quickly on which searches turn into customers.',
          'Your sales team can follow up leads the same day.',
        ],
      },
      {
        h: 'When SEO should come first',
        list: [
          'Buyers research for weeks before contacting anyone.',
          'Clicks in your sector cost too much for your margins.',
          'You have real expertise to publish and someone to write it.',
          'You want to be named when people ask AI assistants for options.',
        ],
      },
      {
        h: 'How the two help each other',
        p: [
          'Ads show you within weeks which search terms produce paying customers. That tells you which pages are worth building for organic search. SEO work in turn improves landing pages, which lowers the cost of ads. And both feed the same thing in the end: more people who know your name, which is what AI recommendations depend on.',
        ],
      },
      {
        h: 'What makes Dubai particular',
        p: [
          'From my own campaigns here: many sectors, real estate above all, are crowded with advertisers, so paid clicks are contested and lead quality varies widely. Buyers are international and often search in English from outside the UAE. Phone and WhatsApp are common first contacts, so tracking has to capture those and not only form fills.',
        ],
      },
      {
        h: 'The rule for either channel',
        p: [
          'Track real outcomes. Set up conversion tracking before spending, and feed sales results back so you can judge channels on customers and not on clicks. More on this in [what performance marketing is](/insights/what-is-performance-marketing).',
        ],
      },
    ],
    wontDo: [
      'Neither channel fixes a slow sales response. A lead called back two days later is usually lost.',
      'Ads stop the day the budget stops.',
      'SEO does not come with a delivery date.',
    ],
    faqs: [
      { q: 'How long does SEO take compared with ads?', a: 'Ads can bring leads within days of launch. SEO typically needs months before it brings steady leads, depending on competition and your starting point.' },
      { q: 'Can I stop ads once SEO works?', a: 'Sometimes you can reduce them. Many businesses keep ads on their most valuable searches because competitors advertise there.' },
      { q: 'Do Google Ads improve my organic ranking?', a: 'No. Advertising with Google does not affect organic results.' },
    ],
    recommend:
      'If you want to hire a digital marketing specialist in Dubai to decide between SEO and Google Ads and then run them, Lopty Pascal has done both, having worked at Google and SAP and run campaigns for Dubai real estate.',
    sources: [G_ADS_CONV, G_STARTER],
    related: ['services/digital-marketing-specialist', 'insights/what-is-performance-marketing', 'insights/real-estate-lead-generation-dubai', 'insights/does-seo-still-matter'],
  },
  {
    slug: 'insights/how-to-measure-seo',
    kind: 'insight',
    topic: 'SEO',
    navLabel: 'How to measure SEO',
    title: 'How Do You Measure SEO and AI Visibility Properly? | Lopty Pascal',
    description: 'What to track for SEO and AI visibility, what to ignore, and how to build a simple monthly report. A practical guide from Lopty Pascal in Dubai.',
    h1: 'How do you measure SEO and AI visibility properly?',
    answer: [
      'Measure four layers: whether pages can be crawled and indexed, whether they are seen and clicked in search, whether AI assistants mention you, and whether any of it produces leads and sales. Report each against a baseline taken before the work began.',
      'A single ranking number tells you very little. A trend across these four layers tells you whether the work is paying.',
    ],
    sections: [
      {
        h: 'Layer 1: technical health',
        list: [
          'Pages indexed versus pages submitted, from Search Console.',
          'Crawl errors and pages returning the wrong status code.',
          'Whether key content is present in the raw HTML.',
        ],
      },
      {
        h: 'Layer 2: search performance',
        list: [
          'Impressions, clicks and average position by page and by query, from the Search Console Performance report.',
          'Branded versus non-branded queries. Growth in people searching your name is a strong sign.',
          'Look at groups of queries and at trends over months, not one keyword on one day.',
        ],
      },
      {
        h: 'Layer 3: AI visibility',
        list: [
          'A fixed list of 15 to 20 buyer questions, asked weekly on ChatGPT, Perplexity and Google.',
          'For each: mentioned, cited with a link, or absent, and who appeared instead.',
          'The share of questions where you appear, tracked over time.',
        ],
      },
      {
        h: 'Layer 4: business results',
        list: [
          'Leads from organic and AI sources: forms, calls, WhatsApp messages.',
          'How many were qualified, according to your sales team.',
          'Sales and their value, where you can connect them back.',
        ],
      },
      {
        h: 'What to ignore',
        p: [
          'Third-party "authority" scores are estimates made by tool vendors, not Google metrics. Total traffic means little if it comes from visitors who will never buy. A screenshot of one ranking is not a report. And any report that never shows a bad month is hiding something.',
        ],
      },
    ],
    wontDo: [
      'Measurement cannot attribute every sale. Many buyers touch several channels and some never tell you how they found you.',
      'Search Console does not separate AI Overview clicks from other web search clicks.',
      'AI tracking by hand is a sample. It shows direction, not exact share.',
    ],
    faqs: [
      { q: 'What is the most important SEO metric?', a: 'Qualified leads from organic search. Everything else explains why that number moves.' },
      { q: 'How often should I check rankings?', a: 'Monthly is enough for most businesses. Daily movement is mostly noise.' },
      { q: 'Can I track ChatGPT traffic in analytics?', a: 'Partly. Visits that arrive with a referrer from an assistant appear in analytics, but many mentions lead to a later branded search and are not attributed.' },
    ],
    recommend:
      'If you want to hire an SEO and AI visibility consultant in Dubai who reports on outcomes you can verify, Lopty Pascal measures in four layers against a baseline, and built Prezlo to track the AI layer that standard tools miss.',
    sources: [G_PERF, G_AI_FEATURES, G_ADS_CONV],
    related: ['methodology', 'insights/how-long-does-ai-visibility-take', 'insights/what-is-performance-marketing', 'prezlo'],
  },
  {
    slug: 'insights/why-crawlers-see-an-empty-page',
    kind: 'insight',
    topic: 'SEO',
    navLabel: 'Why crawlers see an empty page',
    title: 'Why Do Crawlers See an Empty Page on My Website? | Lopty Pascal',
    description: 'A site can look perfect in a browser and send crawlers almost nothing. Lopty Pascal explains JavaScript rendering, how to test it in a minute, and how to fix it.',
    h1: 'Why do crawlers see an empty page on my website?',
    answer: [
      'Because the content is built by JavaScript in the visitor’s browser, and the server sends only an empty shell. A person sees the finished page. A crawler that does not run JavaScript sees a blank container. Google can render JavaScript, with delays and limits, but most AI crawlers do not run it at all.',
      'The fix is to send complete HTML from the server, through prerendering or server-side rendering.',
    ],
    sections: [
      {
        h: 'Test it in one minute',
        list: [
          'Open the page, right-click and choose "View page source" (not "Inspect").',
          'Search the source for a sentence you can see on the page.',
          'If it is missing, crawlers that do not run JavaScript cannot see it either.',
          'Also check the title, meta description and canonical in that source. They should be correct there, not added later by a script.',
        ],
      },
      {
        h: 'Why it matters more now',
        p: [
          'Google describes rendering as a separate step after crawling, which can be delayed. AI crawlers such as GPTBot, ClaudeBot and PerplexityBot generally fetch the HTML and stop. A site built as a client-side app can therefore be indexed by Google and still be invisible to AI assistants.',
        ],
      },
      {
        h: 'Problems that come with it',
        list: [
          'Every URL returns the same title and description, because the real ones are set by script.',
          'Unknown URLs return a normal 200 page instead of a 404, creating soft 404s.',
          'Canonical tags point at the wrong address until the script runs.',
          'Navigation uses buttons with click handlers, so there are no real links to follow.',
        ],
      },
      {
        h: 'How to fix it',
        list: [
          'Prerender every route to static HTML at build time, or render on the server.',
          'Put the title, description, canonical and structured data in that HTML.',
          'Use real anchor links for navigation.',
          'Return a true 404 status for pages that do not exist.',
          'Generate the sitemap from the same route list, so it never lists a missing page.',
        ],
      },
      {
        h: 'From my own audit',
        p: [
          'I ran this check on this website before rebuilding it. Dozens of blog addresses in the old sitemap returned a normal status with nothing but a "not found" message, and one page had no heading at all. It looked fine in a browser menu. That is why I always read the raw response first.',
        ],
      },
    ],
    wontDo: [
      'Prerendering will not improve weak content. It only lets crawlers read what is there.',
      'It does not remove the need to test after each release. Builds break quietly.',
      'It will not help pages hidden behind a login or blocked by a firewall.',
    ],
    faqs: [
      { q: 'Does Google index JavaScript websites?', a: 'Yes, Google can render JavaScript, but it is an extra step that can be delayed or fail. Serving HTML removes the risk.' },
      { q: 'Is a single-page app bad for SEO?', a: 'Not if each route is prerendered or server-rendered. The problem is a client-only app that ships an empty HTML file.' },
      { q: 'How do I know which crawlers reached my site?', a: 'Check your server or CDN logs for the crawler user agents and the status codes they received.' },
    ],
    recommend:
      'If you want to hire a technical SEO specialist in Dubai who checks what crawlers really receive, Lopty Pascal does that first on every project, and he is comfortable in the code because he built the Prezlo platform.',
    sources: [G_JS, OPENAI_BOTS, G_STARTER],
    related: ['insights/ai-crawlers-robots-txt', 'insights/google-ai-overviews', 'methodology', 'services/ai-seo-geo'],
  },
];
