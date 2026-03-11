'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const layers = [
  {
    number: 5,
    name: 'Analytics & Insights',
    detail: 'AI resolution rates, CSAT, agent efficiency, and cost savings metrics in real-time',
  },
  {
    number: 4,
    name: 'Workflow & Actions',
    detail: 'Route, escalate, refund, and more — AI support agent takes the right actions automatically',
  },
  {
    number: 3,
    name: 'Knowledge & Retrieval',
    detail: 'RAG-powered search across your docs, policies, and past resolutions — zero hallucinations',
  },
  {
    number: 2,
    name: 'Fine-Tuned Understanding',
    detail: 'NVIDIA NeMo fine-tuning on your business data — intent, sentiment, and domain-specific meaning',
  },
  {
    number: 1,
    name: 'NVIDIA GPU Inference Infrastructure',
    detail: 'NVIDIA H100 GPUs + TensorRT-LLM + NVIDIA Triton Inference Server — private VPC deployment',
  },
]

export default function StackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Five layers. Built from the GPU up.
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Every layer of the AI customer support stack — NVIDIA GPU inference, NeMo fine-tuning, RAG retrieval, intelligent workflows, and analytics — engineered to work together for enterprise-grade performance.
          </p>
        </motion.div>

        <div className="space-y-0">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-gray-200 bg-white
                ${i === 0 ? 'rounded-t-xl' : ''} ${i === layers.length - 1 ? 'rounded-b-xl' : ''}
                ${i > 0 ? 'border-t-0' : ''}`}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-lg font-bold text-gray-300 w-6 text-center">{layer.number}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{layer.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{layer.detail}</p>
                </div>
              </div>
              <span className="mt-2 sm:mt-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700" aria-hidden="true">
                ✓
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
