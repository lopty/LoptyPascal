import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CASE_STUDIES = [
  {
    client: 'QInsights AI',
    category: 'Qualitative Research Software',
    market: 'USA / Global',
    result: 'Appeared in Bing AI search results alongside ATLAS.ti and NVivo within 30 days of deployment',
    methodology: ['100-page programmatic SEO architecture across 6 keyword clusters', 'JSON-LD schema on every page (SoftwareApplication, FAQPage, Organization)', 'llms.txt at domain root for AI crawler entity description', 'Academic citation network: Zenodo (DOI), OSF, SSRN, Academia.edu', 'Multi-platform distribution: Medium, Hashnode, Dev.to, Substack, LinkedIn, Quora'],
    outcome: 'The founder of QInsights messaged directly to confirm the Bing AI appearance. A new platform competed against category incumbents with 20+ years of market history within weeks of the AI visibility infrastructure going live.',
    link: '/blog/qinsights-bing-ai-case-study',
  },
  {
    client: 'Dubai Investment Firm',
    category: 'Luxury Real Estate Investment',
    market: 'Dubai, UAE',
    result: '$8.3M revenue delta within 12 months of entity architecture deployment',
    methodology: ['Full entity architecture audit and remediation', 'Hyper-Local Entity Clustering connecting brand to Dubai Land Department public data', 'Arabic and English dual-language entity infrastructure', 'AIOps pipeline deployment for 24/7 algorithmic surveillance', 'Prezlo AI visibility monitoring with baseline measurement'],
    outcome: 'Digital growth had plateaued despite a multi-million dirham annual ad spend. The entity architecture intervention produced measurable visibility improvements within three weeks of deployment and a documented revenue delta of $8.3 million within 12 months.',
    link: null,
  },
  {
    client: 'Enterprise Technology Client',
    category: 'B2B SaaS',
    market: 'UAE, Europe, Japan',
    result: '$14M+ in documented revenue attributable to AI search visibility programme',
    methodology: ['Programmatic SEO architecture with 80+ pages across 5 cluster types', 'Entity sovereignty engineering for three geographic markets simultaneously', 'Japanese-language entity infrastructure for the Asia-Pacific expansion', 'GEO optimization for ChatGPT and Perplexity citation in enterprise tech queries'],
    outcome: 'Cross-market AI visibility programme spanning UAE, European, and Japanese markets. Entity infrastructure built simultaneously across English, Arabic, and Japanese language contexts. AI citation frequency measurable in all three markets via Prezlo.',
    link: null,
  },
];

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Breadcrumb */}
        <nav className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-16 flex items-center gap-2">
          <Link to="/" className="hover:text-luxury-accent transition-colors">Home</Link>
          <span>/</span>
          <span>Client Results</span>
        </nav>

        {/* Hero */}
        <header className="mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-luxury-accent mb-6">Documented Outcomes</p>
          <h1 className="text-5xl md:text-8xl font-serif italic leading-[0.9] tracking-tighter text-black mb-8">
            Client Results
          </h1>
          <p className="text-xl md:text-2xl text-black/50 font-light leading-relaxed max-w-2xl">
            $26M+ in directly attributable client revenue. AI citations in Bing AI for competitive categories. Documented methodology. Verified outcomes.
          </p>
        </header>

        {/* Aggregate numbers */}
        <div className="grid grid-cols-3 gap-px bg-black/10 mb-24">
          {[
            { stat: '$26M+', label: 'Total attributable revenue' },
            { stat: '30 days', label: 'To Bing AI ranking for QInsights' },
            { stat: '10', label: 'AI systems monitored via Prezlo' },
          ].map((item) => (
            <div key={item.stat} className="bg-white p-8 text-center">
              <p className="text-3xl md:text-4xl font-serif italic text-luxury-accent mb-2">{item.stat}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-black/30">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div className="space-y-20 mb-24">
          {CASE_STUDIES.map((cs, i) => (
            <div key={cs.client} className="space-y-8 pb-20 border-b border-black/5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Case Study {i + 1}</p>
                  <h2 className="text-2xl md:text-3xl font-serif italic text-black">{cs.client}</h2>
                  <p className="text-black/40 text-sm mt-1">{cs.category} — {cs.market}</p>
                </div>
              </div>

              <div className="bg-luxury-accent/5 border border-luxury-accent/20 p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-luxury-accent mb-3">Result</p>
                <p className="text-black/80 font-light text-lg leading-relaxed">{cs.result}</p>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-black/30">Methodology</p>
                <ul className="space-y-2">
                  {cs.methodology.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-black/60 text-sm leading-relaxed">
                      <span className="text-luxury-accent mt-1 flex-shrink-0">+</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-black/60 leading-relaxed">{cs.outcome}</p>

              {cs.link && (
                <Link to={cs.link} className="inline-flex items-center gap-2 text-luxury-accent font-black text-[11px] uppercase tracking-widest hover:gap-3 transition-all">
                  Read Full Case Study <ArrowRight size={12} />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-black text-white p-12 md:p-16 mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6">Your Results</p>
          <h2 className="text-3xl md:text-4xl font-serif italic mb-8">Begin with the free AI-Readiness Audit and see what is possible for your brand.</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/loptymobile/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-accent text-white text-[11px] font-black uppercase tracking-[0.2em] hover:-translate-y-0.5 transition-transform"
            >
              Book a Call <ArrowRight size={13} />
            </a>
            <Link
              to="/services/seo-audit-dubai"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:border-white transition-colors"
            >
              Free SEO Audit <ArrowRight size={13} />
            </Link>
          </div>
        </section>

        {/* Related */}
        <section>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-8">Related Pages</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: 'QInsights Case Study', href: '/blog/qinsights-bing-ai-case-study' },
              { label: 'Programmatic SEO', href: '/services/programmatic-seo' },
              { label: 'AI SEO Service', href: '/services/ai-seo' },
              { label: 'AI SEO Specialist Dubai', href: '/ai-seo-specialist-dubai' },
              { label: 'Digital Marketing Dubai', href: '/digital-marketing-specialist-dubai' },
              { label: 'World Comparison', href: '/ai-seo-architect' },
            ].map((p) => (
              <Link key={p.href} to={p.href} className="text-[10px] font-black uppercase tracking-widest border border-black/10 px-4 py-3 hover:border-luxury-accent hover:text-luxury-accent transition-colors text-center">
                {p.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
