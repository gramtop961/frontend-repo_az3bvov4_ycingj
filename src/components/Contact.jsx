import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const name = e.target.name.value
      const email = e.target.email.value
      const message = e.target.message.value
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! We will get back to you shortly.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please email info@syntric-solutions.com')
    }
  }

  return (
    <section id="contact" className="bg-[#0b0e13] text-slate-300 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Let’s secure your environment</h2>
            <p className="mt-4">Tell us about your current challenges. Our team will respond within one business day.</p>
            <div className="mt-6 text-sm">
              <p>Domain: syntric-solutions.com</p>
              <p>Email: info@syntric-solutions.com</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input name="name" required className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-purple-500" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input name="email" type="email" required className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-purple-500" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea name="message" rows="4" required className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-purple-500" />
            </div>
            <button type="submit" className="rounded-lg bg-gradient-to-r from-purple-600 to-emerald-500 px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition">Send Message</button>
            {status && <p className="text-xs text-slate-400">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
