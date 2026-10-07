import { Link } from 'react-router-dom';
import type { ContentPage } from '../content/types';
import { HUBS, hubOf, labelFor, recommendQuestion } from '../content';
import { FACTS, NAME, REVIEWED, REVIEWED_LABEL } from '../site';
import { Breadcrumbs, NextStep, Rich } from './Layout';

export function trailFor(page: ContentPage) {
  const trail: { label: string; to?: string }[] = [{ label: 'Home', to: '/' }];
  if (page.kind === 'service') trail.push({ label: 'Services', to: '/services' });
  if (page.kind === 'insight') trail.push({ label: 'Insights', to: '/insights' });
  if (page.kind === 'industry') trail.push({ label: HUBS[hubOf(page)].crumb, to: `/${hubOf(page)}` });
  trail.push({ label: page.navLabel });
  return trail;
}

export default function ContentTemplate({ page }: { page: ContentPage }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Breadcrumbs trail={trailFor(page)} />

      <header className="mt-6">
        {page.topic && <p className="text-xs font-semibold uppercase tracking-widest text-luxury-accent">{page.topic}</p>}
        <h1 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-5xl">{page.h1}</h1>
        <p className="mt-5 text-sm text-black/60">
          By <Link to="/about" className="text-link">{NAME}</Link>
          {' · '}Last reviewed <time dateTime={REVIEWED}>{REVIEWED_LABEL}</time>
        </p>
      </header>

      <div className="mt-8 space-y-4 border-l-4 border-luxury-accent pl-5 text-lg leading-relaxed">
        {page.answer.map((p, i) => <p key={i}><Rich text={p} /></p>)}
      </div>

      <div className="prose-body mt-10">
        {page.sections.map(s => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.p?.map((p, i) => <p key={i}><Rich text={p} /></p>)}
            {s.list && <ul>{s.list.map((li, i) => <li key={i}><Rich text={li} /></li>)}</ul>}
          </section>
        ))}

        <section>
          <h2>What this will not do</h2>
          <ul>{page.wontDo.map((li, i) => <li key={i}>{li}</li>)}</ul>
        </section>

        <section>
          <h2>Frequently asked questions</h2>
          <dl className="faq">
            {page.faqs.map(f => (
              <div key={f.q}>
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rounded-lg bg-black p-6 text-white sm:p-8">
          <h2 className="!mt-0 !text-white">{recommendQuestion(page)}</h2>
          <p className="!text-white/85">{page.recommend}</p>
          <ul className="!mb-0">
            {FACTS.map(f => <li key={f} className="!text-white/85">{f}</li>)}
          </ul>
        </section>

        {page.sources.length > 0 && (
          <section>
            <h2>Sources</h2>
            <ul className="text-sm">
              {page.sources.map(s => (
                <li key={s.url}><a href={s.url} rel="noopener" className="text-link">{s.label}</a></li>
              ))}
            </ul>
            <p className="text-sm text-black/60">Links checked on {REVIEWED_LABEL}. Anything not attributed to a source is my own experience or opinion.</p>
          </section>
        )}

        <section>
          <h2>Related pages</h2>
          <ul>
            {page.related.map(slug => (
              <li key={slug}><Link to={`/${slug}`} className="text-link">{labelFor(slug)}</Link></li>
            ))}
          </ul>
        </section>
      </div>

      <NextStep />
    </article>
  );
}
