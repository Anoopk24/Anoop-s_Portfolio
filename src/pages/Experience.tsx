export default function Experience() {
  return (
    <div id="experience" className="bg-white text-slate-900 min-h-screen py-12 scroll-mt-24">
      <main className="container-width section-padding">
        <h1 className="heading-lg mb-16">Work Experience</h1>
        
        {/* Projects Section */}
        <section className="mb-32">
          <h2 className="text-2xl font-display font-bold text-primary mb-8 uppercase tracking-widest">Featured Projects</h2>
          <div className="card-hover !p-12 bg-gradient-to-br from-white to-blue-50/30 border-blue-100">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-display font-bold mb-6 text-slate-900">Building the Future, One Line at a Time.</h3>
              <p className="text-lg text-secondary leading-relaxed mb-8">
                I am currently in the laboratory, crafting some high-impact full-stack applications that bridge the gap between complex IT infrastructure and elegant user experiences. 
              </p>
              <div className="flex items-center gap-4 text-primary font-semibold">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                Exciting projects are currently under development. Stay tuned!
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-32">
          <div className="border-l-2 border-slate-100 pl-8 ml-4 space-y-16">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg"></div>
              <h3 className="text-2xl font-display font-bold">IT Field Support Technician</h3>
              <p className="text-primary font-medium mt-1">April 2025 – Present</p>
              <p className="text-secondary font-medium">Four Points by Sheraton — Calgary, AB, Canada</p>
              <ul className="list-disc list-outside mt-6 text-slate-600 space-y-3 ml-4">
                <li>Provide onsite deskside support, resolving hardware, software, and network connectivity issues.</li>
                <li>Install, configure, and troubleshoot desktops, laptops, printers, and peripherals.</li>
                <li>Support Microsoft 365 applications; validate resolutions through testing and user confirmation.</li>
                <li>Maintain IT asset inventory and assist with lifecycle management.</li>
                <li>Document incidents and service requests to ensure SLA compliance and accurate reporting.</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg"></div>
              <h3 className="text-2xl font-display font-bold">IT Support Technician</h3>
              <p className="text-primary font-medium mt-1">Sep 2024 – Mar 2025</p>
              <p className="text-secondary font-medium">NPB Technologies — Calgary, AB, Canada</p>
              <ul className="list-disc list-outside mt-6 text-slate-600 space-y-3 ml-4">
                <li>Delivered onsite and remote technical support via phone, email, and remote access tools.</li>
                <li>Installed and configured operating systems and enterprise applications.</li>
                <li>Diagnosed software and connectivity issues; logged and tracked tickets using service management systems.</li>
                <li>Assisted users with account setup, password resets, and troubleshooting system access issues.</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg"></div>
              <h3 className="text-2xl font-display font-bold">Helpdesk Support Analyst</h3>
              <p className="text-primary font-medium mt-1">July 2022 – Apr 2023</p>
              <p className="text-secondary font-medium">Net Vision IT Solutions — Ludhiana, PB, India</p>
              <ul className="list-disc list-outside mt-6 text-slate-600 space-y-3 ml-4">
                <li>Provided Level 1 technical support for desktops and business applications.</li>
                <li>Performed software installation, troubleshooting, and user training.</li>
                <li>Created technical documentation and knowledge base articles to improve service efficiency.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skill Matrix */}
        <section>
          <h2 className="heading-lg mb-12">Skill Matrix</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover">
              <h3 className="text-xl font-display font-bold mb-4 text-primary">Productivity Tools</h3>
              <ul className="text-slate-600 space-y-2">
                <li>Microsoft 365</li>
                <li>Microsoft Office Suite</li>
                <li>Microsoft Excel</li>
              </ul>
            </div>
            <div className="card-hover">
              <h3 className="text-xl font-display font-bold mb-4 text-primary">IT Support</h3>
              <ul className="text-slate-600 space-y-2">
                <li>Deskside Support</li>
                <li>Helpdesk Support</li>
                <li>Incident Management</li>
                <li>Ticketing Systems</li>
                <li>Remote Support Tools</li>
                <li>Active Directory (basic)</li>
                <li>User Account Management</li>
              </ul>
            </div>
            <div className="card-hover">
              <h3 className="text-xl font-display font-bold mb-4 text-primary">Hardware</h3>
              <ul className="text-slate-600 space-y-2">
                <li>Desktop & Laptop Troubleshooting</li>
                <li>Printer & Peripheral Support</li>
                <li>Hardware Installation & Configuration</li>
              </ul>
            </div>
            <div className="card-hover">
              <h3 className="text-xl font-display font-bold mb-4 text-primary">Networking</h3>
              <ul className="text-slate-600 space-y-2">
                <li>Basic Networking</li>
                <li>TCP/IP</li>
                <li>DNS</li>
                <li>DHCP</li>
                <li>Connectivity Troubleshooting</li>
              </ul>
            </div>
            <div className="card-hover">
              <h3 className="text-xl font-display font-bold mb-4 text-primary">Database & Data</h3>
              <ul className="text-slate-600 space-y-2">
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
            <div className="card-hover">
              <h3 className="text-xl font-display font-bold mb-4 text-primary">Programming</h3>
              <ul className="text-slate-600 space-y-2">
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
