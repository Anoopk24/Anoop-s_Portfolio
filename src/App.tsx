import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Terminal, 
  BarChart3, 
  Mail, 
  Linkedin, 
  Github,
  Globe,
  ChevronRight, 
  ExternalLink, 
  Cpu, 
  Award, 
  GraduationCap,
  Menu,
  X,
  ArrowRight,
  Download
} from 'lucide-react';
import { PROJECTS, EXPERIENCES, SKILLS, EDUCATION, CERTIFICATIONS } from './constants';
import ResumePage from './components/ResumePage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setShowResume(window.location.pathname === '/resume');
    };
    
    window.addEventListener('popstate', handleLocationChange);
    handleLocationChange();
    
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  if (showResume) {
    return <ResumePage />;
  }

  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ type: null, message: '' });
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    const btn = e.currentTarget.querySelector('button');
    if (btn) btn.disabled = true;
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      if (response.ok) {
        setFormStatus({ 
          type: 'success', 
          message: result.message || 'Message sent successfully!' 
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus({ 
          type: 'error', 
          message: result.error || 'Failed to send message.' 
        });
      }
    } catch (err) {
      setFormStatus({ 
        type: 'error', 
        message: 'An error occurred. Please try again later.' 
      });
    } finally {
      if (btn) btn.disabled = false;
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-3"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-blue/20 shadow-sm bg-slate-100 flex items-center justify-center">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5635AQFXibyZh-_NmQ/profile-framedphoto-shrink_400_400/B56ZyMbObrHgAc-/0/1771882473447?e=1775030400&v=beta&t=DChAWrEpddrPUgHYigvV59W-nbUardk4z-mz4S8BCUs" 
                alt="AK" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://api.dicebear.com/7.x/initials/svg?seed=AK&backgroundColor=2563eb";
                }}
              />
            </div>
            <span className="hidden sm:inline text-slate-900">Anoop Kaur</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Experience', 'Education', 'About'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="nav-link"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full glass border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
            >
              {['Home', 'Experience', 'Education', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-lg font-medium text-slate-700 hover:text-brand-blue transition-colors"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="bg-grid">
        {/* Hero Section */}
        <section id="home" className="pt-40 pb-20 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#046c3c]/10 border border-[#046c3c]/20 text-[#046c3c] text-xs font-bold uppercase tracking-widest shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#046c3c] animate-pulse" />
                    #OpenToWork
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    Remote & Global
                  </div>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.05] text-gradient">
                  Engineering <br />
                  <span className="text-brand-blue">Efficiency</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                  Detail-oriented IT Support Technician with 2+ years of experience in enterprise and MSP environments. Expert in Microsoft 365, T-SQL, and delivering high-performance technical support with excellence in customer service.
                </p>
                <div className="flex flex-wrap gap-5">
                  <button 
                    onClick={() => scrollToSection('experience')}
                    className="w-full sm:w-auto px-10 py-5 bg-brand-blue text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:translate-y-[-4px] hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-2xl shadow-brand-blue/40 glow-blue hover:shadow-brand-blue/60"
                  >
                    View Experience <ArrowRight size={20} />
                  </button>
                  <a 
                    href="/resume" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', '/resume');
                      window.dispatchEvent(new Event('popstate'));
                    }}
                    className="w-full sm:w-auto px-10 py-5 glass text-slate-900 font-bold rounded-2xl hover:bg-white transition-all duration-300 border border-slate-200 flex items-center justify-center gap-3 hover:translate-y-[-4px] hover:scale-[1.02] active:scale-95 hover:shadow-xl"
                  >
                    View Resume <ExternalLink size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Profile Image Container */}
                <div className="relative z-20 aspect-square w-full max-w-md mx-auto rounded-[2.5rem] overflow-hidden border-2 border-slate-200 shadow-2xl group-hover:border-brand-blue/50 transition-all duration-700 bg-slate-100 flex items-center justify-center hover:scale-[1.02]">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D5635AQFXibyZh-_NmQ/profile-framedphoto-shrink_400_400/B56ZyMbObrHgAc-/0/1771882473447?e=1775030400&v=beta&t=DChAWrEpddrPUgHYigvV59W-nbUardk4z-mz4S8BCUs" 
                    alt="Anoop Kaur" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://api.dicebear.com/7.x/initials/svg?seed=AK&backgroundColor=2563eb";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border border-slate-200 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center text-white font-black text-xl">
                        AK
                      </div>
                      <div>
                        <div className="font-bold text-lg text-slate-900">Anoop Kaur</div>
                        <div className="text-xs text-slate-600 uppercase tracking-widest font-semibold">IT Specialist | Data Analyst</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-blue/20 blur-[80px] rounded-full animate-pulse-slow" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-cyan/20 blur-[80px] rounded-full animate-pulse-slow [animation-delay:2s]" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Strip */}
        <section className="py-12 border-y border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="flex flex-col items-center text-center pb-8 md:pb-0">
                <div className="text-4xl font-bold text-brand-blue mb-1">2+ Years</div>
                <div className="text-sm text-slate-600 uppercase tracking-widest font-semibold">Technical Experience</div>
              </div>
              <div className="flex flex-col items-center text-center py-8 md:py-0">
                <div className="text-4xl font-bold text-brand-blue mb-1">Google IT</div>
                <div className="text-sm text-slate-600 uppercase tracking-widest font-semibold">Support Certified</div>
              </div>
              <div className="flex flex-col items-center text-center pt-8 md:pt-0">
                <div className="text-4xl font-bold text-brand-blue mb-1">SQL Prof.</div>
                <div className="text-sm text-slate-600 uppercase tracking-widest font-semibold">Microsoft Certified</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                <p className="text-slate-600 max-w-md">Bridging the gap between ground-level IT operations and high-level data storytelling.</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center py-24 glass rounded-[3rem] border border-slate-200 bg-slate-50/30 text-center px-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6">
                <Database size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Nothing to view here for now</h3>
              <p className="text-slate-500 max-w-sm">
                I'm currently working on some exciting technical projects. Check back soon to see my latest work in IT and Data Analytics!
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center text-slate-900">Work Experience</h2>
            
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                {EXPERIENCES.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-slate-200 group/exp hover-lift hover-glow p-6 rounded-2xl transition-all"
                  >
                    <div className="absolute left-[-5px] top-6 w-[10px] h-[10px] rounded-full bg-brand-blue shadow-[0_0_10px_rgba(37,99,235,0.3)] group-hover/exp:scale-150 transition-transform" />
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                      <span className="text-sm font-medium text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-slate-700 font-medium mb-4">{exp.company}</div>
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="text-slate-600 text-sm leading-relaxed flex gap-3">
                          <span className="text-brand-blue mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-blue" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-8">
                <div className="glass rounded-3xl p-8 lg:sticky lg:top-24">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                    <Terminal size={20} className="text-brand-blue" />
                    Skill Matrix
                  </h3>
                  <div className="space-y-6">
                    {SKILLS.map(skill => (
                      <div key={skill.category}>
                        <div className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-3">
                          {skill.category}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map(item => (
                            <span key={item} className="px-3 py-1.5 bg-slate-100 rounded-lg text-sm text-slate-700 border border-slate-200">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Education Row */}
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap size={32} className="text-brand-blue" />
                Education
              </h2>
              <div className="w-full">
                {EDUCATION.map((edu, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl p-8 border border-slate-200 hover-lift hover-glow transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <div className="font-bold text-2xl text-slate-900 mb-1">{edu.degree}</div>
                        <div className="text-brand-blue font-semibold text-lg">{edu.institution}</div>
                      </div>
                      <div className="md:text-right text-left">
                        <div className="text-sm font-medium text-slate-600">{edu.location}</div>
                        <div className="text-sm text-slate-500">{edu.period}</div>
                      </div>
                    </div>
                    
                    {edu.bullets && (
                      <ul className="grid md:grid-cols-2 gap-x-12 gap-y-3 mb-6">
                        {edu.bullets.map((bullet, j) => (
                          <li key={j} className="text-sm text-slate-600 flex gap-3">
                            <span className="text-brand-blue mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-blue" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {edu.gpa && (
                      <div className="inline-flex items-center gap-2 text-emerald-600 text-xs font-bold px-3 py-1.5 bg-emerald-600/10 rounded-full">
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Row */}
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Award size={32} className="text-brand-blue" />
                Certifications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CERTIFICATIONS.map((cert, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-3xl p-8 border border-slate-200 h-full flex flex-col hover-lift hover-glow transition-all"
                  >
                    <div className="mb-4">
                      <div className="font-bold text-xl text-slate-900 leading-tight mb-2">{cert.title}</div>
                      <div className="text-brand-blue text-xs font-bold uppercase tracking-widest">{cert.issuer}</div>
                    </div>
                    {cert.bullets && (
                      <ul className="space-y-3 mt-auto">
                        {cert.bullets.map((bullet, j) => (
                          <li key={j} className="text-sm text-slate-600 flex gap-3">
                            <span className="text-brand-blue mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-blue" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-16 items-start">
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-8 h-1 bg-brand-blue rounded-full" />
                    The Journey
                  </h2>
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>
                      My technical foundation was built at <span className="text-brand-blue font-semibold">SAIT</span>, where I immersed myself in the Software Development diploma. College was where I first discovered the power of code to solve real-world problems, moving from basic logic to complex full-stack applications.
                    </p>
                    <p>
                      After graduating in 2024, I stepped into the fast-paced world of IT support. Working with <span className="font-medium text-slate-900">Net Vision IT Solutions</span> and <span className="font-medium text-slate-900">NPB Technologies</span>, I was on the front lines—resolving critical infrastructure issues and supporting enterprise systems. These roles taught me the importance of reliability and the human side of technology.
                    </p>
                    <p>
                      Currently, as an <span className="font-medium text-slate-900">IT Field Support Technician at Four Points by Sheraton</span>, I bridge the gap between technical maintenance and operational efficiency. While I have deep roots in the local tech scene, I am a <span className="text-brand-blue font-semibold">remote-first advocate</span> and am open to global opportunities where I can apply my skills in Data Analytics and automation to solve complex challenges at scale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-8">
                <div className="glass p-8 rounded-[2.5rem] border border-slate-200 bg-brand-blue/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-3xl rounded-full -mr-16 -mt-16" />
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <ArrowRight size={20} className="text-brand-blue" />
                    Future Goals
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Mastering Advanced Data Architecture to build scalable enterprise solutions.",
                      "Integrating advanced automation into business workflows to automate complex IT operations.",
                      "Becoming a Senior Data Analyst focusing on predictive modeling for the enterprise and tech sectors.",
                      "Contributing to the global tech ecosystem through remote collaboration and mentoring emerging developers."
                    ].map((goal, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                        <span className="text-brand-blue font-bold shrink-0">0{i + 1}</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-brand-blue/5">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 blur-[100px] rounded-full -mr-48 -mt-48" />
              
              <div className="grid md:grid-cols-2 gap-16 relative z-10">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <span className="text-brand-blue">impactful</span>.</h2>
                  <p className="text-slate-600 text-lg mb-12">
                    Whether you're looking to optimize your IT infrastructure or transform your data into insights, I'm ready to help.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-slate-700 hover:text-brand-blue transition-colors group/contact hover-lift">
                      <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover/contact:bg-brand-blue/20 transition-all">
                        <Globe size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Location</span>
                        <span className="text-lg font-medium">Global / Remote-First</span>
                        <span className="text-sm text-slate-500">Open to worldwide opportunities</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-slate-700 hover:text-brand-blue transition-colors group/contact hover-lift">
                      <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover/contact:bg-brand-blue/20 transition-all">
                        <Mail size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email & Phone</span>
                        <span className="text-lg font-medium">anoopkaur444@gmail.com</span>
                        <span className="text-sm text-slate-500">403-690-1494</span>
                      </div>
                    </div>
                    <a href="https://www.linkedin.com/in/anoop-kaur-48bb89278/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-brand-blue transition-all duration-300 group/contact hover-lift">
                      <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover/contact:bg-brand-blue/20 group-hover/contact:scale-110 transition-all duration-300">
                        <Linkedin size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">LinkedIn</span>
                        <span className="text-lg font-medium">linkedin.com/in/anoop-kaur-48bb89278</span>
                      </div>
                    </a>
                    <a href="https://github.com/Anoopk24" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-brand-blue transition-all duration-300 group/contact hover-lift">
                      <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover/contact:bg-brand-blue/20 group-hover/contact:scale-110 transition-all duration-300">
                        <Github size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">GitHub</span>
                        <span className="text-lg font-medium">github.com/Anoopk24</span>
                      </div>
                    </a>
                  </div>
                </div>

                <form 
                  className="space-y-6"
                  onSubmit={handleContactSubmit}
                >
                  {formStatus.type && (
                    <div className={`p-4 rounded-xl text-sm font-medium ${
                      formStatus.type === 'success' 
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                        : 'bg-rose-50 text-rose-600 border border-rose-100'
                    }`}>
                      {formStatus.message}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Name</label>
                      <input name="name" required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors text-slate-900" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Email</label>
                      <input name="email" required type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors text-slate-900" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Message</label>
                    <textarea name="message" required rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors resize-none text-slate-900" placeholder="How can I help you?" />
                  </div>
                  <button type="submit" className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue-dark transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 disabled:opacity-50 disabled:cursor-not-allowed">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-600 text-sm">
            © 2026 Anoop Kaur. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Anoopk24" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-brand-blue transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/anoop-kaur-48bb89278/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-brand-blue transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
