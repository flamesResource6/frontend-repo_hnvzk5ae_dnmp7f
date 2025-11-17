import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.15),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-pink-700 leading-tight">
              Fresh flowers, delivered with love
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-pink-800/80 text-lg">
              Discover hand-picked bouquets and seasonal blooms. Same-day delivery in select areas.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#catalog" className="px-5 py-3 rounded-lg bg-pink-600 text-white font-semibold shadow hover:bg-pink-700 transition">
                Shop flowers
              </a>
              <a href="#about" className="px-5 py-3 rounded-lg bg-pink-100 text-pink-700 font-semibold hover:bg-pink-200 transition">
                Learn more
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15} y={40} className="relative">
          <img
            src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1600&auto=format&fit=crop"
            alt="Pink peonies"
            className="rounded-2xl shadow-2xl border border-pink-200"
          />
          <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 rounded-full bg-pink-200/60 blur-3xl" />
        </Reveal>
      </div>
    </section>
  )
}
