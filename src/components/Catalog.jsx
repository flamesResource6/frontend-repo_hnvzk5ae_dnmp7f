import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

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
        <SectionTitle title="Popular picks" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <Reveal key={p._id} delay={i * 0.05}>
            <ProductCard product={p} onAdd={onAdd} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
