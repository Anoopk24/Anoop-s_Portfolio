import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getLink = (hash: string) => isHome ? hash : `/${hash}`;

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white/80 backdrop-blur-md text-slate-900 border-b border-slate-100 sticky top-0 z-50">
      <Link to="/" className="text-2xl font-display font-bold tracking-tighter hover:text-primary transition-colors duration-200">ANOOP KAUR</Link>
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          <a href={getLink('#home')} className="hover:text-primary transition-colors duration-200">Home</a>
          <a href={getLink('#experience')} className="hover:text-primary transition-colors duration-200">Experience</a>
          <a href={getLink('#education')} className="hover:text-primary transition-colors duration-200">Education</a>
          <a href={getLink('#about')} className="hover:text-primary transition-colors duration-200">About</a>
          <a href={getLink('#contact')} className="hover:text-primary transition-colors duration-200">Contact</a>
        </div>
        <Link 
          to="/resume" 
          className="px-6 py-2.5 bg-primary text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
}
