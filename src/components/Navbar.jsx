import { ShoppingBag } from 'lucide-react'

export default function Navbar({ cartCount }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-pink-200/60">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-lg bg-pink-500"></span>
          <span className="text-2xl font-extrabold tracking-tight text-pink-600">Blossom</span>
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#catalog" className="text-pink-700 hover:text-pink-900 font-medium">Shop</a>
          <a href="#about" className="text-pink-700 hover:text-pink-900 font-medium">About</a>
          <a href="#contact" className="text-pink-700 hover:text-pink-900 font-medium">Contact</a>
        </nav>
        <div className="relative">
          <ShoppingBag className="w-6 h-6 text-pink-700" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-2 py-0.5">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  )
}
