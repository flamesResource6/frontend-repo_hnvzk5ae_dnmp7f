import Reveal from './Reveal'

const features = [
  {
    title: 'Same‑day delivery',
    desc: 'Order by 2pm and we’ll deliver your bouquet the very same day in eligible areas.',
    icon: '🚚',
  },
  {
    title: 'Fresh & local',
    desc: 'Sourced daily from trusted local growers for longer‑lasting blooms.',
    icon: '🌸',
  },
  {
    title: 'Sustainable care',
    desc: 'Eco‑friendly packaging and guides to help your flowers thrive.',
    icon: '♻️',
  },
]

export default function Features() {
  return (
    <section className="bg-white/70 border-y border-pink-200/60">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-pink-700 text-center">Why shop with us</h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} y={30}>
              <div className="h-full rounded-xl border border-pink-200/70 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-3 font-semibold text-pink-800">{f.title}</h3>
                <p className="mt-2 text-sm text-pink-800/80">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
