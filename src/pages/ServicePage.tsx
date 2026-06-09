import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICE_PAGES } from '../data/service-pages';

interface Props {
  slug: string;
}

export default function ServicePage({ slug }: Props) {
  const page = SERVICE_PAGES[slug];

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Service not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Breadcrumb */}
        <nav className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-16 flex items-center gap-2">
          <Link to="/" className="hover:text-luxury-accent transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-luxury-accent transition-colors">Services</Link>
          <span>/</span>
          <span>{page.h1}</span>
        </nav>

        {/* Hero */}
        <header className="mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-luxury-accent mb-6">Service</p>
          <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.9] tracking-tighter text-black mb-8">
            {page.h1}
          </h1>
          <p className="text-xl md:text-2xl text-black/50 font-light leading-relaxed max-w-2xl">
            {page.subtitle}
          </p>
        </header>

        {/* Intro */}
        <div className="text-xl text-black/70 leading-relaxed mb-20 pb-20 border-b border-black/10 font-light max-w-3xl">
          {page.intro}
        </div>

        {/* Sections */}
        <article className="space-y-16 mb-24">
          {page.sections.map((section) => (
            <div key={section.heading} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif italic text-black">{section.heading}</h2>
              <div
                className="text-black/70 leading-relaxed prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: section.body.split('\n\n').map(p => `<p>${p}</p>`).join('') }}
              />
            </div>
          ))}
        </article>

        {/* Deliverables */}
        <section className="mb-24 bg-black/[0.02] border border-black/5 p-10 md:p-12">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-8">What You Get</p>
          <ul className="space-y-4">
            {page.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-4">
                <CheckCircle size={16} className="text-luxury-accent mt-0.5 flex-shrink-0" />
                <span className="text-black/70 leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        {page.faq.length > 0 && (
          <section className="mb-24 pt-16 border-t border-black/10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-12">Questions</p>
            <div className="space-y-10">
              {page.faq.map((item) => (
                <div key={item.q} className="space-y-3">
                  <h3 className="font-black text-lg tracking-tight">{item.q}</h3>
                  <p className="text-black/60 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-black text-white p-12 md:p-16 mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6">Start Here</p>
          <h2 className="text-3xl md:text-4xl font-serif italic mb-8">Begin with a free AI-Readiness Audit. No cost, no obligation.</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/loptymobile/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-accent text-white text-[11px] font-black uppercase tracking-[0.2em] hover:-translate-y-0.5 transition-transform"
            >
              Book a 30-Minute Call <ArrowRight size={13} />
            </a>
          </div>
        </section>

        {/* Related pages */}
        <section>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-8">Related Pages</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {page.relatedPages.map((rp) => (
              <Link
                key={rp.href}
                to={rp.href}
                className="text-[10px] font-black uppercase tracking-widest border border-black/10 px-4 py-3 hover:border-luxury-accent hover:text-luxury-accent transition-colors text-center"
              >
                {rp.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
