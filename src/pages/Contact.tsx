import React, { useState } from 'react';

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
    <div id="contact" className="bg-white text-slate-900 min-h-screen py-12 scroll-mt-24">
      <main className="container-width section-padding">
        <h1 className="heading-lg mb-16">Contact Me</h1>
        
        <div className="grid md:grid-cols-2 gap-20">
          <section className="space-y-8 text-secondary">
            <h2 className="text-4xl font-display font-bold text-primary leading-tight">Let's build something impactful.</h2>
            <p className="text-xl leading-relaxed">
              Whether you're looking to optimize your IT infrastructure or transform your ideas into scalable software, I'm ready to help.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Email</p>
                  <p className="text-slate-900 font-medium">anoopkaur444@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</p>
                  <a href="https://linkedin.com/in/anoop-kaur-48bb89278" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-medium hover:text-primary transition-colors">linkedin.com/in/anoop-kaur-48bb89278</a>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-10 rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50">
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                className="btn-primary w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
