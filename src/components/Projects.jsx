export default function Projects() {
  return (
    <section id="projects" className="bg-[#0b0e13] text-slate-300 py-24">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Our Projects</h2>
          <p className="mt-2 text-slate-400">Selected engagements that blend resilient networking with advanced cybersecurity.</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-semibold text-white">Datacenter and Industrial Infrastructure at Syntric</h3>
          <p className="mt-4">We specialize in designing and deploying fully redundant datacenter networks built for reliability, security, and performance. One of our flagship projects involved a mission-critical datacenter developed for the remote monitoring and control of electrical systems across multiple sites. Our engineers implemented:</p>
          <ul className="mt-4 space-y-2">
            <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />Redundant core and distribution layers with automatic failover detection and route convergence mechanisms to ensure uninterrupted operations.</li>
            <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />Secure connectivity using encrypted VPN tunnels and layered access control, protecting data in transit and ensuring operational integrity.</li>
            <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />Integration of 4G/LTE, licensed radio, and private wireless links, providing resilient communication channels even in remote or industrial environments.</li>
            <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />Continuous cyber monitoring and intrusion detection systems, ensuring that all traffic, from control signals to telemetry data, remained tamper-proof and compliant with strict security standards.</li>
          </ul>
          <p className="mt-4">This project highlights Syntric’s ability to blend networking resilience with advanced cybersecurity, delivering infrastructure capable of operating autonomously and securely under demanding industrial conditions.</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-semibold text-white">Business Networks for SMEs</h3>
          <p className="mt-4">Syntric provides end-to-end IT infrastructure solutions tailored for small and medium-sized businesses—empowering them with enterprise-grade reliability at an accessible scale. Our deployments include:</p>
          <ul className="mt-4 space-y-2">
            <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />Structured cabling and intelligent switching architectures to optimize network performance and scalability.</li>
            <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />Wireless access point setups with seamless coverage, guest management, and role-based access policies.</li>
            <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />Access control and surveillance systems integrated directly into the network backbone for centralized security management.</li>
            <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />Cloud integration services for Microsoft 365, Google Workspace, and other SaaS platforms—enabling smooth collaboration, automated backups, and identity synchronization.</li>
            <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />Ongoing security monitoring and patch management to protect business data and maintain uptime.</li>
          </ul>
          <p className="mt-4">Through these solutions, Syntric transforms traditional offices into connected, secure, and efficient digital workplaces.</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-semibold text-white">Internet of Things (IoT) Solutions</h3>
          <p className="mt-4">Our IoT projects bridge the gap between devices, data, and decision-making. Syntric designs and secures networks that connect sensors, controllers, and applications with precision and resilience. Key capabilities include:</p>
          <ul className="mt-4 space-y-2">
            <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />IoT gateway design with multi-protocol support (MQTT, Modbus, REST APIs).</li>
            <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />Edge computing implementations for real-time processing and reduced cloud dependency.</li>
            <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />Encrypted communications and device authentication frameworks to protect IoT ecosystems from cyber threats.</li>
            <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />Integration with cloud dashboards for live analytics, remote control, and predictive maintenance.</li>
            <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />Use of cellular, LoRa, and Wi-Fi connectivity tailored to environmental and operational needs.</li>
          </ul>
          <p className="mt-4">Our IoT infrastructure expertise enables clients to monitor, automate, and optimize everything from industrial operations to smart facilities—securely and efficiently.</p>
        </div>
      </div>
    </section>
  )
}
