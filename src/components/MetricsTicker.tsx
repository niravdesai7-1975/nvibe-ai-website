'use client'

const metrics = [
  '$15/1M messages',
  '10,710 tok/s',
  '4-week deploy',
  '743ms P99',
  '70%+ resolution',
  '10x cheaper than GPT-4o',
]

export default function MetricsTicker() {
  return (
    <section className="py-4 bg-gray-900 text-white overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...metrics, ...metrics, ...metrics].map((m, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6 text-sm font-mono font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            {m}
          </span>
        ))}
      </div>
    </section>
  )
}
