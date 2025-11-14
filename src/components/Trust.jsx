export default function Trust() {
  return (
    <section id="trust" className="bg-[#0b0e13] text-slate-300 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Built on industry standards</h2>
            <p className="mt-4">Our frameworks align to ISO 27001, NIST CSF, CIS Benchmarks, and the MITRE ATT&CK knowledge base. We harden systems, reduce attack surface, and provide continuous monitoring to keep you resilient.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['ISO 27001','NIST','CIS','MITRE ATT&CK'].map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{chip}</span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-3 text-sm">
              {[
                'Security Architecture Reviews',
                'Zero Trust Network Segmentation',
                'EDR/SIEM Integrations',
                'Incident Response Runbooks',
                'Executive Risk Reporting',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
