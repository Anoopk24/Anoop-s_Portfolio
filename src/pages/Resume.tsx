import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowLeft } from 'lucide-react';

export default function Resume() {
  const [showPrintMessage, setShowPrintMessage] = React.useState(false);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Anoop Kaur Resume";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleDownload = () => {
    const isIframe = window.self !== window.top;
    if (isIframe) {
      setShowPrintMessage(true);
      return;
    }
    window.print();
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen p-8 md:p-16 font-serif">
      {showPrintMessage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 font-sans">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center space-y-6 animate-in zoom-in duration-300">
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto">
              <Download size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900">Download Resume</h3>
            <p className="text-secondary leading-relaxed">
              To download or print your resume as a PDF, please open this application in a **new tab** using the button in the top right corner of the preview.
            </p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => {
                  setShowPrintMessage(false);
                  window.print();
                }}
                className="btn-primary w-full"
              >
                Try Printing Anyway
              </button>
              <button 
                onClick={() => setShowPrintMessage(false)}
                className="text-slate-400 hover:text-slate-600 font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-3xl mx-auto mb-12 flex justify-between items-center print:hidden font-sans">
        <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium">
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
        <button 
          onClick={handleDownload}
          className="btn-primary flex items-center gap-2"
        >
          <Download size={20} />
          Download PDF
        </button>
      </div>

      <main className="max-w-3xl mx-auto bg-white p-12 shadow-2xl border border-slate-100 print:shadow-none print:border-none print:p-0 rounded-3xl print:rounded-none">
        <header className="border-b-2 border-slate-900 pb-6 mb-8">
          <h1 className="text-5xl font-display font-bold tracking-tight mb-2">ANOOP KAUR</h1>
          <p className="text-lg font-sans text-secondary">Calgary, AB | 403-690-1494 | anoopkaur444@gmail.com</p>
          <p className="text-sm font-sans text-slate-400 mt-1">linkedin.com/in/anoop-kaur-48bb89278 | github.com/Anoopk24</p>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-slate-900 mb-2">Professional Summary</h2>
          <p className="text-sm">
            Detail-oriented Software Developer / IT Support Technician with 2+ years of experience delivering onsite and remote technical support in hospitality and MSP environments. Strong expertise in Full-Stack Development, Microsoft 365, hardware and software troubleshooting, ticketing systems, and end-user support. Skilled in React, Node.js, T-SQL, SQL Server database management, system configuration, and IT service management (ITSM). Recognized for strong problem-solving abilities, customer service excellence, and building scalable technical solutions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-slate-900 mb-2">Technical Skills</h2>
          <p className="text-sm">
            <strong>Productivity Tools:</strong> Microsoft 365, Microsoft Office Suite, Microsoft Excel<br/>
            <strong>IT Support:</strong> Deskside Support, Helpdesk Support, Incident Management, Ticketing Systems, Remote Support Tools, Active Directory (basic), User Account Management<br/>
            <strong>Hardware:</strong> Desktop & Laptop Troubleshooting, Printer & Peripheral Support, Hardware Installation & Configuration<br/>
            <strong>Networking:</strong> Basic Networking, TCP/IP, DNS, DHCP, Connectivity Troubleshooting<br/>
            <strong>Database & Data:</strong> Microsoft SQL Server, T-SQL, Database Design, Query Optimization, Indexing, Execution Plans, Backup & Recovery, Data Normalization<br/>
            <strong>Programming:</strong> HTML, CSS, JavaScript, Python, SQL, Node.js, React.js<br/>
            <strong>Other:</strong> Asset Management, System Deployment, Software Installation, Performance Tuning, Documentation
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-slate-900 mb-2">Education</h2>
          <p className="text-sm font-bold">Diploma in Software Development</p>
          <p className="text-sm italic mb-2">Southern Alberta Institute of Technology (SAIT), Calgary | Completed: Aug 2024 | GPA: 3.5</p>
          <p className="text-sm">
            Comprehensive program focused on full-stack application development, database architecture, and software engineering lifecycle. Core competencies include object-oriented programming, web development (React, Node.js), relational database management (SQL Server, T-SQL), and agile methodologies. Developed multiple end-to-end projects emphasizing scalable code, performance optimization, and user-centric design.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-slate-900 mb-2">Certifications</h2>
          <ul className="text-sm list-disc list-inside space-y-3">
            <li>
              <strong>Google AI Essentials Professional Certificate</strong> — Mastery of generative AI tools, prompt engineering, and implementing AI-driven workflows to enhance productivity and technical problem-solving.
            </li>
            <li>
              <strong>Microsoft SQL Server Professional Certificate (Coursera)</strong> — Specialized training in advanced T-SQL, database architecture, and performance optimization for large-scale enterprise environments.
            </li>
            <li>
              <strong>Google IT Support Professional Certificate (Coursera)</strong> — End-to-end training in systems administration, networking protocols, security best practices, and technical troubleshooting.
            </li>
            <li>
              <strong>Preparing Data for Analysis with Microsoft Excel (Coursera)</strong> — Advanced proficiency in data manipulation, complex formulas, and business intelligence reporting using Excel.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase border-b border-slate-900 mb-2">Professional Experience</h2>
          
          <div className="mb-4">
            <p className="font-bold text-sm">IT Field Support Technician | Four Points by Sheraton — Calgary, AB | Apr 2025 – Present</p>
            <ul className="text-sm list-disc list-inside ml-4">
              <li>Provide onsite deskside support, resolving hardware, software, and network connectivity issues.</li>
              <li>Install, configure, and troubleshoot desktops, laptops, printers, and peripherals.</li>
              <li>Support Microsoft 365 applications; validate resolutions through testing and user confirmation.</li>
              <li>Maintain IT asset inventory and assist with lifecycle management.</li>
              <li>Document incidents and service requests to ensure SLA compliance and accurate reporting.</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-bold text-sm">IT Support Technician | NPB Technologies — Calgary, AB | Sep 2024 – Mar 2025</p>
            <ul className="text-sm list-disc list-inside ml-4">
              <li>Delivered onsite and remote technical support via phone, email, and remote access tools.</li>
              <li>Installed and configured operating systems and enterprise applications.</li>
              <li>Diagnosed software and connectivity issues; logged and tracked tickets using service management systems.</li>
              <li>Assisted users with account setup, password resets, and troubleshooting system access issues.</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-sm">Helpdesk Support Analyst | Net Vision IT Solutions — India | Jul 2022 – Apr 2023</p>
            <ul className="text-sm list-disc list-inside ml-4">
              <li>Provided Level 1 technical support for desktops and business applications.</li>
              <li>Performed software installation, troubleshooting, and user training.</li>
              <li>Created technical documentation and knowledge base articles to improve service efficiency.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
