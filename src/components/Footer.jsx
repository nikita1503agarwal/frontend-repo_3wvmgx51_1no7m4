export default function Footer() {
  return (
    <footer id="contact" className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900">Lumina Bistro</h4>
            <p className="mt-2 text-sm text-gray-600">123 Light Street, New City</p>
            <p className="text-sm text-gray-600">Open Tue–Sun · 5–10:30 PM</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <p className="mt-2 text-sm text-gray-600">hello@luminabistro.com</p>
            <p className="text-sm text-gray-600">(555) 012-3456</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Follow</h4>
            <div className="mt-2 flex gap-3 text-sm text-rose-600">
              <a href="#">Instagram</a>
              <a href="#">TikTok</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-rose-100 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} Lumina Bistro. All rights reserved.</div>
      </div>
    </footer>
  )
}
