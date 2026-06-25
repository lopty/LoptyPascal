import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Breadcrumb */}
        <nav className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-16 flex items-center gap-2">
          <Link to="/" className="hover:text-luxury-accent transition-colors">Home</Link>
          <span>/</span>
          <span>About</span>
        </nav>

        {/* Hero */}
        <header className="mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-luxury-accent mb-6">Biography</p>
          <h1 className="text-5xl md:text-8xl font-serif italic leading-[0.9] tracking-tighter text-black mb-8">
            Biography & Professional History
          </h1>
          <p className="text-xl md:text-2xl text-black/50 font-light leading-relaxed max-w-2xl">
            The professional background of Lopty Pascal: from early education at Bishop Rogan College in Cameroon to digital marketing and co-founding Prezlo in Dubai.
          </p>
        </header>

        {/* Profile */}
        <div className="flex items-start gap-6 mb-20 pb-20 border-b border-black/10">
          <img
            src="/lopty-pascal.png"
            alt="Lopty Pascal — AI SEO Consultant and Co-Founder of Prezlo"
            className="w-24 h-24 rounded-sm object-cover flex-shrink-0"
          />
          <div>
            <p className="font-black text-lg tracking-tight">LOPTY PASCAL</p>
            <p className="text-black/50 text-sm mt-1">AI SEO Consultant, AIOps Engineer, Co-Founder of Prezlo</p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a href="https://www.linkedin.com/in/lopty-pascal-369a921a3/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest border border-black/20 px-3 py-1.5 hover:border-luxury-accent hover:text-luxury-accent transition-colors">LinkedIn</a>
              <a href="https://prezlo.io/verify/lopty" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest border border-black/20 px-3 py-1.5 hover:border-luxury-accent hover:text-luxury-accent transition-colors">Prezlo Verified</a>
              <a href="https://www.facebook.com/loptypascalofficial" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest border border-black/20 px-3 py-1.5 hover:border-luxury-accent hover:text-luxury-accent transition-colors">Facebook</a>
            </div>
          </div>
        </div>

        {/* Biography body */}
        <article className="prose prose-lg max-w-none space-y-10 text-black/80 leading-relaxed">

          <p className="text-xl font-light">Lopty Pascal’s professional trajectory began with a foundation in academic discipline before transitioning toward computing, software systems, and search engine architecture.</p>

          <p>Born in Cameroon in 2000, Pascal attended <strong>Bishop Rogan College in Buea</strong>, a Catholic Minor Seminary located at the foot of Mount Cameroon. The institution is known for its rigorous academic curriculum and structured environment, emphasizing personal discipline, critical thinking under pressure, and systematic study. This early academic setting helped establish the work ethic and analytical skills that would later inform his approach to technical engineering problems.</p>

          <p>Although he ultimately chose to pursue a career in technology rather than seminary service, the training in structured logic remained central to his subsequent development work, providing a framework for analyzing complex data and digital systems.</p>

          <p>At age 16, Pascal built his first software project, <strong>Kamer Browser</strong>, a mobile web browser optimized for local network conditions in Cameroon. This early development experience offered practical lessons in software localization, user experience design, and independent learning in technical environments.</p>

          <p>He later co-founded <strong>Phenomenal Studios</strong>, a digital media and marketing agency that managed production and digital campaigns for several regional music and film artists, including <strong>Sparks the Virus, Askia, El Kobi, Blaise B, Daphne, and Jaye</strong>. Working alongside local partners such as <strong>Jo Bazy, Chefor the Baptist, Bengel Gilbert, and Cool Breeze Humphrey</strong>, Pascal gained experience organizing multimedia campaigns, establishing online visibility for creative professionals, and managing client relations in emerging digital markets.</p>

          <p>In 2018, Pascal established <strong>Lopty Mobile</strong>, a community-focused incubator that trained youth in Buea in software basics and entrepreneurship. This program was run in collaboration with <strong>Mattriix Tech</strong>. During this period, he also worked as a Junior Digital Marketer at <strong>MTN Cameroon</strong>, gaining familiarity with corporate-level telecom marketing campaigns and data-driven communications.</p>

          <p>Pascal relocated to <strong>Dubai</strong> in 2021. While adapting to the new region, he worked remotely on localized initiatives with teams associated with <strong>Google Poland</strong>. This role provided insight into search indexing methodologies, crawl budget distribution, and data classification processes within modern search architectures.</p>

          <p>Following this experience, Pascal established a consulting portfolio under the registered firm <strong>Nxtstar Management Consultancy FZE</strong>. Serving over 100 businesses across the UAE, Africa, and Europe, his work involved designing technical SEO blueprints, managing programmatic content integrations, and advising on search strategy. These campaigns generated an estimated $26 million in attributed client revenues across real estate, financial services, and other enterprise sectors.</p>

          <p>As standard web search integrated with generative models, Pascal shifted his practice toward semantic web data structures and AI engine compatibility. He spoke on these evolving technical requirements at <strong>GITEX 2025</strong> in Dubai and <strong>LEAP 2026</strong> in Riyadh. The industry-wide transition toward entity optimization and direct answer integration was subsequently detailed at major industry conferences, including Google Search Central Live in Toronto in April 2026.</p>

          <p>To address the challenge of entity verification systematically, Pascal co-founded <strong>Prezlo</strong> in March 2026 alongside business development consultant <strong>Neha Jakhar</strong>. Prezlo is a SaaS platform designed to monitor and manage brand identity markers across major LLM interfaces and search tools, including ChatGPT, Claude, Perplexity, Gemini, and Grok. The platform uses structured schemas and verified profiles to help entities establish machine-verifiable online records.</p>

          <p>Operating from Dubai Marina through Nxtstar Management Consultancy FZE, Pascal continues to deliver technical SEO consulting while overseeing the ongoing software updates and platform integrations for Prezlo.</p>

          <p className="text-xl font-light border-l-4 border-luxury-accent pl-8 italic">His career path—spanning seminary education, localized software development, media production, search marketing consulting, and SaaS platform development—highlights how technical standards and structured databases can bridge the visibility gap for organizations globally.</p>

          <p>By building systems designed for modern crawlers and API integrations, he helps ensure that complex enterprise data remains organized, accessible, and ready for semantic retrieval.</p>
        </article>

        {/* Timeline */}
        <section className="mt-24 pt-16 border-t border-black/10">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-12">Timeline</p>
          <div className="space-y-8">
            {[
              { year: '2000', event: 'Born in Cameroon' },
              { year: '2013', event: 'Attended Bishop Rogan College in Buea; completed secondary education with a focus on classical logic and academic discipline' },
              { year: '2016', event: 'Developed Kamer Browser, a localized mobile web application optimized for Cameroonian internet users' },
              { year: '2017', event: 'Co-founded Phenomenal Studios, managing digital media campaigns and video production for Cameroonian creative artists' },
              { year: '2018', event: 'Founded Lopty Mobile youth training incubator in Buea; worked as a Junior Digital Marketer with MTN Cameroon' },
              { year: '2021', event: 'Relocated to Dubai; collaborated remotely on technical search projects associated with Google Poland' },
              { year: '2022', event: 'Expanded technical SEO and search strategy operations under Nxtstar Management Consultancy FZE' },
              { year: '2025', event: 'Presented semantic search frameworks at GITEX 2025; reached a milestone of $26M+ in attributed client revenue across consulting projects' },
              { year: '2026 (Jan)', event: 'Spoke on Generative Engine Optimization at LEAP 2026 in Riyadh; monitored AI indexing updates highlighted at Google Toronto events' },
              { year: '2026 (Mar)', event: 'Co-founded Prezlo with Neha Jakhar, establishing an identity and visibility monitoring platform for generative search environments' },
            ].map((item) => (
              <div key={item.year} className="flex gap-8 items-start">
                <span className="text-[11px] font-black uppercase tracking-widest text-luxury-accent w-24 flex-shrink-0 pt-0.5">{item.year}</span>
                <p className="text-black/70 leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 bg-black text-white p-12 md:p-16">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6">Work Together</p>
          <h2 className="text-3xl md:text-5xl font-serif italic mb-8 text-white">Inquire about search architecture, entity optimization, or enterprise integrations.</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/loptymobile/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-accent text-white text-[11px] font-black uppercase tracking-[0.2em] hover:-translate-y-0.5 transition-transform"
            >
              Book a 30-Minute Consultation <ArrowRight size={13} />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:border-white transition-colors"
            >
              View Services <ArrowRight size={13} />
            </Link>
          </div>
        </section>

        {/* Related pages */}
        <section className="mt-16">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-8">Related Pages</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: 'AI SEO Specialist Dubai', href: '/ai-seo-specialist-dubai' },
              { label: 'SEO Architect Dubai', href: '/seo-architect-dubai' },
              { label: 'SEO Consultant Cameroon', href: '/seo-consultant-cameroon' },
              { label: 'AI SEO Expert Africa', href: '/ai-seo-expert-africa' },
              { label: 'World Comparison', href: '/ai-seo-architect' },
              { label: 'Client Results', href: '/results' },
            ].map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="text-[10px] font-black uppercase tracking-widest border border-black/10 px-4 py-3 hover:border-luxury-accent hover:text-luxury-accent transition-colors text-center"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
