'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, HardHat, Factory, Zap, Car, Cpu, Wrench } from 'lucide-react'

const industries = [
  { icon: Building2, name: 'Wholesale Trade', tam: '$8-12T', color: 'bg-blue-50 text-blue-600' },
  { icon: HardHat, name: 'Construction', tam: '$10-15T', color: 'bg-orange-50 text-orange-600' },
  { icon: Factory, name: 'Manufacturing Aftermarket', tam: '$3-5T', color: 'bg-gray-100 text-gray-700' },
  { icon: Zap, name: 'Energy', tam: '$1T+', color: 'bg-yellow-50 text-yellow-600' },
  { icon: Car, name: 'Automotive Parts', tam: '$0.5-1T', color: 'bg-red-50 text-red-600' },
  { icon: Cpu, name: 'Electronics Distribution', tam: '$0.5-1T', color: 'bg-purple-50 text-purple-600' },
  { icon: Wrench, name: 'HVAC / MRO', tam: '$300-500B', color: 'bg-green-50 text-green-600' },
]

export default function IndustriesSection() {
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
            Built for the industries that move the world
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Every B2B industry with complex catalogs, procurement friction, and customer service needs is an NVibe market.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="bg-white rounded-xl border border-gray-200 p-5 text-center hover:border-green-300 hover:shadow-sm transition-all"
            >
              <div className={`w-10 h-10 rounded-lg ${ind.color} flex items-center justify-center mx-auto mb-3`}>
                <ind.icon className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-gray-900">{ind.name}</p>
              <p className="text-lg font-bold font-mono text-green-600 mt-1">{ind.tam}</p>
              <p className="text-xs text-gray-400 mt-0.5">TAM</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          We start with the highest-transferability verticals and expand.
        </motion.p>
      </div>
    </section>
  )
}
