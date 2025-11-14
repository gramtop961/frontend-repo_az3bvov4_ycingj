export default function Vendors() {
  const logos = [
    { name: 'Cisco' },
    { name: 'Aruba' },
    { name: 'Microsoft' },
    { name: 'Palo Alto' },
    { name: 'Fortinet' },
    { name: 'Juniper' },
    { name: 'HPE' },
  ]

  return (
    <section id="vendors" className="bg-[#0b0e13] text-slate-400 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6">
          <h2 className="text-sm uppercase tracking-widest text-slate-500">Trusted Technology Partners</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
          {logos.map(({ name }) => (
            <div key={name} className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 h-16 text-slate-300">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
