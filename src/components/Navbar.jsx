import { useState } from 'react'
import { Menu as MenuIcon, X, UtensilsCrossed } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#menu', label: 'Menu' },
    { href: '#about', label: 'About' },
    { href: '#reserve', label: 'Reservations' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="backdrop-blur-xl bg-white/60 border-b border-rose-100/60">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <UtensilsCrossed size={18} />
              </span>
              <span className="font-semibold text-gray-900">Lumina Bistro</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#reserve" className="inline-flex items-center rounded-full bg-rose-500 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-rose-600 transition-colors">
                Book a Table
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-rose-50"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-rose-100">
            <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-rose-50 hover:text-rose-600"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#reserve"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-md bg-rose-500 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-rose-600"
              >
                Book a Table
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
