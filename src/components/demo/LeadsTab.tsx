'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UserPlus, TrendingUp, CheckCircle2, DollarSign, ChevronDown, ChevronUp, Brain } from 'lucide-react'

const metrics = [
  { label: 'Total Leads', value: '24', icon: UserPlus, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'AI Qualified', value: '14', icon: Brain, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Converted', value: '8', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Pipeline Value', value: '$3.2M', icon: DollarSign, color: 'text-orange-600', bg: 'bg-orange-50' },
]

const leads = [
  {
    id: 1,
    name: 'Sarah Chen',
    company: 'Acme Retail',
    title: 'VP of Customer Experience',
    source: 'LinkedIn',
    aiScore: 94,
    scoreLabel: 'High',
    status: 'Converted',
    lastActivity: '2 days ago',
    aiReasoning: [
      'VP title signals budget authority — decision maker',
      'Company has 500+ support agents (ideal ICP)',
      'Engaged with Salesforce Alternative page for 8 min',
      'Job posting for "AI Support Engineer" found on LinkedIn',
      'Pain signal: 3 Salesforce Service Cloud complaints on G2 in past 6 months',
    ],
  },
  {
    id: 2,
    name: 'Marcus Webb',
    company: 'DataStream Inc',
    title: 'Head of Operations',
    source: 'Website',
    aiScore: 87,
    scoreLabel: 'High',
    status: 'Qualified',
    lastActivity: '1 day ago',
    aiReasoning: [
      'Operations leader at 200-person SaaS company',
      'Downloaded TCO comparison whitepaper',
      'Viewed pricing page 4 times in 7 days',
      'Company ARR estimated $30M+ (Clearbit enrichment)',
      'Existing stack: Zendesk + Salesforce Service Cloud — replacement opportunity',
    ],
  },
  {
    id: 3,
    name: 'Priya Sharma',
    company: 'CloudBase Co',
    title: 'CTO',
    source: 'Referral',
    aiScore: 82,
    scoreLabel: 'High',
    status: 'Qualified',
    lastActivity: '3 days ago',
    aiReasoning: [
      'CTO at fast-growing cloud company (Series B, $45M raised)',
      'Referred by existing customer Acme Retail',
      'Engineering blog mentions on-premise AI interest',
      'NVIDIA H100 GPU infrastructure already in place',
      'Privacy requirements: handles healthcare data — VPC deployment critical',
    ],
  },
  {
    id: 4,
    name: 'James Okafor',
    company: 'Nexus Corp',
    title: 'Director of Customer Success',
    source: 'Cold Outreach',
    aiScore: 91,
    scoreLabel: 'High',
    status: 'New',
    lastActivity: '5 hours ago',
    aiReasoning: [
      'Director at $500M revenue enterprise — high deal value potential',
      'Opened cold email 3 times, clicked benchmark comparison link',
      'Company recently announced 40% headcount reduction in support team',
      'LinkedIn activity: commented on "AI replacing support agents" post',
      'High urgency signal: budget cycle ending Q1 2026',
    ],
  },
  {
    id: 5,
    name: 'Anika Patel',
    company: 'PeakTech',
    title: 'Product Manager',
    source: 'Website',
    aiScore: 67,
    scoreLabel: 'Medium',
    status: 'Contacted',
    lastActivity: '4 days ago',
    aiReasoning: [
      'PM role — influencer but not final budget owner',
      'Company is 50 employees — smaller than ICP',
      'Viewed NVibe Bot demo page for 12 minutes',
      'No existing enterprise CRM detected',
      'Budget authority unclear — recommend qualifying with discovery call',
    ],
  },
  {
    id: 6,
    name: 'Tom Reeves',
    company: 'Meridian Health',
    title: 'SVP Technology',
    source: 'LinkedIn',
    aiScore: 78,
    scoreLabel: 'Medium',
    status: 'Contacted',
    lastActivity: '1 week ago',
    aiReasoning: [
      'SVP role with budget authority in healthcare',
      'Healthcare compliance (HIPAA) makes on-premise AI essential',
      'Current stack: Salesforce Health Cloud + third-party AI — data leakage concern',
      'Engaged with privacy/VPC content but hasn\'t revisited',
      'Re-engagement recommended with HIPAA compliance angle',
    ],
  },
  {
    id: 7,
    name: 'Lisa Tan',
    company: 'BrightCart',
    title: 'Customer Support Manager',
    source: 'Email Campaign',
    aiScore: 44,
    scoreLabel: 'Low',
    status: 'New',
    lastActivity: '2 weeks ago',
    aiReasoning: [
      'Manager-level role — likely not a budget holder',
      'E-commerce company with ~50 support agents',
      'Opened email once, no further engagement',
      'Company uses Freshdesk — low switching urgency detected',
      'Low intent signals — nurture sequence recommended',
    ],
  },
]

const scoreColor: Record<string, string> = {
  High: 'bg-green-100 text-green-700',
  Medium: 'bg-yellow-100 text-yellow-700',
  Low: 'bg-gray-100 text-gray-500',
}

const statusColor: Record<string, string> = {
  New: 'bg-blue-50 text-blue-600',
  Contacted: 'bg-yellow-50 text-yellow-700',
  Qualified: 'bg-purple-50 text-purple-700',
  Converted: 'bg-green-50 text-green-700',
}

export default function LeadsTab() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

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

      {/* Table */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">All Leads</h3>
          <span className="text-xs text-gray-400 flex items-center gap-1.5">
            <Brain className="w-3.5 h-3.5" /> Click any row to view AI reasoning
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50/50">
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Contact</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Source</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">AI Score</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Last Activity</th>
                <th className="py-3 px-4 w-8" />
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <>
                  <tr
                    key={lead.id}
                    onClick={() => setExpandedId(expandedId === lead.id ? null : lead.id)}
                    className="border-b border-gray-50 hover:bg-gray-50/50 cursor-pointer transition-colors"
                  >
                    <td className="py-3.5 px-6">
                      <p className="font-medium text-gray-900 text-sm">{lead.name}</p>
                      <p className="text-xs text-gray-500">{lead.title} · {lead.company}</p>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="text-sm text-gray-600">{lead.source}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${scoreColor[lead.scoreLabel]}`}>
                        {lead.aiScore}% · {lead.scoreLabel}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex text-xs font-medium px-2.5 py-1 rounded-full ${statusColor[lead.status]}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-sm text-gray-500">{lead.lastActivity}</td>
                    <td className="py-3.5 px-4 text-gray-400">
                      {expandedId === lead.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </td>
                  </tr>
                  <AnimatePresence>
                    {expandedId === lead.id && (
                      <tr key={`${lead.id}-expand`}>
                        <td colSpan={6} className="bg-purple-50/40 px-6 py-4">
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <p className="text-xs font-semibold text-purple-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                              <Brain className="w-3.5 h-3.5" /> AI Reasoning — Why {lead.aiScore}% score
                            </p>
                            <ul className="space-y-1.5">
                              {lead.aiReasoning.map((reason, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                  <span className="text-purple-500 font-bold mt-0.5">·</span>
                                  {reason}
                                </li>
                              ))}
                            </ul>
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
    </div>
  )
}
