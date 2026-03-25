import { PROFILE_IMAGE_URL } from '../constants';

export default function About() {
  return (
    <div id="about" className="bg-white text-slate-900 min-h-screen scroll-mt-24">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-12">About Me</h1>
        
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2 space-y-6 text-slate-600">
            <h2 className="text-3xl font-bold text-blue-600">My Journey</h2>
            <p>
              My technical foundation was built at SAIT, where I immersed myself in the Software Development diploma. College was where I first discovered the power of code to solve real-world problems, moving from basic logic to complex full-stack applications.
            </p>
            <p>
              After graduating in 2024, I stepped into the fast-paced world of IT support. Working with Net Vision IT Solutions and NPB Technologies, I was on the front lines—resolving critical infrastructure issues and supporting enterprise systems. These roles taught me the importance of reliability and the human side of technology.
            </p>
          </div>
          <div className="relative">
            <div className="w-full aspect-[3/4] rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Anoop Kaur" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <section className="space-y-6 text-slate-600 mb-12">
          <p>
            Currently, as an IT Field Support Technician at Four Points by Sheraton, I bridge the gap between technical maintenance and operational efficiency. While I have deep roots in the local tech scene, I am a remote-first advocate and am open to global opportunities where I can apply my skills in Data Analytics and automation to solve complex challenges at scale.
          </p>
          <p>
            <strong>Future Goals:</strong>
          </p>
          <ul className="list-decimal list-inside ml-4 space-y-2">
            <li>Mastering Advanced Data Architecture to build scalable enterprise solutions.</li>
            <li>Integrating advanced automation into business workflows to automate complex IT operations.</li>
            <li>Becoming a Senior Data Analyst focusing on predictive modeling for the enterprise and tech sectors.</li>
            <li>Contributing to the global tech ecosystem through remote collaboration and mentoring emerging developers.</li>
          </ul>
          <p>
            Check out my code on GitHub: <a href="https://github.com/Anoopk24" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/Anoopk24</a>
          </p>
        </section>
      </main>
    </div>
  );
}
