'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Layers, Cpu, RefreshCw, ArrowRight } from 'lucide-react'

const platforms = [
  {
    icon: Layers,
    title: 'Agent OS',
    description: 'Configure, test, and deploy AI agents without code. Brand personality, policies, knowledge base — all in one studio.',
    color: 'bg-green-50 text-green-600',
    link: '/platform',
  },
  {
    icon: Cpu,
    title: 'Dynamic Inference Engine',
    description: 'Custom fine-tuned models on your infrastructure. 4-agent pipeline: Router → Domain → Safety → Meta. 10,710 tok/s.',
    color: 'bg-blue-50 text-blue-600',
    link: '/platform',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Flywheel',
    description: 'Every conversation makes your AI smarter. SFT → DPO → auto-deploy. The longer you run NVibe, the better it gets.',
    color: 'bg-purple-50 text-purple-600',
    link: '/platform',
  },
]

export default function PlatformOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            The NVibe platform
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Three pillars that make enterprise AI actually work in production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-green-300 hover:shadow-lg transition-all group block"
            >
              <div className={`w-14 h-14 rounded-xl ${p.color} flex items-center justify-center mb-6`}>
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.description}</p>
              <span className="text-sm font-medium text-green-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
