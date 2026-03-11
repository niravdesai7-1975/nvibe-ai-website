'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const messageEconomics = [
  { provider: 'NVibe', cost: '$132k/yr', note: 'for 40 agents on NVibe Infra', highlight: true },
  { provider: 'Salesforce', cost: '$2.5–$4.5M/yr', note: 'platform + 40 agents', highlight: false },
  { provider: 'Human Agents', cost: '$4M–$8M/yr', note: '~56 FTEs for 1M msg/mo', highlight: false },
]

// Side-by-side TCO: Salesforce vs NVibe. NVibe estimates combine Sierra-style (platform, workflows) + Together-style (inference, API) cost structure.
const tcoRows = [
  { category: 'Licenses (40 agents)', traditional: '$80K–$240K/yr' },
  { category: 'Platform fees (data, encryption, API)', traditional: '$50K–$200K/yr' },
  { category: 'Implementation (consulting)', traditional: '$100K–$500K' },
  { category: 'Ongoing admin + customization', traditional: '$75K–$200K/yr' },
  { category: 'Contact center agents (40 FTEs)', traditional: '$1.4M–$2.0M/yr' },
  { category: 'Agent turnover & retraining (35%)', traditional: '$200K–$400K/yr' },
]

export default function CostSection() {
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
            The real cost of Salesforce Service Cloud — and the AI customer support alternative
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Every Salesforce customer I worked with in the last 20 years says the same thing: millions in licensing, consulting, and maintenance for an AI customer service platform that wasn&apos;t built for AI. NVibe is the Salesforce Service Cloud alternative — AI-native, on-premise, and priced at $99/agent/month.
          </p>
        </motion.div>

        {/* Per-message economics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
        >
          {messageEconomics.map((item) => (
            <div
              key={item.provider}
              className={`p-6 rounded-xl border text-center ${
                item.highlight
                  ? 'border-green-200 bg-green-50'
                  : 'border-gray-100 bg-gray-50/50'
              }`}
            >
              <p className="text-sm font-medium text-gray-500 mb-2">{item.provider}</p>
              <p className={`font-mono text-2xl font-bold ${
                item.highlight ? 'text-green-600' : 'text-gray-400'
              }`}>
                {item.cost}
              </p>
              <p className="text-xs text-gray-400 mt-1">{item.note}</p>
            </div>
          ))}
        </motion.div>

        {/* TCO comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Salesforce TCO for a typical Service Cloud Platform + 40 Support Agent
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-100 overflow-hidden">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="text-left py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Cost Category</th>
                  <th className="text-right py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Traditional Stack</th>
                </tr>
              </thead>
              <tbody>
                {tcoRows.map((row) => (
                  <tr key={row.category} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 px-6 text-sm text-gray-600">{row.category}</td>
                    <td className="py-3 px-6 text-right font-mono text-sm text-gray-500">{row.traditional}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 text-sm font-bold text-gray-900">TCO Salesforce Stack</td>
                  <td className="py-4 px-6 text-right font-mono text-sm font-bold text-red-600">$2.5M – $4.5M / year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
