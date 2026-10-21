import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../content/case-studies';
import type { ContentPage } from '../content/types';
import dimensions from '../content/evidence-dimensions.json';

export function CaseStudyCards({ compact = false, category }: { compact?: boolean; category?: ContentPage['caseCategory'] }) {
  const pages = CASE_STUDIES.filter(page => !category || page.caseCategory === category);
  return <section className={`section-shell home-section case-studies ${compact ? 'case-compact' : ''}`} aria-label="Selected case studies">
    <div className="section-heading"><div><p className="eyebrow">SELECTED WORK / SEO & AI SEO</p><h2>Real businesses.<br /><span>Visible results.</span></h2></div><p>Client visibility milestones and the growth of Prezlo itself. See what changed, when it appeared and how it was measured.</p></div>
    <nav className="case-categories" aria-label="Case study categories"><Link to="/work" aria-current={!category ? 'page' : undefined}>All projects</Link><Link to="/work/ai-seo" aria-current={category === 'ai-seo' ? 'page' : undefined}>AI SEO & LLMs</Link><Link to="/work/seo" aria-current={category === 'seo' ? 'page' : undefined}>Traditional & local SEO</Link></nav>
    <div className="case-grid">{pages.map((page, i) => <Link className={`case-card case-tone-${i}`} to={`/${page.slug}`} key={page.slug}>
      <div className="case-card-top"><span>{page.scope}</span><span aria-hidden="true">↗</span></div>
      <h3>{page.client}</h3><span className="case-sector">{page.industry} · {page.market}</span>
      <p>{page.h1}</p><div className="case-card-foot"><span>{page.period}</span><b>View case study ↗</b></div>
    </Link>)}</div>
  </section>;
}

export function CaseStudyEvidence({ page }: { page: ContentPage }) {
  return <section className="section-shell case-proof" aria-label="Case study results and evidence">
    <dl className="case-context"><div><dt>Industry</dt><dd>{page.industry}</dd></div><div><dt>Market</dt><dd>{page.market}</dd></div><div><dt>Engagement</dt><dd>{page.scope}</dd></div></dl>
    <div className="case-proof-heading"><div><p className="eyebrow">THE REPORTS BEHIND THE RESULT</p><h2>See the evidence.</h2></div><span>{page.period}</span></div>
    <details className="case-reports"><summary>Open the original reports <span aria-hidden="true">+</span></summary><div className="case-evidence-grid">{page.evidence?.map(([file, caption]) => {
      const size = dimensions[file as keyof typeof dimensions];
      return <figure key={file}><img src={`/case-studies/${file}.png`} width={size[0]} height={size[1]} alt={caption} loading="lazy" /><figcaption>{caption}<br /><a href={`/case-studies/${file}.png`} target="_blank" rel="noopener noreferrer">View full-size report ↗</a></figcaption></figure>;
    })}</div></details>
  </section>;
}
