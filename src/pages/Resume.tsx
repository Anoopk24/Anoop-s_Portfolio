export default function Resume() {
  return (
    <div className="bg-white text-slate-900 min-h-screen p-8 md:p-16 font-serif">
      <main className="max-w-3xl mx-auto">
        <header className="border-b-2 border-slate-900 pb-4 mb-6">
          <h1 className="text-4xl font-bold">ANOOP KAUR</h1>
          <p className="text-lg">Calgary, AB | 403-690-1494 | anoopkaur444@gmail.com | linkedin.com/in/anoop-kaur-48bb89278</p>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-slate-900 mb-2">Professional Summary</h2>
          <p className="text-sm">
            Detail-oriented IT Support / Deskside Support Technician with 2+ years of experience delivering onsite and remote technical support in hospitality and MSP environments. Strong expertise in Microsoft 365, hardware and software troubleshooting, ticketing systems, and end-user support. Skilled in T-SQL, SQL Server database management, system configuration, and IT service management (ITSM). Recognized for strong problem-solving abilities, customer service excellence, and maintaining high SLA performance in fast-paced environments.
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
          <p className="text-sm">Southern Alberta Institute of Technology (SAIT), Calgary | Completed: Aug 2024 | GPA: 3.5</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-slate-900 mb-2">Certifications</h2>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li><strong>Microsoft SQL Server Professional Certificate – Coursera</strong></li>
            <li><strong>Google IT Support Professional Certificate (Coursera)</strong></li>
            <li><strong>Preparing Data for Analysis with Microsoft Excel – Coursera</strong></li>
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
