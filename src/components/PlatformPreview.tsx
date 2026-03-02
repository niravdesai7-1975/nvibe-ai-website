'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Check, X, Minus } from 'lucide-react'

const rows = [
  {
    feature: 'AI',
    salesforce: 'Einstein (paid add-on, generic)',
    zendesk: 'Fin/Freddy (generic LLM)',
    nvibe: 'Built-in, trained on YOUR data',
    nvibeWins: true,
  },
  {
    feature: 'Pricing',
    salesforce: '$150–300/agent/month',
    zendesk: 'Seat + $0.99/resolution',
    nvibe: 'Fixed price, unlimited AI',
    nvibeWins: true,
  },
  {
    feature: 'Deploy time',
    salesforce: 'Weeks of configuration',
    zendesk: 'Days (but generic)',
    nvibe: 'Days (and domain-specific)',
    nvibeWins: true,
  },
  {
    feature: 'Customer data',
    salesforce: 'Their cloud',
    zendesk: 'Their cloud + 3rd-party AI',
    nvibe: 'Your VPC — never leaves',
    nvibeWins: true,
  },
  {
    feature: 'Architecture',
    salesforce: 'Ticket-centric, pre-AI',
    zendesk: 'Ticket-centric, AI bolted on',
    nvibe: 'Thread-based, AI-native',
    nvibeWins: true,
  },
]

export default function PlatformPreview() {
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
            Not a chatbot bolted onto a helpdesk
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            An AI-native support platform. Salesforce was built for humans clicking through UIs.
            NVibe was built for AI as the primary actor — with humans handling what matters.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full bg-white rounded-xl border border-gray-100 overflow-hidden">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-500" />
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Salesforce</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Zendesk / Intercom</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-green-600">NVibe</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-gray-50 last:border-0">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">{row.feature}</td>
                  <td className="py-4 px-6 text-sm text-gray-500">{row.salesforce}</td>
                  <td className="py-4 px-6 text-sm text-gray-500">{row.zendesk}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">{row.nvibe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a href="/platform" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors">
            See full platform details <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
