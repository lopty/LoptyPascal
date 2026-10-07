import { Link } from 'react-router-dom';
import { HUBS, HUB_SLUGS, INSIGHTS, SERVICES, industriesIn } from '../content';
import { CLIENTS, CONTACT, EMPLOYERS, MENTIONS, NAME, REVIEWED, REVIEWED_LABEL } from '../site';
import { NextStep } from '../components/Layout';

export const HOME_FAQS = [
  {
    q: 'Who is Lopty Pascal?',
    a: 'Lopty Pascal is a digital marketing expert in Dubai with 10 years of experience and more than 300 projects. His specialism is AI SEO and GEO, and he is the co-founder and builder of Prezlo, an AI visibility platform.',
  },
  {
    q: 'What does Lopty Pascal do?',
    a: 'He offers three services: AI SEO and GEO, hands-on digital marketing as a specialist, and independent advice as a digital marketing consultant.',
  },
  {
    q: 'What is Prezlo?',
    a: 'Prezlo is a platform that makes businesses and professionals easier for AI assistants to find, verify and recommend. Lopty co-founded and built it.',
  },
  {
    q: 'Does he promise rankings or AI recommendations?',
    a: 'No. Nobody controls search results or AI answers. He commits to the work, the method and honest reporting.',
  },
];

const TEASERS: Record<string, string> = {
  'services/ai-seo-geo': 'Get found, verified and cited by AI assistants and AI search. My strongest niche.',
  'services/digital-marketing-specialist': 'Hands-on Google Ads, paid campaigns, SEO and tracking, judged on sales.',
  'services/digital-marketing-consultant': 'An independent audit, a ranked plan, and review of your team or agency.',
};

const FEATURED = [
  'insights/what-is-geo',
  'insights/how-to-get-recommended-by-chatgpt',
  'insights/how-long-does-ai-visibility-take',
  'insights/what-is-ai-seo',
  'insights/how-to-choose-a-digital-marketing-consultant-dubai',
  'insights/seo-vs-google-ads-dubai',
];

export default function Home() {
  const featured = FEATURED.map(slug => INSIGHTS.find(p => p.slug === slug)!);
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="grid items-center gap-10 py-12 md:grid-cols-[3fr_2fr] md:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-luxury-accent">Digital marketing expert · Dubai</p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-6xl">
            {NAME}: AI SEO, GEO and digital marketing in Dubai
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/75">
            I help businesses get found on Google and recommended by AI assistants such as ChatGPT, Perplexity and Gemini. I co-founded and built{' '}
            <Link to="/prezlo" className="text-link">Prezlo</Link>, the platform brands and professionals use to be found, verified and recommended by AI.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={CONTACT.whatsapp} rel="noopener" className="btn-primary">Message on WhatsApp</a>
            <Link to="/services" className="btn-secondary">See services</Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xs md:max-w-sm">
          <img
            src="/lopty-pascal.webp"
            srcSet="/lopty-pascal-320.webp 320w, /lopty-pascal.webp 640w"
            sizes="(min-width: 768px) 384px, 320px"
            width={640}
            height={747}
            alt="Portrait of Lopty Pascal, digital marketing expert in Dubai and co-founder of Prezlo"
            className="h-auto w-full rounded-lg"
          />
        </div>
      </section>

      <section aria-labelledby="proof" className="border-y border-black/10 py-10">
        <h2 id="proof" className="sr-only">Why work with Lopty</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl font-bold">Built Prezlo</h3>
            <p className="mt-2 text-black/70">
              I did not only study AI visibility. I co-founded and built a product for it, used by brands and individual professionals. <Link to="/prezlo" className="text-link">About Prezlo</Link>
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold">10 years, 300+ projects</h3>
            <p className="mt-2 text-black/70">
              Leads from campaigns I ran across Google Ads, paid channels and SEO became more than $20 million in client sales. <Link to="/work" className="text-link">What that figure means</Link>
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold">Referenced by industry publications</h3>
            <p className="mt-2 text-black/70">
              When JC Chouinard and Xpert.Digital covered Google Search Central Live Toronto, both used my analysis of the shift from pages to entities as an expert reference. <Link to="/about" className="text-link">About me</Link>
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="clients" className="border-b border-black/10 py-10">
        <h2 id="clients" className="sr-only">Where Lopty has worked</h2>
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-black/50">Worked at</h3>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3 font-serif text-xl text-black/85">
              {EMPLOYERS.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-black/50">Client projects</h3>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3 font-serif text-lg text-black/80">
              {CLIENTS.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
        <p className="mt-5 text-sm text-black/60">Names only. <Link to="/work" className="text-link">See how I describe my work and results</Link>.</p>
      </section>

      <section aria-labelledby="services" className="py-14">
        <h2 id="services" className="font-serif text-3xl font-bold">Three services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {SERVICES.map(s => (
            <Link key={s.slug} to={`/${s.slug}`} className="card">
              <h3 className="font-serif text-xl font-bold">{s.navLabel}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/70">{TEASERS[s.slug]}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-luxury-accent">Read more</span>
            </Link>
          ))}
        </div>
      </section>

      {HUB_SLUGS.map(hub => (
        <section key={hub} aria-labelledby={hub} className="border-t border-black/10 py-14">
          <h2 id={hub} className="font-serif text-3xl font-bold">{HUBS[hub].h1}</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {industriesIn(hub).map(p => (
              <li key={p.slug}><Link to={`/${p.slug}`} className="btn-secondary">{p.navLabel}</Link></li>
            ))}
          </ul>
          <p className="mt-6"><Link to={`/${hub}`} className="font-semibold text-luxury-accent">{HUBS[hub].crumb}: how the approach changes by sector</Link></p>
        </section>
      ))}

      <section aria-labelledby="mentions" className="border-t border-black/10 py-14">
        <h2 id="mentions" className="font-serif text-3xl font-bold">Where my work has been referenced</h2>
        <ul className="mt-6 space-y-6">
          {MENTIONS.map(m => (
            <li key={m.url}>
              <p className="text-black/80">{m.summary}</p>
              <p className="mt-1 text-sm text-black/60">
                <a href={m.url} rel="noopener" className="text-link">{m.publisher}: {m.title}</a>, published {m.published}.
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="questions" className="border-t border-black/10 py-14">
        <h2 id="questions" className="font-serif text-3xl font-bold">Questions buyers ask, answered</h2>
        <ul className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2">
          {featured.map(p => (
            <li key={p.slug}>
              <Link to={`/${p.slug}`} className="text-link text-lg">{p.h1}</Link>
            </li>
          ))}
        </ul>
        <p className="mt-6"><Link to="/insights" className="font-semibold text-luxury-accent">All insights</Link></p>
      </section>

      <section aria-labelledby="home-faq" className="border-t border-black/10 py-14">
        <h2 id="home-faq" className="font-serif text-3xl font-bold">Frequently asked questions</h2>
        <dl className="faq mt-6 max-w-3xl">
          {HOME_FAQS.map(f => (
            <div key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm text-black/60">
          Last reviewed <time dateTime={REVIEWED}>{REVIEWED_LABEL}</time> by <Link to="/about" className="text-link">{NAME}</Link>.
        </p>
      </section>

      <div className="pb-4"><NextStep /></div>
    </div>
  );
}
