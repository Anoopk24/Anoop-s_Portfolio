import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function App() {
  return (
    <Router>
      <div className="bg-white text-slate-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={
            <>
              <Home />
              <Experience />
              <Education />
              <About />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}
