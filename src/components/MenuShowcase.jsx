const items = [
  { name: 'Heirloom Tomato Salad', tag: 'starter', price: 12, desc: 'Basil oil, whipped ricotta, pickled shallots' },
  { name: 'Charred Octopus', tag: 'starter', price: 16, desc: 'Smoked paprika, lemon, olives' },
  { name: 'Seared Sea Bass', tag: 'mains', price: 28, desc: 'Fennel, citrus beurre blanc, chive' },
  { name: 'Herb Roasted Chicken', tag: 'mains', price: 24, desc: 'Root vegetables, thyme jus' },
  { name: 'Raspberry Panna Cotta', tag: 'dessert', price: 10, desc: 'Vanilla bean, rose syrup' },
]

export default function MenuShowcase() {
  return (
    <section id="menu" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Menu Highlights</h2>
          <p className="mt-2 text-gray-600">Light, bright, and seasonal. Updated weekly.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.name} className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="uppercase tracking-wide text-[10px] font-semibold text-rose-500">{it.tag}</p>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900">{it.name}</h3>
                </div>
                <span className="text-rose-600 font-bold">${it.price}</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
