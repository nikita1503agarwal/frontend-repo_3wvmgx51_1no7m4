import { Leaf, Flame, Wine, Salad } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'Seasonal Produce',
    desc: 'We highlight the best ingredients of each season in bright, balanced dishes.'
  },
  {
    icon: Flame,
    title: 'Open Fire',
    desc: 'Smoked, charred, and kissed by flame for depth and character.'
  },
  {
    icon: Wine,
    title: 'Curated Wines',
    desc: 'A thoughtful wine list with natural and classic selections.'
  },
  {
    icon: Salad,
    title: 'Light & Clean',
    desc: 'A light red palette and minimalist plating for a modern feel.'
  }
]

export default function Features() {
  return (
    <section id="about" className="py-20 bg-rose-50/50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
