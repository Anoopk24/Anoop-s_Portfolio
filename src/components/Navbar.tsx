import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getLink = (hash: string) => isHome ? hash : `/${hash}`;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container-width flex justify-between items-center py-4">
        <Link 
          to="/" 
          className="text-2xl font-display font-bold tracking-tighter hover:text-primary transition-colors duration-200"
          onClick={() => setIsOpen(false)}
        >
          ANOOP KAUR
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 font-medium text-slate-600">
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Link 
            to="/resume" 
            className="px-4 py-2 text-sm bg-primary text-white rounded-full font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
          <button 
            onClick={toggleMenu}
            className="p-2 text-slate-600 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4 font-medium text-slate-600">
            <a href={getLink('#home')} onClick={toggleMenu} className="hover:text-primary transition-colors">Home</a>
            <a href={getLink('#experience')} onClick={toggleMenu} className="hover:text-primary transition-colors">Experience</a>
            <a href={getLink('#education')} onClick={toggleMenu} className="hover:text-primary transition-colors">Education</a>
            <a href={getLink('#about')} onClick={toggleMenu} className="hover:text-primary transition-colors">About</a>
            <a href={getLink('#contact')} onClick={toggleMenu} className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
