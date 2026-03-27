import { GraduationCap, Award, BookOpen, Cpu, Database, BarChart3, ShieldCheck, BrainCircuit } from 'lucide-react';

export default function Education() {
  return (
    <div id="education" className="bg-mesh-green text-slate-900 min-h-screen py-12 scroll-mt-24 relative overflow-hidden">
      {/* Merge Gradient from previous section */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#fffaf5] to-transparent z-20 pointer-events-none"></div>
      
      {/* Pattern Merge from previous section (Experience: bg-diagonal-pattern) */}
      <div className="absolute top-0 left-0 w-full h-64 bg-diagonal-pattern opacity-15 [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none z-10"></div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30 pointer-events-none"></div>
      
      <main className="container-width section-padding relative z-10">
        <h1 className="heading-lg mb-16 flex items-center gap-4">
          <span className="w-12 h-1 bg-primary rounded-full"></span>
          Education
        </h1>
        
        <section className="mb-24">
          <div className="card-hover !p-12 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap size={120} />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-display font-bold text-primary mb-4 flex items-center gap-3">
                <BookOpen className="text-primary" />
                Diploma in Software Development
              </h2>
              <p className="text-lg font-medium text-slate-700 mb-8">
                Southern Alberta Institute of Technology (SAIT) | Calgary | Completed: Aug 2024 | GPA: 3.5
              </p>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                <ul className="list-disc list-outside text-slate-600 space-y-2 ml-4">
                  <li><strong>Object-Oriented Programming:</strong> Java and C# for robust application development.</li>
                  <li><strong>Web Development:</strong> Responsive front-ends with HTML, CSS, JS, and Node.js back-ends.</li>
                  <li><strong>Database Systems:</strong> Relational database design and complex SQL queries.</li>
                  <li><strong>Software Engineering:</strong> Agile and Scrum methodologies for project lifecycle.</li>
                </ul>
                <ul className="list-disc list-outside text-slate-600 space-y-2 ml-4">
                  <li><strong>Mobile Development:</strong> Cross-platform mobile applications using modern frameworks.</li>
                  <li><strong>Data Structures & Algorithms:</strong> Optimizing code performance and computational problems.</li>
                  <li><strong>Networking & Security:</strong> Core networking protocols and security best practices.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="heading-lg mb-12 flex items-center gap-4">
            <Award className="text-primary" />
            Professional Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-hover group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Google AI Essentials</h3>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Google / Coursera</p>
              <ul className="list-disc list-outside text-sm text-slate-600 space-y-2 ml-4">
                <li>AI Fundamentals: Generative AI, LLMs, and real-world applications.</li>
                <li>Prompt Engineering: Mastering techniques for effective AI tool usage.</li>
                <li>Responsible AI: Ethical practices and identifying potential biases.</li>
                <li>Productivity Enhancement: Automating tasks and generating creative content.</li>
                <li>Data Analysis with AI: Leveraging AI tools for actionable insights.</li>
              </ul>
            </div>
            <div className="card-hover group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Microsoft SQL Server</h3>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Coursera</p>
              <ul className="list-disc list-outside text-sm text-slate-600 space-y-2 ml-4">
                <li>T-SQL Mastery: Writing and optimizing complex queries and stored procedures.</li>
                <li>Database Design: Implementing normalized relational schemas for integrity.</li>
                <li>Performance Tuning: Analyzing execution plans and indexing strategies.</li>
                <li>Administration: Managing database security, backup, and recovery.</li>
                <li>Business Intelligence: Integrating SQL Server with BI tools for reporting.</li>
              </ul>
            </div>
            <div className="card-hover group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Microsoft Power BI Data Analyst</h3>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Coursera</p>
              <ul className="list-disc list-outside text-sm text-slate-600 space-y-2 ml-4">
                <li>Data Preparation: Cleaning and transforming raw data using Power Query.</li>
                <li>Data Modeling: Designing efficient data models and DAX expressions.</li>
                <li>Visualization: Creating interactive dashboards and reports for insights.</li>
                <li>Service Management: Deploying and sharing reports within Power BI Service.</li>
                <li>Data Analysis: Identifying trends and patterns to drive decisions.</li>
              </ul>
            </div>
            <div className="card-hover group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Google IT Support</h3>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Coursera</p>
              <ul className="list-disc list-outside text-sm text-slate-600 space-y-2 ml-4">
                <li>Technical Support: Troubleshooting hardware, software, and networking.</li>
                <li>Networking: Understanding TCP/IP, DNS, and DHCP protocols.</li>
                <li>Operating Systems: Managing Windows and Linux environments.</li>
                <li>System Administration: Implementing IT infrastructure and automation.</li>
                <li>Security: Protecting systems against digital threats and defense strategies.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
