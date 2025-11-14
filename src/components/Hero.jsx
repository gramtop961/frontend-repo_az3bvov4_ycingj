import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0e13] text-white">
      {/* Spline scene (shield). We keep the original background and shift hue to cyan by default */}
      <div className="absolute inset-0" style={{ filter: 'hue-rotate(170deg) saturate(120%) contrast(105%)' }}>
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle radial atmosphere from the previous design */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(120,119,198,0.25)_0%,rgba(16,23,41,0.7)_60%,#0b0e13_100%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="max-w-2xl">
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
