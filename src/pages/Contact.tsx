import React, { useState } from 'react';
import { Mail, Linkedin, Send, MessageSquare, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string | null }>({ type: null, message: null });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message || 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({ type: 'error', message: 'An unexpected error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div id="contact" className="bg-mesh-blue text-slate-900 min-h-screen py-12 scroll-mt-24 relative overflow-hidden">
      {/* Merge Gradient from previous section */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#fdf4ff] to-transparent z-20 pointer-events-none"></div>
      
      {/* Pattern Merge from previous section (About: bg-circles-pattern) */}
      <div className="absolute top-0 left-0 w-full h-64 bg-circles-pattern opacity-15 [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none z-10"></div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-waves-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <main className="container-width section-padding relative z-10">
        <h1 className="heading-lg mb-16 flex items-center gap-4">
          <span className="w-12 h-1 bg-primary rounded-full"></span>
          Contact Me
        </h1>
        
        <div className="grid md:grid-cols-2 gap-20">
          <section className="space-y-8 text-secondary">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-bold uppercase tracking-wider mb-4">
              <Sparkles size={16} />
              Let's Connect
            </div>
            <h2 className="text-4xl font-display font-bold text-primary leading-tight">Let's build something impactful.</h2>
            <p className="text-xl leading-relaxed">
              Whether you're looking to optimize your IT infrastructure or transform your ideas into scalable software, I'm ready to help.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Email</p>
                  <p className="text-slate-900 font-medium">anoopkaur444@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</p>
                  <a href="https://linkedin.com/in/anoop-kaur-48bb89278" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-medium hover:text-primary transition-colors">linkedin.com/in/anoop-kaur-48bb89278</a>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-10 rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <MessageSquare size={120} />
            </div>
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-900 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full px-4 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all duration-200" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-900 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all duration-200" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-900 uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all duration-200"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              {status.message && (
                <div className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
