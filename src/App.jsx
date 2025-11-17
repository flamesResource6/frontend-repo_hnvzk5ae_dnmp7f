import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'

function App() {
  const [cart, setCart] = useState([])

  const handleAdd = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p._id === product._id)
      if (exists) {
        return prev.map((p) => (p._id === product._id ? { ...p, qty: p.qty + 1 } : p))
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar cartCount={cartCount} />
      <Hero />
      <Catalog onAdd={handleAdd} />

      <footer id="about" className="mt-16 border-t border-pink-200/60 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-pink-700 font-bold mb-2">About Blossom</h4>
            <p className="text-pink-800/80 text-sm">We curate fresh, seasonal flowers from local growers and deliver them with care.</p>
          </div>
          <div>
            <h4 className="text-pink-700 font-bold mb-2">Contact</h4>
            <p className="text-pink-800/80 text-sm">hello@blossom.store</p>
            <p className="text-pink-800/80 text-sm">Mon–Sat, 9am–6pm</p>
          </div>
          <div id="contact">
            <h4 className="text-pink-700 font-bold mb-2">Newsletter</h4>
            <form className="flex gap-2">
              <input className="flex-1 rounded-md border border-pink-300 px-3 py-2 text-sm" placeholder="Your email" />
              <button className="px-4 py-2 rounded-md bg-pink-600 text-white text-sm font-semibold hover:bg-pink-700">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center text-xs text-pink-700/70 pb-8">© {new Date().getFullYear()} Blossom. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
