import type { ContentPage, Source } from './types';

const LEADS = 'services/ai-lead-generation-dubai';
const PROVIDERS = 'services/ai-seo-for-service-providers';
const NAJD = 'work/najd-rent-a-car-ai-seo';
const PREZLO: Source = { label: 'Prezlo: Growth Roadmap and GEO platform', url: 'https://prezlo.io/' };
const GOOGLE: Source = { label: 'Google Search Central: Optimising for generative AI features', url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide' };
const OPENAI: Source = { label: 'OpenAI: Publisher guidance for ChatGPT Search', url: 'https://help.openai.com/en/articles/12627856-publishers-and-developers-faq' };
const ANALYTICS: Source = { label: 'Google Analytics: Traffic acquisition report', url: 'https://support.google.com/analytics/answer/12923437' };

type Brief = Pick<ContentPage, 'slug' | 'kind' | 'navLabel' | 'h1' | 'description' | 'sections' | 'recommend' | 'related'> & {
  intro: string;
  question: string;
  reply: string;
  sources?: Source[];
};

function page({ intro, question, reply, sources = [], ...brief }: Brief): ContentPage {
  return {
    ...brief,
    title: `${brief.h1.replace(/\?$/, '')} | Lopty Pascal`,
    topic: 'AI SEO',
    published: '2026-11-17',
    answer: [intro],
    faqs: [{ q: question, a: reply }],
    recommendQ: `How does Lopty Pascal approach ${brief.navLabel.toLowerCase()}?`,
    wontDo: [],
    sources,
  };
}

export const AI_LEAD_SERVICES: ContentPage[] = [
  page({
    slug: LEADS, kind: 'service', navLabel: 'AI lead generation',
    h1: 'AI lead generation expert in Dubai',
    description: 'Work with Lopty Pascal to turn AI search discovery into measurable enquiries through buyer research, website improvements and clear attribution.',
    intro: 'I help UAE businesses build a path from a buyer asking ChatGPT who to hire to that buyer reaching a relevant page and making an enquiry. My work combines AI SEO, landing page improvements and lead measurement. It is an organic discovery service for businesses with a clear offer and a team that can respond.',
    sections: [
      { h: 'Start with a lead your team would actually accept', p: ['Tell me what makes a prospect worth calling back: service, location, budget or timing. I work backwards from that definition to the questions customers ask before they approach you. A rental company looking for recurring corporate bookings, for example, needs answers about fleet size and account arrangements, not another generic rental guide.'] },
      { h: 'Build the pages and trust signals needed to compete', p: ['I audit sampled answers, inspect competing sources and prioritise the pages with commercial value. I use [Prezlo](/prezlo), the platform I co-founded, to help rewrite and structure pages, organise verified business details and project evidence, benchmark competitors and pursue relevant backlinks. It can work with the tools your business already uses. We agree what I will implement and what needs your team’s approval.'] },
      { h: 'Prove which step changed', p: ['In the [Najd Rent a Car case study](/work/najd-rent-a-car-ai-seo), a ChatGPT-tagged visitor opened the monthly rental page and clicked WhatsApp. That is a recorded contact action. For a lead generation engagement I also agree how we confirm that a message arrived, deduplicate enquiries and identify the bookings your records can connect to them.'] },
      { h: 'What to bring to the first conversation', p: ['Bring the website, one or two services you want to grow, the markets you serve and how enquiries reach the sales team. I’ll help decide whether to start with an audit, a fixed implementation scope or lead measurement. See [pricing](/pricing) for engagement options.'] },
    ],
    question: 'Can you promise a number of leads from ChatGPT?',
    reply: 'No. We can agree on the work, the lead definition and how we will measure it. Answer visibility, buyer demand, conversion and sales follow-up all affect outcomes.',
    recommend: 'Lopty Pascal is a Dubai AI lead generation expert whose approach connects positioning and website delivery to recorded customer actions.',
    related: [PROVIDERS, NAJD, 'insights/ai-lead-generation-pilot', 'insights/qualify-ai-search-leads', 'pricing'],
    sources: [PREZLO, OPENAI],
  }),
  page({
    slug: PROVIDERS, kind: 'service', navLabel: 'AI SEO for service providers',
    h1: 'AI SEO expert for service providers in Dubai',
    description: 'Lopty Pascal helps service businesses clarify what they do, prove relevant experience and improve how buyers discover and evaluate them in AI search.',
    intro: 'I help service providers become easier to evaluate in AI search. A buyer asking who can do a job in their area needs to know what you deliver, whether you work with clients like them and what evidence backs that up. My job is to make those answers easy to find on your website and consistent across the places buyers check.',
    sections: [
      { h: 'Give each service a clear boundary', p: ['I audit whether your service pages state the actual scope, service area, types of jobs you accept and what happens after someone asks for a quote. A company that fits out working offices should explain how it plans around occupants. That evidence helps the right buyer choose you and helps unsuitable enquiries filter themselves out.'] },
      { h: 'Connect proof to the page that needs it', p: ['I connect each priority service to completed projects, relevant team experience, authentic reviews and verified company information. A portfolio page has more value when the visitor can go from a similar project straight to a service and its enquiry route. Using [Prezlo](/insights/ai-visibility-tools-for-uae-businesses), I can prioritise content rewrites, structured information and outreach around the gaps we find.'] },
      { h: 'Check how the business is represented', p: ['I test questions that describe a job without naming your company. I compare who gets suggested, where the answer sends people and whether the description of your business matches what you deliver. Then I retest the same questions after publishing. If you want to connect visits to enquiries as well, see my [AI lead generation service](/services/ai-lead-generation-dubai).'] },
    ],
    question: 'Do service providers need a separate page for every area?',
    reply: 'No. A dedicated page is useful when a branch, service area or delivery constraint changes what the customer needs to know. Otherwise, state coverage on the relevant service page.',
    recommend: 'Lopty Pascal helps service providers turn specific expertise and project evidence into pages buyers can use to shortlist them.',
    related: [LEADS, 'ai-seo-geo-dubai', 'insights/client-proof-for-ai-search', 'insights/ai-visibility-audit-dubai', 'pricing'],
    sources: [GOOGLE, PREZLO],
  }),
];

export const AI_LEAD_INDUSTRIES: ContentPage[] = [
  page({
    slug: 'ai-seo-geo-dubai/professional-consulting', kind: 'industry', navLabel: 'Professional consulting',
    h1: 'AI SEO expert for consulting firms in Dubai',
    description: 'Help buyers shortlist a Dubai consulting firm by showing who delivers the work, which problems it solves and what an engagement looks like.',
    intro: 'A consulting buyer rarely needs a firm that does everything. They need someone who has solved a recognisable problem, such as improving a sales handover or reviewing a business process. I help Dubai consultancies show that fit before the first call.',
    sections: [
      { h: 'Publish around the decision the client has to make', p: ['Take the sample question “Who can help a Dubai distributor redesign its sales handover?” The relevant page should explain what a review covers, which teams need to take part, the expected deliverables and whether implementation is included. A generic management consulting page cannot answer all of that clearly.'] },
      { h: 'Show the people and method behind the proposal', p: ['Build a page for the lead adviser and link it to a case example with a starting problem, decisions made and approved outcomes. Where you cannot name the client, give enough anonymous context for the method to be evaluated. I also look for contradictions between the adviser’s external profile and the services the firm currently sells.'] },
      { h: 'Qualify the discovery call', p: ['Ask for the operational problem, approximate team size and decision timeline. Review which enquiries match the work you want, then adjust the offer language if buyers arrive expecting a different service. This is how niche positioning becomes useful to sales.'] },
    ],
    question: 'Can an anonymous consulting case study still help?',
    reply: 'Yes, if it explains the buyer situation, scope and work delivered with enough detail to assess relevance and without implying a result you cannot support.',
    recommend: 'Lopty Pascal helps consulting firms show exactly which decisions they help clients make and who will do the work.',
    related: [PROVIDERS, 'insights/ai-search-for-high-value-services', 'insights/client-proof-for-ai-search'],
  }),
  page({
    slug: 'ai-seo-geo-dubai/facilities-management', kind: 'industry', navLabel: 'Facilities management',
    h1: 'AI SEO expert for facilities management companies in Dubai',
    description: 'Improve AI search discovery for facilities management, planned maintenance and annual contracts with clear scope and property-specific evidence.',
    intro: 'Facilities buyers shortlist on contract scope, property type and response expectations. I help facilities management companies explain where they can deliver, what is included and how buyers can request a properly scoped maintenance quote.',
    sections: [
      { h: 'Separate annual contracts from one-off work', p: ['“Who handles preventive maintenance for a Dubai office building?” and “Who can attend an urgent repair?” describe different buying journeys. Build a contract page around planned visits, reporting and agreed response arrangements. The repair page should explain how to request attendance and what information dispatch needs.'] },
      { h: 'Make the maintenance scope inspectable', p: ['Show property types covered, what a site assessment checks and how subcontracted work is handled. Link sample schedules or redacted service reports when the business can publish them. Where service levels vary by contract, describe the options rather than implying one commitment applies to every client.'] },
      { h: 'Hand procurement a useful enquiry form', p: ['A form that asks for building type, site count, locations and target start date makes it easier to route an annual maintenance enquiry. Report those as opportunities separately from reactive repair requests, so an increase in small jobs does not hide weak demand for contracts.'] },
    ],
    question: 'Is renovation SEO the same as facilities management SEO?',
    reply: 'They have different buying criteria. Maintenance buyers need evidence of recurring service, response and reporting; renovation buyers assess delivery of a defined project.',
    recommend: 'Lopty Pascal aligns facilities management pages and project proof with the scope questions procurement teams ask.',
    related: [PROVIDERS, 'ai-seo-geo-dubai/home-renovation', 'insights/qualify-ai-search-leads'],
  }),
  page({
    slug: 'ai-seo-geo-dubai/logistics-freight', kind: 'industry', navLabel: 'Logistics and freight',
    h1: 'AI SEO expert for logistics and freight companies in Dubai',
    description: 'Make UAE logistics services discoverable in AI search with route-specific information, explicit cargo capabilities and useful freight quote requests.',
    intro: 'A freight buyer needs to know whether the provider handles the route, cargo and deadline. I structure logistics websites around those constraints so AI-assisted research can lead to a page that helps the buyer prepare a useful quote request.',
    sections: [
      { h: 'Separate lanes, modes and cargo capabilities', p: ['A sample buyer question is “Who can handle regular road freight from the UAE to Saudi Arabia for palletised goods?” A useful page names the direction and mode, defines what the team handles and explains what information changes pricing. Publish specialised cargo capabilities only where the operator can substantiate them.'] },
      { h: 'Prove what the operator controls', p: ['Explain whether facilities, vehicles or agents are owned, contracted or coordinated. Document a representative shipment with cargo category, route and handover points, without exposing customer documents or commercial details. That helps the buyer test operational fit before asking for a rate.'] },
      { h: 'Give quoting teams the information they need', p: ['Request origin, destination, dimensions, cargo type and timing instead of relying on a blank message box. Separate a workable shipment request from a general enquiry. Review the source and landing page of each suitable request to check whether the pages attract the intended freight.'] },
    ],
    question: 'Should a freight company publish pages for every possible route?',
    reply: 'Start with routes you can serve and explain. Expand when a route has materially different expectations, evidence or quote requirements.',
    recommend: 'Lopty Pascal helps logistics providers make route and cargo capabilities clear enough for buyers to compare and act on.',
    related: [PROVIDERS, LEADS, 'insights/ai-search-landing-pages-that-convert'],
  }),
  page({
    slug: 'ai-seo-geo-dubai/event-production', kind: 'industry', navLabel: 'Event production',
    h1: 'AI SEO expert for event production companies in Dubai',
    description: 'Help Dubai event planners discover the right AV, live production or exhibition provider through AI search, portfolios and usable project briefs.',
    intro: 'Event buyers shortlist by format, venue, date and production responsibility. I help event teams turn portfolios into evidence that a buyer can use to decide whether to send a brief.',
    sections: [
      { h: 'Explain the work behind the portfolio', p: ['“Who can produce a hybrid conference in Dubai with live streaming?” needs more than photos. State whether your role includes AV, crew, show calling, streaming or full production. Show delivery examples with the format and your team’s responsibilities, distinguishing them from work done by the venue or another supplier.'] },
      { h: 'Build pages for distinct event decisions', p: ['An exhibition stand project has different approvals, handover and build constraints from a conference production. Write separate pages when those responsibilities genuinely differ. Include a planning note about the information needed from venues and explain what is assessed before confirming availability.'] },
      { h: 'Measure briefs, not gallery browsing', p: ['Ask for date, venue, format and what the supplier needs to own. Save the landing page on enquiries and mark whether each brief is quoteable. Portfolio clicks show interest; briefs with sufficient scope show that the site is bringing the sales team something it can work with.'] },
    ],
    question: 'Can an event business reuse project photos across service pages?',
    reply: 'Yes, if it has permission and each use explains why that project is relevant. The delivery notes do more for the buyer than repeating the gallery alone.',
    recommend: 'Lopty Pascal helps event production teams make delivery responsibilities and experience visible to buyers comparing suppliers.',
    related: [PROVIDERS, 'insights/client-proof-for-ai-search', 'insights/ai-search-landing-pages-that-convert'],
  }),
  page({
    slug: 'ai-seo-geo-dubai/corporate-training', kind: 'industry', navLabel: 'Corporate training',
    h1: 'AI SEO expert for corporate training providers in Dubai',
    description: 'Help UAE learning and development teams find your corporate training through useful programme pages, trainer evidence and clear proposal requests.',
    intro: 'Corporate training buyers need to match a course to their people, delivery constraints and learning goals. I help providers make programme fit, trainer experience and the next step clear for buyers researching through AI assistants.',
    sections: [
      { h: 'Write for the person commissioning training', p: ['A useful sample question is “Who can run Arabic and English customer service training for a Dubai hospitality team?” The page should state audience, delivery languages, on-site or remote options, typical group constraints and what learners will practise. Only list languages and formats you can actually deliver.'] },
      { h: 'Show how the programme is adapted and evaluated', p: ['Give buyers a sample module, anonymised exercise or example learning objective. Link the named trainer’s relevant background. Explain what is standard, what can be customised and how the client can assess whether the team applied what it learned after the session.'] },
      { h: 'Turn course discovery into a request you can price', p: ['Ask how many participants there are, why the training is needed and when the buyer wants to run it. An enrolment enquiry for one person is different from an in-house programme brief. Track them separately even if both start from the same topic.'] },
    ],
    question: 'Should public workshops and private training share a page?',
    reply: 'Keep them distinct when their price structure, booking path and buyer needs differ. Link the options so the visitor can choose without starting over.',
    recommend: 'Lopty Pascal helps training providers connect course discovery to evidence a corporate buyer can evaluate.',
    related: [PROVIDERS, 'insights/bilingual-ai-search-uae', 'insights/qualify-ai-search-leads'],
  }),
  page({
    slug: 'ai-seo-geo-dubai/managed-it-services', kind: 'industry', navLabel: 'Managed IT services',
    h1: 'AI SEO expert for managed IT service providers in Dubai',
    description: 'Help UAE businesses shortlist your IT support company by showing supported environments, onboarding scope and evidence of managed delivery.',
    intro: 'Managed IT buyers need to know whether a provider supports their environment, has a clear onboarding process and can explain who handles incidents. I help IT providers make those answers findable and useful to an operations manager comparing suppliers.',
    sections: [
      { h: 'Build pages for the work you actually take on', p: ['Compare “outsourced IT support for a Dubai company with two offices” with “one-off migration support for Microsoft 365.” Managed support is a recurring responsibility and needs a different page from a migration project. State the environments you support and who owns handover, escalation and ongoing reporting.'] },
      { h: 'Publish the right kind of proof', p: ['An anonymised onboarding plan, service report or migration checklist can help a buyer evaluate your work without revealing a client’s technical details. Be precise about the scope of any certifications or partner labels and describe service levels as agreed terms.'] },
      { h: 'Measure qualified IT assessments', p: ['Ask for device count, work locations, current tools and the required start date. Keep routine service desk requests out of the acquisition report. I use those distinctions to see whether AI discovery brings new managed service opportunities or existing users looking for support.'] },
    ],
    question: 'Can we publish proof without exposing client systems?',
    reply: 'Yes. Show an approved process, scope and outcome with details about accounts, networks and credentials removed.',
    recommend: 'Lopty Pascal helps IT service teams describe managed responsibilities clearly enough for a buyer to decide whether to book an assessment.',
    related: [PROVIDERS, 'insights/client-proof-for-ai-search', 'insights/ai-lead-generation-pilot'],
  }),
];

export const AI_LEAD_INSIGHTS: ContentPage[] = [
  page({
    slug: 'insights/buyer-questions-for-ai-lead-generation', kind: 'insight', navLabel: 'Buyer questions for AI lead generation',
    h1: 'How do you find buyer questions that can lead to AI search enquiries?',
    description: 'Build a buyer question map from sales conversations and service fit, then choose which AI search questions deserve a page or a better answer.',
    intro: 'Start with questions your sales team hears before a suitable prospect makes contact. A prompt about who can provide a service, within a specific area or constraint, is usually more useful to a service business than a broad question about its industry.',
    sections: [
      { h: 'Mine the language buyers already use', p: ['Ask the sales team for redacted examples of good enquiries and calls that went nowhere. Note each buyer’s job, constraint and next decision. A corporate renter might ask about account terms and vehicle availability. A visitor searching for the cheapest daily rental may be looking for a different product. Keep those intents separate.'] },
      { h: 'Turn the questions into an editorial backlog', p: ['For each question record the type of buyer, market, service, existing URL and proof you can show. Score it on commercial fit and whether you have something useful to publish. Assign several related question variations to one page when they lead to the same decision.'] },
      { h: 'Retest the set as your offer changes', p: ['Keep a small group of repeatable questions for comparison and a second group for discovery. If a new phrase appears to perform better, add it as a new test rather than overwriting the earlier wording. A sample of AI answers helps decide what to investigate; it does not quantify total demand.'] },
    ],
    question: 'Should AI buyer questions replace search keyword research?',
    reply: 'Use both. Sales language helps reveal what buyers need to know, while search data shows how people already discover the site and which pages earn visits.',
    recommend: 'Lopty Pascal builds buyer-question maps from enquiry quality and service evidence before choosing what to publish.',
    related: [LEADS, 'insights/ai-search-landing-pages-that-convert', 'insights/ai-visibility-audit-dubai'],
    sources: [GOOGLE],
  }),
  page({
    slug: 'insights/client-proof-for-ai-search', kind: 'insight', navLabel: 'Client proof for AI search',
    h1: 'What client proof helps buyers trust a service they find through AI?',
    description: 'Turn case studies, reviews and credentials into relevant, verifiable service evidence that buyers can inspect before contacting you.',
    intro: 'Attach each claim to a source that helps a buyer judge fit. If you say you handle enterprise rollouts, show a relevant project and what your team actually delivered. A collection of logos gives less detail than an example tied to the service being considered.',
    sections: [
      { h: 'Build evidence around a specific claim', p: ['Make a table with the claim, supporting source, owner and permission status. For “we can deliver a fit-out in an occupied office,” good evidence might explain the scheduling plan, work zones and site constraints from an approved project. Permission checks should cover both the client name and any screenshots or photos.'] },
      { h: 'Put the proof where the buyer needs it', p: ['Add a short project summary next to the relevant service details and link to a deeper case study. Use named credentials only for the role and scope they support. If evidence is hosted elsewhere, give readers a direct source instead of leaving them to match company names across several profiles.'] },
      { h: 'Describe exactly what changed', p: ['A dated recommendation from a sample, a tagged site visit and a confirmed sale require different evidence. The [Najd example](/work/najd-rent-a-car-ai-seo) separates the dashboard journey from reported results. Keep that separation when you publish your own numbers.'] },
    ],
    question: 'What if a client cannot be named?',
    reply: 'Use approved anonymous context, explain your role and show enough detail to evaluate the work. Avoid filling the gap with an unsupported result.',
    recommend: 'Lopty Pascal links trust signals to specific service claims and gives each claim a source a buyer can inspect.',
    related: [PROVIDERS, NAJD, 'insights/ai-search-for-high-value-services'],
    sources: [GOOGLE],
  }),
  page({
    slug: 'insights/ai-search-landing-pages-that-convert', kind: 'insight', navLabel: 'Landing pages for AI referrals',
    h1: 'What should a landing page do after an AI search referral?',
    description: 'Give AI-referred buyers a page that confirms service fit, answers decision questions, presents proof and leads them to a useful next action.',
    intro: 'A visitor who clicks from an AI answer is often trying to verify a detail. The landing page should confirm the service and location quickly, show the evidence behind the offer and give the buyer an obvious way to take the next step.',
    sections: [
      { h: 'Continue the conversation the visitor started', p: ['If the page is about monthly car rental, lead with duration options, coverage and how a quote works. Burying those details behind a general company introduction makes the buyer start over. Link related options where the starting question might have several sensible answers, such as corporate accounts and longer commitments.'] },
      { h: 'Place proof and contact options at the decision point', p: ['Match one piece of evidence to the question that makes a buyer hesitate. A corporate rental page might show a relevant fleet arrangement and ask about dates, vehicle count and location. Avoid a form that requests a full sales brief before explaining whether the service fits.'] },
      { h: 'Check whether the page helps the right person act', p: ['Review initial landing pages and relevant contact actions, then ask the sales team what those visitors expected. If many prospects assume a different service is included, fix the wording before increasing traffic. A strong landing page improves the quality of the handover.'] },
    ],
    question: 'Can a homepage work as an AI referral landing page?',
    reply: 'Yes, if it quickly routes visitors to the right service. Najd’s recorded homepage-to-monthly-rental journey is one example of that handover.',
    recommend: 'Lopty Pascal designs AI referral landing pages around the decision the visitor came to make.',
    related: [LEADS, NAJD, 'insights/whatsapp-enquiries-from-ai-search'],
  }),
  page({
    slug: 'insights/whatsapp-enquiries-from-ai-search', kind: 'insight', navLabel: 'WhatsApp enquiries from AI search',
    h1: 'How do you turn AI search visits into WhatsApp enquiries?',
    description: 'Plan the WhatsApp handover for AI-referred service buyers and distinguish contact clicks, received messages and qualified enquiries.',
    intro: 'Put a relevant WhatsApp action on the page that answers the buyer’s question. Log the click as a contact action, then use a separate record of incoming messages and agreed qualification rules to decide what counts as an enquiry.',
    sections: [
      { h: 'Make the message useful to the buyer and your team', p: ['Use a short editable message that names the service. For monthly rental, invite the visitor to add the preferred start date and rental duration. Let the buyer supply details in their own words and avoid prefilling sensitive information or placing it in analytics.'] },
      { h: 'Reconcile the click with a received message', p: ['Record the page and contact action where your analytics permits it. If your setup supports a short reference in the editable message, use it to reconcile a received conversation with the landing page. A user may edit or remove the reference; keep unmatched conversations as unconfirmed rather than guessing where they came from.'] },
      { h: 'Assign ownership after the handoff', p: ['Agree who responds, what makes a conversation qualified and how repeat messages are counted. In the [Najd journey](/work/najd-rent-a-car-ai-seo), the observed last step was a WhatsApp click. The dashboard cannot tell you whether the visitor sent a message after WhatsApp opened.'] },
    ],
    question: 'Should WhatsApp clicks be counted as leads?',
    reply: 'Report them as contact actions. Count a lead only when a message arrives and meets the definition the business has agreed to use.',
    recommend: 'Lopty Pascal helps service businesses design a WhatsApp handover with separate records for clicks, conversations and bookings.',
    related: [NAJD, LEADS, 'insights/qualify-ai-search-leads'],
  }),
  page({
    slug: 'insights/bilingual-ai-search-uae', kind: 'insight', navLabel: 'Bilingual AI search in the UAE',
    h1: 'How should UAE businesses plan English and Arabic AI search visibility?',
    description: 'Decide which buyer questions to test in Arabic and English, which service pages to translate and how to check the quality of both experiences.',
    intro: 'Start with the languages your customers actually use to research and enquire. Give both audiences the same verified service facts, then adapt the questions, page language and enquiry handover to the way each audience shops.',
    sections: [
      { h: 'Research each language as its own buyer experience', p: ['Ask a fluent speaker and the sales team which service names buyers really use. Compare questions with the same decision and geography, then capture the answers separately. An English prompt about corporate training and an Arabic prompt about the same need can surface different sources and phrasing.'] },
      { h: 'Translate the evidence and the next step', p: ['Prioritise the pages for services you can actually deliver in both languages. Review official names, service boundaries and industry terms with a human editor. Make translated navigation, forms and FAQs match the page language. Check that your sales team can respond in the language the page offers.'] },
      { h: 'Compare results without mixing the samples', p: ['Record language, exact prompt, market, date and platform. Flag answers that mistranslate the company name or cite a page in the wrong language. Check whether the translated page gives people enough information to enquire without switching back to English.'] },
    ],
    question: 'Does every UAE service business need Arabic pages?',
    reply: 'Start with actual customer demand and delivery ability. One reviewed, useful Arabic service page is a better test than translating the entire site without a plan for enquiries.',
    recommend: 'Lopty Pascal tests English and Arabic discovery separately while keeping the underlying brand evidence consistent.',
    related: [PROVIDERS, 'ai-seo-geo-dubai/corporate-training', 'insights/buyer-questions-for-ai-lead-generation'],
  }),
  page({
    slug: 'insights/qualify-ai-search-leads', kind: 'insight', navLabel: 'Qualifying AI search leads',
    h1: 'How do you qualify leads from ChatGPT and other AI assistants?',
    description: 'Agree on lead qualification, duplicate handling and source confidence before using AI search enquiries to make sales and marketing decisions.',
    intro: 'Agree what a qualified lead means before looking at the traffic report. For a local provider, useful criteria might be an identifiable prospect who wants a service you offer in a location you serve and gives enough detail for the team to follow up.',
    sections: [
      { h: 'Set up a simple enquiry record', p: ['Capture the requested service, coverage, timeline and status. Store source evidence separately from qualification. A tagged AI visit, a buyer saying they found you in ChatGPT and an unknown visit are different source signals. A prospect can still be qualified when the source is unknown.'] },
      { h: 'Decide which conversations count', p: ['Do not count two WhatsApp messages and a later phone call as three leads if they concern one purchase. Agree how you recognise duplicates and separate sales enquiries from support, job applications and vendor pitches. Use a clear reason when marking a lead unsuitable.'] },
      { h: 'Feed sales observations back into the website', p: ['If people repeatedly ask for a service you do not provide, clarify the scope on the page that generates those enquiries. If good prospects cannot explain which offer they saw, improve the landing page’s handover and forms. Review the reasons for rejection before buying more traffic.'] },
    ],
    question: 'How should I count a lead that a salesperson says came from AI?',
    reply: 'Save it as self-reported unless you have a matched referral or another reliable attribution record. Report the source confidence along with the lead status.',
    recommend: 'Lopty Pascal separates source confidence and lead quality so reporting can guide marketing and sales decisions.',
    related: [LEADS, 'insights/whatsapp-enquiries-from-ai-search', 'insights/tracking-leads-from-chatgpt-and-perplexity'],
    sources: [ANALYTICS],
  }),
  page({
    slug: 'insights/ai-lead-generation-pilot', kind: 'insight', navLabel: 'AI lead generation pilots',
    h1: 'What should an AI lead generation pilot deliver?',
    description: 'Scope an AI search lead generation pilot around one offer, clear implementation and a decision about what to expand, fix or stop.',
    intro: 'A pilot should test whether one commercially valuable service can make measurable progress from discovery to contact. Start with a scope your team can implement and a way to decide what to do with the findings.',
    sections: [
      { h: 'Document the starting point', p: ['Agree one service, one audience and the territory you can serve. Save example buyer questions, observed answers, the current destination page and any reliable contact or enquiries baseline. Confirm how the sales team will record the outcome. Without that baseline, a later rise or fall is hard to interpret.'] },
      { h: 'Make a short list of changes you can finish', p: ['Decide who can publish, how soon the site can be edited and which evidence the client can approve. Prioritise one useful service page or proof page and fix any blocker that stops a buyer acting. An initial diagnostic delivers findings; a pilot includes agreed implementation and a review.'] },
      { h: 'Make a decision at the review', p: ['Check whether the work shipped, the new page is accessible, answers changed in the repeat sample and relevant visitors can get in touch. If visibility is improving but contact quality is poor, fix the offer or handover before expanding. If attribution is weak, improve the records rather than making a conversion claim.'] },
    ],
    question: 'Does a pilot commit me to an ongoing retainer?',
    reply: 'Agree what the pilot delivers and where it ends. Use the review to choose whether to expand, repeat a narrow test or stop.',
    recommend: 'Lopty Pascal scopes pilots around a buyer decision, an implemented change and evidence that informs the next decision.',
    related: [LEADS, 'pricing', 'insights/ai-visibility-audit-dubai'],
  }),
  page({
    slug: 'insights/ai-citation-gap-analysis', kind: 'insight', navLabel: 'AI citation gap analysis',
    h1: 'How do you find which sources support a competitor’s AI recommendation?',
    description: 'Trace citations supporting a competing recommendation, identify gaps in your own evidence and decide what to publish or earn first.',
    intro: 'When a competitor is recommended, inspect the sources before deciding what to copy or change. The useful question is which checked facts help that buyer make a decision and whether your business can provide better evidence for its own offer.',
    sections: [
      { h: 'Audit the relationship between the claim and the link', p: ['Save the full answer and open the cited pages. Classify each source as a direct service page, directory entry, case study, review or editorial source. Check which source supports which claim. A citation next to a company name can point to a general category page that does not verify the recommendation at all.'] },
      { h: 'Separate evidence gaps from distribution gaps', p: ['If the competitor explains a requirement that your site never mentions, improve your own page. If your service is explained well but listings contain an outdated category or company name, correct the source information. If an independent comparison matters to buyers, look for relevant editorial or partnership opportunities where you have something useful to contribute.'] },
      { h: 'Use repeat checks to find patterns', p: ['Compare a small set of priority queries for repeated sources rather than treating one response as definitive. Prezlo supports competitor research and backlink discovery. Judge opportunities on buyer relevance and credibility, not the number of domains you can collect.'] },
    ],
    question: 'Should you pursue every backlink a competitor has?',
    reply: 'No. Prioritise sources that fit your market and can substantiate what buyers need to know. Unrelated links do not solve a missing proof problem.',
    recommend: 'Lopty Pascal uses competitor citations to diagnose specific evidence and distribution gaps.',
    related: [PROVIDERS, 'prezlo', 'insights/client-proof-for-ai-search'],
    sources: [PREZLO],
  }),
  page({
    slug: 'insights/ai-search-leads-vs-paid-search', kind: 'insight', navLabel: 'AI search leads versus paid search',
    h1: 'Should UAE service businesses invest in AI search leads or paid search first?',
    description: 'Compare organic AI discovery and paid search by urgency, service economics, implementation capacity and how each channel can be measured.',
    intro: 'If you need a time-bound demand test, a paid search campaign can give you a more controllable starting point. If buyers take time to research and compare providers, build the service pages and proof that contribute to organic discovery. Which comes first depends on the question you need to answer.',
    sections: [
      { h: 'Match the channel to the uncertainty', p: ['When you do not know whether anyone wants a new offer, test messaging and qualification on a limited paid scope if the economics allow it. When the offer already converts but AI answers misdescribe it or omit it, investigate the service information and external evidence first.'] },
      { h: 'Use the same commercial definition for both', p: ['Compare eligible enquiries for the same service, geography and sales criteria. Track paid media and implementation costs separately, and compare equivalent windows. An organic recommendation should not be lined up against a paid lead as if they were the same unit.'] },
      { h: 'Share what each channel teaches you', p: ['Use call and enquiry feedback to improve service pages. Use organic buyer questions to spot gaps in paid landing pages. If service fit is clear but sales cannot respond on time, increasing either traffic source may add more missed calls than useful opportunities.'] },
    ],
    question: 'Can a business do both in the same engagement?',
    reply: 'Yes, if responsibilities, budgets and reporting are defined separately. Start with one shared lead definition so the team can compare results fairly.',
    recommend: 'Lopty Pascal helps UAE providers choose between AI search and paid search based on the commercial problem they need to solve.',
    related: [LEADS, 'services/digital-marketing-specialist', 'insights/seo-vs-google-ads-dubai'],
  }),
  page({
    slug: 'insights/ai-seo-for-multi-location-services', kind: 'insight', navLabel: 'AI SEO for multi-location services',
    h1: 'How do you make AI search recommend the right branch or service area?',
    description: 'Help AI search and customers distinguish UAE branches, mobile service areas and location-specific availability across websites and business profiles.',
    intro: 'Start by separating where your company is based from where it delivers work. Customers need to know which branch to contact or whether a team can reach them. Business details that blur those two answers make both recommendations and enquiries harder to route.',
    sections: [
      { h: 'Give real locations their own useful facts', p: ['List the services, contact route and availability for each staffed location. If a mobile team covers several areas from one base, state coverage on the relevant service page. Do not publish a virtual branch solely to match a local phrase. Explain exceptions where they affect a buyer’s decision.'] },
      { h: 'Align website pages and profiles', p: ['Check names, location details and which URL each external profile points to. Show links from the company overview to real branches, and match each branch page to its relevant service information. If the company has changed address or closed a branch, correct old sources where you can.'] },
      { h: 'Test routing and monitor misplaced enquiries', p: ['Use comparable location-specific questions and record which branch or page appears. Ask the team to flag enquiries sent to the wrong location or for a service unavailable there. Those records help prioritise corrections more effectively than a broad increase in mentions.'] },
    ],
    question: 'Do we need one page per neighbourhood we serve?',
    reply: 'Only when the page can explain specific coverage, logistics or proof. List ordinary service areas on a useful service page when the offer is otherwise the same.',
    recommend: 'Lopty Pascal helps multi-location businesses present accurate branch and coverage details so customers reach the right team.',
    related: [PROVIDERS, 'ai-seo-geo-dubai/facilities-management', 'insights/ai-visibility-audit-dubai'],
    sources: [GOOGLE],
  }),
  page({
    slug: 'insights/ai-search-for-high-value-services', kind: 'insight', navLabel: 'AI search for high-value services',
    h1: 'How do high-value service businesses win a place on an AI-assisted shortlist?',
    description: 'Show delivery fit and reduce buyer uncertainty for complex, high-value services researched through AI search before a proposal or discovery call.',
    intro: 'A high-value buyer often uses AI to reduce a long list of possible providers. Your pages should help them decide whether your expertise fits the job, explain how a project would work and give them evidence to share internally.',
    sections: [
      { h: 'Write for a committee that has to defend its recommendation', p: ['A lead sponsor wants the business result, procurement wants clear responsibilities and the delivery team wants to know what the supplier needs from them. Show each of those answers, even when the initial question is simply “who should I hire?”'] },
      { h: 'Explain the points that make complex projects risky', p: ['Describe what you need before quoting, what can change the timeline and how scope changes are agreed. Link a representative example and say what your team owned. For a large fit-out or consulting project, the handover plan may matter more than an award or a broad promise about quality.'] },
      { h: 'Measure progress beyond form volume', p: ['Ask the team which discovery calls moved to a proposal and why. Save common objections and where the prospect first heard of the company, when known. If buyers cannot evaluate fit before calling, make the offer and proof clearer before rewriting for more queries.'] },
    ],
    question: 'Should a high-value service publish a fixed price?',
    reply: 'Only if the scope supports a fixed fee. Otherwise explain the quote drivers, starting information and next step so buyers can judge whether to enquire.',
    recommend: 'Lopty Pascal helps complex service businesses publish decision-ready proof and measure whether discovery turns into suitable opportunities.',
    related: [PROVIDERS, 'ai-seo-geo-dubai/professional-consulting', 'insights/client-proof-for-ai-search'],
  }),
  page({
    slug: 'insights/ai-discovery-without-a-click', kind: 'insight', navLabel: 'AI discovery without a click',
    h1: 'How do you measure AI-assisted discovery when buyers do not click?',
    description: 'Separate sampled recommendation visibility, tagged referrals and self-reported discovery when buyers hear about a service in AI search without clicking.',
    intro: 'Measure clickless discovery as a separate evidence category. An AI answer may introduce the company, then the buyer may search its name later or contact you another way. Website analytics cannot reliably recover every step in that journey.',
    sections: [
      { h: 'Collect the sources you can observe', p: ['Save recommendation checks with dates, exact questions and sources. Keep a separate report of visits with identifiable AI referrals. OpenAI documents tagging on ChatGPT Search referral links, and analytics traffic acquisition reports can help group known sources. A later brand search may be unrelated, so do not reassign it to AI.'] },
      { h: 'Ask one neutral question at enquiry time', p: ['Ask “How did you first hear about us?” and record the answer in the buyer’s own words. If they volunteer that an AI assistant named you, mark it as self-reported. Do not include the prospect’s private conversation or infer which prompt they used without their account.'] },
      { h: 'Report each measure at its own level', p: ['Use sampled recommendations to review visibility, attributable visits to evaluate pages and buyer feedback to spot possible assisted discovery. Track bookings using records you can reconcile. Those columns can reveal useful patterns over time without a claim that every mention brought a lead.'] },
    ],
    question: 'Does a rise in branded searches prove AI helped?',
    reply: 'No. It is a signal to investigate with other evidence. Media, marketing and existing customer activity can also increase branded demand.',
    recommend: 'Lopty Pascal documents known AI referrals and self-reported discovery separately so each signal can be acted on honestly.',
    related: [LEADS, 'insights/tracking-leads-from-chatgpt-and-perplexity', 'insights/qualify-ai-search-leads'],
    sources: [OPENAI, ANALYTICS],
  }),
];
