export default function About() {
  return (
    <section id="about" className="bg-[#0b0e13] text-slate-300 py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">About Syntric</h2>
          <p className="mt-4">Syntric designs, secures, and operates critical infrastructure — from structured cabling and datacenter core layers to secure cloud collaboration. We combine rigorous engineering with a trust-first mindset to help organizations move fast without compromising safety.</p>
          <p className="mt-4">Our mission is to deliver resilient networks and cybersecurity programs aligned to ISO 27001, NIST, CIS, and MITRE ATT&CK — turning best practices into daily operations. We partner with leading vendors and tailor architectures to your scale, whether an industrial site, a regional datacenter, or a growing SME.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-3">
          <div className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" /><p>Dark, modern aesthetic focused on clarity and trust</p></div>
          <div className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" /><p>End-to-end delivery: cable to cloud</p></div>
          <div className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /><p>Security embedded in every layer</p></div>
          <div className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" /><p>Operational excellence with measurable outcomes</p></div>
        </div>
      </div>
    </section>
  )
}
