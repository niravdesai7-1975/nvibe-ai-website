'use client'

import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Sparkles } from 'lucide-react'

interface Deal {
  id: number
  company: string
  contact: string
  value: string
  close: string
  confidence: number
  stage: string
}

const deals: Deal[] = [
  // Prospect
  {
    id: 1,
    company: 'CloudBase Co',
    contact: 'Priya Sharma · CTO',
    value: '$1.5M',
    close: 'Apr 30, 2026',
    confidence: 62,
    stage: 'Prospect',
  },
  {
    id: 2,
    company: 'Meridian Health',
    contact: 'Tom Reeves · SVP Tech',
    value: '$2.1M',
    close: 'May 15, 2026',
    confidence: 48,
    stage: 'Prospect',
  },
  // Qualified
  {
    id: 3,
    company: 'Nexus Corp',
    contact: 'James Okafor · Dir. CS',
    value: '$900K',
    close: 'Mar 31, 2026',
    confidence: 71,
    stage: 'Qualified',
  },
  {
    id: 4,
    company: 'PeakTech',
    contact: 'Anika Patel · PM',
    value: '$320K',
    close: 'Apr 10, 2026',
    confidence: 55,
    stage: 'Qualified',
  },
  // Proposal
  {
    id: 5,
    company: 'DataStream Inc',
    contact: 'Marcus Webb · Head Ops',
    value: '$850K',
    close: 'Mar 28, 2026',
    confidence: 81,
    stage: 'Proposal',
  },
  {
    id: 6,
    company: 'BrightCart',
    contact: 'Lisa Tan · Support Mgr',
    value: '$210K',
    close: 'Apr 5, 2026',
    confidence: 67,
    stage: 'Proposal',
  },
  // Closed Won
  {
    id: 7,
    company: 'Acme Retail',
    contact: 'Sarah Chen · VP CX',
    value: '$1.2M',
    close: 'Mar 1, 2026',
    confidence: 100,
    stage: 'Closed Won',
  },
]

const stages = ['Prospect', 'Qualified', 'Proposal', 'Closed Won'] as const

const stageStyle: Record<string, { header: string; card: string }> = {
  Prospect: { header: 'bg-gray-100 text-gray-600', card: 'bg-white border-gray-100' },
  Qualified: { header: 'bg-blue-50 text-blue-700', card: 'bg-white border-blue-50' },
  Proposal: { header: 'bg-purple-50 text-purple-700', card: 'bg-white border-purple-100' },
  'Closed Won': { header: 'bg-green-100 text-green-700', card: 'bg-green-50/40 border-green-100' },
}

function confidenceColor(n: number) {
  if (n >= 80) return 'text-green-600'
  if (n >= 60) return 'text-yellow-600'
  return 'text-gray-400'
}

export default function SalesTab() {
  const totalPipeline = '$4.88M'
  const dealsByStage = (stage: string) => deals.filter((d) => d.stage === stage)

  return (
    <div className="space-y-6">
      {/* Summary bar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl border px-6 py-4 flex flex-wrap items-center justify-between gap-4"
      >
        <div className="flex items-center gap-6 flex-wrap">
          {stages.map((stage) => (
            <div key={stage} className="text-center">
              <p className="text-xs text-gray-500">{stage}</p>
              <p className="text-lg font-bold text-gray-900">{dealsByStage(stage).length}</p>
            </div>
          ))}
          <div className="h-8 w-px bg-gray-100 hidden sm:block" />
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            <div>
              <p className="text-xs text-gray-500">Total Pipeline</p>
              <p className="text-lg font-bold text-gray-900">{totalPipeline}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-purple-50 rounded-lg px-4 py-2">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm text-purple-700 font-medium">
            AI predicts 73% of qualified deals will close this quarter
          </span>
        </div>
      </motion.div>

      {/* Kanban */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stages.map((stage, si) => {
          const stageDeals = dealsByStage(stage)
          const stageTotal = stageDeals.reduce((sum, d) => {
            const num = parseFloat(d.value.replace(/[^0-9.]/g, ''))
            const mult = d.value.includes('M') ? 1_000_000 : 1_000
            return sum + num * mult
          }, 0)
          const stageTotalStr = stageTotal >= 1_000_000
            ? `$${(stageTotal / 1_000_000).toFixed(1)}M`
            : `$${(stageTotal / 1_000).toFixed(0)}K`

          return (
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: si * 0.07 }}
              className="flex flex-col gap-3"
            >
              {/* Column header */}
              <div className={`rounded-lg px-3 py-2 flex items-center justify-between ${stageStyle[stage].header}`}>
                <span className="text-xs font-semibold uppercase tracking-wide">{stage}</span>
                <span className="text-xs font-mono font-semibold">{stageTotalStr}</span>
              </div>

              {/* Deal cards */}
              {stageDeals.map((deal) => (
                <div
                  key={deal.id}
                  className={`rounded-xl border p-4 space-y-3 ${stageStyle[stage].card}`}
                >
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{deal.company}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{deal.contact}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-gray-900">{deal.value}</span>
                    <span className={`text-xs font-semibold flex items-center gap-1 ${confidenceColor(deal.confidence)}`}>
                      <TrendingUp className="w-3 h-3" />
                      {deal.confidence}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">Close: {deal.close}</div>
                  {/* Confidence bar */}
                  <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${deal.confidence >= 80 ? 'bg-green-500' : deal.confidence >= 60 ? 'bg-yellow-400' : 'bg-gray-300'}`}
                      style={{ width: `${deal.confidence}%` }}
                    />
                  </div>
                </div>
              ))}

              {stageDeals.length === 0 && (
                <div className="rounded-xl border border-dashed border-gray-200 p-4 text-center text-xs text-gray-400">
                  No deals
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
