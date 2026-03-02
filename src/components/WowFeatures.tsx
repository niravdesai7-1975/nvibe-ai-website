'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Activity, Calculator, FileSearch, Bell } from 'lucide-react'

const features = [
  {
    icon: Activity,
    title: 'Real-Time Sentiment Detection',
    description: 'Customer goes from calm to angry — the sentiment bar shifts green to red. AI instantly surfaces coaching: "Customer frustrated — past 3 orders had issues. Offer 20% credit."',
    tag: 'Live',
  },
  {
    icon: Calculator,
    title: 'AI Resolution Counter + Cost Savings',
    description: '"NVibe resolved 847 of 1,203 conversations today (70.4%). Intercom equivalent: $838. NVibe cost: $0." Real savings, not projections.',
    tag: 'Live',
  },
  {
    icon: FileSearch,
    title: 'AI Audit Trail',
    description: 'Click "View AI Reasoning" on any conversation: intent (92% confidence), policy rules checked, order data verified, action taken. Enterprise trust, not a black box.',
    tag: 'Live',
  },
  {
    icon: Bell,
    title: 'Proactive Outreach',
    description: 'Delayed order? NVibe reaches out before the customer contacts support. "$5 credit for the late delivery" — sent automatically. Support flips from reactive to preventive.',
    tag: 'Coming',
  },
]

export default function WowFeatures() {
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
            What AI-native support looks like
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Intelligence that&apos;s visible, not just functional. Sierra ($10B valuation) and
            Decagon ($65M Series B) won enterprise deals by making AI reasoning auditable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-green-600" />
                </div>
                <span className={`text-xs font-mono font-semibold px-2 py-1 rounded-full ${
                  feature.tag === 'Live'
                    ? 'bg-green-50 text-green-600'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
