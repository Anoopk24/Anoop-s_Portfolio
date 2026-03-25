export default function Experience() {
  return (
    <div id="experience" className="bg-white text-slate-900 min-h-screen py-12 scroll-mt-24">
      <main className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12">Work Experience</h1>
        
        {/* Timeline */}
        <section className="mb-24">
          <div className="border-l-2 border-slate-200 pl-8 ml-4 space-y-12">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
              <h3 className="text-2xl font-bold">IT Field Support Technician</h3>
              <p className="text-slate-600">April 2025 – Present | Four Points by Sheraton</p>
              <ul className="list-disc list-inside mt-4 text-slate-600 space-y-2">
                <li>Provide onsite deskside support, resolving hardware, software, and network connectivity issues.</li>
                <li>Install, configure, and troubleshoot desktops, laptops, printers, and peripherals.</li>
                <li>Support Microsoft 365 applications; validate resolutions through testing and user confirmation.</li>
                <li>Maintain IT asset inventory and assist with lifecycle management.</li>
                <li>Document incidents and service requests to ensure SLA compliance and accurate reporting.</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
              <h3 className="text-2xl font-bold">IT Support Technician</h3>
              <p className="text-slate-600">Sep 2024 – Mar 2025 | NPB Technologies</p>
              <ul className="list-disc list-inside mt-4 text-slate-600 space-y-2">
                <li>Delivered onsite and remote technical support via phone, email, and remote access tools.</li>
                <li>Installed and configured operating systems and enterprise applications.</li>
                <li>Diagnosed software and connectivity issues; logged and tracked tickets using service management systems.</li>
                <li>Assisted users with account setup, password resets, and troubleshooting system access issues.</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
              <h3 className="text-2xl font-bold">Helpdesk Support Analyst</h3>
              <p className="text-slate-600">July 2022 – Apr 2023 | Net Vision IT Solutions</p>
              <ul className="list-disc list-inside mt-4 text-slate-600 space-y-2">
                <li>Provided Level 1 technical support for desktops and business applications.</li>
                <li>Performed software installation, troubleshooting, and user training.</li>
                <li>Created technical documentation and knowledge base articles to improve service efficiency.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skill Matrix */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Skill Matrix</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4">Productivity Tools</h3>
              <ul className="text-slate-600 space-y-1">
                <li>Microsoft 365</li>
                <li>Microsoft Office Suite</li>
                <li>Microsoft Excel</li>
              </ul>
            </div>
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4">IT Support</h3>
              <ul className="text-slate-600 space-y-1">
                <li>Deskside Support</li>
                <li>Helpdesk Support</li>
                <li>Incident Management</li>
                <li>Ticketing Systems</li>
                <li>Remote Support Tools</li>
                <li>Active Directory (basic)</li>
                <li>User Account Management</li>
              </ul>
            </div>
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4">Hardware</h3>
              <ul className="text-slate-600 space-y-1">
                <li>Desktop & Laptop Troubleshooting</li>
                <li>Printer & Peripheral Support</li>
                <li>Hardware Installation & Configuration</li>
              </ul>
            </div>
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4">Networking</h3>
              <ul className="text-slate-600 space-y-1">
                <li>Basic Networking</li>
                <li>TCP/IP</li>
                <li>DNS</li>
                <li>DHCP</li>
                <li>Connectivity Troubleshooting</li>
              </ul>
            </div>
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4">Database & Data</h3>
              <ul className="text-slate-600 space-y-1">
                <li>Microsoft SQL Server</li>
                <li>T-SQL</li>
                <li>Database Design</li>
                <li>Query Optimization</li>
                <li>Indexing</li>
                <li>Execution Plans</li>
                <li>Backup & Recovery</li>
                <li>Data Normalization</li>
              </ul>
            </div>
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4">Programming</h3>
              <ul className="text-slate-600 space-y-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>SQL</li>
                <li>Node.js</li>
                <li>React.js</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
