import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BIO, CONTACT, NAME, NAV, PROFILES } from '../site';

// Renders [label](/path) and [label](https://...) inside copy as real links.
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <React.Fragment key={i}>{part}</React.Fragment>;
        const [, label, href] = m;
        return href.startsWith('/') ? (
          <Link key={i} to={href} className="text-link">{label}</Link>
        ) : (
          <a key={i} href={href} className="text-link" rel="noopener">{label}</a>
        );
      })}
    </>
  );
}

function Header() {
  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-4 sm:px-6">
        <Link to="/" className="font-serif text-xl font-bold tracking-tight text-black">
          Lopty <span className="font-normal italic text-luxury-accent">Pascal</span>
        </Link>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          {NAV.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-luxury-accent ${isActive ? 'font-semibold text-black' : 'text-black/70'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-neutral-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-lg font-bold text-black">{NAME}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-black/70">{BIO}</p>
          <p className="mt-3 text-sm text-black/70">Dubai, United Arab Emirates</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-black/50">Site</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map(item => (
              <li key={item.to}><Link to={item.to} className="text-black/80 hover:text-luxury-accent">{item.label}</Link></li>
            ))}
            <li><Link to="/methodology" className="text-black/80 hover:text-luxury-accent">Methodology</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-black/50">Profiles</p>
          <ul className="mt-3 space-y-2 text-sm">
            {PROFILES.map(p => (
              <li key={p.url}><a href={p.url} rel="me noopener" className="text-black/80 hover:text-luxury-accent">{p.label}</a></li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <a href={`tel:${CONTACT.phone}`} className="text-black/80 hover:text-luxury-accent">{CONTACT.phoneLabel}</a>
          </p>
        </div>
      </div>
      <div className="border-t border-black/10 px-4 py-5 text-center text-xs text-black/50">
        © 2026 {NAME}. Dubai, UAE.
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-white focus:p-2">Skip to content</a>
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

// The single next step offered on every page. No pressure language.
export function NextStep({ heading = 'Talk to Lopty' }: { heading?: string }) {
  return (
    <section aria-labelledby="next-step" className="mt-16 rounded-lg border border-black/10 bg-neutral-50 p-6 sm:p-8">
      <h2 id="next-step" className="font-serif text-2xl font-bold">{heading}</h2>
      <p className="mt-3 max-w-2xl text-black/70">
        Send a message with your website and what you want to achieve. You will get a straight answer on whether this is something I can help with.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={CONTACT.whatsapp} rel="noopener" className="btn-primary">Message on WhatsApp</a>
        <a href={CONTACT.calendly} rel="noopener" className="btn-secondary">Book a 30 minute call</a>
        <Link to="/contact" className="btn-secondary">All contact options</Link>
      </div>
    </section>
  );
}

export function Breadcrumbs({ trail }: { trail: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-black/50">
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((t, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {t.to ? <Link to={t.to} className="hover:text-luxury-accent">{t.label}</Link> : <span className="text-black/70">{t.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
