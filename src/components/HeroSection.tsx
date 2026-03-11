'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const proofBadges = [
  { metric: '10,710 tok/s', label: 'NVIDIA H100 + TensorRT-LLM — beats Together AI 5/5 batch sizes' },
  { metric: '$15', label: 'Per 1M messages — 10x cheaper than GPT-4o' },
  { metric: '0%', label: 'Hallucination rate — fine-tuned on your business data' },
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Enterprise AI Customer Support Platform
            <span className="block gradient-text mt-1">— built from the GPU up.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            NVibe fine-tunes a custom AI model on your data, deploys it inside your VPC on
            NVIDIA H100 GPUs with TensorRT-LLM, and serves responses faster than any API provider.
            Zero hallucinations. Your data never leaves your infrastructure.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#benchmarks-preview" className="btn-primary inline-flex items-center justify-center gap-2">
              See Benchmarks <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="btn-secondary inline-flex items-center justify-center gap-2">
              Book a Demo
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
