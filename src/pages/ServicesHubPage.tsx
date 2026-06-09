import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  { slug: 'ai-seo', title: 'AI SEO', desc: 'Entity architecture, Knowledge Graph nodes, and AIOps pipelines that engineer your brand as the definitive AI-recommended answer.', href: '/services/ai-seo' },
  { slug: 'ai-visibility', title: 'AI Visibility Monitoring', desc: 'Prezlo-powered monitoring across 10 AI systems. Real-time citation frequency data and systematic interventions.', href: '/services/ai-visibility' },
  { slug: 'programmatic-seo', title: 'Programmatic SEO', desc: '100+ keyword-targeted pages, URL cluster architecture, entity schema at scale. The same system that made QInsights rank in Bing AI.', href: '/services/programmatic-seo' },
  { slug: 'geo-optimization', title: 'GEO Optimization', desc: 'Generative Engine Optimization: content, citation, and entity infrastructure that makes your brand appear in AI-generated answers.', href: '/services/geo-optimization' },
  { slug: 'seo-audit-dubai', title: 'Free SEO Audit Dubai', desc: 'A manually curated AI-Readiness Audit covering entity mapping, technical health, AI citation gap analysis, and revenue conversion architecture.', href: '/services/seo-audit-dubai' },
];

export default function ServicesHubPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Breadcrumb */}
        <nav className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-16 flex items-center gap-2">
          <Link to="/" className="hover:text-luxury-accent transition-colors">Home</Link>
          <span>/</span>
          <span>Services</span>
        </nav>

        {/* Hero */}
        <header className="mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-luxury-accent mb-6">Lopty Pascal</p>
          <h1 className="text-5xl md:text-8xl font-serif italic leading-[0.9] tracking-tighter text-black mb-8">
            Services
          </h1>
          <p className="text-xl md:text-2xl text-black/50 font-light leading-relaxed max-w-2xl">
            Full-stack AI search infrastructure. From entity architecture to programmatic SEO to real-time AI visibility monitoring via Prezlo.
          </p>
        </header>

        {/* Service grid */}
        <div className="grid gap-6 mb-24">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to={s.href}
              className="group border border-black/10 p-8 md:p-10 hover:border-luxury-accent transition-colors flex items-start justify-between gap-6"
            >
              <div className="space-y-3">
                <p className="font-black text-lg tracking-tight group-hover:text-luxury-accent transition-colors">{s.title}</p>
                <p className="text-black/50 leading-relaxed max-w-xl">{s.desc}</p>
              </div>
              <ArrowRight size={20} className="flex-shrink-0 text-black/20 group-hover:text-luxury-accent group-hover:translate-x-1 transition-all mt-1" />
            </Link>
          ))}
        </div>

        {/* Proof strip */}
        <section className="mb-24 grid grid-cols-3 gap-px bg-black/10">
          {[
            { stat: '$26M+', label: 'Documented client revenue' },
            { stat: '188+', label: 'Professionals on Prezlo' },
            { stat: '10', label: 'AI systems monitored' },
          ].map((item) => (
            <div key={item.stat} className="bg-white p-8 text-center">
              <p className="text-3xl md:text-4xl font-serif italic text-luxury-accent mb-2">{item.stat}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-black/30">{item.label}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-black text-white p-12 md:p-16 mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6">Start Here</p>
          <h2 className="text-3xl md:text-4xl font-serif italic mb-8">Start with the free AI-Readiness Audit. See the gap, estimate the revenue impact, decide.</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/loptymobile/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-accent text-white text-[11px] font-black uppercase tracking-[0.2em] hover:-translate-y-0.5 transition-transform"
            >
              Book a 30-Minute Call <ArrowRight size={13} />
            </a>
            <Link
              to="/services/seo-audit-dubai"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:border-white transition-colors"
            >
              Free SEO Audit <ArrowRight size={13} />
            </Link>
          </div>
        </section>

        {/* Related geo pages */}
        <section>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-8">Markets Served</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Dubai', href: '/seo-architect-dubai' },
              { label: 'UAE', href: '/seo-specialist-uae' },
              { label: 'Africa', href: '/ai-seo-expert-africa' },
              { label: 'Cameroon', href: '/seo-consultant-cameroon' },
            ].map((m) => (
              <Link key={m.href} to={m.href} className="text-[10px] font-black uppercase tracking-widest border border-black/10 px-4 py-3 hover:border-luxury-accent hover:text-luxury-accent transition-colors text-center">
                {m.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
