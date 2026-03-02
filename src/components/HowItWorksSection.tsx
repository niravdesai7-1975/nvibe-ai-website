'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Database, Cpu, Server, Globe, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Database,
    number: '01',
    title: 'Your Data',
    description: 'We collect your support tickets, policies, product catalog, and brand voice.',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'Custom Model',
    description: 'Fine-tuned Llama 3 8B via QLoRA on your domain. $6 training cost. 150 minutes.',
  },
  {
    icon: Server,
    number: '03',
    title: 'Your Infrastructure',
    description: 'Deployed inside your GCP/AWS VPC on H100. Data never leaves your network.',
  },
  {
    icon: Globe,
    number: '04',
    title: 'Production',
    description: 'OpenAI-compatible API, portal, usage analytics, benchmarks. 24/7.',
  },
]

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How it works
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            From your data to a live production AI in 3 weeks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm font-semibold text-green-600">{step.number}</span>
                {i < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-300 hidden lg:block absolute right-0 top-3" />
                )}
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-gray-900 rounded-2xl p-8 sm:p-10 text-white"
        >
          <p className="text-sm text-gray-400 mb-6 font-mono">Architecture</p>
          <div className="space-y-0">
            {[
              { label: 'Customer Touchpoints', detail: 'Web chat · SMS · iMessage · API' },
              { label: 'NVibe Control Plane', detail: 'Portal · API Keys · Usage / Billing · Benchmarks' },
              { label: 'NVibe Inference Engine', detail: 'Triton + TRT-LLM 0.16 · AWQ INT4 · Auto-Recovery' },
              { label: 'Your Infrastructure', detail: 'H100 / H200 · GCP / AWS / On-Prem · Spot or Reserved' },
            ].map((layer, i) => (
              <div key={layer.label}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 px-5 border border-gray-700 bg-gray-800/50 first:rounded-t-lg last:rounded-b-lg">
                  <span className="font-semibold text-white text-sm">{layer.label}</span>
                  <span className="text-gray-400 text-sm font-mono mt-1 sm:mt-0">{layer.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
