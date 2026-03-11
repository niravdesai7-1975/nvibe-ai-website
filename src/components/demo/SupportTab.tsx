'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Headphones, Bot, Clock, CheckCircle2, AlertTriangle, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

const metrics = [
  { label: 'AI Resolution Rate', value: '70.4%', icon: Bot, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Avg Response Time', value: '< 2 min', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Open Tickets', value: '12', icon: Headphones, color: 'text-orange-600', bg: 'bg-orange-50' },
  { label: 'Resolved Today', value: '47', icon: CheckCircle2, color: 'text-purple-600', bg: 'bg-purple-50' },
]

interface Ticket {
  id: string
  customer: string
  company: string
  issue: string
  priority: 'High' | 'Medium' | 'Low'
  status: 'Open' | 'AI Resolved' | 'Escalated' | 'Closed'
  aiReasoning: {
    intent: string
    confidence: number
    steps: string[]
    action: string
  }
}

const tickets: Ticket[] = [
  {
    id: 'TKT-1042',
    customer: 'Sarah Chen',
    company: 'Acme Retail',
    issue: 'Bulk order discount not applied at checkout',
    priority: 'High',
    status: 'AI Resolved',
    aiReasoning: {
      intent: 'Billing / Discount Issue',
      confidence: 94,
      steps: [
        'Intent detected: discount code not applied (94% confidence)',
        'Order #ORD-88421 verified: $12,400 bulk order, discount code BULK20 entered',
        'Policy checked: BULK20 valid — 20% off orders > $10K, expires Apr 1 2026',
        'Root cause: code not applied due to cart session timeout',
        'Action: discount retroactively applied, $2,480 credit issued to account',
      ],
      action: '$2,480 credit applied — customer notified by email',
    },
  },
  {
    id: 'TKT-1038',
    customer: 'Marcus Webb',
    company: 'DataStream Inc',
    issue: 'Cannot export analytics data to CSV',
    priority: 'Medium',
    status: 'Escalated',
    aiReasoning: {
      intent: 'Product Bug / Export Failure',
      confidence: 88,
      steps: [
        'Intent detected: product bug — export feature not working (88% confidence)',
        'Account checked: Professional plan — CSV export included in plan',
        'Reproduced: CSV export fails for date ranges > 90 days (known edge case)',
        'Knowledge base: no existing resolution — new bug confirmed',
        'Escalated to engineering team with reproduction steps attached',
      ],
      action: 'Escalated to Engineering — ETA 24 hours',
    },
  },
  {
    id: 'TKT-1035',
    customer: 'Raj Patel',
    company: 'Acme Retail',
    issue: 'Late delivery on order ORD-88302 — 3 days overdue',
    priority: 'High',
    status: 'AI Resolved',
    aiReasoning: {
      intent: 'Shipping Delay / Complaint',
      confidence: 97,
      steps: [
        'Intent detected: delivery complaint, high frustration signal (97% confidence)',
        'Sentiment analysis: customer escalating — previous 2 orders also delayed',
        'Order ORD-88302 checked: 3 days overdue, carrier scan shows stuck in transit',
        'Policy: Tier-1 customer with $450K annual spend — priority resolution required',
        'Action: $50 credit applied + overnight replacement shipped at no charge',
      ],
      action: 'Replacement shipped overnight — $50 credit applied',
    },
  },
  {
    id: 'TKT-1031',
    customer: 'Emily Torres',
    company: 'CloudBase Co',
    issue: 'SSO integration not working with Okta',
    priority: 'High',
    status: 'Open',
    aiReasoning: {
      intent: 'Integration / SSO Setup',
      confidence: 79,
      steps: [
        'Intent detected: SSO configuration issue with Okta (79% confidence)',
        'Account: Enterprise plan — SSO included',
        'Knowledge base search: 3 Okta integration guides found',
        'Common error pattern: SAML assertion audience mismatch',
        'Awaiting customer to share SAML error log for diagnosis',
      ],
      action: 'Awaiting SAML error log from customer',
    },
  },
  {
    id: 'TKT-1028',
    customer: 'Daniel Park',
    company: 'Nexus Corp',
    issue: 'How do I set up custom escalation rules?',
    priority: 'Low',
    status: 'AI Resolved',
    aiReasoning: {
      intent: 'How-to / Product Question',
      confidence: 99,
      steps: [
        'Intent detected: how-to question — escalation rule configuration (99% confidence)',
        'Knowledge base: exact match found — "Custom Escalation Rules" article (v2.4)',
        'User tier: new customer, onboarded 2 weeks ago',
        'Response: step-by-step guide sent with screenshots',
        'Follow-up: 5-minute Loom video link included',
      ],
      action: 'Knowledge base article + video sent — no human needed',
    },
  },
  {
    id: 'TKT-1024',
    customer: 'Priya Iyer',
    company: 'PeakTech',
    issue: 'Refund request — wrong product shipped',
    priority: 'Medium',
    status: 'Closed',
    aiReasoning: {
      intent: 'Refund / Wrong Item',
      confidence: 96,
      steps: [
        'Intent detected: wrong product shipped, refund request (96% confidence)',
        'Order #ORD-77201 verified: SKU mismatch — warehouse picking error confirmed',
        'Policy: full refund + return label issued within 24 hours for warehouse errors',
        'Action: full refund processed ($340), prepaid return label emailed',
        'Customer satisfaction: 5-star rating received after resolution',
      ],
      action: 'Full refund + return label issued — 5★ rating received',
    },
  },
]

const statusStyle: Record<string, string> = {
  'AI Resolved': 'bg-green-100 text-green-700',
  'Escalated': 'bg-red-100 text-red-600',
  'Open': 'bg-yellow-100 text-yellow-700',
  'Closed': 'bg-gray-100 text-gray-500',
}

const priorityStyle: Record<string, string> = {
  High: 'text-red-600',
  Medium: 'text-yellow-600',
  Low: 'text-gray-400',
}

const StatusIcon = ({ status }: { status: string }) => {
  if (status === 'AI Resolved') return <Bot className="w-3.5 h-3.5" />
  if (status === 'Escalated') return <AlertTriangle className="w-3.5 h-3.5" />
  if (status === 'Closed') return <CheckCircle2 className="w-3.5 h-3.5" />
  return <Clock className="w-3.5 h-3.5" />
}

export default function SupportTab() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-white rounded-xl border p-5 flex items-center gap-4"
          >
            <div className={`w-10 h-10 rounded-lg ${m.bg} flex items-center justify-center flex-shrink-0`}>
              <m.icon className={`w-5 h-5 ${m.color}`} />
            </div>
            <div>
              <p className="text-xs text-gray-500">{m.label}</p>
              <p className="text-xl font-bold text-gray-900">{m.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ticket Table */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">Support Queue</h3>
          <span className="text-xs text-gray-400 flex items-center gap-1.5">
            <Bot className="w-3.5 h-3.5" /> Click any ticket to view AI reasoning
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50/50">
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Ticket</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Issue</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Priority</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="py-3 px-4 w-8" />
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <>
                  <tr
                    key={ticket.id}
                    onClick={() => setExpandedId(expandedId === ticket.id ? null : ticket.id)}
                    className="border-b border-gray-50 hover:bg-gray-50/50 cursor-pointer transition-colors"
                  >
                    <td className="py-3.5 px-6">
                      <p className="font-mono text-xs text-gray-400">{ticket.id}</p>
                      <p className="font-medium text-gray-900 text-sm mt-0.5">{ticket.customer}</p>
                      <p className="text-xs text-gray-500">{ticket.company}</p>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <p className="text-sm text-gray-700 leading-snug">{ticket.issue}</p>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`text-xs font-semibold ${priorityStyle[ticket.priority]}`}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyle[ticket.status]}`}>
                        <StatusIcon status={ticket.status} />
                        {ticket.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-gray-400">
                      {expandedId === ticket.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </td>
                  </tr>
                  <AnimatePresence>
                    {expandedId === ticket.id && (
                      <tr key={`${ticket.id}-expand`}>
                        <td colSpan={5} className="bg-green-50/30 px-6 py-4">
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <p className="text-xs font-semibold text-green-700 uppercase tracking-wider flex items-center gap-1.5">
                                <Bot className="w-3.5 h-3.5" /> AI Reasoning — {ticket.aiReasoning.intent} ({ticket.aiReasoning.confidence}% confidence)
                              </p>
                            </div>
                            <ol className="space-y-1.5 mb-3">
                              {ticket.aiReasoning.steps.map((step, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                  <span className="text-green-600 font-bold flex-shrink-0">{i + 1}.</span>
                                  {step}
                                </li>
                              ))}
                            </ol>
                            <div className="flex items-center gap-2 bg-white border border-green-100 rounded-lg px-4 py-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="font-medium text-gray-900">Action taken:</span>
                              <span className="text-gray-600">{ticket.aiReasoning.action}</span>
                            </div>
                          </motion.div>
                        </td>
                      </tr>
                    )}
                  </AnimatePresence>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Link to live demo */}
      <div className="text-center">
        <a
          href="https://demo.nvibe.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          Open live NVibe Bot demo <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
