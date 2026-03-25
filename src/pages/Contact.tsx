export default function Contact() {
  return (
    <div id="contact" className="bg-white text-slate-900 min-h-screen py-12 scroll-mt-24">
      <main className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12">Contact Me</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <section className="space-y-6 text-slate-600">
            <h2 className="text-3xl font-bold text-blue-600">Let's build something impactful.</h2>
            <p>
              Whether you're looking to optimize your IT infrastructure or transform your data into insights, I'm ready to help.
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> anoopkaur444@gmail.com</p>
              <p><strong>Phone:</strong> 403-690-1494</p>
              <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/anoop-kaur-48bb89278" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/anoop-kaur-48bb89278</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/Anoopk24" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/Anoopk24</a></p>
            </div>
          </section>

          <section className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">Send Message</button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
