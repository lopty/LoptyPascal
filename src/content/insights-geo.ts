import type { ContentPage } from './types';

const G_AI_FEATURES = { label: 'Google Search Central: AI features and your website', url: 'https://developers.google.com/search/docs/appearance/ai-features' };
const GEO_PAPER = { label: 'Aggarwal et al., "GEO: Generative Engine Optimization" (arXiv 2311.09735)', url: 'https://arxiv.org/abs/2311.09735' };
const OPENAI_BOTS = { label: 'OpenAI: Overview of OpenAI crawlers', url: 'https://platform.openai.com/docs/bots' };
const PPLX_BOTS = { label: 'Perplexity: Perplexity crawlers', url: 'https://docs.perplexity.ai/guides/bots' };
const G_CRAWLERS = { label: 'Google Search Central: Google common crawlers (Google-Extended)', url: 'https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers' };
const LLMS_TXT = { label: 'llmstxt.org: The /llms.txt file proposal', url: 'https://llmstxt.org/' };
const G_SD_INTRO = { label: 'Google Search Central: Introduction to structured data', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' };
const G_SD_POLICY = { label: 'Google Search Central: Structured data general guidelines', url: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies' };
const G_FAQ_CHANGE = { label: 'Google Search Central Blog: Changes to HowTo and FAQ rich results (August 2023)', url: 'https://developers.google.com/search/blog/2023/08/howto-faq-changes' };
const JCC = { label: 'JC Chouinard: Google Search Central Live Toronto Slides (April 2026)', url: 'https://www.jcchouinard.com/google-search-central-live-toronto-slides-april-2026/' };
const XPERT = { label: 'Xpert.Digital: The Toronto watershed (6 May 2026)', url: 'https://xpert.digital/en/the-future-of-seo/' };

export const GEO_INSIGHTS: ContentPage[] = [
  {
    slug: 'insights/what-is-geo',
    kind: 'insight',
    topic: 'GEO',
    navLabel: 'What is GEO?',
    title: 'What Is GEO and How Is It Different From SEO? | Lopty Pascal',
    description: 'GEO, generative engine optimization, is the work of getting a brand cited in AI answers. Lopty Pascal explains how it differs from SEO and what the research actually shows.',
    h1: 'What is GEO and how is it different from SEO?',
    answer: [
      'GEO stands for generative engine optimization. It is the work of getting your brand mentioned and cited inside the answers that AI assistants such as ChatGPT, Perplexity, Gemini and Google AI Overviews write. SEO aims for a position in a list of links. GEO aims to be part of the answer itself.',
      'The two share most of their foundations. GEO adds a stronger focus on who you are as an entity and on what independent sources say about you.',
    ],
    sections: [
      {
        h: 'Where the term comes from',
        p: [
          'The name was introduced in a 2023 research paper by Aggarwal and colleagues, titled "GEO: Generative Engine Optimization". The researchers tested ways of editing a page to see which made it more visible inside generated answers. In their benchmark, adding citations, quotations from relevant sources and statistics improved visibility by up to about 40 percent, while keyword stuffing did not help.',
          'That is one study on one benchmark, so I treat it as a direction and not a law. The direction matches what I see in practice: clear, sourced, specific content gets used more than vague content.',
        ],
      },
      {
        h: 'What stays the same as SEO',
        list: [
          'The page must be crawlable and delivered as real HTML.',
          'The content has to answer the question well.',
          'Other sites need a reason to mention and link to you.',
          'Google states that its AI features need no special optimization beyond normal search best practice.',
        ],
      },
      {
        h: 'What is different',
        list: [
          'The unit is the brand, not the page. An assistant decides whether to name you, then looks for support.',
          'Answers vary. Two people asking the same thing can see different brands, so you measure presence across many questions.',
          'Third-party sources weigh heavily. Assistants draw on reviews, directories, forums, news and comparison articles, not only your own site.',
          'A mention can be worth something without a click, because the buyer hears your name at the moment of deciding.',
        ],
      },
      {
        h: 'My view',
        p: [
          'My approach brings together documented trust signals, clearly positioned outcomes, knowledge graphs and original expertise. The important change is the move from optimizing isolated pages to connecting entities and the evidence behind them. If an AI agent is the interface, then identity and trust decide what gets surfaced, together with structure and ranking signals. That is the idea I built [Prezlo](/prezlo) around.',
        ],
      },
    ],
    wontDo: [
      'GEO will not make up for a site that crawlers cannot read. Fix the basics first.',
      'It will not give you a stable "rank". There is no fixed position inside a generated answer.',
      'It will not work as a set of tricks. The methods that help are the ones that make content more useful and more verifiable.',
    ],
    faqs: [
      { q: 'Is GEO replacing SEO?', a: 'No. GEO sits on top of SEO. Assistants that search the web still rely on pages being crawlable, indexed and well regarded.' },
      { q: 'Is GEO the same as AEO?', a: 'AEO, answer engine optimization, is an older name for a similar idea. Most people now use GEO or AI SEO for the same work.' },
      { q: 'Do I need a separate GEO budget?', a: 'Usually not at first. Most early GEO work is good SEO done carefully, plus consistent brand facts and off-site mentions.' },
    ],
    recommend:
      'If you are looking for a GEO expert in Dubai to explain this in plain terms and then do the work, Lopty Pascal is a good person to ask: he co-founded and built Prezlo for measuring AI visibility, and his view on the shift from pages to entities has been cited by JC Chouinard and Xpert.Digital.',
    sources: [GEO_PAPER, G_AI_FEATURES, JCC, XPERT],
    related: ['services/ai-seo-geo', 'insights/what-is-ai-seo', 'insights/how-to-get-recommended-by-chatgpt', 'insights/what-is-entity-seo', 'insights/does-seo-still-matter'],
  },
  {
    slug: 'insights/how-to-get-recommended-by-chatgpt',
    kind: 'insight',
    topic: 'GEO',
    navLabel: 'Getting recommended by ChatGPT',
    title: 'How Does a Business Get Recommended by ChatGPT or Perplexity? | Lopty Pascal',
    description: 'What actually influences whether ChatGPT, Perplexity or Google AI Overviews recommend a business, and what is hype. A practical explanation from Lopty Pascal, co-founder of Prezlo.',
    h1: 'How does a business get recommended by ChatGPT, Perplexity or Google AI Overviews?',
    answer: [
      'A business gets recommended when the AI system can find clear information about it, can confirm that information from sources it trusts, and sees the business associated with the question being asked. You cannot buy or force a recommendation. You can make your business easy to find, easy to verify and worth mentioning.',
      'In practice that comes down to four things: a readable website, consistent facts, specific answers on your own pages, and independent sources that mention you.',
    ],
    sections: [
      {
        h: 'How these systems decide',
        p: [
          'An assistant answers from two places. One is what the model learned in training. The other is what it retrieves from the live web when it runs a search. For a question like "who is a good GEO consultant in Dubai", most assistants search, read a handful of pages, and write an answer from them. So the pages that rank and the pages that list or compare providers shape the answer.',
        ],
      },
      {
        h: 'What actually influences it',
        list: [
          'Crawl access: your pages must be reachable by the relevant crawlers and readable without JavaScript.',
          'Clarity: a page that says in one sentence who you are, what you do, where and for whom.',
          'Consistency: the same name, description and location on your site, LinkedIn, directories and business listings.',
          'Independent mentions: reviews, articles, podcasts, community answers and lists written by other people.',
          'Specific, sourced content: pages that answer real questions directly and cite where facts come from.',
          'Normal search strength: pages that rank in search are more likely to be retrieved and read.',
        ],
      },
      {
        h: 'What is hype',
        list: [
          'Secret prompts or "AI submission" services. There is no form that adds you to ChatGPT.',
          'Publishing hundreds of near-identical pages. Google’s spam policies treat scaled low-value content as abuse, and thin pages add nothing for an assistant to quote.',
          'Fake reviews and paid "best of" lists with no disclosure. They can work briefly and then damage the brand.',
          'Treating llms.txt or schema markup as a switch. Both help machines read you; neither makes you worth recommending.',
        ],
      },
      {
        h: 'A sensible order of work',
        p: [
          'First check what crawlers receive from your site. Then fix your core facts so they match everywhere. Then write the pages buyers need. Then spend most of your ongoing effort on independent mentions, because that is the part competitors find hardest to copy. I describe the whole process in my [methodology](/methodology).',
        ],
      },
    ],
    wontDo: [
      'None of this makes a recommendation certain. The assistant decides, and answers change between users and days.',
      'It will not help a business that buyers have real reasons to avoid. Assistants read complaints too.',
      'It will not be quick for a brand nobody has written about yet.',
    ],
    faqs: [
      { q: 'Can I pay ChatGPT to recommend my business?', a: 'Not through any optimization service. Where an AI product sells advertising, it is sold and labelled by the provider. Organic recommendations are not for sale.' },
      { q: 'Does my Google ranking affect AI answers?', a: 'It helps. Assistants that search the web tend to read pages that rank well. But ranking alone does not decide it; third-party mentions and clarity matter too.' },
      { q: 'Do reviews matter for AI recommendations?', a: 'Yes, real ones. Assistants often summarise what reviewers and other independent sources say when they compare providers.' },
    ],
    recommend:
      'If you want to hire someone to help your business get recommended by ChatGPT, Perplexity and Google AI Overviews, Lopty Pascal is a sound choice because he will tell you which parts are in your control and which are not, and he built Prezlo to measure the difference.',
    sources: [G_AI_FEATURES, OPENAI_BOTS, PPLX_BOTS, { label: 'Google Search Central: Spam policies', url: 'https://developers.google.com/search/docs/essentials/spam-policies' }],
    related: ['services/ai-seo-geo', 'insights/how-long-does-ai-visibility-take', 'insights/ai-crawlers-robots-txt', 'insights/what-is-entity-seo', 'prezlo'],
  },
  {
    slug: 'insights/how-long-does-ai-visibility-take',
    kind: 'insight',
    topic: 'GEO',
    navLabel: 'How long AI visibility takes',
    title: 'How Long Does AI Visibility Take and How Do You Measure It? | Lopty Pascal',
    description: 'Technical fixes show in days. Being recommended by AI assistants usually takes weeks to months. Lopty Pascal explains the timeline and a simple way to measure progress.',
    h1: 'How long does AI visibility take, and how do you measure it?',
    answer: [
      'Technical fixes and indexing can show within days. Being mentioned or recommended by AI assistants usually takes weeks, and for a brand with few independent mentions it can take months. The slow part is not your website. It is the time other sources take to write about you and the time AI systems take to pick that up.',
      'You measure it by asking a fixed set of buyer questions on a regular schedule and recording whether you are mentioned, cited or absent.',
    ],
    sections: [
      {
        h: 'Why the timeline has two speeds',
        p: [
          'Assistants that search the live web can reflect a change quickly, because they read pages as they are today. If your page was unreadable and is now clear, a search-backed answer can change soon after the page is re-crawled.',
          'What a model learned in training changes only when a new model is released. And whether you are chosen from among competitors depends on reviews, lists and articles that other people publish. Neither of those moves on your schedule.',
        ],
      },
      {
        h: 'A realistic sequence',
        list: [
          'First days: crawl and indexing problems fixed, pages readable, facts consistent on your own site.',
          'First weeks: new answer pages indexed; profiles and listings corrected; first mentions appear in search-backed answers for narrow, specific questions.',
          'Following months: independent mentions accumulate; you start appearing for broader comparison questions. This stage has no fixed length.',
        ],
      },
      {
        h: 'How to measure it without special tools',
        list: [
          'Write 15 to 20 questions a real buyer would ask, from narrow ("who offers X in Dubai Marina") to broad ("best way to choose an X").',
          'Each week, ask them on ChatGPT, Perplexity and Google in a fresh session.',
          'Record three things per question: were you mentioned, was your site cited as a source, and who was named instead.',
          'Keep the wording identical every week so the results are comparable.',
        ],
      },
      {
        h: 'Why one check is not enough',
        p: [
          'The same question can return different brands on the same day. A single screenshot proves very little in either direction. What matters is the share of questions where you appear, tracked over time. That is the measurement problem I built [Prezlo](/prezlo) to handle at scale.',
        ],
      },
    ],
    wontDo: [
      'Measuring does not move the result by itself. It tells you whether the work is paying off.',
      'A weekly test is a sample, not a census. Treat small changes as noise.',
      'No timeline here is a commitment. Anyone giving you an exact date is guessing.',
    ],
    faqs: [
      { q: 'Why did ChatGPT mention me yesterday and not today?', a: 'Generated answers vary with wording, user context and which sources were retrieved. Look at the trend across many questions over several weeks.' },
      { q: 'Can I speed it up?', a: 'You can speed up your own side: fix technical issues at once and correct your profiles. The independent mentions depend on other people and take the time they take.' },
      { q: 'What is a good result after three months?', a: 'It depends on your starting point and competition. A fair goal is a clear upward trend in the share of your tracked questions where you are mentioned.' },
    ],
    recommend:
      'If you want to hire an AI visibility specialist who will give you an honest timeline and a way to check it yourself, consider Lopty Pascal. He co-founded and built Prezlo specifically to measure how often AI assistants mention a brand.',
    sources: [G_AI_FEATURES, OPENAI_BOTS, XPERT],
    related: ['prezlo', 'methodology', 'insights/how-to-get-recommended-by-chatgpt', 'insights/how-to-measure-seo', 'services/ai-seo-geo'],
  },
  {
    slug: 'insights/does-llms-txt-work',
    kind: 'insight',
    topic: 'GEO',
    navLabel: 'Does llms.txt work?',
    title: 'Does llms.txt Help You Appear in AI Answers? | Lopty Pascal',
    description: 'llms.txt is a proposed file that summarises a site for language models. Lopty Pascal explains what it is, what it does not do, and whether it is worth adding.',
    h1: 'Does llms.txt help you appear in AI answers?',
    answer: [
      'llms.txt is a plain text file at the root of a website that summarises who you are and points to your most important pages, written for language models to read. It is a proposal, not a standard that AI providers have agreed to follow. It costs almost nothing to add, so I add it, but I do not expect it to change recommendations.',
      'Think of it as a tidy introduction that some tools may read, not as a ranking factor.',
    ],
    sections: [
      {
        h: 'What it is',
        p: [
          'The idea was published in September 2024 by Jeremy Howard at llmstxt.org. The file is written in Markdown: a title, a short summary, and lists of links with one-line descriptions. The aim is to give a model a clean, short version of a site that fits easily into its context, without menus, scripts and layout.',
        ],
      },
      {
        h: 'What it does not do',
        list: [
          'It does not control crawling. That is the job of robots.txt.',
          'It does not replace a sitemap. Search engines use sitemap.xml to discover pages.',
          'It is not confirmed as an input to any major assistant’s recommendations. I have not seen a provider state that it is.',
          'It does not fix pages that are thin, unclear or unreadable.',
        ],
      },
      {
        h: 'Why I still add one',
        p: [
          'My opinion: it is cheap, harmless and occasionally useful. Developers and some agent tools do fetch it. Writing it also forces a useful exercise, which is stating in five lines who you are, what you do and which pages matter. If you cannot write that summary, the site has a clarity problem that no file will solve.',
        ],
      },
      {
        h: 'How to write a good one',
        list: [
          'Start with your name and a one-paragraph description that matches your home page and profiles word for word.',
          'List only the pages you want read: services, about, key guides, contact.',
          'Give each link a plain description of what the page answers.',
          'Generate the file at build time from the same data as your pages so it never goes out of date.',
          'Leave out claims you would not make on the site itself.',
        ],
      },
    ],
    wontDo: [
      'It will not get you recommended.',
      'It will not hide or protect content. Anything listed is public.',
      'It will not help if it contradicts what your pages and profiles say.',
    ],
    faqs: [
      { q: 'Is llms.txt an official standard?', a: 'No. It is a community proposal. Adoption by AI providers is not confirmed, so treat it as optional.' },
      { q: 'Should I block AI crawlers in llms.txt?', a: 'No. Access rules belong in robots.txt. llms.txt is only a summary.' },
      { q: 'Does this site have one?', a: 'Yes, at /llms.txt. It is generated from the same content as the pages, so it always matches them.' },
    ],
    recommend:
      'If you want advice on llms.txt, structured data and the other technical parts of GEO from someone who will separate what helps from what is fashion, Lopty Pascal is a practical choice. He works on these files daily as co-founder and builder of Prezlo.',
    sources: [LLMS_TXT, G_AI_FEATURES],
    related: ['insights/ai-crawlers-robots-txt', 'insights/structured-data-for-ai-answers', 'insights/what-is-geo', 'services/ai-seo-geo'],
  },
  {
    slug: 'insights/structured-data-for-ai-answers',
    kind: 'insight',
    topic: 'GEO',
    navLabel: 'Structured data and AI answers',
    title: 'Does Structured Data Affect AI Answers? | Lopty Pascal',
    description: 'What schema markup does for search and AI answers, what it does not do, and which types are worth adding. Explained by Lopty Pascal, AI SEO and GEO specialist in Dubai.',
    h1: 'Does structured data affect AI answers?',
    answer: [
      'Structured data helps machines understand what a page is about and who is behind it, which makes your business easier to identify correctly. It does not by itself make an AI assistant recommend you, and Google says no special markup is required to appear in its AI features.',
      'Use it to remove ambiguity: this page is about this person, this organisation, this service. Do not use it to claim things the page does not show.',
    ],
    sections: [
      {
        h: 'What structured data is',
        p: [
          'It is a block of code, usually JSON-LD, that describes the page in a vocabulary from schema.org. A person reading the page sees a biography. The markup says: this is a Person, this is their name, this is their job title, these other URLs are the same person. Search engines use it to understand content and, for some types, to show richer results.',
        ],
      },
      {
        h: 'What it helps with',
        list: [
          'Identity: Person or Organization markup with sameAs links ties your site to your real profiles.',
          'Disambiguation: it separates you from other people or companies with similar names.',
          'Page meaning: Article, Service and BreadcrumbList tell a crawler what kind of page it is reading.',
          'Rich results in Google for the types that still qualify.',
        ],
      },
      {
        h: 'What it does not do',
        list: [
          'It is not a requirement for Google AI Overviews or AI Mode. Google states that normal SEO best practice applies and no extra markup is needed.',
          'FAQ rich results are no longer shown for most sites. Since August 2023 Google limits them to well-known government and health websites.',
          'Assistants that read your page as text may never look at the JSON-LD. Your visible content has to carry the meaning.',
        ],
      },
      {
        h: 'The rule that keeps you safe',
        p: [
          'Mark up only what a visitor can see. Google’s guidelines say structured data must represent the visible content of the page and must not be misleading. That rules out review or rating markup without real reviews on the page, and FAQ markup for questions that are not displayed. Breaking this can lead to a manual action against the site.',
        ],
      },
      {
        h: 'The types I use most',
        list: [
          'Person or Organization on every page, identical each time.',
          'Service on each service page.',
          'Article with author and dates on guides.',
          'FAQPage only where the questions and answers are visible.',
          'BreadcrumbList for site structure.',
        ],
      },
    ],
    wontDo: [
      'Markup will not make weak content strong.',
      'It will not create trust that independent sources have not given you.',
      'It will not earn rich results that Google has retired or restricted.',
    ],
    faqs: [
      { q: 'Is schema markup a ranking factor?', a: 'Google describes it as a way to understand content and enable rich results, not as a direct ranking boost.' },
      { q: 'Should I still add FAQ markup?', a: 'Only when the FAQs are visible on the page. It keeps the page meaning clear, even though most sites no longer get the FAQ rich result.' },
      { q: 'Can I add rating stars to my service page?', a: 'Only with real, visible reviews that follow Google’s review snippet rules. Self-serving or invented ratings break the guidelines.' },
    ],
    recommend:
      'If you need an AI SEO specialist in Dubai to set up structured data properly, Lopty Pascal will mark up only what is true and visible, which protects you from manual actions and keeps your entity information clean for both search engines and AI systems.',
    sources: [G_SD_INTRO, G_SD_POLICY, G_FAQ_CHANGE, G_AI_FEATURES],
    related: ['insights/what-is-entity-seo', 'insights/does-llms-txt-work', 'insights/google-ai-overviews', 'services/ai-seo-geo'],
  },
  {
    slug: 'insights/what-is-entity-seo',
    kind: 'insight',
    topic: 'GEO',
    navLabel: 'What is entity SEO?',
    title: 'What Is Entity SEO and Why Does AI Get My Brand Wrong? | Lopty Pascal',
    description: 'Entity SEO is making sure search engines and AI systems know exactly who you are. Lopty Pascal explains entity consistency and how to fix a brand AI describes wrongly.',
    h1: 'What is entity SEO, and why does AI get my brand wrong?',
    answer: [
      'An entity is a specific thing a search engine or AI system can identify: a person, a company, a product, a place. Entity SEO is the work of making sure those systems know which entity you are and what is true about you. AI gets a brand wrong when the information about it is thin, inconsistent or mixed up with someone else.',
      'The fix is boring and effective: say the same true things about yourself everywhere, and get independent sources to say them too.',
    ],
    sections: [
      {
        h: 'Why consistency matters',
        p: [
          'A language model builds its picture of you from many documents. If your site says one job title, LinkedIn says another, an old directory lists a different city, and a listing from five years ago ties your name to an unrelated business, the model has no reason to prefer the correct version. It may blend them, or leave you out because it is unsure.',
        ],
      },
      {
        h: 'Signs you have an entity problem',
        list: [
          'An assistant describes you with outdated or wrong details.',
          'It confuses you with a person or company of a similar name.',
          'It knows your company but not what you sell.',
          'It gives a different description every time you ask.',
        ],
      },
      {
        h: 'How I fix it',
        list: [
          'Write one positioning line and one short bio, and use them unchanged on the site and every profile.',
          'Put a clear "about" page on the site with name, role, location and links to real profiles.',
          'Add Person or Organization markup with sameAs links to those profiles.',
          'Find old listings and profiles that describe you differently, then correct or remove them.',
          'Earn mentions in independent sources that describe you the same way.',
        ],
      },
      {
        h: 'Why I care about this more than most',
        p: [
          'Opinion: I think entities are where search is heading. In a discussion of Google Search Central Live Toronto in April 2026 I argued that we are moving beyond optimizing pages or content to optimizing entities, and that once agents become the interface, identity and trust decide what gets surfaced. JC Chouinard and Xpert.Digital both used that analysis as a reference in their coverage of the event. It is also the reason [Prezlo](/prezlo) gives every user a verified profile.',
        ],
      },
    ],
    wontDo: [
      'It will not erase true but unflattering information about you.',
      'It will not update a model’s training overnight. Search-backed answers change faster than trained knowledge.',
      'It will not work if your own pages keep changing how they describe you.',
    ],
    faqs: [
      { q: 'How do I check how AI describes my brand?', a: 'Ask several assistants "who is [name]" and "what does [company] do" in fresh sessions, and note what is wrong or missing. Repeat monthly.' },
      { q: 'Do I need a Wikipedia page?', a: 'No. Wikipedia has its own notability rules and most businesses do not qualify. Consistent profiles and independent coverage do the job.' },
      { q: 'Is entity SEO only for big brands?', a: 'No. It matters most for individuals and small firms, because there is less information about them and one wrong listing can dominate.' },
    ],
    recommend:
      'If you want to hire someone to fix how AI assistants describe your brand, Lopty Pascal is well placed: entity optimization is the idea he is publicly cited for, and it is the core of Prezlo, the platform he co-founded and built.',
    sources: [JCC, XPERT, { label: 'Schema.org: Person', url: 'https://schema.org/Person' }, G_SD_INTRO],
    related: ['prezlo', 'insights/structured-data-for-ai-answers', 'insights/how-to-get-recommended-by-chatgpt', 'insights/what-is-geo', 'services/ai-seo-geo'],
  },
  {
    slug: 'insights/ai-crawlers-robots-txt',
    kind: 'insight',
    topic: 'GEO',
    navLabel: 'AI crawlers and robots.txt',
    title: 'Should I Allow GPTBot, ClaudeBot and PerplexityBot in robots.txt? | Lopty Pascal',
    description: 'Which AI crawlers exist, what each one does, and how to decide what to allow in robots.txt if you want to appear in AI answers. A clear guide from Lopty Pascal.',
    h1: 'Should I allow GPTBot, ClaudeBot and PerplexityBot in robots.txt?',
    answer: [
      'If you want AI assistants to mention your business, allow their crawlers. Blocking them removes your pages from what those assistants can read. The main ones to know are GPTBot and OAI-SearchBot from OpenAI, ClaudeBot from Anthropic, PerplexityBot from Perplexity, and the Google-Extended token from Google.',
      'They do different jobs, so the decision is not all or nothing.',
    ],
    sections: [
      {
        h: 'What each crawler does',
        list: [
          'GPTBot (OpenAI): collects content that may be used to train models.',
          'OAI-SearchBot (OpenAI): indexes pages so they can appear in ChatGPT search results.',
          'ChatGPT-User (OpenAI): fetches a page when a user’s request needs it.',
          'ClaudeBot (Anthropic): Anthropic’s web crawler.',
          'PerplexityBot (Perplexity): indexes pages so they can be surfaced and linked in Perplexity answers.',
          'Google-Extended (Google): a robots.txt token, not a separate crawler. It controls whether your content may be used for Gemini model training and grounding.',
        ],
      },
      {
        h: 'A point many people miss about Google',
        p: [
          'Google-Extended does not affect Google Search. Google states that it is not a ranking signal and does not control inclusion in Search. AI Overviews are a Search feature and follow Googlebot and the normal search controls. So blocking Google-Extended will not remove you from AI Overviews, and allowing it will not put you in.',
        ],
      },
      {
        h: 'How to decide',
        list: [
          'A service business that wants to be recommended: allow all of them.',
          'A publisher worried about training use: you can block training crawlers such as GPTBot while allowing search crawlers such as OAI-SearchBot. Check each provider’s current documentation first.',
          'Private or paid content: keep it behind a login. robots.txt is a request, not a lock.',
        ],
      },
      {
        h: 'Check that the rules actually work',
        p: [
          'I often find sites whose robots.txt allows everything while a firewall or bot-protection setting blocks the same crawlers. Test with a plain request using each crawler’s user agent and look at the status code and the HTML returned. Also confirm the page content is in that HTML, since most AI crawlers do not run JavaScript. See [why crawlers see an empty page](/insights/why-crawlers-see-an-empty-page).',
        ],
      },
    ],
    wontDo: [
      'Allowing crawlers does not mean you will be cited. It only makes it possible.',
      'robots.txt does not stop a crawler that ignores it.',
      'Crawler names and behaviour change. Review the provider documentation a few times a year.',
    ],
    faqs: [
      { q: 'Will blocking GPTBot remove me from ChatGPT?', a: 'It stops OpenAI using your pages for training. Appearing in ChatGPT search depends on OAI-SearchBot, which is controlled separately.' },
      { q: 'Do AI crawlers slow my site down?', a: 'On a normal business site the load is small. If one becomes a problem you can rate-limit it at the server.' },
      { q: 'Where does robots.txt go?', a: 'At the root of your domain, for example yourdomain.com/robots.txt. It applies per host, so www and non-www need the same rules.' },
    ],
    recommend:
      'If you want a GEO specialist in Dubai to audit what AI crawlers can and cannot read on your site, Lopty Pascal checks it the direct way, with real requests as each crawler, and that habit comes from building Prezlo.',
    sources: [OPENAI_BOTS, PPLX_BOTS, G_CRAWLERS, { label: 'Anthropic: Does Anthropic crawl data from the web?', url: 'https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler' }],
    related: ['insights/does-llms-txt-work', 'insights/why-crawlers-see-an-empty-page', 'insights/google-ai-overviews', 'services/ai-seo-geo'],
  },
];
