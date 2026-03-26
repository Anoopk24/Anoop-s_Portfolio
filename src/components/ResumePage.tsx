import React from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, ArrowLeft } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-12 border border-slate-200">
        <div className="mb-8">
          <a href="/" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-dark font-semibold">
            <ArrowLeft size={18} /> Back to Home
          </a>
        </div>
        
        {/* Header */}
        <header className="border-b border-slate-200 pb-8 mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">ANOOP KAUR</h1>
          <div className="flex flex-wrap gap-4 text-slate-600 text-sm">
            <div className="flex items-center gap-1"><MapPin size={16} /> Calgary, AB</div>
            <div className="flex items-center gap-1"><Phone size={16} /> 403-690-1494</div>
            <div className="flex items-center gap-1"><Mail size={16} /> anoopkaur444@gmail.com</div>
            <a href="https://linkedin.com/in/anoop-kaur-48bb89278" className="flex items-center gap-1 hover:text-brand-blue"><Linkedin size={16} /> linkedin.com/in/anoop-kaur-48bb89278</a>
          </div>
        </header>

        {/* Sections */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">Professional Summary</h2>
          <p className="text-slate-700 leading-relaxed">
            Detail-oriented IT Support / Deskside Support Technician with 2+ years of experience delivering onsite and remote technical support in hospitality and MSP environments. Strong expertise in Microsoft 365, hardware and software troubleshooting, ticketing systems, and end-user support. Skilled in T-SQL, SQL Server database management, system configuration, and IT service management (ITSM). Recognized for strong problem-solving abilities, customer service excellence, and maintaining high SLA performance in fast-paced environments.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">Technical Skills</h2>
          <div className="space-y-3 text-sm text-slate-700">
            <p><strong>Productivity Tools:</strong> Microsoft 365, Microsoft Office Suite, Microsoft Excel</p>
            <p><strong>IT Support:</strong> Deskside Support, Helpdesk Support, Incident Management, Ticketing Systems, Remote Support Tools, Active Directory (basic), User Account Management</p>
            <p><strong>Hardware:</strong> Desktop & Laptop Troubleshooting, Printer & Peripheral Support, Hardware Installation & Configuration</p>
            <p><strong>Networking:</strong> Basic Networking, TCP/IP, DNS, DHCP, Connectivity Troubleshooting</p>
            <p><strong>Database & Data:</strong> Microsoft SQL Server, T-SQL, Database Design, Query Optimization, Indexing, Execution Plans, Backup & Recovery, Data Normalization</p>
            <p><strong>Programming:</strong> HTML, CSS, JavaScript, Python, SQL, Node.js, React.js</p>
            <p><strong>Other:</strong> Asset Management, System Deployment, Software Installation, Performance Tuning, Documentation</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">Education</h2>
          <div className="text-sm text-slate-700">
            <p className="font-bold">Diploma in Software Development</p>
            <p>Southern Alberta Institute of Technology (SAIT), Calgary | Completed: Aug 2024 | GPA: 3.5</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">Certifications</h2>
          <div className="text-sm text-slate-700 space-y-4">
            <div>
              <p className="font-bold">Microsoft SQL Server Professional Certificate – Coursera</p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>Writing and optimizing T-SQL queries</li>
                <li>Designing normalized relational database schemas</li>
                <li>Implementing data manipulation with transaction management</li>
                <li>Performance tuning (indexing, execution plan analysis)</li>
                <li>Database security, backup and recovery strategies</li>
                <li>Integration with business intelligence tools</li>
                <li>Applied hands-on projects using real-world database scenarios</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Google IT Support Professional Certificate (Coursera)</p>
              <ul className="list-disc list-inside ml-2">
                <li>Technical Support Fundamentals</li>
                <li>IT Security: Defense Against the Digital Dark Arts</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Preparing Data for Analysis with Microsoft Excel – Coursera</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">Professional Experience</h2>
          <div className="space-y-6 text-sm text-slate-700">
            <div>
              <h3 className="font-bold text-base">IT Field Support Technician | Four Points by Sheraton — Calgary, AB | Apr 2025 – Present</h3>
              <ul className="list-disc list-inside ml-2 space-y-1 mt-2">
                <li>Provide onsite deskside support, resolving hardware, software, and network connectivity issues.</li>
                <li>Install, configure, and troubleshoot desktops, laptops, printers, and peripherals.</li>
                <li>Support Microsoft 365 applications; validate resolutions through testing and user confirmation.</li>
                <li>Maintain IT asset inventory and assist with lifecycle management.</li>
                <li>Document incidents and service requests to ensure SLA compliance and accurate reporting.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base">IT Support Technician | NPB Technologies — Calgary, AB | Sep 2024 – Mar 2025</h3>
              <ul className="list-disc list-inside ml-2 space-y-1 mt-2">
                <li>Delivered onsite and remote technical support via phone, email, and remote access tools.</li>
                <li>Installed and configured operating systems and enterprise applications.</li>
                <li>Diagnosed software and connectivity issues; logged and tracked tickets using service management systems.</li>
                <li>Assisted users with account setup, password resets, and troubleshooting system access issues.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base">Helpdesk Support Analyst | Net Vision IT Solutions — India | Jul 2022 – Apr 2023</h3>
              <ul className="list-disc list-inside ml-2 space-y-1 mt-2">
                <li>Provided Level 1 technical support for desktops and business applications.</li>
                <li>Performed software installation, troubleshooting, and user training.</li>
                <li>Created technical documentation and knowledge base articles to improve service efficiency.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
