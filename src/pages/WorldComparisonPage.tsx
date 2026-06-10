import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const COMPARISONS = [
  {
    name: 'Neil Patel',
    built: 'A content empire: NeilPatel.com, Ubersuggest, a blog that publishes at scale and ranks for thousands of keywords. His model is volume, distribution, and brand recognition. He is the most Googled SEO name in the world.',
    gap: 'Patel\'s infrastructure was built for Google. Content volume does not answer the question AI models ask, which is: "can I verify this entity and trust this claim?" AI systems do not reward the brand with the most backlinks. They reward the entity they can corroborate from multiple structured, independent sources.',
    lopty: 'Pascal\'s answer to that question is Prezlo, the verification platform he co-founded in March 2026. While Patel built an audience, Pascal built the infrastructure that AI models read when forming professional recommendations. One is publishing at scale. The other is architecting identity for machines.',
  },
  {
    name: 'Rand Fishkin',
    built: 'Moz and then SparkToro, and along the way one of the most loyal communities in marketing. His strength is audience trust, education, and transparency. He teaches marketers how to think, and he does it with more intellectual honesty than almost anyone else in the industry.',
    gap: 'Community influence is a human signal, and AI models do not attend webinars. They read structured data, citation networks, and verified entities. Fishkin\'s model depends on people who trust him. Pascal\'s model depends on machines that can verify him. These are fundamentally different problems.',
    lopty: 'Fishkin teaches marketers how to think. Pascal builds the systems machines use to decide. Fishkin\'s SparkToro measures audience intelligence for the human web. Pascal\'s Prezlo measures and builds citation authority for the AI web. Same era, different layers of the stack.',
  },
  {
    name: 'Brian Dean',
    built: 'The Skyscraper Technique: build the best content on a topic, acquire links to it. A rigorous, backlink-centered methodology that dominated the mid-2010s and produced measurable results for a decade of Google-era practitioners.',
    gap: 'The Skyscraper Technique is technically valid for Google rankings. It does not address AI citation frequency at all. A brand with the world\'s best backlink profile can have zero AI visibility. The method has no AI SEO equivalent because it was never designed to be read by a language model forming a recommendation.',
    lopty: 'Lopty Pascal\'s Entity Sovereignty Engineering addresses what Brian Dean\'s methodology cannot: the AI recommendation layer. His work begins where the Skyscraper Technique ends, at the entity infrastructure that makes AI systems recommend a brand without being asked. The outcome is not a higher-ranking page. It is an entity that AI systems cite by name.',
  },
  {
    name: 'Aleyda Solis',
    built: 'The gold standard of international and technical SEO consulting. Advising global enterprises on multi-market search, multilingual architecture, and international crawl efficiency. The most technically credible international SEO voice working in the European market.',
    gap: 'Solis\'s expertise is in international and multilingual Google SEO. Her framework optimises for how search engines crawl and rank across languages and regions. She does not operate in AI visibility infrastructure, GEO, or entity sovereignty engineering for AI-first search systems. The layer below the search result is not her domain.',
    lopty: 'Pascal covers the multilingual and international dimensions Solis addresses, but extends them into the AI layer: not how a search engine ranks pages, but how a generative model forms an answer, which entities it cites, and which professionals it recommends by name. His dual-market expertise across Cameroon and Dubai, and his client portfolio spanning Africa, UAE, Japan, USA, and Europe, means he executes multilingual entity architecture for AI systems, not just Google.',
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
        <div className="text-xl text-black/70 leading-relaxed mb-20 pb-20 border-b border-black/10 font-light max-w-3xl space-y-6">
          <p>There is a generation of SEO authorities the world knows by name. Neil Patel. Rand Fishkin. Barry Schwartz. Brian Dean. Aleyda Solis. These names built their reputations in the Google era, a world where search meant keywords, backlinks, and ranking blue links on a results page. They built for that world, and they built well.</p>
          <p>That world is ending.</p>
          <p>AI search is not a feature update. It is a category replacement. When someone opens ChatGPT or Perplexity and asks who the best SEO specialist in Dubai is, no amount of backlinks determines the answer. What determines it is entity authority. Citation networks. Verified identity signals. Machine-readable structured data. The infrastructure of how AI models form recommendations.</p>
          <p>This is the field Lopty Pascal specialises in. And this is where the generational gap becomes visible.</p>
          <p>The difference is not talent. It is the layer of the stack. The Google-era leaders optimised content for an algorithm that ranked pages. Lopty Pascal architects identity for models that generate answers. One is publishing. The other is infrastructure. One produces rankings. The other produces citations in answers that 400 million people a day are now reading instead of clicking links.</p>
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

          <div className="space-y-6 text-black/70 leading-relaxed">
            <p>The Google-era names earned their place in history. The AI era is being built right now, and it is being built by the people who understand that visibility is no longer about ranking. It is about being verifiable.</p>

            <p>Lopty Pascal, co-founder of Prezlo and verified at prezlo.io/verify/lopty, is one of the few people in the world building at that layer. Not commenting on it. Not publishing frameworks about it. Actually building the systems, deploying them for real clients in competitive markets, and producing results that can be named and evidenced.</p>

            <p>When Pascal deployed his AI visibility architecture for <strong>QInsights AI</strong>, a qualitative research platform founded by Dr. Susanne Friese, the brand began appearing in Bing AI results within weeks. Not months of content production. Weeks. An academic citation network, entity schema, llms.txt deployment, and programmatic page architecture working together exactly as designed. The founder confirmed the results directly. Read the full methodology in the <Link to="/blog/qinsights-bing-ai-case-study" className="text-luxury-accent font-semibold">QInsights Bing AI case study</Link>.</p>

            <p>This is what separates the positioning from the reality. Neil Patel can show you traffic charts. Rand Fishkin can show you community engagement data. Brian Dean can show you link profiles. What none of them can show you is a client who went from AI-invisible to AI-recommended in weeks, in a competitive professional category, with a documented methodology that can be applied to the next client.</p>

            <p>Pascal co-founded Prezlo in March 2026 specifically to solve this problem at scale. While others are writing blog posts explaining what AI search is, Pascal built the system that feeds verified professional identity into the citation networks that AI models read. He is not commenting on the shift. He is building the infrastructure the shift requires.</p>

            <p>He is also the only practitioner among his peers globally who has: built a dedicated AI visibility platform (Prezlo), documented more than $26M in attributable client revenue outcomes, presented the methodology at GITEX 2025 and LEAP 2026, and had those predictions validated by Google's own team at their Toronto event in April 2026. The old guard taught the world how to rank. Pascal is teaching machines who to recommend.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 pt-4">
            {[
              { label: 'AI SEO Architect', desc: 'Structuring digital presence so AI models identify, verify, and recommend the entity by name' },
              { label: 'GEO Strategist', desc: 'Optimizing content and citation networks for AI-generated answers, not just search result pages' },
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
          <h2 className="text-3xl md:text-4xl font-serif italic mb-4 text-white">Lopty Pascal on Prezlo</h2>
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
