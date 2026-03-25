import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white text-slate-900 border-b border-slate-200 sticky top-0 z-50">
      <a href="#home" className="text-xl font-bold tracking-tighter hover:text-blue-600 transition-colors duration-200">ANOOP KAUR</a>
      <div className="flex gap-6">
        <a href="#home" className="hover:text-blue-600 transition-colors duration-200">Home</a>
        <a href="#experience" className="hover:text-blue-600 transition-colors duration-200">Experience</a>
        <a href="#education" className="hover:text-blue-600 transition-colors duration-200">Education</a>
        <a href="#about" className="hover:text-blue-600 transition-colors duration-200">About</a>
        <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact Me</a>
      </div>
    </nav>
  );
}
