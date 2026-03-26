import { Link } from 'react-router-dom';
import { PROFILE_IMAGE_URL } from '../constants';

export default function Home() {
  return (
    <div id="home" className="bg-white text-slate-900 min-h-screen pt-12 scroll-mt-24">
      <main className="container-width section-padding">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-primary bg-blue-50 rounded-full border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for new opportunities
            </div>
            <h1 className="heading-xl">
              Engineering <span className="text-primary">Scalable</span> Solutions Through Code & IT.
            </h1>
            <p className="text-xl text-secondary leading-relaxed max-w-lg">
              Detail-oriented Software Developer and IT Support Technician with 2+ years of experience. Expert in Full-Stack Development, IT Infrastructure, and delivering high-performance technical solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#experience" className="btn-primary">View Experience</a>
              <Link to="/resume" className="btn-outline">View Resume</Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-3xl blur-2xl opacity-10 animate-pulse"></div>
            <div className="relative w-full aspect-square rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Anoop Kaur" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Impact Strip */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="card-hover text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">2+ Years</div>
            <div className="text-secondary font-medium uppercase tracking-wider text-sm">Technical Experience</div>
          </div>
          <div className="card-hover text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">Google IT</div>
            <div className="text-secondary font-medium uppercase tracking-wider text-sm">Support Certified</div>
          </div>
          <div className="card-hover text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">Full-Stack</div>
            <div className="text-secondary font-medium uppercase tracking-wider text-sm">Software Development</div>
          </div>
        </section>

        {/* Featured Quote/Mission */}
        <section className="mb-32 text-center max-w-3xl mx-auto">
          <h2 className="heading-lg mb-8">Bridging the gap between ground-level IT operations and high-level software engineering.</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </section>
      </main>
    </div>
  );
}
