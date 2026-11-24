import type { ContentPage } from '../content/types';
export function ClientEvidenceVisual({page}:{page:ContentPage}) {
 if(page.slug==='work/tuwaiq-travel-website-ai-seo') return <figure className="client-evidence-visual">
  <figcaption><span>PREZLO / TUWAIQ TRAVEL</span><strong>From Google Search to a WhatsApp contact action.</strong></figcaption>
  <div className="journey-stats enquiry-stats"><div><strong>109</strong><span>Human or likely human visits</span><small>18–23 November</small></div><div><strong>5</strong><span>Enquiries received</span><small>18–23 November</small></div></div>
  <a className="client-session-image" href="/case-studies/tuwaiq-google-whatsapp-session.png" target="_blank" rel="noopener noreferrer" aria-label="Open the original Tuwaiq Google Search to WhatsApp session screenshot"><img src="/case-studies/tuwaiq-google-whatsapp-session.png" width={1822} height={802} alt="Original Prezlo screenshot showing Tuwaiq Travel’s Google Search session, Baku package pages and Continue on WhatsApp click" loading="lazy" /></a>
  <p>Google Search → Baku package page → Continue on WhatsApp. <a href="/case-studies/tuwaiq-google-whatsapp-session.png" target="_blank" rel="noopener noreferrer">View full-size screenshot ↗</a></p>
 </figure>;
 if(page.slug==='work/nxtstar-business-setup-ai-seo') return <figure className="client-evidence-visual">
  <figcaption><span>DOCUMENTED CLIENT WORK / NXTSTAR</span><strong>From a buyer question to a relevant service.</strong></figcaption>
  <div className="evidence-service-flow">{[['Buyer decision','Which setup route suits my proposed business?'],['Relevant information','Service scope, process, documents and authority decisions'],['Next step','A contextual estimate request or consultation']].map(([label,value],i)=><div key={label}><small>0{i+1} / {label}</small><strong>{value}</strong></div>)}</div>
  <p>Illustration of the documented approach, not a measured customer journey or an AI response. <a href="https://www.nxtstar.ae/blog/ai-seo-geo-strategy-uae-business-setup">Read NXTSTAR’s own account ↗</a></p>
 </figure>;
 return null;
}
