import { Briefcase, Code2, Cpu, Globe, Database, Terminal, Layers, Box, Cloud, FileText, Table, Monitor, Headphones, AlertCircle, Network, Code, Atom, ShieldCheck } from 'lucide-react';

export default function Experience() {
  return (
    <div id="experience" className="bg-mesh-orange text-slate-900 min-h-screen py-12 scroll-mt-24 relative overflow-hidden">
      {/* Merge Gradient from previous section */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#f8fafc] to-transparent z-20 pointer-events-none"></div>
      
      {/* Pattern Merge from previous section (Home: bg-dot-pattern) */}
      <div className="absolute top-0 left-0 w-full h-64 bg-dot-pattern opacity-15 [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none z-10"></div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-diagonal-pattern opacity-30 pointer-events-none"></div>
      
      <main className="container-width section-padding relative z-10">
        <h1 className="heading-lg mb-16 flex items-center gap-4">
          <span className="w-12 h-1 bg-primary rounded-full"></span>
          Work Experience
        </h1>
        
        {/* Projects Section */}
        <section className="mb-32">
          <h2 className="text-2xl font-display font-bold text-primary mb-8 uppercase tracking-widest flex items-center gap-3">
            <Box className="text-primary" />
            Featured Projects
          </h2>
          <div className="card-hover !p-12 bg-gradient-to-br from-white to-blue-50/30 border-blue-100 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Code2 size={120} />
            </div>
            <div className="max-w-2xl relative z-10">
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
            <div className="card-hover group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-primary">Productivity Tools</h3>
              <ul className="text-slate-600 space-y-3">
                <li className="flex items-center gap-2"><Cloud size={16} className="text-primary/60" /> Microsoft 365</li>
                <li className="flex items-center gap-2"><FileText size={16} className="text-primary/60" /> Microsoft Office Suite</li>
                <li className="flex items-center gap-2"><Table size={16} className="text-primary/60" /> Microsoft Excel</li>
              </ul>
            </div>
            <div className="card-hover group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-primary">IT Support</h3>
              <ul className="text-slate-600 space-y-3">
                <li className="flex items-center gap-2"><Monitor size={16} className="text-primary/60" /> Deskside Support</li>
                <li className="flex items-center gap-2"><Headphones size={16} className="text-primary/60" /> Helpdesk Support</li>
                <li className="flex items-center gap-2"><AlertCircle size={16} className="text-primary/60" /> Incident Management</li>
                <li className="flex items-center gap-2"><Terminal size={16} className="text-primary/60" /> Ticketing Systems</li>
              </ul>
            </div>
            <div className="card-hover group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-primary">Hardware</h3>
              <ul className="text-slate-600 space-y-3">
                <li className="flex items-center gap-2"><Monitor size={16} className="text-primary/60" /> Desktop & Laptop Support</li>
                <li className="flex items-center gap-2"><Cpu size={16} className="text-primary/60" /> Hardware Configuration</li>
                <li className="flex items-center gap-2"><Layers size={16} className="text-primary/60" /> Peripheral Support</li>
              </ul>
            </div>
            <div className="card-hover group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-primary">Networking</h3>
              <ul className="text-slate-600 space-y-3">
                <li className="flex items-center gap-2"><Network size={16} className="text-primary/60" /> TCP/IP & DNS</li>
                <li className="flex items-center gap-2"><Globe size={16} className="text-primary/60" /> DHCP & Connectivity</li>
                <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-primary/60" /> Network Security</li>
              </ul>
            </div>
            <div className="card-hover group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-primary">Database & Data</h3>
              <ul className="text-slate-600 space-y-3">
                <li className="flex items-center gap-2"><Database size={16} className="text-primary/60" /> MS SQL Server</li>
                <li className="flex items-center gap-2"><Code size={16} className="text-primary/60" /> T-SQL Optimization</li>
                <li className="flex items-center gap-2"><Layers size={16} className="text-primary/60" /> Database Design</li>
              </ul>
            </div>
            <div className="card-hover group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-primary">Programming</h3>
              <ul className="text-slate-600 space-y-3">
                <li className="flex items-center gap-2"><Code size={16} className="text-primary/60" /> Python & JavaScript</li>
                <li className="flex items-center gap-2"><Atom size={16} className="text-primary/60" /> React.js & Node.js</li>
                <li className="flex items-center gap-2"><Terminal size={16} className="text-primary/60" /> SQL & HTML/CSS</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
