import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    title: 'Datacenter and Industrial Infrastructure at Syntric',
    paragraphs: [
      'We specialize in designing and deploying fully redundant datacenter networks built for reliability, security, and performance. One of our flagship projects involved a mission-critical datacenter developed for the remote monitoring and control of electrical systems across multiple sites. Our engineers implemented:',
    ],
    bullets: [
      'Redundant core and distribution layers with automatic failover detection and route convergence mechanisms to ensure uninterrupted operations.',
      'Secure connectivity using encrypted VPN tunnels and layered access control, protecting data in transit and ensuring operational integrity.',
      'Integration of 4G/LTE, licensed radio, and private wireless links, providing resilient communication channels even in remote or industrial environments.',
      'Continuous cyber monitoring and intrusion detection systems, ensuring that all traffic, from control signals to telemetry data, remained tamper-proof and compliant with strict security standards.',
    ],
    outro:
      "This project highlights Syntric’s ability to blend networking resilience with advanced cybersecurity, delivering infrastructure capable of operating autonomously and securely under demanding industrial conditions.",
  },
  {
    title: 'Business Networks for SMEs',
    paragraphs: [
      'Syntric provides end-to-end IT infrastructure solutions tailored for small and medium-sized businesses—empowering them with enterprise-grade reliability at an accessible scale. Our deployments include:',
    ],
    bullets: [
      'Structured cabling and intelligent switching architectures to optimize network performance and scalability.',
      'Wireless access point setups with seamless coverage, guest management, and role-based access policies.',
      'Access control and surveillance systems integrated directly into the network backbone for centralized security management.',
      'Cloud integration services for Microsoft 365, Google Workspace, and other SaaS platforms—enabling smooth collaboration, automated backups, and identity synchronization.',
      'Ongoing security monitoring and patch management to protect business data and maintain uptime.',
    ],
    outro:
      'Through these solutions, Syntric transforms traditional offices into connected, secure, and efficient digital workplaces.',
  },
  {
    title: 'Internet of Things (IoT) Solutions',
    paragraphs: [
      'Our IoT projects bridge the gap between devices, data, and decision-making. Syntric designs and secures networks that connect sensors, controllers, and applications with precision and resilience. Key capabilities include:',
    ],
    bullets: [
      'IoT gateway design with multi-protocol support (MQTT, Modbus, REST APIs).',
      'Edge computing implementations for real-time processing and reduced cloud dependency.',
      'Encrypted communications and device authentication frameworks to protect IoT ecosystems from cyber threats.',
      'Integration with cloud dashboards for live analytics, remote control, and predictive maintenance.',
      'Use of cellular, LoRa, and Wi-Fi connectivity tailored to environmental and operational needs.',
    ],
    outro:
      'Our IoT infrastructure expertise enables clients to monitor, automate, and optimize everything from industrial operations to smart facilities—securely and efficiently.',
  },
]

function useInView() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setVisible(true), obs.unobserve(el))),
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export default function Projects() {
  const { ref, visible } = useInView()
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.style.transform = `translateX(${-index * 100}%)`
  }, [index])

  const next = () => setIndex((i) => Math.min(i + 1, projects.length - 1))
  const prev = () => setIndex((i) => Math.max(i - 1, 0))

  return (
    <section id="projects" className="bg-[#0b0e13] text-slate-300 py-24">
      <div className={`mx-auto max-w-7xl px-6 space-y-12 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`} ref={ref}>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Our Projects</h2>
            <p className="mt-2 text-slate-400">Selected engagements that blend resilient networking with advanced cybersecurity.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={prev} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">Prev</button>
            <button onClick={next} className="rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 px-3 py-2 text-sm text-white hover:opacity-90">Next</button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/10">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ width: `${projects.length * 100}%` }}
          >
            {projects.map((p, i) => (
              <article key={i} className="w-full md:w-[calc(100%)] flex-shrink-0 bg-white/5 p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
                {p.paragraphs.map((pa, idx) => (
                  <p key={idx} className="mt-4">{pa}</p>
                ))}
                <ul className="mt-4 space-y-2">
                  {p.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />{b}</li>
                  ))}
                </ul>
                <p className="mt-4">{p.outro}</p>
              </article>
            ))}
          </div>

          {/* mobile controls overlay */}
          <div className="md:hidden absolute bottom-3 right-3 flex gap-2">
            <button onClick={prev} className="rounded-lg border border-white/10 bg-white/10 backdrop-blur px-3 py-2 text-xs">Prev</button>
            <button onClick={next} className="rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 px-3 py-2 text-xs text-white">Next</button>
          </div>

          {/* dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-3 bg-white/40'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
