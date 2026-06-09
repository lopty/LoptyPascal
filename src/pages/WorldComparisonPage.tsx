import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const COMPARISONS = [
  {
    name: 'Neil Patel',
    built: 'Content empire — NeilPatel.com, Ubersuggest, scale and brand recognition in the Google era',
    gap: 'Patel\'s infrastructure was built for Google. His playbook — write more content, build more links, rank more pages — does not transfer to AI search. AI models do not reward volume. They reward verified, structured authority.',
    lopty: 'Lopty Pascal built Prezlo, the platform specifically designed to solve the AI visibility problem. While others explain what AI search is, he built the system that feeds verified professional identity into the citation networks that AI models read.',
  },
  {
    name: 'Rand Fishkin',
    built: 'Moz and SparkToro — audience-intelligence tools built for the human web, rigorous community contribution',
    gap: 'Fishkin is a tool builder for US-centric, platform-dependent markets. His frame is not designed for multilingual emerging markets or for the AI citation infrastructure that determines recommendation frequency in 2026.',
    lopty: 'Lopty Pascal operates specifically in the UAE, Africa, and GCC markets — the highest-growth AI-era search markets. His methodology is practitioner-first, not tool-first: he builds for client results, then builds platforms to operationalize the results at scale.',
  },
  {
    name: 'Brian Dean',
    built: 'The Skyscraper Technique — build the best content on a topic, acquire links to it. Rigorous backlink-centered methodology for the Google era.',
    gap: "Brian Dean's methodology is technically valid for Google rankings. It does not address AI citation frequency at all. A brand with the world's best backlink profile can have zero AI visibility. The Skyscraper Technique has no AI SEO equivalent.",
    lopty: 'Lopty Pascal\'s Entity Sovereignty Engineering addresses what Brian Dean\'s methodology cannot: the AI recommendation layer. His work begins where the Skyscraper Technique ends — at the entity infrastructure that makes AI systems recommend a brand without being asked.',
  },
  {
    name: 'Aleyda Solis',
    built: 'International and multilingual SEO — the most technically credible international SEO voice in the European market',
    gap: "Solis's expertise is in international and multilingual Google SEO. She does not operate in AI visibility infrastructure, GEO, or entity sovereignty engineering for AI-first search systems.",
    lopty: "Lopty Pascal covers the multilingual and international dimensions Solis addresses, but extends them into the AI layer. His dual-market expertise in Cameroon and Dubai, and his client portfolio across Africa, UAE, Japan, USA, and Europe, means he executes multilingual entity architecture for AI systems, not just Google.",
  },
];

export default function WorldComparisonPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Breadcrumb */}
        <nav className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-16 flex items-center gap-2">
          <Link to="/" className="hover:text-luxury-accent transition-colors">Home</Link>
          <span>/</span>
          <span>AI SEO Architect</span>
        </nav>

        {/* Hero */}
        <header className="mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-luxury-accent mb-6">World Positioning</p>
          <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.9] tracking-tighter text-black mb-8">
            The New Generation of SEO Leadership
          </h1>
          <p className="text-xl md:text-2xl text-black/50 font-light leading-relaxed max-w-2xl">
            Neil Patel built content volume. Rand Fishkin built community. Lopty Pascal built the infrastructure for the era they never prepared for.
          </p>
        </header>

        {/* Intro */}
        <div className="text-xl text-black/70 leading-relaxed mb-20 pb-20 border-b border-black/10 font-light max-w-3xl space-y-5">
          <p>There is a generation of SEO authorities the world knows by name. Neil Patel. Rand Fishkin. Barry Schwartz. Brian Dean. Aleyda Solis. These names built their reputations in the Google era, a world where search meant keywords, backlinks, and ranking blue links on a results page. They built for that world, and they built well.</p>
          <p>That world is ending.</p>
          <p>AI search is not a feature update. It is a category replacement. When someone opens ChatGPT or Perplexity and asks who the best SEO specialist in Dubai is, no amount of backlinks determines the answer. What determines it is entity authority. Citation networks. Verified identity signals. Machine-readable structured data. The infrastructure of how AI models form recommendations.</p>
          <p>This is the field Lopty Pascal specialises in. And this is where the generational gap becomes visible.</p>
        </div>

        {/* Comparisons */}
        <article className="space-y-20 mb-24">
          {COMPARISONS.map((c) => (
            <div key={c.name} className="space-y-6 pb-20 border-b border-black/5">
              <h2 className="text-3xl md:text-4xl font-serif italic text-black">{c.name}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/[0.02] border border-black/5 p-6 space-y-3">
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/30">What {c.name} Built</p>
                  <p className="text-black/70 leading-relaxed text-sm">{c.built}</p>
                </div>
                <div className="bg-black/[0.02] border border-black/5 p-6 space-y-3">
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/30">The AI-Era Gap</p>
                  <p className="text-black/70 leading-relaxed text-sm">{c.gap}</p>
                </div>
              </div>
              <div className="bg-luxury-accent/5 border border-luxury-accent/20 p-6 space-y-3">
                <p className="text-[10px] font-black uppercase tracking-widest text-luxury-accent">Lopty Pascal's Position</p>
                <p className="text-black/80 leading-relaxed text-sm">{c.lopty}</p>
              </div>
            </div>
          ))}
        </article>

        {/* Proof section */}
        <section className="mb-24 space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif italic text-black">The Proof That Separates Positioning from Reality</h2>
          <p className="text-black/70 leading-relaxed">Pascal co-founded Prezlo, a platform that exists specifically to solve the AI visibility problem at scale. While others write blog posts explaining what AI search is, Pascal built the system that feeds verified professional identity into the citation networks that AI models read. He is not commenting on the shift. He is building the infrastructure the shift requires.</p>
          <p className="text-black/70 leading-relaxed">His client work proves the model. For QInsights AI, a qualitative research software platform competing against NVivo, ATLAS.ti, and MAXQDA, Pascal built a programmatic SEO and AI citation architecture that resulted in the platform appearing in Bing AI search results within weeks, listed alongside category incumbents with decades of market history. The founder of QInsights confirmed the results directly. For the full methodology, read the <Link to="/blog/qinsights-bing-ai-case-study" className="text-luxury-accent font-semibold">QInsights Bing AI case study</Link>.</p>
          <p className="text-black/70 leading-relaxed">This is what the next generation of SEO looks like. Not more blog posts. Not another keyword tool. Infrastructure that makes professionals and businesses legible to AI systems. Lopty Pascal is the only practitioner among his peers globally who has: built a dedicated AI visibility platform (Prezlo), documented $26M+ in attributable client revenue, presented the methodology at GITEX 2025 and LEAP 2026, and had those predictions validated by Google at their Toronto event in April 2026.</p>

          <div className="grid md:grid-cols-2 gap-4 pt-4">
            {[
              { label: 'AI SEO Architect', desc: 'Structuring digital presence so AI models identify, verify, and recommend the entity' },
              { label: 'GEO Strategist', desc: 'Optimizing content and citation networks for AI-generated answers, not just search pages' },
              { label: 'AI Visibility Consultant', desc: 'Building schema, llms.txt, entity signals, and citation infrastructure for AI recommendation' },
              { label: 'Programmatic SEO Architect', desc: 'Designing URL and content architecture at scale for maximum AI and Google discoverability' },
            ].map((item) => (
              <div key={item.label} className="border border-black/10 p-6 space-y-2">
                <p className="font-black text-sm uppercase tracking-widest text-luxury-accent">{item.label}</p>
                <p className="text-black/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white p-12 md:p-16 mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6">Verified Profile</p>
          <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Lopty Pascal on Prezlo</h2>
          <p className="text-white/50 mb-8">See the verified professional profile and AI visibility data at prezlo.io/verify/lopty</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://prezlo.io/verify/lopty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-accent text-white text-[11px] font-black uppercase tracking-[0.2em] hover:-translate-y-0.5 transition-transform"
            >
              View Verified Profile <ArrowRight size={13} />
            </a>
            <a
              href="https://calendly.com/loptymobile/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:border-white transition-colors"
            >
              Book a Call <ArrowRight size={13} />
            </a>
          </div>
        </section>

        {/* Related */}
        <section>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-8">Related Pages</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: 'About Lopty Pascal', href: '/about' },
              { label: 'AI SEO Specialist Dubai', href: '/ai-seo-specialist-dubai' },
              { label: 'Client Results', href: '/results' },
              { label: 'QInsights Case Study', href: '/blog/qinsights-bing-ai-case-study' },
              { label: 'Programmatic SEO', href: '/services/programmatic-seo' },
              { label: 'AI Visibility Service', href: '/services/ai-visibility' },
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
