export default function Education() {
  return (
    <div id="education" className="bg-white text-slate-900 min-h-screen py-12 scroll-mt-24">
      <main className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12">Education</h1>
        
        <section className="space-y-6 text-slate-600 mb-12">
          <h2 className="text-3xl font-bold text-blue-600">Diploma in Software Development</h2>
          <p><strong>Southern Alberta Institute of Technology (SAIT)</strong> | Calgary | Completed: Aug 2024 | GPA: 3.5</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li><strong>Object-Oriented Programming:</strong> Mastering Java and C# for robust application development.</li>
            <li><strong>Web Development:</strong> Building responsive front-ends with HTML, CSS, and JavaScript, and dynamic back-ends with Node.js.</li>
            <li><strong>Database Systems:</strong> Designing relational databases and writing complex SQL queries for data management.</li>
            <li><strong>Software Engineering:</strong> Applying Agile and Scrum methodologies for efficient project lifecycle management.</li>
            <li><strong>Mobile Development:</strong> Creating cross-platform mobile applications using modern frameworks.</li>
            <li><strong>Data Structures & Algorithms:</strong> Optimizing code performance and solving complex computational problems.</li>
            <li><strong>Networking & Security:</strong> Understanding core networking protocols and implementing security best practices.</li>
          </ul>
        </section>

        <section className="space-y-6 text-slate-600 mb-12">
          <h2 className="text-3xl font-bold text-blue-600">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Google AI Essentials</h3>
              <p className="text-sm font-semibold text-slate-500 mb-2">Google / Coursera</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>AI Fundamentals: Understanding generative AI, large language models, and their real-world applications.</li>
                <li>Prompt Engineering: Mastering techniques to craft effective prompts for various AI tools.</li>
                <li>Responsible AI: Implementing ethical AI practices and identifying potential biases.</li>
                <li>Productivity Enhancement: Using AI to automate tasks, summarize information, and generate creative content.</li>
                <li>Data Analysis with AI: Leveraging AI tools to interpret data and gain actionable insights.</li>
              </ul>
            </div>
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Microsoft SQL Server</h3>
              <p className="text-sm font-semibold text-slate-500 mb-2">Coursera</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>T-SQL Mastery: Writing and optimizing complex queries, stored procedures, and triggers.</li>
                <li>Database Design: Implementing normalized relational schemas for data integrity.</li>
                <li>Performance Tuning: Analyzing execution plans and implementing indexing strategies.</li>
                <li>Administration: Managing database security, backup, and recovery operations.</li>
                <li>Business Intelligence: Integrating SQL Server with BI tools for advanced reporting.</li>
              </ul>
            </div>
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Microsoft Power BI Data Analyst</h3>
              <p className="text-sm font-semibold text-slate-500 mb-2">Coursera</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Data Preparation: Cleaning and transforming raw data using Power Query.</li>
                <li>Data Modeling: Designing efficient data models and implementing DAX expressions.</li>
                <li>Visualization: Creating interactive dashboards and reports for business insights.</li>
                <li>Service Management: Deploying and sharing reports within the Power BI Service.</li>
                <li>Data Analysis: Identifying trends and patterns to drive data-informed decisions.</li>
              </ul>
            </div>
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Google IT Support</h3>
              <p className="text-sm font-semibold text-slate-500 mb-2">Coursera</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Technical Support: Troubleshooting hardware, software, and networking issues.</li>
                <li>Networking: Understanding TCP/IP, DNS, and DHCP protocols.</li>
                <li>Operating Systems: Managing Windows and Linux environments as a power user.</li>
                <li>System Administration: Implementing IT infrastructure services and automation.</li>
                <li>Security: Protecting systems against digital threats and implementing defense strategies.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
