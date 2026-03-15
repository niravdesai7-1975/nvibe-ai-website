'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Headphones, TrendingUp, Search, Truck, BarChart3 } from 'lucide-react'

const capabilities = [
  {
    icon: Headphones,
    title: 'AI Customer Support',
    description: 'Resolve 70%+ of tickets. Zero hallucinations. 743ms response.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: TrendingUp,
    title: 'Lead Qualification & Sales AI',
    description: 'Score leads in real-time. Surface upsells. Coach reps.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Search,
    title: 'Semantic Product Search',
    description: 'Technical search across complex catalogs. Instant, accurate.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Truck,
    title: 'Procurement Intelligence',
    description: 'SLA-based ETAs, compliant quoting, ERP-connected insights.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: BarChart3,
    title: 'Revenue Analytics',
    description: 'Track every AI-driven dollar. Upsells, cross-sells, pipeline.',
    color: 'bg-rose-50 text-rose-600',
  },
]

export default function CapabilityPillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            What NVibe does
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Five AI capabilities that Fortune 500 companies spend millions building — now at SaaS pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-md transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl ${cap.color} flex items-center justify-center mb-4`}>
                <cap.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
