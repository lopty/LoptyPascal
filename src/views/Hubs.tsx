import { Link } from 'react-router-dom';
import { HUBS, INSIGHTS, SERVICES, TOPICS, industriesIn, labelFor } from '../content';
import type { HubSlug } from '../content';
import { CONTACT, NAME, PROFILES, REVIEWED, REVIEWED_LABEL } from '../site';
import { Breadcrumbs, NextStep } from '../components/Layout';

function Byline() {
  return (
    <p className="mt-5 text-sm text-black/60">
      By <Link to="/about" className="text-link">{NAME}</Link>
      {' · '}Last reviewed <time dateTime={REVIEWED}>{REVIEWED_LABEL}</time>
    </p>
  );
}

export function ServicesHub() {
  return (
    <div className="section-shell hub-page service-hub">
      <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />
      <p className="eyebrow hub-eyebrow">STRATEGY. EXECUTION. GROWTH.</p>
      <h1 className="hub-title">Three ways to move<br /><span>your business forward.</span></h1>
      <Byline />
      <p className="hub-intro">
        I offer three services from Dubai. AI SEO and GEO is my strongest niche. The other two cover digital marketing more widely: one where I run the work, one where I advise and review.
      </p>
      <div className="hub-service-grid">
        {SERVICES.map((s, i) => (
          <Link key={s.slug} to={`/${s.slug}`} className="service-card">
            <div className="service-top"><span className="service-icon" aria-hidden="true">{['◎', '↗', '⌘'][i]}</span><span className="service-number">0{i + 1}</span></div>
            <h2 className="font-serif text-2xl font-bold">{s.navLabel}</h2>
            <p className="mt-2 leading-relaxed text-black/70">{s.description}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-luxury-accent">Read about {s.navLabel.toLowerCase()}</span>
          </Link>
        ))}
      </div>
      <div className="prose-body mt-12">
        <h2>Which one fits you</h2>
        <ul>
          <li>You want AI assistants and Google to find and cite your brand: AI SEO and GEO.</li>
          <li>You need someone to run campaigns and SEO for you: digital marketing specialist.</li>
          <li>You have a team or agency and want an independent plan and review: digital marketing consultant.</li>
        </ul>
        <p>
          Looking for your sector? See <Link to="/digital-marketing-dubai" className="text-link">digital marketing in Dubai by industry</Link> and <Link to="/ai-seo-geo-dubai" className="text-link">AI SEO and GEO in Dubai by industry</Link>. Not sure which service? Read <Link to="/insights/specialist-vs-consultant-vs-agency" className="text-link">specialist, consultant or agency</Link>, or see <Link to="/methodology" className="text-link">how I work</Link>.
        </p>
      </div>
      <NextStep />
    </div>
  );
}

export function InsightsHub() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Insights' }]} />
      <h1 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-5xl">Insights on GEO, AI SEO, SEO and digital marketing</h1>
      <Byline />
      <p className="mt-8 border-l-4 border-luxury-accent pl-5 text-lg leading-relaxed">
        Each page answers one question that business owners ask Google or an AI assistant. The answer comes first, then the explanation, then what the approach will not do.
      </p>
      {TOPICS.map(topic => (
        <section key={topic} className="mt-12">
          <h2 className="font-serif text-2xl font-bold">{topic}</h2>
          <ul className="mt-4 divide-y divide-black/10 border-y border-black/10">
            {INSIGHTS.filter(p => p.topic === topic).map(p => (
              <li key={p.slug} className="py-4">
                <Link to={`/${p.slug}`} className="text-link text-lg">{p.h1}</Link>
                <p className="mt-1 text-sm text-black/60">{p.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <NextStep />
    </div>
  );
}

export function IndustryHub({ hub }: { hub: HubSlug }) {
  const h = HUBS[hub];
  return (
    <div className="section-shell hub-page industry-hub">
      <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: h.crumb }]} />
      <p className="eyebrow hub-eyebrow">YOUR MARKET. YOUR CUSTOMERS. YOUR NEXT MOVE.</p>
      <h1 className="hub-title">{h.h1}</h1>
      <Byline />
      <p className="hub-intro">
        {h.intro}
      </p>
      <ul className="industry-card-grid">
        {industriesIn(hub).map(p => (
          <li key={p.slug} className="py-4">
            <Link to={`/${p.slug}`} className="text-link text-lg">{p.h1}</Link>
            <p className="mt-1 text-sm text-black/60">{p.description}</p>
          </li>
        ))}
      </ul>
      <div className="prose-body mt-12">
        <h2>If your sector is not listed</h2>
        <p>
          I only write a sector page when something real differs. If the only change would be the industry name, the general page applies: see <Link to={`/${h.service}`} className="text-link">{labelFor(h.service)}</Link>, or <Link to="/contact" className="text-link">ask me directly</Link>.
        </p>
        <h2>{h.noteTitle}</h2>
        <p>{h.note}</p>
      </div>
      <NextStep />
    </div>
  );
}

export function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
      <h1 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-5xl">Contact Lopty Pascal</h1>
      <Byline />
      <p className="mt-8 border-l-4 border-luxury-accent pl-5 text-lg leading-relaxed">
        The quickest way to reach me is WhatsApp. Tell me your website and what you want to achieve, and I will reply with whether and how I can help.
      </p>
      <div className="prose-body mt-10">
        <h2>Ways to get in touch</h2>
        <ul>
          <li><a href={CONTACT.whatsapp} rel="noopener" className="text-link">Message on WhatsApp</a></li>
          <li><a href={CONTACT.calendly} rel="noopener" className="text-link">Book a 30 minute call</a></li>
          <li>Phone: <a href={`tel:${CONTACT.phone}`} className="text-link">{CONTACT.phoneLabel}</a></li>
          <li><a href={CONTACT.linkedin} rel="me noopener" className="text-link">Connect on LinkedIn</a></li>
        </ul>
        <h2>What to include in your message</h2>
        <ul>
          <li>Your website address.</li>
          <li>What you sell and who buys it.</li>
          <li>Which service you are interested in, if you know.</li>
          <li>What you have already tried.</li>
        </ul>
        <h2>Where I work</h2>
        <p>I am based in Dubai, United Arab Emirates. I meet clients in Dubai in person when useful and work remotely with clients elsewhere.</p>
        <h2>My profiles</h2>
        <ul>
          {PROFILES.map(p => <li key={p.url}><a href={p.url} rel="me noopener" className="text-link">{p.label}</a></li>)}
        </ul>
        <h2>Before you write</h2>
        <p>
          You may find your answer in the <Link to="/insights" className="text-link">insights</Link>, on the <Link to="/services" className="text-link">services</Link> page or in <Link to="/methodology" className="text-link">how I work</Link>.
        </p>
      </div>
    </div>
  );
}

export function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-serif text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-lg text-black/70">This page does not exist or has been removed.</p>
      <ul className="mt-6 space-y-2">
        <li><Link to="/" className="text-link">Home</Link></li>
        <li><Link to="/services" className="text-link">Services</Link></li>
        <li><Link to="/insights" className="text-link">Insights</Link></li>
        <li><Link to="/contact" className="text-link">Contact</Link></li>
      </ul>
    </div>
  );
}
