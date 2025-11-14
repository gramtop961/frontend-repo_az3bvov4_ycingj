import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const bgRef = useRef(null)
  const contentRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const y = window.scrollY || 0
      const parallax = Math.min(y * 0.15, 120)
      const contentShift = Math.min(y * 0.08, 60)
      if (bgRef.current) bgRef.current.style.transform = `translateY(${parallax}px) scale(1.02)`
      if (contentRef.current) contentRef.current.style.transform = `translateY(${contentShift * -1}px)`
      const opacityClamp = Math.max(0, 1 - y / 600)
      if (contentRef.current) contentRef.current.style.opacity = String(opacityClamp)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = (e) => {
    if (!bgRef.current) return
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth - 0.5) * 6
    const y = (e.clientY / innerHeight - 0.5) * 6
    bgRef.current.style.transform += ` translate(${x}px, ${y}px)`
  }

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0e13] text-white" onMouseMove={handleMouseMove}>
      {/* Spline scene (shield). Parallax layer; we keep only shield tinted via filter */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ filter: 'hue-rotate(170deg) saturate(120%) contrast(105%)' }}>
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle radial atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(120,119,198,0.25)_0%,rgba(16,23,41,0.7)_60%,#0b0e13_100%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div ref={contentRef} className={`max-w-2xl transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300/90">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Enterprise-grade security & infrastructure
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            From Cable to Cloud — Building Secure Infrastructure
          </h1>
          <p className="mt-6 text-slate-300 max-w-xl">
            Syntric delivers end-to-end protection across your network, endpoints, and cloud — built on industry frameworks like ISO 27001, NIST, CIS, and MITRE ATT&CK.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-3 text-sm font-medium shadow hover:opacity-90 transition">Engage Our Team</a>
            <a href="#services" className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 transition">Explore Services</a>
          </div>
        </div>
      </div>
    </section>
  )
}
