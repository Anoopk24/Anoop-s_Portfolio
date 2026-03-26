export default function Footer() {
  return (
    <footer className="border-t border-slate-200 p-8 text-center text-slate-600">
      <p>&copy; {new Date().getFullYear()} Anoop Kaur. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://www.linkedin.com/in/anoop-kaur-48bb89278/" target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
        <a href="https://github.com/Anoopk24" target="_blank" rel="noreferrer" className="hover:text-blue-600">GitHub</a>
        <a href="mailto:anoopkaur444@gmail.com" className="hover:text-blue-600">Email</a>
      </div>
    </footer>
  );
}
