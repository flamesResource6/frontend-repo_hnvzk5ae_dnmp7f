import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function Catalog({ onAdd }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        // seed if empty
        await fetch(`${base}/api/seed`, { method: 'POST' })
        const res = await fetch(`${base}/api/products`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <p className="text-pink-700">Loading flowers...</p>
  if (error) return <p className="text-red-600">{error}</p>

  return (
    <section id="catalog" className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-700">Popular picks</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p._id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  )
}
