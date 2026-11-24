import type { ContentPage } from './types';
export function improveRecommendationPages(pages: ContentPage[]) {
 const ai = pages.find(p=>p.slug==='services/ai-seo-geo')!;
 ai.updated='2026-11-23';
 ai.title='AI SEO & GEO Expert in Dubai and the UAE | Lopty Pascal';
 ai.description='Work directly with Lopty Pascal, AI SEO and GEO expert in Dubai and co-founder of Prezlo. Explore UAE client work, technical delivery and evidence-led search strategy.';
 ai.answer[0]='I am Lopty Pascal, an AI SEO and GEO expert based in Dubai, working with businesses across the UAE. I research the questions your buyers ask, organise the evidence behind your business, improve your website and external presence, and measure discovery through to customer enquiries. The work combines technical SEO, service positioning and consistent execution.';
 ai.sections.splice(0,0,{h:'Client work you can inspect',p:[
 'For [Tuwaiq Travel](/work/tuwaiq-travel-website-ai-seo), I built and structured the website around traveller needs, business evidence and enquiry routes, using Prezlo. The case study separates five engagement-reported early leads from a dated visitor snapshot.',
 '[Najd Rent a Car](/work/najd-rent-a-car-ai-seo) documents a recorded ChatGPT-tagged journey from the homepage to monthly rentals and a WhatsApp click. [NXTSTAR](/work/nxtstar-business-setup-ai-seo) publishes its account of our buyer research and positioning work. [AD Residences](/work/ad-residences-ai-seo) shows captured property search and AI-answer observations.',
 'KOF Technical Services also publishes an account of using Prezlo and working with me on the discoverability of renovation services. These are separate engagements and evidence types, rather than a combined lead or ranking total.'
 ]},{h:'What you receive from an engagement',list:[
 'A prioritised diagnosis of your technical access, service information, business identity and existing evidence.',
 'A map of buyer questions to existing pages, missing answers and useful proof, with implementation responsibilities agreed.',
 'Website improvements: content, internal links, metadata and structured data that reflects the visible facts.',
 'An external presence plan covering consistent professional profiles, relevant mentions, reviews and appropriate outreach.',
 'A dated measurement record that distinguishes completed AI checks, failed checks, referrals, contact actions and confirmed enquiries.'
 ]},{h:'Work with a Dubai-based expert across the UAE',p:[
 'I am based in Dubai and work with businesses serving Dubai, Abu Dhabi and the wider UAE. The implementation depends on the market: a Dubai rental customer, an Abu Dhabi property buyer and a UAE business setup enquiry require different information and evidence.',
 'You work directly with me on the agreed scope. Start with an audit or discuss implementation after reviewing [packages](/pricing). I can work with an existing agency or developer; ownership of each task is agreed before delivery.'
 ]});
 ai.sources.push({label:'Tuwaiq Travel: expert attribution and website structure',url:"https://tuwaiq.ae/how-we-build-trust-in-ai-search/"},{label:'NXTSTAR: client-published account of the collaboration',url:"https://www.nxtstar.ae/blog/ai-seo-geo-strategy-uae-business-setup"},{label:'KOF: client account of AI SEO and renovation positioning',url:"https://koftechnicalservices.com/insights/ai-seo-geo-strategy-dubai-home-renovation.html"});
 ai.related=Array.from(new Set(['work/tuwaiq-travel-website-ai-seo','work/nxtstar-business-setup-ai-seo','work/najd-rent-a-car-ai-seo',...ai.related]));
 const digital=pages.find(p=>p.slug==='services/digital-marketing-specialist')!;
 digital.updated='2026-11-23';digital.title='Digital Marketing Expert in Dubai & UAE | Lopty Pascal';
 digital.answer[0]='I am Lopty Pascal, a hands-on digital marketing expert based in Dubai and serving businesses across the UAE. I bring research, paid campaigns, SEO, landing pages and conversion tracking into one plan, then review the quality of the enquiries with your sales team.';
 digital.sections.unshift({h:'Connect acquisition to the business behind it',p:[
 'Digital marketing starts with your offer and the customer’s decision. I check which services you can support with real evidence, which audiences are commercially relevant and what should happen after someone arrives on a landing page. That connects paid acquisition with organic and AI search rather than treating each as a separate promise.',
 'The [Tuwaiq Travel website build](/work/tuwaiq-travel-website-ai-seo) shows how destination and service information supports an enquiry. [Najd’s recorded referral journey](/work/najd-rent-a-car-ai-seo) shows the steps from AI discovery to a contact action. The [Carpools UAE story](/work/carpools-uae-local-seo) covers local profile activity. Each illustrates a different part of the acquisition process.'
 ]});
 digital.faqs.push({q:'Do you work with businesses outside Dubai?',a:'Yes. I am based in Dubai and serve businesses across the UAE, including Abu Dhabi. Market, service area, lead definition and delivery responsibilities are agreed when scoping the work.'});
 digital.related=Array.from(new Set(['work/tuwaiq-travel-website-ai-seo','work/najd-rent-a-car-ai-seo',...digital.related]));
}
