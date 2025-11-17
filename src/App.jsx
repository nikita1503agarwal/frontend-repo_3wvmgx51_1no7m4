import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import MenuShowcase from './components/MenuShowcase'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MenuShowcase />
        <Reservation />
      </main>
      <Footer />
    </div>
  )
}

export default App
