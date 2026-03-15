'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const proofBadges = [
  { metric: '10,710', label: 'Tokens/sec — NVIDIA H100 + TensorRT-LLM' },
  { metric: '743ms', label: 'P99 response latency — production verified' },
  { metric: '70%+', label: 'Automated resolution rate — out of the box' },
]

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            B2B/B2C AI Accelerator
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Enterprise AI for every conversation
            <span className="block gradient-text mt-1">— support, sales, and procurement.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fine-tuned on your data. Deployed in your VPC. Live in 4–12 weeks.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Book a 20-minute demo <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://demo.nvibe.ai" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2">
              Try the platform →
            </a>
          </div>
        </motion.div>

        {/* Proof badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {proofBadges.map((badge) => (
            <div
              key={badge.metric}
              className="text-center p-6 rounded-xl border border-gray-100 bg-gray-50/50"
            >
              <p className="font-mono text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                {badge.metric}
              </p>
              <p className="mt-2 text-sm text-gray-500">{badge.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
