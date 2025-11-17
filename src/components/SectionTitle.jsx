import Reveal from './Reveal'

export default function SectionTitle({ title, subtitle }) {
  return (
    <Reveal>
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-700">{title}</h2>
        {subtitle && <p className="text-pink-800/80 mt-1">{subtitle}</p>}
      </div>
    </Reveal>
  )
}
