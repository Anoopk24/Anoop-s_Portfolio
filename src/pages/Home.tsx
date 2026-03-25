import { Link } from 'react-router-dom';
import { PROFILE_IMAGE_URL } from '../constants';

export default function Home() {
  return (
    <div id="home" className="bg-white text-slate-900 min-h-screen pt-12 scroll-mt-24">
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">#OpenToWork</div>
            <h1 className="text-6xl font-bold tracking-tighter mb-6">
              Engineering Efficiency
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Detail-oriented IT Support Technician with 2+ years of experience in enterprise and MSP environments. Expert in Microsoft 365, T-SQL, and delivering high-performance technical support with excellence in customer service.
            </p>
            <div className="flex gap-4">
              <a href="#experience" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">View Experience</a>
              <Link to="/resume" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition-all duration-300 hover:scale-105 hover:shadow-md">View Resume</Link>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-2xl shadow-blue-500/10 flex items-center justify-center transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/20">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Anoop Kaur" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">Bridging the gap between ground-level IT operations and high-level data storytelling.</h3>
            <p className="text-slate-600">Nothing to view here for now. I'm currently working on some exciting technical projects. Check back soon to see my latest work in IT and Data Analytics!</p>
          </div>
        </section>

        {/* Impact Strip */}
        <section className="grid grid-cols-3 gap-6 bg-slate-100 p-8 rounded-2xl border border-slate-200 mb-24">
          <div className="text-center transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-blue-600">2+ Years</div>
            <div className="text-sm text-slate-600">Technical Experience</div>
          </div>
          <div className="text-center transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-blue-600">Google IT</div>
            <div className="text-sm text-slate-600">Support Certified</div>
          </div>
          <div className="text-center transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-blue-600">SQL Prof.</div>
            <div className="text-sm text-slate-600">Microsoft SQL Server</div>
          </div>
        </section>
      </main>
    </div>
  );
}
