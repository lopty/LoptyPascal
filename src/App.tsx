/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import GeoPage from './pages/GeoPage';
import ServicePage from './pages/ServicePage';
import ComparisonPage from './pages/ComparisonPage';
import WorldComparisonPage from './pages/WorldComparisonPage';
import ServicesHubPage from './pages/ServicesHubPage';
import ResultsPage from './pages/ResultsPage';
import AuthorityPage from './pages/AuthorityPage';
import { GEO_PAGES } from './data/geo-pages';
import { SERVICE_PAGES } from './data/service-pages';
import { COMPARISON_PAGES } from './data/comparison-pages';
import { AUTHORITY_PAGES } from './data/authority-pages';
import { NEW_BLOG_POSTS } from './data/new-blog-posts';
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
  MessageCircle,
  Plus
} from 'lucide-react';

// --- Global CSS Styles & Google Fonts Injection ---
const injectGlobalStyles = () => {
  if (typeof document === 'undefined') return;
  
  // Link to load refined editorial fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap';
  document.head.appendChild(fontLink);

  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #ffffff;
      color: #000000;
    }
    h1, h2, h3, h4, .font-serif {
      font-family: 'Cormorant Garamond', serif !important;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #FF6B00;
    }
    .noise-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      content: "";
      opacity: 0.02;
      pointer-events: none;
      z-index: 9999;
      background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }
  `;
  document.head.appendChild(styleTag);
};

if (typeof window !== 'undefined') {
  injectGlobalStyles();
}

// --- Data ---
const CONTACT_PHONE = "+971567751379";
const WHATSAPP_PHONE = "+971529038948";

const FAQ_DATA = [
  {
    question: "What is 'Entity Sovereignty' and why does it matter for modern search?",
    answer: "Entity Sovereignty is when search models (Google Knowledge Graph, ChatGPT, Gemini, Perplexity) hold a clear, verified understanding of who you are and what you do. If a model lacks confidence in your digital footprint, it omits your business. When confidence is high, it recommends you. My work focuses on building this consistency systematically across schemas, citations, and platforms so algorithms treat your brand as a trusted answer."
  },
  {
    question: "Why focus on AI search alongside traditional Google SEO?",
    answer: "A standard Google ranking is useful, but an AI citation inside ChatGPT or Gemini behaves like a direct recommendation. High-intent buyers are increasingly using these tools as decision engines. By optimizing your business for AI discovery, we capture users when they are actively looking for verified choices."
  },
  {
    question: "How do you track the financial impact of your search campaigns?",
    answer: "I look at search as a business function rather than a source of vanity metrics. We measure the direct increase in organic leads, qualified inquiries, and conversion rates post-optimization. By fixing technical search issues first, then structuring your brand entity, we build a measurable path from raw search presence to business revenue."
  },
  {
    question: "What is Prezlo and why did you build it?",
    answer: "Prezlo is an AI Visibility Platform I built to track how professionals and companies are discovered across AI engines like ChatGPT, Gemini, and Perplexity. Traditional tools only monitor keyword ranks on legacy search pages. I built Prezlo because we needed a clean way to measure, monitor, and optimize AI citations in real time."
  },
  {
    question: "How do you approach SEO differently from traditional marketing agencies?",
    answer: "Most traditional agencies focus on content volume or general keyword lists. I treat search as an engineering discipline. I work directly on your site's codebase, structured data graphs, and server-side configurations to make your brand easy for both human visitors and AI models to parse. You work directly with me as a freelance consultant, not through a shifting team of account managers."
  }
];

const HOME_BLOG_POSTS = [
  {
    id: 'dubai-seo-best-specialist',
    date: 'MAY 2026',
    title: 'Modern Search in Dubai: How I Approach AI SEO and Technical Growth',
    category: 'Search Strategy',
    description: 'A personal breakdown of how I engineer search visibility, structured data, and entity authority for businesses in the UAE.',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    content: `
      <section class="space-y-16 pb-32">
        <div class="border-l-8 border-luxury-accent pl-6 py-8 bg-gray-50 mb-12">
          <h2 class="text-3xl md:text-5xl font-serif italic mb-4 leading-tight">My Philosophy: Technical Precision Over Hype</h2>
          <p class="text-lg md:text-xl italic text-black/60 font-light">"I don't believe in vanity metrics or generic keyword lists. I build structured, readable search presence that connects directly with qualified buyers."</p>
        </div>

        <div class="space-y-8">
          <p class="text-lg md:text-xl leading-relaxed text-black/80">Dubai is a fast-paced business environment, and legacy search strategies no longer deliver the same returns. Modern search visibility requires a deeper focus on how algorithms analyze and understand your brand.</p>
          
          <h3 class="text-2xl md:text-3xl font-serif font-bold italic text-black">Building for the Modern Web</h3>
          <p class="text-base md:text-lg leading-relaxed text-black/70">As a freelance SEO consultant based in Dubai Marina, I look at search as a server-side performance and data structuring problem. When we optimize a web page, we aren't just adjusting text; we are configuring its metadata, server response times, and internal links so it serves as an authoritative source for both traditional search and AI search engines.</p>
        </div>
      </section>
    `
  },
  {
    id: 'prezlo-future-ai-identity-infrastructure',
    date: 'APR 2026',
    title: 'Why I Built Prezlo: Measuring Visibility in the Age of Generative AI',
    category: 'Product & Tech',
    description: 'Traditional SEO tools don’t measure how AI models cite your business. Here is how I set out to solve that problem with Prezlo.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    content: `
      <section class="space-y-16 pb-32">
        <div class="space-y-6">
          <h2 class="text-3xl md:text-5xl font-serif italic mb-4">The Shift from Clicks to Citations</h2>
          <p class="text-lg md:text-xl leading-relaxed text-black/70 font-light">When users ask ChatGPT or Perplexity for recommendation lists, they are getting direct, structured recommendations. If your brand is not recognized by these models, it remains invisible to a fast-growing segment of high-intent searchers.</p>
        </div>

        <div class="space-y-8">
          <p class="text-base md:text-lg leading-relaxed text-black/70">I built Prezlo to act as a diagnostic layer. It tracks how, where, and why your business is being cited inside LLMs. By combining this intelligence with modern technical SEO, we build search authority that works across both classic search engines and modern conversational systems.</p>
        </div>
      </section>
    `
  }
];

const COMPARISON_POSTS = [
  {
    id: 'freelance-seo-vs-agency-2026',
    date: 'MAY 2026',
    title: 'Freelance SEO Consultant vs. Traditional Agencies: A Pragmatic Comparison',
    category: 'SEO Strategy',
    description: 'Understanding the operational differences between hiring an independent technical specialist and engaging a traditional marketing agency in Dubai.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop',
    content: `
      <section class="space-y-16 pb-32">
        <h2 class="text-3xl md:text-5xl font-serif italic mb-6">Where Legwork Meets Strategy</h2>
        <p class="text-lg md:text-xl text-black/70 font-light leading-relaxed">When you hire a traditional agency, you often communicate through accounts teams while the execution is passed down to junior staff. When you hire an independent freelance consultant, you work directly with the person writing the code, planning the schema, and optimizing the backend.</p>

        <div class="bg-black text-white p-8 md:p-12 rounded-sm my-8">
          <h3 class="text-xl font-serif italic text-luxury-accent mb-6">The Direct-Value Approach</h3>
          <p class="text-base md:text-lg text-white/80 leading-relaxed">My consulting model is built on direct accountability. I don't use templates or standardized reports. Every recommendation is tailored directly to your site's codebase, local geography, and business objectives.</p>
        </div>
      </section>
    `
  }
];

const ALL_BLOG_POSTS = [...HOME_BLOG_POSTS, ...COMPARISON_POSTS];

const REVIEWS = [
  {
    name: "Anita D'souza",
    role: "Lark Goods Wholesalers L.L.C",
    text: "Lopty's direct approach to SEO made a massive difference for us. He didn't just give us generic reports; he restructured our search presence and helped us connect with high-intent buyers here in Dubai.",
    platform: "LinkedIn"
  },
  {
    name: "Tamnjong Larry Tabeh",
    role: "Full Stack Engineer",
    text: "Working alongside Lopty on backend optimizations is clean and efficient. He bridges marketing goals with technical engineering perfectly.",
    platform: "LinkedIn"
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
    { name: 'My Story', href: '/#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Consultation', href: '/#contact' },
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
    } else {
      navigate(href);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl py-4 border-b border-black/5 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center text-black">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="font-serif text-xl md:text-2xl font-bold tracking-tight">
          LOPTY <span className="text-luxury-accent italic font-normal">PASCAL</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleLinkClick(link.href)}
              className="text-[11px] font-medium uppercase tracking-[0.2em] hover:text-luxury-accent transition-colors cursor-pointer bg-transparent border-none outline-none text-black/80"
            >
              {link.name}
            </button>
          ))}
          <a 
            href="https://calendly.com/loptymobile/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 bg-black text-white text-[10px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:-translate-y-0.5 transition-all"
          >
            Let's Talk <ArrowRight size={12} />
          </a>
        </div>

        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-black/5 p-6 flex flex-col gap-4 text-center shadow-lg"
          >
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-serif text-xl italic text-black/80 hover:text-luxury-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://calendly.com/loptymobile/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-luxury-accent text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm"
            >
              Book a Call <ArrowRight size={12} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, centered = false }: any) => (
  <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-luxury-accent mb-2 block">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-black italic">
      {title}
    </h2>
  </div>
);

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/5 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <h3 className="text-lg md:text-xl font-serif text-black group-hover:text-luxury-accent transition-colors">{question}</h3>
        <div className={`w-6 h-6 rounded-full border border-black/10 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <Plus size={14} className="text-black/40" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-black/60 text-sm md:text-base leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ExpertiseBlock = ({ title, description, index }: any) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi Lopty, I want to discuss your ${title} service...`);
    window.open(`https://wa.me/${WHATSAPP_PHONE.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group py-6 md:py-10 border-b border-black/10 flex flex-col lg:grid lg:grid-cols-[1fr_2fr_0.5fr] items-start lg:items-center gap-4 md:gap-8 hover:bg-black/[0.01] transition-colors px-4 cursor-pointer"
      onClick={handleWhatsApp}
    >
      <div className="flex items-center gap-6">
        <span className="font-serif text-xl italic text-black/20 group-hover:text-luxury-accent transition-colors">0{index + 1}</span>
        <h3 className="text-xl md:text-2xl font-serif font-bold text-black lg:max-w-xs">{title}</h3>
      </div>
      <p className="text-sm md:text-base text-black/60 leading-relaxed font-sans">{description}</p>
      <div className="flex justify-start lg:justify-end">
        <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
          <ArrowRight size={16} />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectGridItem = ({ title, category, description, image, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.6 }}
    className={`relative group overflow-hidden ${index % 2 === 0 ? 'aspect-[4/5]' : 'aspect-square'} bg-white border border-black/5 rounded-sm`}
  >
    <div className="absolute inset-0 overflow-hidden">
      <motion.img 
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 1 }}
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale brightness-105 group-hover:grayscale-0 transition-all duration-500"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-95" />
    <div className="p-6 md:p-8 h-full flex flex-col justify-between relative z-10">
      <div>
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] bg-black text-white px-3 py-1 mb-4 inline-block rounded-xs">
          {category}
        </span>
        <h3 className="text-2xl md:text-3xl font-serif font-bold leading-none mb-3 italic text-black group-hover:text-luxury-accent transition-colors">{title}</h3>
      </div>
      <p className="text-xs font-sans text-black/80 leading-relaxed max-w-xs font-semibold bg-white/85 backdrop-blur-sm p-3 border border-black/5 rounded-xs">{description}</p>
    </div>
  </motion.div>
);

const Marquee = () => {
  const skills = [
    "AI SEO Consultant", 
    "Digital Marketing Specialist", 
    "Freelance SEO Dubai", 
    "AI Visibility", 
    "Dubai Marina", 
    "GEO Expert", 
    "AEO Strategy", 
    "Prezlo Founder", 
    "Technical SEO Specialist", 
    "Search Consultant"
  ];
  return (
    <div className="py-6 bg-black overflow-hidden relative">
      <motion.div 
        animate={{ x: [0, -800] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...skills, ...skills].map((skill, i) => (
          <span key={i} className="text-lg md:text-2xl font-serif italic text-white uppercase tracking-wider flex items-center gap-6">
            {skill} <span className="text-luxury-accent not-italic text-xl">●</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const FloatingContactMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const contacts = [
    {
      name: 'Call Direct',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.86a16 16 0 0 0 6.23 6.23l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
      href: `tel:${CONTACT_PHONE}`,
      color: 'bg-black'
    },
    {
      name: 'WhatsApp Us',
      icon: <MessageCircle size={20} />,
      href: `https://wa.me/${WHATSAPP_PHONE.replace('+', '')}`,
      color: 'bg-[#25D366]'
    },
    {
      name: 'LinkedIn Profile',
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/lopty-pascal-369a921a3/',
      color: 'bg-[#0077B5]'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-2 mb-1">
            {contacts.map((contact, i) => (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ delay: i * 0.05 }}
                className={`${contact.color} text-white p-3 rounded-full shadow-lg flex items-center justify-center group relative`}
              >
                {contact.icon}
                <span className="absolute right-full mr-3 px-2 py-1 bg-black text-white text-[9px] font-semibold uppercase tracking-wider rounded-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {contact.name}
                </span>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 text-white ${isOpen ? 'bg-black' : 'bg-luxury-accent'} transition-colors duration-300`}
      >
        <MessageCircle size={22} />
      </button>
    </div>
  );
};

const ReviewsSlide = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 border-t border-black/5 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-luxury-accent">Client Feedback</span>
          <h2 className="text-3xl md:text-4xl font-serif text-black mt-2 italic">What My Partners Say</h2>
        </div>

        <div className="relative min-h-[220px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <blockquote className="text-lg md:text-2xl font-serif text-black/80 leading-relaxed italic mb-8">
                "{REVIEWS[index].text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-luxury-accent font-serif italic text-lg">
                  {REVIEWS[index].name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-black font-bold uppercase tracking-wider text-xs">{REVIEWS[index].name}</h4>
                  <p className="text-black/40 text-[9px] uppercase tracking-wider">{REVIEWS[index].role} • {REVIEWS[index].platform}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2 mt-8 justify-end">
            <button 
              onClick={() => setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)}
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
            >
              <ArrowRight size={16} className="rotate-180" />
            </button>
            <button 
              onClick={() => setIndex((prev) => (prev + 1) % REVIEWS.length)}
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = ({ projects }: any) => {
  return (
    <>
      <ElegantNavbar />
      <main>
        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 relative overflow-hidden bg-white">
          <div className="max-w-[1400px] mx-auto w-full relative z-10 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-black/5 rounded-full mb-8">
                  <div className="w-2 h-2 bg-luxury-accent rounded-full animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-black/80">
                     Freelance AI SEO & Search Consultant · Dubai Marina, UAE
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-serif font-black leading-[0.9] tracking-tighter text-black uppercase mb-8">
                  Lopty <br /> 
                  <span className="italic text-luxury-accent font-normal">Pascal</span>
                </h1>

                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-luxury-accent" />
                    <p className="text-lg md:text-xl text-black font-semibold uppercase tracking-wide">
                      I Help Brands Optimize for Google & AI Search
                    </p>
                  </div>
                  <p className="text-base md:text-lg text-black/60 font-light leading-relaxed max-w-xl">
                    I am a <span className="text-black font-semibold">freelance digital marketing specialist and SEO consultant</span> living in Dubai Marina. I specialize in building search visibility and entity presence that gets brands cited by traditional search engines and AI assistants like ChatGPT, Gemini, and Perplexity.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                   <button 
                    onClick={() => {
                      const el = document.getElementById('projects');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-8 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:-translate-y-0.5 transition-all shadow-md"
                  >
                    View Project Archives
                  </button>
                  <a
                    href="https://calendly.com/loptymobile/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 border border-black/20 text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:-translate-y-0.5 transition-all text-center"
                  >
                    Book a Direct Call
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative block"
              >
                <div className="relative aspect-[3/4] max-w-xs md:max-w-sm mx-auto lg:ml-auto">
                    <div className="absolute inset-0 border-[6px] border-black/5 translate-x-3 translate-y-3 rounded-sm -z-10" />
                    <img 
                      src="/lopty-pascal.png" 
                      alt="Lopty Pascal, Freelance AI SEO Specialist Dubai" 
                      className="w-full h-full object-cover rounded-sm shadow-md grayscale hover:grayscale-0 transition-all duration-700 border border-black/5"
                    />
                    <div className="absolute -bottom-3 left-0 md:-left-6 bg-black p-4 shadow-lg">
                       <p className="text-luxury-accent font-serif italic text-xl md:text-2xl mb-0.5">AEO & GEO</p>
                       <p className="text-[8px] font-bold uppercase tracking-wider text-white/50">Modern Search Alignment</p>
                    </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Marquee />

        {/* AUDIT CTA */}
        <section id="audit" className="py-12 bg-luxury-accent text-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-xl">
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/70 mb-2 block">Direct Diagnostic</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold italic leading-tight mb-2">Let’s Check Your Site's AI and Google Search Readiness</h2>
              <p className="text-white/80 text-sm md:text-base">I will look over your domain’s structured data, performance, and current index status, and send you direct recommendations to fix the gaps.</p>
            </div>
            <a 
              href={`https://wa.me/${WHATSAPP_PHONE.replace('+', '')}?text=Hi%20Lopty,%20I'd%20like%20to%20request%20a%20search%20diagnostic%20for%20my%20website.`}
              target="_blank"
              className="px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:-translate-y-0.5 transition-all shadow-md flex items-center gap-3 shrink-0"
            >
              Get Your Diagnostic <ArrowRight size={14} />
            </a>
          </div>
        </section>

        {/* BIOGRAPHY */}
        <section id="about" className="py-20 md:py-32 bg-white border-y border-black/5 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="relative space-y-10">
                <div className="space-y-4">
                   <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-luxury-accent block">My Background</span>
                   <h2 className="text-4xl md:text-6xl font-serif font-black text-black leading-none italic lowercase tracking-tighter">My <br /> <span className="not-italic text-black/5">Story</span></h2>
                </div>
                
                <div className="space-y-6 relative z-10">
                  <p className="text-2xl md:text-3xl font-serif text-black/80 leading-tight italic">
                    "Search has shifted from matching keywords to establishing trusted facts."
                  </p>
                  <div className="text-sm md:text-base text-black/60 leading-relaxed space-y-6 border-l-4 border-luxury-accent pl-8">
                    <p>
                      I have spent over eight years working on search algorithms and backend digital optimization. Over that time, I’ve seen how traditional keyword stuffing has been replaced by structured metadata and entity-level recognition.
                    </p>
                    <p>
                      I live in Dubai Marina and consult directly with brands across the UAE, Europe, and Japan. I built my platform, <strong>Prezlo</strong>, to track and improve how professionals get recommended inside conversational systems like ChatGPT and Perplexity.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                   <img src="/lopty-pascal.png" alt="Lopty Pascal" className="w-16 h-16 object-cover rounded-full grayscale border border-black/10" />
                   <div className="space-y-0.5">
                      <p className="text-xs font-bold uppercase tracking-wider">Lopty Pascal</p>
                      <p className="text-[10px] text-black/40 italic">Founder of Prezlo · Dubai Marina</p>
                   </div>
                </div>
              </div>

              <div className="relative group">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  <div className="bg-gray-50/50 p-6 md:p-8 border border-black/5 rounded-sm">
                     <div className="text-3xl md:text-4xl font-serif italic text-luxury-accent mb-4 font-black">8yr+</div>
                     <h4 className="text-[10px] font-semibold uppercase tracking-wider text-black/40 mb-2">Tenure</h4>
                     <p className="text-xs text-black/60 leading-relaxed">Focusing on modern SEO, performance ads, and structured content maps.</p>
                  </div>
                  <div className="bg-black p-6 md:p-8 border border-black rounded-sm transform translate-y-3 sm:translate-y-6">
                     <div className="text-3xl md:text-4xl font-serif italic text-luxury-accent mb-4 font-black">Direct</div>
                     <h4 className="text-[10px] font-semibold uppercase tracking-wider text-white/40 mb-2">Consultation</h4>
                     <p className="text-xs text-white/60 leading-relaxed">You work directly with me—no agency account layers or overhead.</p>
                  </div>
                  <div className="bg-gray-50/50 p-6 md:p-8 border border-black/5 rounded-sm">
                     <div className="text-3xl md:text-4xl font-serif italic text-luxury-accent mb-4 font-black">Global</div>
                     <h4 className="text-[10px] font-semibold uppercase tracking-wider text-black/40 mb-2">Reach</h4>
                     <p className="text-xs text-black/60 leading-relaxed">Deploying optimization framework for domains in the UAE, US, and Japan.</p>
                  </div>
                  <div className="bg-gray-50/50 p-6 md:p-8 border border-black/5 rounded-sm transform translate-y-3 sm:translate-y-6">
                     <div className="text-3xl md:text-4xl font-serif italic text-luxury-accent mb-4 font-black">UAE</div>
                     <h4 className="text-[10px] font-semibold uppercase tracking-wider text-black/40 mb-2">Headquarters</h4>
                     <p className="text-xs text-black/60 leading-relaxed">Optimizing local intent for sectors across Dubai and Abu Dhabi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-black/5 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHeader title="The Shift in Strategy" subtitle="Search Architecture" centered />
            <div className="grid md:grid-cols-2 gap-px bg-black/5 border border-black/5 rounded-sm overflow-hidden">
              <div className="bg-gray-50 p-8 md:p-10">
                <h3 className="text-lg md:text-2xl font-serif italic mb-6 text-black/30">Traditional Approach</h3>
                <ul className="space-y-3">
                  {['Standard keyword stuffing lists', 'High-volume backlink acquisition', 'Generic, repetitive content templates', 'Manual, slow monthly audits'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-black/40 font-sans text-xs tracking-wide">
                      <div className="w-1.5 h-1.5 bg-black/10 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 md:p-10 relative border-l border-black/5">
                <h3 className="text-lg md:text-2xl font-serif italic mb-6 text-black">Technical & Entity-First Strategy</h3>
                <ul className="space-y-3">
                  {[
                    'Entity-Based schema configurations',
                    'Generative Engine Optimization (GEO)',
                    'Automated, clean crawling code optimizations',
                    'Factual, high-value content architecture'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-black font-sans text-xs font-semibold tracking-wide">
                      <div className="w-1.5 h-1.5 bg-luxury-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* INSIGHTS / BLOG */}
        <section className="py-16 md:py-24 bg-gray-50 border-y border-black/5">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <SectionHeader title="Search Science & Case Studies" subtitle="Publications" />
              <Link to="/blog" className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 border-b border-black/10 pb-1 mb-8 hover:text-luxury-accent transition-colors">
                Read All Articles →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {HOME_BLOG_POSTS.map((post, i) => (
                <Link 
                  to={`/blog/${post.id}`}
                  key={i}
                  className="group cursor-pointer block"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="aspect-[16/10] overflow-hidden mb-4 border border-black/5 rounded-sm">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale brightness-105 group-hover:grayscale-0 transition-all duration-500" 
                      />
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-luxury-accent">{post.category}</span>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-black/30">{post.date}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-serif text-black group-hover:text-luxury-accent transition-colors italic leading-tight">{post.title}</h3>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionHeader title="Areas of Specialization" subtitle="Core Expertise" centered />
            <div className="mt-8">
              {[
                { title: 'AI SEO & AEO Optimization', description: 'Helping your business appear naturally when users query conversational assistants like ChatGPT, Gemini, and Perplexity.' },
                { title: 'Technical SEO & Audit', description: 'Optimizing web pages, server response speeds, internal links, and structured schemas to clean up legacy crawl issues.' },
                { title: 'Local Search Maps & Intent', description: 'Ensuring your physical or corporate profile is accurately matched to your location and category.' },
                { title: 'Performance Search Marketing', description: 'Setting up high-conversion search campaigns structured to connect directly with transactional searchers.' }
              ].map((item, idx) => (
                <ExpertiseBlock key={idx} index={idx} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <SectionHeader title="Campaign Archives" subtitle="Portfolio" />
              <div className="mb-6 md:mb-12">
                <a href="#contact" className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group text-black/60 hover:text-black">
                  Request full case studies <ArrowRight size={14} />
                </a>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, idx) => (
                <ProjectGridItem key={idx} index={idx} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* CV / ROADMAP */}
        <section id="experience" className="py-20 md:py-32 bg-gray-50 text-black border-y border-black/5 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-[0.4fr_1.6fr] gap-12 lg:gap-24 items-start">
              <div className="lg:sticky lg:top-36 space-y-10">
                <div className="space-y-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-luxury-accent block">My Timeline</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-black italic text-black leading-tight">Archive of <br /> Work</h2>
                </div>
                
                <div className="p-8 bg-black text-white rounded-sm shadow-md">
                  <span className="text-[8px] font-bold uppercase tracking-wider text-luxury-accent mb-4 block">Independent Work</span>
                  <h4 className="text-2xl font-serif italic mb-6">Need a custom roadmap for your domain?</h4>
                  <a href="#contact" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-luxury-accent transition-colors">
                     Get in Touch <ArrowRight size={14} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-12">
                {[
                  { 
                    company: 'Prezlo', 
                    role: 'Founder & Chief Engineer', 
                    period: '2026 – Present', 
                    tags: ['AIOps', 'Entity Verification', 'SEO Tech'],
                    desc: 'Designed and deployed a specialized diagnostic platform monitoring brand citations across conversational search models and machine learning datasets.' 
                  },
                  { 
                    company: 'Al Basel Group', 
                    role: 'Senior Marketing Specialist', 
                    period: 'Dubai, UAE', 
                    tags: ['Lead Gen', 'Search Optimization'],
                    desc: 'Restructured index schemas and search presence to improve qualified search leads for luxury real estate assets.' 
                  },
                  { 
                    company: 'Tecworq', 
                    role: 'Lead Search Architect', 
                    period: 'Dubai, UAE', 
                    tags: ['Data Architecture', 'Technical SEO'],
                    desc: 'Cleaned up legacy crawling blocks, server load configurations, and data graphs for enterprise software products.' 
                  }
                ].map((item, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    key={idx} 
                    className="group relative pl-6 md:pl-10 border-l border-black/10 pb-10 last:pb-0"
                  >
                    <div className="absolute top-0 left-[-4.5px] w-2 h-2 rounded-full bg-black group-hover:bg-luxury-accent transition-all shadow-sm" />
                    
                    <div className="flex flex-col gap-4 mb-4">
                       <div className="flex flex-wrap gap-2">
                          {item.tags.map(tag => (
                             <span key={tag} className="text-[8px] font-semibold uppercase tracking-wider text-luxury-accent bg-luxury-accent/5 px-2 py-0.5 rounded-xs border border-luxury-accent/10">
                                {tag}
                             </span>
                          ))}
                       </div>
                       
                       <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
                          <div>
                             <h3 className="text-lg md:text-2xl font-serif font-bold italic text-black group-hover:text-luxury-accent transition-colors">{item.role}</h3>
                             <div className="text-sm font-serif text-black/40 italic">{item.company}</div>
                          </div>
                          <span className="text-[8px] font-semibold tracking-wider text-black/30 uppercase border border-black/5 px-3 py-1 rounded-full">{item.period}</span>
                       </div>
                    </div>
                    
                    <p className="text-black/60 text-sm md:text-base leading-relaxed max-w-2xl bg-white p-4 border border-black/5 rounded-sm">
                       {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 bg-white border-b border-black/5">
          <div className="max-w-3xl mx-auto px-6">
            <SectionHeader title="Frequently Asked Questions" subtitle="Details" />
            <div className="mt-8">
              {FAQ_DATA.map((item, idx) => (
                <FAQItem key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>

        <ReviewsSlide />

        {/* FOOTER / CONTACT */}
        <footer id="contact" className="py-16 md:py-24 text-center bg-white border-t border-black/5">
          <div className="max-w-3xl mx-auto px-6">
             <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
             >
                <SectionHeader title="Let's Plan Your Search Growth" subtitle="Contact & Inquiry" centered />
                <p className="text-lg md:text-2xl font-serif italic mb-8 max-w-xl mx-auto text-black">
                  Need a clean, technical roadmap for Google or AI search? Reach out directly.
                </p>
                <div className="flex flex-col items-center gap-6">
                  <div className="flex gap-8">
                    {[
                      { icon: Linkedin, link: 'https://www.linkedin.com/in/lopty-pascal-369a921a3/' },
                      { icon: Instagram, link: 'https://www.instagram.com/loptypascal/' },
                      { icon: Facebook, link: 'https://www.facebook.com/loptypascalofficial/' },
                      { icon: Globe, link: 'https://prezlo.io/verify/lopty' }
                    ].map((s, i) => (
                      <a key={i} href={s.link} target="_blank" className="text-black/30 hover:text-luxury-accent transition-colors">
                        <s.icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
             </motion.div>
          </div>
          
          <div className="mt-16 md:mt-24 pt-8 border-t border-black/5 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-wider text-black/30 px-6">
            <div>© {new Date().getFullYear()} LOPTY PASCAL · DUBAI MARINA · ALL RIGHTS RESERVED</div>
            <div className="flex gap-4">
              <span className="italic">Founder of Prezlo.io</span>
              <span>AI SEO Specialist</span>
              <span>Digital Marketing Consultant</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-luxury-accent selection:text-white">
      <Noise />
      <ElegantNavbar />
      <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 border-b border-black/5 pb-10">
            <span className="text-[9px] font-bold uppercase tracking-wider text-luxury-accent block mb-4">Publications</span>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-black leading-none italic mb-4">
              Applied Search Science
            </h1>
            <p className="text-base md:text-lg text-black/50 font-light italic max-w-xl">
              Practical guides and strategies on modern search behavior, AI visibility optimization, and clean backend SEO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ALL_BLOG_POSTS.map((post, i) => (
              <Link
                to={`/blog/${post.id}`}
                key={i}
                className="group cursor-pointer block border-b border-black/5 pb-8"
              >
                <div className="aspect-[16/10] overflow-hidden mb-4 border border-black/5 rounded-sm">
                  <img
                    src={post.img}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-bold uppercase tracking-wider text-luxury-accent bg-luxury-accent/5 px-2 py-0.5 rounded-xs">{post.category}</span>
                    <span className="text-[8px] font-bold uppercase tracking-wider text-black/20">{post.date}</span>
                  </div>
                  <h2 className="text-lg md:text-xl font-serif font-bold text-black group-hover:text-luxury-accent transition-colors leading-tight italic">{post.title}</h2>
                  <p className="text-xs text-black/50 leading-relaxed font-light line-clamp-2">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const BlogPostPage = () => {
  const { id } = useParams();
  const post = ALL_BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-6 italic">Post Not Found</h1>
          <Link to="/" className="text-luxury-accent border-b border-luxury-accent pb-0.5 uppercase tracking-wider font-bold text-xs">Back Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white selection:bg-luxury-accent selection:text-white">
      <Noise />
      <ElegantNavbar />
      <div className="pt-28 pb-32 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-black/5 pb-6">
            <div className="flex items-center gap-4">
               <span className="text-[8px] font-bold uppercase tracking-wider text-luxury-accent bg-luxury-accent/5 px-3 py-1 rounded-xs">{post.category}</span>
               <span className="text-[8px] font-bold uppercase tracking-wider text-black/30 border-l border-black/10 pl-4">{post.date}</span>
            </div>
            <Link to="/" className="text-[8px] font-bold uppercase tracking-wider text-black/40 hover:text-luxury-accent transition-colors">
               Return to Directory
            </Link>
          </div>

          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-black mb-6 italic leading-tight">
               {post.title}
            </h1>
            <p className="text-base md:text-lg text-black/50 font-light italic leading-relaxed">
               {post.description}
            </p>
          </header>

          <div className="aspect-video overflow-hidden mb-12 rounded-sm border border-black/5">
            <img 
              src={post.img} 
              alt={post.title} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale brightness-105" 
            />
          </div>

          <div className="prose prose-stone max-w-none text-black/70 leading-relaxed text-sm md:text-base">
             <div 
               className="blog-content-wrapper overflow-hidden space-y-6" 
               dangerouslySetInnerHTML={{ __html: post.content }} 
             />
          </div>

          <div className="mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
               <img src="/lopty-pascal.png" alt="Lopty Pascal" className="w-16 h-16 object-cover rounded-full grayscale border border-black/10" />
               <div>
                  <p className="text-xs font-bold uppercase tracking-wider">Lopty Pascal</p>
                  <p className="text-[10px] text-black/40 italic">AI SEO Consultant</p>
               </div>
            </div>
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:-translate-y-0.5 transition-all">
              Back to Home <ArrowRight size={12} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
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
      description: 'Developing high-conversion landing maps and optimization pipelines.',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop'
    },
    { 
      title: 'MTN Mobile Money', 
      category: 'GTM Strategy', 
      description: 'Campaign tracking and organic alignment strategies.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80'
    },
    { 
      title: 'Haus & Haus', 
      category: 'Search Optimization', 
      description: 'Cleaning up core crawling code, schemas, and indexing speed.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <div className="bg-white selection:bg-luxury-accent selection:text-white lg:cursor-none min-h-screen custom-scrollbar">
      <Noise />
      {/* Custom Cursor */}
      <motion.div 
        animate={{ x: mousePos.x - 8, y: mousePos.y - 8 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
        className="fixed top-0 left-0 w-4 h-4 border border-luxury-accent rounded-full pointer-events-none z-[100] hidden lg:block"
      />
      <motion.div 
        animate={{ x: mousePos.x - 1.5, y: mousePos.y - 1.5 }}
        transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.2 }}
        className="fixed top-0 left-0 w-1 h-1 bg-luxury-accent rounded-full pointer-events-none z-[100] hidden lg:block"
      />

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-luxury-accent z-[60] origin-left" style={{ scaleX }} />
      
      <FloatingContactMenu />

      {/* Schema.org JSON-LD for SEO Enhancement */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Lopty Pascal",
          "alternateName": "Lopty Pascal Official",
          "description": "Lopty Pascal is an AI SEO specialist, freelance digital marketing consultant, and search specialist based in Dubai Marina. He specializes in AI visibility and entity-level search optimization.",
          "jobTitle": ["Freelance AI SEO Specialist", "Digital Marketing Consultant", "SEO Consultant", "Founder of Prezlo.io"],
          "telephone": CONTACT_PHONE,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Dubai Marina",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "addressCountry": "United Arab Emirates"
          },
          "url": "https://prezlo.io/verify/lopty",
          "sameAs": [
            "https://www.linkedin.com/in/lopty-pascal-369a921a3/",
            "https://www.instagram.com/loptypascal/",
            "https://www.facebook.com/loptypascalofficial/",
            "https://github.com/lopty/",
            "https://x.com/LoptyMobileltd"
          ],
          "knowsAbout": ["Digital Marketing", "SEO", "Search Engine Optimization", "Artificial Intelligence", "GEO Marketing", "AEO", "Growth Architecture"],
          "image": "/lopty-pascal.png"
        })}
      </script>

      <Routes>
        <Route path="/" element={<HomePage projects={projects} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/services" element={<ServicesHubPage />} />
        <Route path="/what-is-ai-visibility" element={<WorldComparisonPage />} />
        {Object.values(GEO_PAGES).map(page => (
          <React.Fragment key={page.slug}>
            <Route path={`/${page.slug}`} element={<GeoPage slug={page.slug} />} />
          </React.Fragment>
        ))}
        {Object.values(SERVICE_PAGES).map(page => (
          <React.Fragment key={page.slug}>
            <Route path={`/services/${page.slug}`} element={<ServicePage slug={page.slug} />} />
          </React.Fragment>
        ))}
        {Object.values(COMPARISON_PAGES).map(page => (
          <React.Fragment key={page.slug}>
            <Route path={`/${page.slug}`} element={<ComparisonPage slug={page.slug} />} />
          </React.Fragment>
        ))}
        {AUTHORITY_PAGES.map(page => (
          <React.Fragment key={page.slug}>
            <Route path={`/${page.slug}`} element={<AuthorityPage slug={page.slug} />} />
          </React.Fragment>
        ))}
      </Routes>
    </div>
  );
}
