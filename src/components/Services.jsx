import { Shield, Server, Network, Crosshair } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    key: 'A',
    icon: Server,
    title: 'Infrastructure Setup',
    points: [
      'Structured cabling, rack design, and hardware installation',
      'Secure LAN/WAN configuration',
      'Network segmentation and zoning for risk isolation',
    ],
    gradient: 'from-purple-600/30 to-slate-700/20',
  },
  {
    key: 'B',
    icon: Network,
    title: 'Network & Perimeter Security',
    points: [
      'Firewall deployment and configuration (Cisco, Fortigate, Palo Alto, etc.)',
      'IDS/IPS implementation and VPN hardening',
      'Secure remote access and DNS protection',
    ],
    gradient: 'from-emerald-500/30 to-slate-700/20',
  },
  {
    key: 'C',
    icon: Shield,
    title: 'Endpoint & System Security',
    points: [
      'Server and workstation hardening (Windows/Linux)',
      'Patch management and baseline enforcement',
      'EDR and SIEM integration',
    ],
    gradient: 'from-indigo-500/30 to-slate-700/20',
  },
  {
    key: 'D',
    icon: Crosshair,
    title: 'Vulnerability & Risk Management',
    points: [
      'Comprehensive vulnerability assessments',
      'Threat intelligence integration',
      'Compliance with ISO 27001 / NIST / CIS benchmarks',
      'Executive reporting and remediation support',
    ],
    gradient: 'from-fuchsia-500/30 to-slate-700/20',
  },
]

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export default function Services() {
  const { ref, visible } = useReveal()
  return (
    <section id="services" className="relative bg-[#0b0e13] text-slate-200 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="mb-12">
          <h2 className="text-2xl uppercase tracking-widest text-slate-400">Core Service Pillars</h2>
          <p className="mt-3 text-3xl md:text-4xl font-semibold text-white">End-to-end cybersecurity and infrastructure solutions</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ key, icon: Icon, title, points, gradient }) => (
            <div key={key} className="group relative rounded-xl border border-white/10 bg-white/5 p-6 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-white/10 p-2">
                    <Icon className="text-emerald-400" size={22} />
                  </div>
                  <span className="text-xs text-slate-300 px-2 py-0.5 rounded-full border border-white/10 bg-white/5">{title}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {points.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
