'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, X, ArrowRight } from 'lucide-react'

const comparisons = [
  {
    name: 'Accenture / Deloitte',
    cost: '$2M+',
    time: '12-18 months',
    team: 'Consulting army',
    infra: 'Custom build',
  },
  {
    name: 'Palantir',
    cost: '$5M+',
    time: '6-12 months',
    team: 'Data engineers required',
    infra: 'Proprietary lock-in',
  },
  {
    name: 'Salesforce',
    cost: '$2.5M–$4.5M',
    time: '12-18 months',
    team: 'SI + internal admins',
    infra: 'Multi-cloud, Salesforce-managed',
  },
  {
    name: 'Internal build',
    cost: '$1M+',
    time: '6-12 months',
    team: 'ML team of 5-10',
    infra: 'You maintain everything',
  },
  {
    name: 'Grainger-level internal AI',
    cost: '$16B company budget',
    time: '2-3 years',
    team: 'Hundreds of engineers',
    infra: 'Massive internal platform',
  },
]

export default function ComparisonSection() {
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
            Enterprise AI without the enterprise price tag
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            The same capabilities that Fortune 500 companies spend millions building — at SaaS pricing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-4 pr-6 text-sm font-semibold text-gray-500">Alternative</th>
                <th className="py-4 px-4 text-sm font-semibold text-gray-500">Cost</th>
                <th className="py-4 px-4 text-sm font-semibold text-gray-500">Time to value</th>
                <th className="py-4 px-4 text-sm font-semibold text-gray-500">Team required</th>
                <th className="py-4 px-4 text-sm font-semibold text-gray-500">Infrastructure</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row) => (
                <tr key={row.name} className="border-b border-gray-100">
                  <td className="py-4 pr-6 text-sm font-medium text-gray-900">{row.name}</td>
                  <td className="py-4 px-4 text-sm text-red-600 font-mono">{row.cost}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{row.time}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{row.team}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{row.infra}</td>
                </tr>
              ))}
              {/* NVibe row highlighted */}
              <tr className="bg-green-50 border-2 border-green-200 rounded-lg">
                <td className="py-4 pr-6 text-sm font-bold text-green-700">NVibe</td>
                <td className="py-4 px-4 text-sm font-mono font-bold text-green-700">$2k-$10k/mo</td>
                <td className="py-4 px-4 text-sm font-bold text-green-700">4–12 weeks</td>
                <td className="py-4 px-4 text-sm font-bold text-green-700">Self-serve, no ML team</td>
                <td className="py-4 px-4 text-sm font-bold text-green-700">Your VPC, we manage</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
