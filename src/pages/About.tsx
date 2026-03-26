import { PROFILE_IMAGE_URL } from '../constants';

export default function About() {
  return (
    <div id="about" className="bg-white text-slate-900 min-h-screen py-12 scroll-mt-24">
      <main className="container-width section-padding">
        <h1 className="heading-lg mb-16">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-20 items-center mb-20">
          <div className="space-y-8 text-lg text-secondary leading-relaxed">
            <h2 className="text-3xl font-display font-bold text-primary">My Journey</h2>
            <p>
              My technical foundation was built at SAIT, where I immersed myself in the <span className="text-slate-900 font-semibold">Software Development</span> diploma. College was where I first discovered the power of code to solve real-world problems.
            </p>
            <p>
              After graduating in 2024, I stepped into the fast-paced world of IT support. Working with Net Vision IT Solutions and NPB Technologies, I was on the front lines—resolving critical infrastructure issues and supporting enterprise systems.
            </p>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-72 h-72 rounded-full bg-slate-100 border-8 border-white overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-3">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Anoop Kaur" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <section className="space-y-12 text-secondary leading-relaxed">
          <p className="text-xl">
            Currently, as an IT Field Support Technician at Four Points by Sheraton, I bridge the gap between technical maintenance and operational efficiency. I am open to global opportunities where I can apply my skills in <span className="text-slate-900 font-semibold">Software Engineering</span> and automation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-hover">
              <h3 className="text-xl font-display font-bold text-primary mb-6">Future Goals</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">01</span>
                  <span>Mastering Advanced Software Architecture for enterprise solutions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">02</span>
                  <span>Building scalable full-stack applications and microservices.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">03</span>
                  <span>Becoming a Senior Software Engineer focusing on cloud-native development.</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center p-12 bg-slate-100 rounded-3xl text-center">
              <p className="text-slate-900 font-display font-bold text-2xl mb-6">Explore my work</p>
              <a 
                href="https://github.com/Anoopk24" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
