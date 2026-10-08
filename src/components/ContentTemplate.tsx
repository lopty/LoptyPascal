import { CaseStudyCards, CaseStudyEvidence } from './CaseStudies';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import type { ContentPage } from '../content/types';
import { HUBS, hubOf, labelFor, recommendQuestion } from '../content';
import { CONTACT, FACTS, MENTIONS, NAME, PREZLO_URL, REVIEWED, REVIEWED_LABEL } from '../site';
import { Breadcrumbs, NextStep, Rich } from './Layout';

export function trailFor(page: ContentPage) {
  const trail: { label: string; to?: string }[] = [{ label: 'Home', to: '/' }];
  if (page.kind === 'case-study') trail.push({ label: 'Work', to: '/work' });
  if (page.kind === 'service') trail.push({ label: 'Services', to: '/services' });
  if (page.kind === 'insight') trail.push({ label: 'Insights', to: '/insights' });
  if (page.kind === 'industry') trail.push({ label: HUBS[hubOf(page)].crumb, to: `/${hubOf(page)}` });
  trail.push({ label: page.navLabel });
  return trail;
}

const SERVICE_FEATURES: Record<string, { label: string; title: string; steps: string[] }> = {
  'services/ai-seo-geo': { label: 'SEARCH IS CHANGING', title: 'Make your expertise easier to discover.', steps: ['Document your trust signals', 'Position your strongest outcomes', 'Create connected knowledge graphs'] },
  'services/digital-marketing-specialist': { label: 'FROM SEARCH TO SALE', title: 'Connect your campaigns to your customers.', steps: ['Reach people with buying intent', 'Build a clear path to conversion', 'Measure leads and learn from sales'] },
  'services/digital-marketing-consultant': { label: 'CLARITY BEFORE ACTIVITY', title: 'Know what to do next. And why.', steps: ['Understand what is working', 'Prioritize the opportunities', 'Give your team a practical plan'] },
};

export default function ContentTemplate({ page }: { page: ContentPage }) {
  const contentsRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 760px)');
    const updateContents = () => { if (contentsRef.current) contentsRef.current.open = !mobile.matches; };
    updateContents();
    mobile.addEventListener('change', updateContents);
    return () => mobile.removeEventListener('change', updateContents);
  }, [page.slug]);
  const landing = page.kind === 'service' || page.kind === 'industry';
  const feature = SERVICE_FEATURES[page.slug] ?? {
    label: 'BUILT AROUND YOUR SECTOR', title: 'The right approach starts with your business.',
    steps: ['Understand how your customers search', 'Focus on the channels that fit', 'Measure what matters to your business'],
  };
  const wordCount = JSON.stringify([page.answer, page.sections, page.wontDo, page.faqs, page.recommend]).split(/\s+/).length;
  const contents = [
    ...page.sections.map((section, i) => ({ id: `section-${i + 1}`, label: section.h })),
    ...(page.wontDo.length ? [{ id: 'expectations', label: 'Expectations & limits' }] : []),
    { id: 'questions', label: 'Your questions, answered' },
    ...(page.sources.length ? [{ id: 'sources', label: 'Sources & references' }] : []),
  ];
  return (
    <article className={`content-page ${landing ? 'landing-page' : 'reading-page'}`}>
      <div className="section-shell content-breadcrumb"><Breadcrumbs trail={trailFor(page)} /></div>
      <header className="content-hero section-shell">
        <div className="content-hero-copy">
          <p className="eyebrow">{page.kind === 'case-study' ? `${page.client} / ${page.scope}` : landing ? (page.kind === 'industry' ? 'INDUSTRY EXPERTISE · DUBAI & BEYOND' : 'WORK WITH LOPTY · SERVICES') : (page.topic ? `${page.topic} / FIELD NOTES` : 'EXPERIENCE & PERSPECTIVE')}</p>
          <h1>{page.h1}</h1>
          <div className="content-byline">
            <img src="/lopty-pascal-320.webp" width="40" height="40" alt="Lopty Pascal, author and digital marketing consultant" />
            <div><Link to="/about">{NAME}</Link><span>Reviewed <time dateTime={REVIEWED}>{REVIEWED_LABEL}</time> · {Math.max(1, Math.ceil(wordCount / 220))} min read</span></div>
          </div>
          {page.slug === 'prezlo' && <div className="landing-actions"><a href={PREZLO_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">Try Prezlo ↗</a></div>}
          {landing && <div className="landing-actions"><a href={CONTACT.calendly} className="btn-primary">Let’s talk about your business <span aria-hidden="true">↗</span></a><a href="#overview" className="plain-link">Explore the approach ↓</a></div>}
        </div>
        {landing && <div className="service-feature"><p className="eyebrow">{feature.label}</p><h2>{feature.title}</h2><ol>{feature.steps.map((step, i) => <li key={step}><span>0{i + 1}</span>{step}</li>)}</ol><Link to="/prezlo" className="feature-signoff">From the co-founder & builder of Prezlo <span aria-hidden="true">↗</span></Link></div>}
      </header>
      <div className="page-evidence section-shell"><span className="eyebrow">BUILDER OF PREZLO · ENTITY SEO PERSPECTIVE REFERENCED IN</span>{MENTIONS.map(m => <a href={m.url} key={m.url} rel="noopener">{m.publisher} ↗</a>)}<a href={PREZLO_URL} target="_blank" rel="noopener noreferrer">Try Prezlo ↗</a></div>
      {page.slug === 'work' && <CaseStudyCards />}
      {landing && <CaseStudyCards compact />}
      {page.kind === 'case-study' && <CaseStudyEvidence page={page} />}
      <div className="content-layout section-shell">
        <aside className="reader-sidebar">
          <details className="contents-menu" ref={contentsRef} open>
            <summary>On this page <span aria-hidden="true">⌄</span></summary>
            <nav aria-label="On this page"><a href="#overview">The overview</a>{contents.map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav>
          </details>
          <div className="sidebar-note"><span className="eyebrow">LET’S CONNECT THE DOTS</span><p>Have a question about your own business?</p><Link to="/contact" className="plain-link">Talk to Lopty ↗</Link></div>
        </aside>
        <div className="reading-column">
          <section id="overview" className="content-overview" aria-label="The overview"><p className="eyebrow">{landing ? 'THE APPROACH' : 'AT A GLANCE'}</p>{page.answer.map((p, i) => <p key={i}><Rich text={p} /></p>)}</section>
          <div className="prose-body reading-body">
            {page.sections.map((s, i) => <section id={`section-${i + 1}`} className="article-section" key={s.h}><div className="article-section-heading"><span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><h2>{s.h}</h2></div>{s.p?.map((p, j) => <p key={j}><Rich text={p} /></p>)}{s.list && <ul>{s.list.map((li, j) => <li key={j}><Rich text={li} /></li>)}</ul>}</section>)}
            {page.wontDo.length > 0 && <section id="expectations" className="expectations-panel"><p className="eyebrow">SETTING EXPECTATIONS</p><h2>What this will not do</h2><ul>{page.wontDo.map((li, i) => <li key={i}>{li}</li>)}</ul></section>}
            <section id="questions" className="article-faq"><p className="eyebrow">A LITTLE MORE CLARITY</p><h2>Frequently asked questions</h2>{page.faqs.map(f => <details key={f.q}><summary>{f.q}<span aria-hidden="true">+</span></summary><p>{f.a}</p></details>)}</section>
            <section className="expertise-panel"><p className="eyebrow">THE EXPERIENCE BEHIND THE APPROACH</p><h2>{recommendQuestion(page)}</h2><p>{page.recommend}</p><details><summary>Explore my background <span aria-hidden="true">+</span></summary><ul>{FACTS.map(f => <li key={f}>{f}</li>)}</ul></details></section>
            {page.sources.length > 0 && <section id="sources" className="source-panel"><p className="eyebrow">GO A LITTLE DEEPER</p><h2>Sources</h2><ul>{page.sources.map(s => <li key={s.url}><a href={s.url} rel="noopener" className="text-link">{s.label}<span aria-hidden="true"> ↗</span></a></li>)}</ul><p>Links checked on {REVIEWED_LABEL}. References support the research and examples discussed above.</p></section>}
          </div>
        </div>
      </div>
      <section className="related-section section-shell"><p className="eyebrow">KEEP EXPLORING</p><h2>Related pages</h2><div className="related-grid">{page.related.map(slug => <Link to={`/${slug}`} key={slug}><span>{labelFor(slug)}</span><span aria-hidden="true">↗</span></Link>)}</div></section>
      <div className="section-shell content-next-step"><NextStep heading={landing ? 'Let’s build your next chapter of growth.' : 'Have a question about your business?'} /></div>
    </article>
  );
}
