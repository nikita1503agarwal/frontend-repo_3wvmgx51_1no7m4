import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4">
          <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
            <span className="inline-flex items-center rounded-full bg-rose-100 text-rose-700 px-3 py-1 text-xs font-semibold ring-1 ring-rose-200 mb-4">
              Modern · Seasonal · Local
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              Taste the Light
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-700">
              A clean and contemporary dining experience inspired by fresh ingredients and crafted flavors.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-rose-500 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-rose-600 transition-colors">
                Explore Menu
              </a>
              <a href="#reserve" className="inline-flex items-center justify-center rounded-full bg-white text-rose-600 ring-1 ring-rose-200 px-6 py-3 text-sm font-semibold hover:bg-rose-50 transition-colors">
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
