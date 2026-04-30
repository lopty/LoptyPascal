/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Search, 
  MapPin, 
  Zap, 
  BarChart3, 
  Monitor, 
  Bot, 
  Award, 
  Rocket, 
  Mail,
  ChevronRight,
  ExternalLink,
  ArrowRight,
  Globe,
  MessageCircle
} from 'lucide-react';

// --- Data ---
const CONTACT_PHONE = "+971567751379";
const WHATSAPP_PHONE = "+971529038948";

const BLOG_POSTS = [
  {
    id: 'scent-connection-200-growth',
    date: 'APR 2024',
    title: 'Scent Connection: Engineering a 200% Growth Surplus in Dubai',
    category: 'Growth Architecture',
    description: 'How we improvised a network chain strategy using referral affiliates to dominate the fragrance market.',
    img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop',
    content: `
      <p>Dominating the luxury fragrance market in Dubai requires more than just standard digital ads. For Scent Connection (scentconnectiondxb.com), we implemented a "Network Chain Strategy."</p>
      <p>This approach didn't just rely on top-of-funnel traffic; it built an organic ecosystem of referral affiliates and high-intent marketing segments that fed back into the core brand authority.</p>
      <h3>The 200% Growth Blueprint:</h3>
      <ul>
        <li><strong>Network Chain Integration:</strong> Linking offline influence with online referral transparency.</li>
        <li><strong>Referral Affiliates:</strong> Automated tracking systems for luxury influencers in the UAE.</li>
        <li><strong>Semantic Scent Mapping:</strong> SEO targeting high-end fragrance entities and olfactory search intent.</li>
      </ul>
      <p>The result was a 200% increase in measurable growth within a single fiscal quarter, positioning the brand as a key player in the Dubai Marina and broader UAE regions.</p>
    `
  },
  {
    id: 'aeo-death-of-link',
    date: 'MAR 2024',
    title: 'AEO: The Death of the Link as a Ranking Signal?',
    category: 'Research',
    description: 'The shifting landscape from backlink signals to entity-based authority.',
    img: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>The traditional SEO landscape is shifting from links to semantic entities. In the age of Answer Engine Optimization (AEO), Google and other AI-driven platforms are prioritizing context and authority over raw backlink numbers.</p>
      <p>As LLMs become the primary interface for search, the "link" is being replaced by the "relationship." AI engines don't just look for who links to you; they look for how your brand exists within the broader knowledge graph of your industry.</p>
      <h3>Key Takeaways for 2024:</h3>
      <ul>
        <li>Entity optimization over keyword density</li>
        <li>Contextual authority in specialized niches</li>
        <li>Visibility within zero-click AI summaries</li>
      </ul>
    `
  },
  {
    id: 'dubai-real-estate-seo',
    date: 'FEB 2024',
    title: 'Why Most Dubai Real Estate SEO is 5 Years Behind',
    category: 'Market Report',
    description: 'Analyzing the competitive gap in the UAE luxury property market.',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Dubai Marina's real estate market is one of the most competitive globally, yet many players are still using early 2010s tactics. Low-quality PBNs and automated content are no longer enough to rank for high-intent queries.</p>
      <p>To win in 2024, agents and developers must embrace Generative Engine Optimization (GEO). This means creating content that AI assistants can easily parse and recommend to high-net-worth individuals.</p>
      <h3>The Strategy for Dubai:</h3>
      <ul>
        <li>Localized schema for specific towers (Marina Gate, Princess Tower, etc.)</li>
        <li>Video-first content strategies</li>
        <li>Multi-lingual SEO for global investors</li>
      </ul>
    `
  }
];

const REVIEWS = [
  {
    name: "Anita D'souza",
    role: "Lark Goods Wholesalers L.L.C",
    text: "Lopty's technical precision in SEO is unmatched. He doesn't just rank keywords; he architects visibility. A true professional who delivers high-impact results.",
    platform: "LinkedIn"
  },
  {
    name: "Tamnjong Larry Tabeh",
    role: "Full Stack Engineer",
    text: "Architecting alongside Lopty is a masterclass in efficiency. His ability to bridge the gap between complex software engineering and marketing ROI is exceptional.",
    platform: "LinkedIn"
  },
  {
    name: "Sukanya Ghosh",
    role: "Business Analyst, Google",
    text: "Expertise that inspires confidence. Lopty's passion for AIOps and digital innovation is evident in every technical discourse. A visionary in the digital space.",
    platform: "LinkedIn"
  },
  {
    name: "Fomundam Theophilus",
    role: "Entrepreneur",
    text: "Redefining the digital landscape in West Africa. Lopty's strategies for market entry and brand scaling are world-class. Truly the best in the region.",
    platform: "Google"
  },
  {
    name: "Tumbu John",
    role: "Founder, Agency",
    text: "Exceptional attention to detail in branding and technical SEO. Lopty transformed our digital identity into a high-performance asset with measurable gains.",
    platform: "Google"
  },
  {
    name: "Bide George",
    role: "Corporate Executive",
    text: "A trusted partner for complex growth systems. Reliability and data-driven insights are at the core of Lopty's work. Highly recommended for elite scaling.",
    platform: "Google"
  },
  {
    name: "Nkemji Daniel Hanson",
    role: "Client",
    text: "Seamless execution and measurable ROI. Lopty's team delivers excellence consistently, transforming digital challenges into strategic advantages.",
    platform: "Google"
  },
  {
    name: "Afoni Clifford N.",
    role: "Industry Peer",
    text: "Lopty’s trajectory in the AI SEO space is remarkable. His work reflects a deep commitment to excellence and innovation, setting new standards for digital growth.",
    platform: "Google"
  },
  {
    name: "Tabi Atem Etang",
    role: "Business Partner",
    text: "Technical mastery combined with sharp market intuition. Lopty delivers results that move the needle for any enterprise looking to dominate search.",
    platform: "Google"
  }
];

// --- Components ---

const Noise = () => <div className="noise-overlay" />;

const ElegantNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Works', href: '/#projects' },
    { name: 'Expertise', href: '/#expertise' },
    { name: 'Legacy', href: '/#experience' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const id = href.replace('/#', '');
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const id = href.replace('/#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1800px] mx-auto px-8 flex justify-between items-center text-white">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="font-serif text-2xl md:text-3xl font-bold tracking-tight group">
          LOPTY <span className="text-luxury-accent italic group-hover:not-italic transition-all duration-500">PASCAL</span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleLinkClick(link.href)}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] hover:text-luxury-accent transition-colors cursor-pointer bg-transparent border-none outline-none"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleLinkClick('/#contact')}
            className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-luxury-accent cursor-pointer bg-transparent border-none outline-none"
          >
            Connect <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-luxury-beige border-t border-luxury-obsidian/5 p-10 flex flex-col gap-6 text-center shadow-2xl"
          >
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="font-serif text-4xl italic hover:text-luxury-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, centered = false }: any) => (
  <div className={`mb-16 md:mb-24 ${centered ? 'text-center' : ''}`}>
    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-accent mb-4 block">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-7xl lg:text-8xl font-serif font-bold italic leading-[1] md:leading-[0.9] text-white">
      {title}
    </h2>
  </div>
);

const ExpertiseBlock = ({ title, description, index }: any) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi Lopty, I need more info about your ${title} service...`);
    window.open(`https://wa.me/${WHATSAPP_PHONE.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group py-8 md:py-12 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 hover:bg-white/5 scroll-mt-24 transition-colors px-4 cursor-pointer"
      onClick={handleWhatsApp}
    >
      <div className="flex items-center gap-6 md:gap-8">
        <span className="font-serif text-2xl md:text-3xl italic text-white/20 group-hover:text-luxury-accent transition-colors">0{index + 1}</span>
        <h3 className="text-2xl md:text-5xl font-serif font-medium text-white group-hover:text-luxury-accent transition-colors">{title}</h3>
      </div>
      <p className="max-w-md text-sm md:text-base text-white/60 leading-relaxed font-sans group-hover:text-white/90 transition-colors">{description}</p>
      <div className="flex justify-start lg:justify-end">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-luxury-accent group-hover:text-black group-hover:border-luxury-accent transition-all">
          <ArrowRight size={20} />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectGridItem = ({ title, category, description, image, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className={`relative group overflow-hidden ${index % 2 === 0 ? 'aspect-[4/5]' : 'aspect-square'} bg-luxury-white border border-luxury-obsidian/5`}
  >
    <div className="absolute inset-0 overflow-hidden">
      <motion.img 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.5 }}
        src={image} 
        alt={title} 
        className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-luxury-beige via-transparent to-transparent opacity-90" />
    <div className="p-8 md:p-12 h-full flex flex-col justify-between relative z-10">
      <div>
        <span className="text-[9px] font-black uppercase tracking-[0.3em] bg-luxury-obsidian text-white px-3 py-1 mb-6 inline-block">
          {category}
        </span>
        <h3 className="text-3xl md:text-5xl font-serif font-bold leading-none mb-6 italic group-hover:text-luxury-accent transition-colors">{title}</h3>
      </div>
      <p className="text-sm font-sans text-luxury-obsidian/80 leading-relaxed max-w-xs font-medium uppercase tracking-tight bg-luxury-beige/40 backdrop-blur-sm p-3">{description}</p>
    </div>
    <div className="absolute bottom-8 right-8 overflow-hidden">
       <ExternalLink className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500 text-luxury-accent" />
    </div>
  </motion.div>
);

const Marquee = () => {
  const skills = ["SEO", "AIOps", "Data Science", "AEO", "GEO", "Growth", "Revenue", "Visibility", "Algorithm", "Entity", "Search", "Innovation"];
  return (
    <div className="py-12 md:py-20 bg-luxury-white/5 overflow-hidden border-y border-white/5">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex whitespace-nowrap gap-20"
      >
        {[...skills, ...skills].map((skill, i) => (
          <span key={i} className="text-4xl md:text-7xl font-serif italic text-white/20 uppercase tracking-tighter">
            {skill} <span className="text-luxury-accent not-italic ml-20">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const WhatsAppButton = () => (
  <motion.a
    href={`https://wa.me/${WHATSAPP_PHONE.replace('+', '')}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white group"
  >
    <MessageCircle size={32} />
    <span className="absolute right-full mr-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-sm scale-0 group-hover:scale-100 transition-transform origin-right whitespace-nowrap shadow-xl">
      Chat with Lopty
    </span>
  </motion.a>
);

const ReviewsSlide = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-luxury-accent">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mt-4 italic">Industry <span className="text-white/40 not-italic">Validation</span></h2>
        </div>

        <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="w-full"
            >
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-luxury-accent font-serif italic text-xl">
                    {REVIEWS[index].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs">{REVIEWS[index].name}</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{REVIEWS[index].role} • {REVIEWS[index].platform}</p>
                  </div>
                </div>
                <blockquote className="text-2xl md:text-5xl font-serif text-white leading-tight italic">
                  "{REVIEWS[index].text}"
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 right-0 flex gap-4">
            <button 
              onClick={() => setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button 
              onClick={() => setIndex((prev) => (prev + 1) % REVIEWS.length)}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogPostPage = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#050505]">
        <div className="text-center">
          <h1 className="text-6xl font-serif mb-8">Post Not Found</h1>
          <Link to="/" className="text-luxury-accent border-b border-luxury-accent pb-1 uppercase tracking-widest font-bold">Back Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-luxury-accent selection:text-white">
      <Noise />
      <ElegantNavbar />
      <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-luxury-accent">{post.category}</span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-12 leading-tight italic">{post.title}</h1>
          <div className="aspect-[21/9] overflow-hidden mb-16 rounded-sm border border-white/5">
            <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <div className="prose prose-invert prose-lg max-w-none">
             <div className="text-white/70 leading-relaxed space-y-6" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 flex justify-between items-center">
            <Link to="/" className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all">
              <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const HomePage = ({ projects }: any) => {
  return (
    <>
      <ElegantNavbar />
      <main>
        {/* HERO */}
        <section className="min-h-screen flex items-center pt-32 pb-20 px-6 relative overflow-hidden bg-[#0A0A0B]">
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 md:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "circOut" }}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-luxury-accent mb-6 block">
                   Technical Founder · Dubai Marina, UAE
                </span>
                <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1] tracking-tighter mb-8 text-white italic">
                  Lopty <br /> 
                  <span className="text-luxury-accent not-italic">Pascal</span>
                </h1>
                <p className="text-lg md:text-2xl text-white/70 font-light leading-relaxed mb-12 max-w-xl">
                  Named the <span className="text-white font-medium">Best African Digital Marketer</span>. Architecting growth systems for the next generation of businesses. <span className="text-luxury-accent font-serif italic">$26M+ revenue generated.</span>
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-10">
                   <button 
                    onClick={() => {
                      const el = document.getElementById('projects');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto overflow-hidden group relative px-10 py-5 border border-white text-center rounded-sm bg-white"
                  >
                    <span className="relative text-black text-[11px] font-bold uppercase tracking-[0.3em]">Explore Works</span>
                  </button>
                  <a 
                    href="https://www.linkedin.com/in/lopty-pascal-369a921a3/" 
                    target="_blank"
                    className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] py-4"
                  >
                    <span className="border-b border-white/20 group-hover:border-luxury-accent transition-all pb-1 whitespace-nowrap uppercase text-white">LinkedIn Profile</span>
                    <Linkedin size={14} className="text-white opacity-60 group-hover:opacity-100 group-hover:text-luxury-accent transition-all shrink-0" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "circOut" }}
                className="relative hidden lg:block"
              >
                <div className="aspect-[4/5] relative">
                  <div className="absolute inset-0 border border-white/10 -m-4 rounded-sm" />
                  <div className="absolute inset-0 bg-luxury-accent/5 mix-blend-overlay z-10 rounded-sm" />
                  <img 
                    src="https://i.postimg.cc/W3sLX9dn/ertry.png" 
                    alt="Lopty Pascal" 
                    className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl brightness-90 saturate-0 hover:saturate-100 group"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-[#121212] border border-white/5 p-6 z-20">
                    <div className="flex items-center gap-3 mb-1">
                       <p className="text-3xl font-serif italic text-luxury-accent">Dubai</p>
                       <div className="w-1 h-1 bg-white/20 rounded-full" />
                       <p className="text-3xl font-serif italic text-white/40">Expert</p>
                    </div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/20">Market Leader Authority</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-luxury-accent rounded-full -translate-y-1/2 translate-x-1/2 blur-[160px] opacity-10 pointer-events-none" />
        </section>

        <Marquee />

        {/* BIOGRAPHY */}
        <section id="about" className="py-32 bg-[#0C0C0D] border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-24">
               <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-luxury-accent mb-6 block">Our Story</span>
               <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight">The Visionary <br /> <span className="italic text-white/20">Behind the Tech</span></h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                <p className="text-2xl md:text-4xl font-serif text-white/90 leading-[1.3] italic">
                  "In the age of AI, visibility is no longer about keywords—it's about <span className="text-luxury-accent not-italic font-sans font-bold uppercase tracking-tighter">Entity Authority</span>."
                </p>
                <div className="text-lg text-white/60 leading-relaxed space-y-6">
                  <p>
                    Lopty Pascal is a Dubai Marina-based Senior Digital Marketing Manager, AIOps Engineer, and Data Scientist. With over 8 years of experience, he has mastered the art of combining behavioral psychology with machine learning to create high-conversion pipelines.
                  </p>
                  <p>
                    As the Founder of Prezlo, he focuses on AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization), ensuring brands are recommended by the LLMs and search engines of tomorrow.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-white/5 border border-white/10 rounded-sm flex items-center justify-center p-8 text-center group hover:border-luxury-accent transition-colors">
                     <div>
                       <p className="text-4xl font-serif italic text-luxury-accent mb-2">8yr+</p>
                       <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">Market Presence</p>
                     </div>
                  </div>
                  <div className="aspect-square bg-white/5 border border-white/10 rounded-sm flex items-center justify-center p-8 text-center group hover:border-luxury-accent transition-colors">
                     <div>
                       <p className="text-4xl font-serif italic text-luxury-accent mb-2">100%</p>
                       <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">Performance Focus</p>
                     </div>
                  </div>
                </div>
                <div className="pt-12 space-y-4">
                  <div className="aspect-square bg-luxury-accent border border-luxury-accent rounded-sm flex items-center justify-center p-8 text-center">
                     <div>
                       <p className="text-4xl font-serif italic text-black mb-2">AEO</p>
                       <p className="text-[9px] font-black uppercase tracking-widest text-black/60">Expertise Core</p>
                     </div>
                  </div>
                  <div className="aspect-[3/4] bg-white/5 border border-white/10 rounded-sm flex items-center justify-center p-8 text-center group hover:border-luxury-accent transition-colors">
                     <div>
                       <p className="text-4xl font-serif italic text-luxury-accent mb-2">Global</p>
                       <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">Impact Scale</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-24">
              <div className="bg-[#121212] p-8 border border-white/5 group hover:border-luxury-accent transition-colors">
                <div className="flex justify-between items-end mb-4">
                  <div className="text-5xl md:text-6xl font-serif italic text-luxury-accent">26M+</div>
                  <BarChart3 className="text-white/20" size={32} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Revenue Driven</div>
              </div>
              <div className="bg-[#121212] p-8 border border-white/5 group hover:border-luxury-accent transition-colors">
                <div className="flex justify-between items-end mb-4">
                  <div className="text-5xl md:text-6xl font-serif italic text-luxury-accent">100+</div>
                  <Rocket className="text-white/20" size={32} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Global Projects</div>
              </div>
              <div className="bg-[#121212] p-8 border border-white/5 group hover:border-luxury-accent transition-colors">
                <div className="flex justify-between items-end mb-4">
                  <div className="text-5xl md:text-6xl font-serif italic text-luxury-accent">5x</div>
                  <Award className="text-white/20" size={32} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Industry Awards</div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-20 md:py-32 bg-black border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <SectionHeader title="The Intelligence Gap" subtitle="Paradigm Shift" centered />
            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
              <div className="bg-[#050505] p-10 md:p-16">
                <h3 className="text-2xl md:text-3xl font-serif italic mb-8 text-white/40">Traditional SEO</h3>
                <ul className="space-y-6">
                  {['Keyword stuffing & Density', 'Backlink Quantity focus', 'Static Content clusters', 'Bot-focused indexing', 'Linear Growth Trajectory'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/30 font-sans text-sm tracking-wide">
                      <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0A0A0B] p-10 md:p-16 relative">
                 <div className="absolute top-0 right-0 p-4">
                   <Zap size={24} className="text-luxury-accent animate-pulse" />
                 </div>
                <h3 className="text-2xl md:text-3xl font-serif italic mb-8 text-luxury-accent">AI Search Ecosystem (AEO/GEO)</h3>
                <ul className="space-y-6">
                  {[
                    'Entity-Based Semantic Mapping',
                    'Generative Engine Optimization',
                    'AIOps Marketing Automation',
                    'Intent-Driven Visibility',
                    'Autonomous Scaling Systems'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white font-sans text-sm tracking-wide font-medium">
                      <div className="w-1.5 h-1.5 bg-luxury-accent rounded-full shadow-[0_0_10px_#FF6B00]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-16 text-center">
              <p className="font-serif italic text-white/40 text-lg">"While others chase keywords, I architect the semantics that AI engines trust."</p>
            </div>
          </div>
        </section>

        {/* INSIGHTS / BLOG */}
        <section className="py-20 md:py-32 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <SectionHeader title="Digital Forensics" subtitle="Insights" />
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 border-b border-white/10 pb-2 mb-20 hover:text-luxury-accent hover:border-luxury-accent transition-all">
                Access Private Library
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post, i) => (
                <Link 
                  to={`/blog/${post.id}`}
                  key={i}
                  className="group cursor-pointer block"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="aspect-[16/9] overflow-hidden mb-6 border border-white/5 group-hover:border-luxury-accent transition-colors">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-luxury-accent">{post.category}</span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-serif text-white group-hover:text-luxury-accent transition-colors leading-snug">{post.title}</h3>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="py-20 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader title="Architectural Precision" subtitle="Expertise" centered />
            <div className="mt-12 md:mt-20">
              {[
                { title: 'SEO & AI Visibility', description: 'Advanced search strategies optimized for both traditional algorithmic search and modern AI language models like ChatGPT and Perplexity.' },
                { title: 'AIOps Automation', description: 'Building autonomous marketing workflows and intelligent data pipelines for scalable, human-free growth.' },
                { title: 'Performance Marketing', description: 'High-ROAS Google and Meta Ads campaigns designed for measurable revenue generation and brand equity.' },
                { title: 'Data Science & Analytics', description: 'Turning complex datasets into actionable insights through statistical modeling and prediction.' },
                { title: 'Software Engineering', description: 'Architecting growth-oriented software solutions and professional visibility platforms for the global elite.' }
              ].map((item, idx) => (
                <ExpertiseBlock key={idx} index={idx} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 md:py-32 bg-black relative overflow-hidden">
          <div className="max-w-[1800px] mx-auto px-6 md:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
              <SectionHeader title="Selected Works" subtitle="Portfolio" />
              <div className="mb-0 md:mb-24">
                <a href="#contact" className="text-[11px] font-bold uppercase tracking-[0.3em] flex items-center gap-4 group text-white">
                  View Full Archives <ArrowRight size={28} className="group-hover:translate-x-4 transition-transform duration-700 text-luxury-accent" />
                </a>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
              {projects.map((p, idx) => (
                <ProjectGridItem key={idx} index={idx} {...p} />
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-luxury-accent rounded-full -translate-y-1/2 translate-x-1/2 blur-[150px] opacity-10 pointer-events-none" />
        </section>

        {/* TRUST / WHY LOPTY SECTION */}
        <section className="py-20 md:py-32 bg-[#080809] relative overflow-hidden">
           <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#FF6B00_0%,transparent_50%)]" />
           </div>
           <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                 <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-accent mb-4 block">Proven Authority</span>
                    <h2 className="text-4xl md:text-7xl font-serif font-bold italic mb-10 leading-tight">The 26 Million <br className="hidden md:block" /> Dollar Delta</h2>
                    <p className="text-white/60 text-lg md:text-xl font-sans leading-relaxed mb-12">
                      My approach is built on a simple premise: <span className="text-white italic">Technical Superiority = Market Dominance</span>. By combining data science with aggressive digital marketing, I eliminate the guesswork that plagues traditional agencies.
                    </p>
                    <div className="space-y-8">
                       {[
                         { title: 'Market Specificity', desc: 'Deep expertise in Dubai’s high-luxury real estate and African tech ecosystems.' },
                         { title: 'AIOps Native', desc: 'One of the few engineers globally bridging the gap between LLM science and conversion ROI.' },
                         { title: 'Revenue First', desc: 'Every line of code and every SEO entity is mapped to a direct business objective.' }
                       ].map((item, i) => (
                         <div key={i} className="flex gap-6 items-start">
                            <div className="w-12 h-12 shrink-0 border border-luxury-accent/30 flex items-center justify-center rounded-sm bg-luxury-accent/5">
                               <Award className="text-luxury-accent" size={20} />
                            </div>
                            <div>
                               <h4 className="text-white font-serif italic text-xl mb-2">{item.title}</h4>
                               <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="relative">
                    <div className="aspect-square bg-luxury-white/10 border border-white/5 rounded-sm p-4">
                       <div className="w-full h-full border border-white/10 flex items-center justify-center relative overflow-hidden">
                          <Bot size={120} className="text-luxury-accent/20 absolute -bottom-10 -right-10 rotate-12" />
                          <div className="relative z-10 text-center">
                             <div className="text-9xl font-serif italic text-white/5 absolute -top-20 left-1/2 -translate-x-1/2">8+</div>
                             <h3 className="text-3xl md:text-5xl font-serif italic mb-4">AIOps <br /> Implementation</h3>
                             <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-accent">Scalability Engine 2.0</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20 md:py-32 bg-luxury-white text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-accent mb-4 block">Timeline</span>
                <h2 className="text-4xl md:text-8xl font-serif italic mb-8 md:mb-12">Legacy of <br /> Impact</h2>
                <a href="#contact" className="px-8 md:px-10 py-4 border border-white/20 text-[11px] font-bold uppercase tracking-[0.3em] inline-block hover:bg-white hover:text-black transition-all">
                  Request Full Resume
                </a>
              </div>
              <div className="space-y-16 md:space-y-24">
                {[
                  { company: 'Prezlo', role: 'Founder & CEO', period: '2024 – Present', desc: 'Leading the development of AI-driven visibility systems for modern professionals.' },
                  { company: 'Al Basel Group', role: 'Marketing Manager', period: 'Dubai, UAE', desc: 'Directing multi-channel digital strategies across high-luxury portfolios.' },
                  { company: 'Tecworq', role: 'Senior Manager', period: 'Dubai, UAE', desc: 'Engineering technical SEO foundations for international B2B enterprises.' },
                  { company: 'Google', role: 'SEO Apprentice', period: 'UAE', desc: 'Refining search science within the world\'s leading organic visibility ecosystem.' }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                      <h3 className="text-2xl md:text-4xl font-serif italic">{item.role}</h3>
                      <span className="text-[10px] font-bold tracking-widest opacity-40 uppercase">{item.period}</span>
                    </div>
                    <div className="text-xl font-serif text-luxury-accent mb-6">{item.company}</div>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ReviewsSlide />
        {/* FOOTER / CONTACT */}
        <footer id="contact" className="py-20 md:py-32 text-center bg-black">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
             <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
             >
                <SectionHeader title="Start a Conversation" subtitle="Engagement" centered />
                <p className="text-xl md:text-4xl font-serif italic mb-12 md:mb-16 max-w-2xl mx-auto px-4 text-white">
                  Ready to architect the <span className="text-luxury-accent">future of your visibility</span> in search and AI ecosystems?
                </p>
                <div className="flex flex-col items-center gap-8 md:gap-12">
                   <a 
                    href="mailto:loptymobile@gmail.com" 
                    className="text-2xl md:text-5xl font-serif font-bold border-b-2 border-white/10 hover:border-luxury-accent transition-all pb-4 break-all md:break-normal px-4 text-white"
                  >
                    loptymobile@gmail.com
                  </a>
                  
                  <div className="flex gap-8 md:gap-12 mt-8">
                    {[
                      { icon: Linkedin, link: 'https://www.linkedin.com/in/lopty-pascal-369a921a3/' },
                      { icon: Instagram, link: 'https://www.instagram.com/loptypascal/' },
                      { icon: Facebook, link: 'https://www.facebook.com/loptypascalofficial/' },
                      { icon: Globe, link: 'https://prezlo.io/verify/lopty' }
                    ].map((s, i) => (
                      <a key={i} href={s.link} target="_blank" className="text-white hover:text-luxury-accent transition-colors">
                        <s.icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
             </motion.div>
          </div>
          
          <div className="mt-24 md:mt-40 pt-10 border-t border-white/5 max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] opacity-40 px-8 text-center text-white">
            <div>© 2025 LOPTY PASCAL · DUBAI MARINA</div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <span className="italic">Founder of Prezlo</span>
              <span>AIOps Engineer</span>
              <span>SEO Expert</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const projects = [
    {
      title: 'Scent Connection',
      category: 'Growth Architecture',
      description: '200% Growth Surplus via Network Chain Strategy in Dubai.',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop'
    },
    { 
      title: 'MTN Mobile Money', 
      category: 'GTM Strategy', 
      description: 'Go-to-market strategy for English-speaking Cameroon.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80'
    },
    { 
      title: 'Haus & Haus', 
      category: 'SEO Strategy', 
      description: 'Dominating Dubai real estate search results via technical SEO.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
    },
    { 
      title: 'AuditBots', 
      category: 'Technical SEO', 
      description: 'Enterprise-scale SEO auditing for SaaS visibility.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80'
    },
    { 
      title: 'Zozo Japan', 
      category: 'AI Visibility', 
      description: 'E-commerce SEO for luxury retail across JP markets.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop'
    },
    { 
      title: 'Prezlo', 
      category: 'Product Foundation', 
      description: 'AI-powered entity recognition platform architecture.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <div className="bg-[#050505] selection:bg-luxury-accent selection:text-white lg:cursor-none min-h-screen">
      <Noise />
      {/* Custom Cursor */}
      <motion.div 
        animate={{ x: mousePos.x - 12, y: mousePos.y - 12 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
        className="fixed top-0 left-0 w-6 h-6 border border-luxury-accent rounded-full pointer-events-none z-[100] hidden lg:block"
      />
      <motion.div 
        animate={{ x: mousePos.x - 2, y: mousePos.y - 2 }}
        transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.2 }}
        className="fixed top-0 left-0 w-1 h-1 bg-luxury-accent rounded-full pointer-events-none z-[100] hidden lg:block"
      />

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-luxury-accent z-[60] origin-left" style={{ scaleX }} />
      
      <WhatsAppButton />

      {/* Schema.org JSON-LD for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Lopty Pascal",
          "alternateName": "Lopty Pascal Official",
          "description": "Best digital marketing specialist and AI SEO expert in Dubai Marina. Top African digital marketer specializing in AIOps, AEO, and Growth Systems.",
          "jobTitle": ["Senior Digital Marketing Manager", "AI SEO Expert", "AIOps Engineer", "Data Scientist"],
          "telephone": CONTACT_PHONE,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai Marina",
            "addressRegion": "Dubai",
            "addressCountry": "United Arab Emirates"
          },
          "url": "https://prezlo.io/verify/lopty",
          "sameAs": [
            "https://www.linkedin.com/in/lopty-pascal-369a921a3/",
            "https://www.instagram.com/loptypascal/",
            "https://www.facebook.com/loptypascalofficial/"
          ],
          "knowsAbout": ["SEO", "Artificial Intelligence", "Machine Learning", "Digital Marketing", "AIOps", "Growth Hacking"],
          "image": "https://i.postimg.cc/W3sLX9dn/ertry.png"
        })}
      </script>

      <Routes>
        <Route path="/" element={<HomePage projects={projects} />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
    </div>
  );
}
