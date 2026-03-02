'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const benchmarks = [
  { batch: '1', nvibe: '236', together: '~140', delta: '+69%' },
  { batch: '8', nvibe: '1,332', together: '~1,200', delta: '+11%' },
  { batch: '32', nvibe: '4,222', together: '~2,800', delta: '+51%' },
  { batch: '64', nvibe: '7,179', together: '~5,000', delta: '+44%' },
  { batch: '128', nvibe: '10,710', together: '~9,000', delta: '+19%' },
]

const highlights = [
  { value: '+69%', label: 'faster at batch=1 (single user)' },
  { value: '+51%', label: 'faster at batch=32 (production)' },
  { value: '840ms', label: 'P99 under 1,000 msg/min' },
]

export default function PerformanceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="benchmarks-preview" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Faster than Together AI on every batch size
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            TRT-LLM 0.16 + AWQ INT4 on NVIDIA H100 80GB. Every number is reproducible.
          </p>
        </motion.div>

        {/* Highlight stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          {highlights.map((h) => (
            <div key={h.value} className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <p className="font-mono text-3xl font-bold text-green-600">{h.value}</p>
              <p className="mt-1 text-sm text-gray-500">{h.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Benchmark table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full bg-white rounded-xl border border-gray-100 overflow-hidden">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="text-left py-4 px-6 text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Batch Size</th>
                <th className="text-right py-4 px-6 text-xs font-mono font-semibold text-green-600 uppercase tracking-wider">NVibe AWQ INT4</th>
                <th className="text-right py-4 px-6 text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Together AI</th>
                <th className="text-right py-4 px-6 text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">Delta</th>
              </tr>
            </thead>
            <tbody>
              {benchmarks.map((row) => (
                <tr key={row.batch} className="border-b border-gray-50 last:border-0">
                  <td className="py-4 px-6 font-mono text-sm text-gray-600">{row.batch}</td>
                  <td className="py-4 px-6 text-right font-mono text-sm font-semibold text-gray-900">{row.nvibe} tok/s</td>
                  <td className="py-4 px-6 text-right font-mono text-sm text-gray-400">{row.together} tok/s</td>
                  <td className="py-4 px-6 text-right font-mono text-sm font-semibold text-green-600">{row.delta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-between"
        >
          <p className="text-xs text-gray-400 font-mono">
            March 1, 2026 · H100 SXM5 80GB · GCP us-central1-a · Scripts available on request
          </p>
          <a href="/benchmarks" className="mt-3 sm:mt-0 inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:text-green-700 transition-colors">
            Full benchmark methodology <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
