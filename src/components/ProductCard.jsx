import { motion } from 'framer-motion'

export default function ProductCard({ product, onAdd }) {
  return (
    <motion.div
      className="group bg-white rounded-xl border border-pink-200/60 overflow-hidden shadow-sm hover:shadow-md transition"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={product.image_url} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-pink-800">{product.name}</h3>
        <p className="text-sm text-pink-700/70 line-clamp-2 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-pink-700">${product.price.toFixed(2)}</span>
          <button onClick={() => onAdd(product)} className="px-3 py-1.5 rounded-md bg-pink-600 text-white text-sm font-semibold hover:bg-pink-700">
            Add to cart
          </button>
        </div>
      </div>
    </motion.div>
  )
}
