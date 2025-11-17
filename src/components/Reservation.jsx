import { useState } from 'react'

export default function Reservation() {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: 2 })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // Frontend only demo — would post to backend in real app
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Reservation request sent. We will confirm by email.')
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="reserve" className="py-20 bg-rose-50/50">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Reserve a Table</h2>
          <p className="mt-3 text-gray-600">We offer limited seating to keep the experience relaxed. Book ahead to secure your spot.</p>
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li>• Open Tue–Sun · 5:00–10:30 PM</li>
            <li>• Walk-ins welcome at the bar</li>
            <li>• Private dining available upon request</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm grid grid-cols-2 gap-4">
          <input name="name" required value={form.name} onChange={handleChange} placeholder="Full name" className="col-span-2 rounded-md border border-rose-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="Email" className="col-span-2 sm:col-span-1 rounded-md border border-rose-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="date" type="date" required value={form.date} onChange={handleChange} className="col-span-1 rounded-md border border-rose-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <input name="time" type="time" required value={form.time} onChange={handleChange} className="col-span-1 rounded-md border border-rose-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <select name="guests" value={form.guests} onChange={handleChange} className="col-span-2 sm:col-span-1 rounded-md border border-rose-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400">
            {Array.from({ length: 8 }, (_, i) => i + 1).map(n => <option key={n} value={n}>{n} guest{n>1?'s':''}</option>)}
          </select>
          <button className="col-span-2 inline-flex items-center justify-center rounded-md bg-rose-500 text-white px-4 py-2 font-semibold hover:bg-rose-600 transition-colors">
            Book now
          </button>
          {status && <p className="col-span-2 text-sm text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
