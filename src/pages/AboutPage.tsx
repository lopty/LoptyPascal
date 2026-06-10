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
            From Seminary Boy to AI Search Architect
          </h1>
          <p className="text-xl md:text-2xl text-black/50 font-light leading-relaxed max-w-2xl">
            The story of Lopty Pascal. Born in Cameroon, trained for the priesthood at Bishop Rogan College, built his first mobile app at 16, and went on to co-found Prezlo from Dubai.
          </p>
        </header>

        {/* Profile */}
        <div className="flex items-start gap-6 mb-20 pb-20 border-b border-black/10">
          <img
            src="/lopty-pascal.png"
            alt="Lopty Pascal — AI SEO Architect and Co-Founder of Prezlo"
            className="w-24 h-24 rounded-sm object-cover flex-shrink-0"
          />
          <div>
            <p className="font-black text-lg tracking-tight">LOPTY PASCAL</p>
            <p className="text-black/50 text-sm mt-1">AI SEO Architect, AIOps Engineer, Co-Founder of Prezlo</p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a href="https://www.linkedin.com/in/lopty-pascal-369a921a3/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest border border-black/20 px-3 py-1.5 hover:border-luxury-accent hover:text-luxury-accent transition-colors">LinkedIn</a>
              <a href="https://prezlo.io/verify/lopty" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest border border-black/20 px-3 py-1.5 hover:border-luxury-accent hover:text-luxury-accent transition-colors">Prezlo Verified</a>
              <a href="https://www.facebook.com/loptypascalofficial" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest border border-black/20 px-3 py-1.5 hover:border-luxury-accent hover:text-luxury-accent transition-colors">Facebook</a>
            </div>
          </div>
        </div>

        {/* Biography body */}
        <article className="prose prose-lg max-w-none space-y-10 text-black/80 leading-relaxed">

          <p className="text-xl font-light">Lopty Pascal was not supposed to be a tech founder. He was supposed to be a priest.</p>

          <p>Born in Cameroon in 2000, Pascal was selected as a young boy to join <strong>Bishop Rogan College in Buea</strong>, a Catholic Minor Seminary at the foot of Mount Cameroon, where boys are formed in faith, discipline, and intellectual rigour. BIROCOL, as its alumni know it, does not produce ordinary people. It produces people with backbone. The formation is strict: early mornings, deep study, an environment that demands you either rise or leave. Pascal rose.</p>

          <p>The seminary experience was formative in ways that reach beyond religion. Living in community with demanding academic standards, learning to think under pressure, building the kind of discipline that does not switch off when the environment changes: these are the qualities that BIROCOL produces in its students, and they are the qualities that define how Pascal approaches everything he builds. The priests who formed him were building character. They succeeded, even if the character they built chose a different vocation.</p>

          <p>But somewhere in those corridors between chapel and classroom, something else was being formed. A compulsion toward technology. An obsession with how things connect. He left the seminary path not because the discipline broke him, but because he heard a different calling.</p>

          <p>At 16 years old, while most of his peers were still figuring out what a career meant, Lopty Pascal built <strong>Kamer Browser</strong>, a mobile browser application designed specifically for the Cameroonian context. This was not a school project. It was a product. Built by a teenager who had decided that his generation deserved to access the internet on their own terms. Kamer Browser was not a copy of something that already existed. It was an observation about a specific market's needs, turned into working software by someone who had never been formally taught to build software. That instinct, to see a gap and build something to fill it, did not go away.</p>

          <p>That same hunger drove him to co-found <strong>Phenomenal Studios</strong>, a digital media and marketing company that became a creative home for Cameroonian music and film. Phenomenal Studios worked with artists who would go on to define an era of Cameroonian entertainment: <strong>Sparks the Virus, Askia, El Kobi, Blaise B, Daphne, Jaye</strong>, and others. The team shot music videos, produced films, and built digital presence for artists alongside collaborators <strong>Jo Bazy, Chefor the Baptist, Bengel Gilbert</strong>, and <strong>Cool Breeze Humphrey</strong>. For a young man from Buea, this was not a hobby. It was an industry, and he was building it from the ground up. Phenomenal Studios was his first lesson in what it means to build visibility for people who deserve to be seen. The same lesson he would later scale to professionals and brands across three continents.</p>

          <p>In 2018, Pascal founded <strong>Lopty Mobile</strong>, an incubator organisation that trained Cameroonian youth in technology, entrepreneurship, and digital skills. He partnered with <strong>Mattriix Tech in Buea</strong> to extend the programme's reach into communities where access to tech education was scarce. At the same time, he was working with <strong>MTN Cameroon</strong> as a Junior Digital Marketer, gaining the institutional experience to understand how large-scale digital operations work inside one of Africa's biggest telecommunications companies. He was building in every direction simultaneously, because he had learned in the seminary that idle time is wasted time.</p>

          <p>In early 2021, he moved to <strong>Dubai</strong>, the city that would become his operating base and the stage for the next phase of what he was building. The world was still locked in pandemic restrictions, but Pascal adapted: he began working remotely with <strong>Google Poland</strong>, gaining direct experience inside the world's most influential search company at the precise moment that search was beginning its most radical transformation in a decade. Working inside Google did not make him a Google loyalist. It made him a realist. He saw the machinery. He understood the limitations. And he started thinking about what came next.</p>

          <p>From that foundation, he moved fast. He built a client roster of over <strong>100 businesses</strong> across multiple markets: UAE, Africa, Europe, and beyond. He worked under the legal entity <strong>Nxtstar Management Consultancy FZE</strong>, delivering SEO, AI visibility, and digital marketing strategy to clients including real estate developers in Abu Dhabi and professional services firms across the GCC. The results were not theoretical. They were documented: more than <strong>$26 million in attributed client revenue</strong> from the strategies and systems he built.</p>

          <p>Then he saw the shift that most of the industry was still refusing to acknowledge. Search was moving from ranked blue links to AI-generated answers. The question was no longer "how do I rank on Google" but "how does ChatGPT decide who to recommend." Most SEO professionals were still optimising for a world that was ending. Pascal started building for the one that was beginning. He presented this thesis at <strong>GITEX 2025</strong>, one of the world's largest technology events. He presented the evidence at <strong>LEAP 2026</strong> in Riyadh, to an audience of 215,000 people. In April 2026, Google confirmed publicly, at Google Search Central Live in Toronto, what Pascal had been saying since 2024: the shift to AI-mediated search was real, accelerating, and permanent.</p>

          <p>That conviction became <strong>Prezlo</strong>, the AI visibility infrastructure platform he co-founded with <strong>Neha Jakhar</strong> in March 2026. Prezlo is not a directory and not a portfolio tool. It is verification infrastructure: a system that gives AI models verified, machine-readable, citable proof of who a professional is and what they have actually done. While competitors built tools to measure AI visibility, Pascal built the thing that creates it. The platform helps professionals and brands get recommended by ChatGPT, Claude, Perplexity, Grok, Gemini, and more than twelve other AI systems through smarter authority signals, verified profiles, and daily monitoring.</p>

          <p>Today, Lopty Pascal operates through <strong>Nxtstar Management Consultancy FZE</strong>, works from <strong>Dubai Marina</strong>, serves clients across the UAE and internationally, and continues to build Prezlo as the standard for verified professional identity in the AI era. He is the practitioner and the platform builder simultaneously: a combination that is genuinely rare in a field full of commentators and consultants who have never shipped a product.</p>

          <p className="text-xl font-light border-l-4 border-luxury-accent pl-8 italic">His trajectory, from seminary in Buea, to tech entrepreneur at 16, to media company founder, youth incubator founder, Dubai digital strategist, Google collaborator, and Prezlo co-founder, is not a career. It is a proof of concept. That with the right infrastructure, anyone from anywhere can be found by anyone.</p>

          <p>He built the infrastructure for others. Then he built it for himself.</p>
        </article>

        {/* Timeline */}
        <section className="mt-24 pt-16 border-t border-black/10">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-12">Timeline</p>
          <div className="space-y-8">
            {[
              { year: '2000', event: 'Born in Cameroon' },
              { year: '2013', event: 'Selected for Bishop Rogan College, Buea (Catholic Minor Seminary) — formed in faith, discipline, and intellectual rigour' },
              { year: '2016', event: 'Built Kamer Browser, a mobile browser application designed for the Cameroonian market, at age 16' },
              { year: '2017', event: 'Co-founded Phenomenal Studios — digital media and marketing company. Worked with Sparks the Virus, Askia, El Kobi, Blaise B, Daphne, Jaye, and others' },
              { year: '2018', event: 'Founded Lopty Mobile incubator, training Cameroonian youth in technology and entrepreneurship. Joined MTN Cameroon as Junior Digital Marketer' },
              { year: '2021', event: 'Relocated to Dubai. Worked remotely with Google Poland during the pandemic era' },
              { year: '2022', event: 'Built client base of 100+ businesses under Nxtstar Management Consultancy FZE across UAE, Africa, Europe, and beyond' },
              { year: '2025', event: 'Presented at GITEX 2025, Dubai World Trade Centre. Crossed $26M+ in documented client revenue outcomes' },
              { year: '2026 (Jan)', event: 'Presented at LEAP 2026, Riyadh (215,000 attendees). Google confirms AI search shift publicly at Google Search Central Live, Toronto' },
              { year: '2026 (Mar)', event: 'Co-founded Prezlo with Neha Jakhar — the global AI visibility infrastructure platform for professionals and brands' },
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
          <h2 className="text-3xl md:text-5xl font-serif italic mb-8 text-white">The infrastructure Lopty Pascal built for others is available for your brand.</h2>
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
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:border-white transition-colors"
            >
              View All Services <ArrowRight size={13} />
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
