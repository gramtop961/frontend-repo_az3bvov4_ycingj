import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Trust from './components/Trust'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0e13]">
      <Navbar />
      <Hero />
      <Services />
      <Trust />
      <Contact />
      <footer className="bg-[#0b0e13] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-slate-400 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Syntric — syntric-solutions.com</p>
          <a href="mailto:info@syntric-solutions.com" className="hover:text-white transition">info@syntric-solutions.com</a>
        </div>
      </footer>
    </div>
  )
}

export default App
