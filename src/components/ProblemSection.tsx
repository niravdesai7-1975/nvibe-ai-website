'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertTriangle, ShieldOff, Rocket } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Generic AI hallucinates your business',
    description: 'GPT-4 has never seen your refund policy. It guesses. NVibe is trained on your actual data — 0% hallucination rate across 27 adversarial tests.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: ShieldOff,
    title: 'API providers leak your data',
    description: 'Every API call sends customer data to someone else\'s server. NVibe runs entirely inside your VPC. Nothing leaves your network.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: Rocket,
    title: 'Production AI is 10x harder than prototypes',
    description: '87% of AI projects never reach production (Gartner 2025). NVibe goes from your data to a live, load-tested deployment in 3 weeks.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
]

export default function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why most AI deployments fail
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Three structural problems that no API provider solves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl border border-gray-100 p-8"
            >
              <div className={`w-12 h-12 ${problem.bg} rounded-lg flex items-center justify-center mb-5`}>
                <problem.icon className={`w-6 h-6 ${problem.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
