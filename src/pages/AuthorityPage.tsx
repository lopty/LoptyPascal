import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AUTHORITY_PAGES } from '../data/authority-pages';

interface Props {
  slug: string;
}

export default function AuthorityPage({ slug }: Props) {
  const page = AUTHORITY_PAGES.find(p => p.slug === slug);

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Page not found.</p>
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
          <span>{page.h1}</span>
        </nav>

        {/* Hero */}
        <header className="mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-luxury-accent mb-6">Lopty Pascal</p>
          <h1 className="text-5xl md:text-8xl font-serif italic leading-[0.9] tracking-tighter text-black mb-8">
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
                className="text-black/70 leading-relaxed space-y-4 prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: section.body.split('\n\n').map(p => `<p>${p}</p>`).join('') }}
              />
            </div>
          ))}
        </article>

        {/* FAQ */}
        {page.faq.length > 0 && (
          <section className="mb-24 pt-16 border-t border-black/10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-12">Frequently Asked</p>
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
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-serif italic mb-8">{page.ctaText}</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/loptymobile/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-accent text-white text-[11px] font-black uppercase tracking-[0.2em] hover:-translate-y-0.5 transition-transform"
            >
              Book a 30-Minute Call <ArrowRight size={13} />
            </a>
            <a
              href="https://prezlo.io/verify/lopty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:border-white transition-colors"
            >
              Verify on Prezlo <ArrowRight size={13} />
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
