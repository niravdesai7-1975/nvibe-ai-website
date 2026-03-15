'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Brain, AlertTriangle, ClipboardCheck, Globe } from 'lucide-react'

const badges = [
  { icon: Shield, label: 'VPC Deployment' },
  { icon: Brain, label: 'Constitutional AI Safety' },
  { icon: AlertTriangle, label: 'Zero Hallucinations' },
  { icon: ClipboardCheck, label: 'SOC 2 In Progress' },
  { icon: Globe, label: 'GDPR Architecture' },
]

export default function TrustStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-10"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-center gap-2 text-gray-500"
            >
              <badge.icon className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
