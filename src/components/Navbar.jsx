import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-purple-500 to-emerald-400" />
            <span className="text-sm tracking-widest text-slate-300">S Y N T R I C</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300 pr-6">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#trust" className="hover:text-white transition">Trust</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="mailto:info@syntric-solutions.com" className="rounded-lg bg-gradient-to-r from-purple-600 to-emerald-500 px-4 py-2 text-white font-medium shadow hover:opacity-90 transition">Get a Quote</a>
          </nav>
          <button className="md:hidden p-3 text-slate-300">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
