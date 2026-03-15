'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import {
  Headphones,
  TrendingUp,
  Search,
  ShoppingCart,
  BarChart3,
  CheckCircle2,
  Zap,
  Clock,
  DollarSign,
  Users,
  Bot,
  FileText,
  Target,
  Layers,
} from 'lucide-react'

const solutions = [
  {
    id: 'support',
    icon: Headphones,
    label: 'AI Support',
    headline: 'Resolve 70%+ of tickets without a human',
    description:
      'Fine-tuned models trained on your knowledge base handle L1–L2 support across chat, email, voice, and SMS. Constitutional AI guardrails ensure brand-safe responses. Human agents get AI copilot suggestions for complex cases.',
    metrics: [
      { icon: Zap, value: '70%+', label: 'Auto-resolution rate' },
      { icon: Clock, value: '<2s', label: 'Average response time' },
      { icon: DollarSign, value: '10x', label: 'Cheaper than manual' },
    ],
    capabilities: [
      'Multi-channel: chat, email, voice, SMS',
      'Brand-specific fine-tuned models',
      'Constitutional AI safety guardrails',
      'Human escalation with full context transfer',
      'Real-time sentiment analysis',
      'Automatic ticket classification and routing',
    ],
    useCases: [
      { industry: 'E-commerce', example: 'Order tracking, returns, product questions' },
      { industry: 'SaaS', example: 'Onboarding, billing, feature guidance' },
      { industry: 'Financial Services', example: 'Account inquiries, transaction disputes' },
    ],
  },
  {
    id: 'sales',
    icon: TrendingUp,
    label: 'Sales AI',
    headline: 'From lead to signed contract — AI across the full sales cycle',
    description:
      'AI agents qualify inbound leads, generate quotes from your pricing rules, and guide prospects through the contract process. Every interaction is scored, every document is tracked, and your CRM stays in sync automatically.',
    metrics: [
      { icon: Target, value: '3x', label: 'Lead-to-quote conversion' },
      { icon: Clock, value: '80%', label: 'Faster quote generation' },
      { icon: Users, value: '24/7', label: 'Always-on coverage' },
    ],
    capabilities: [
      'AI lead qualification and ICP scoring',
      'Automated quote generation from pricing rules',
      'Contract drafting and redline tracking',
      'CRM sync (Salesforce, HubSpot, SAP)',
      'Deal stage progression and pipeline analytics',
      'Multi-channel follow-up: email, SMS, voice',
    ],
    useCases: [
      { industry: 'Distribution', example: 'Automated quoting for repeat orders, contract renewal management, volume pricing' },
      { industry: 'Manufacturing', example: 'Configure-price-quote (CPQ), lead routing by product line, RFQ response automation' },
      { industry: 'B2B Services', example: 'SOW generation, proposal tracking, client onboarding workflows' },
    ],
  },
  {
    id: 'search',
    icon: Search,
    label: 'Semantic Search',
    headline: 'Grainger-grade product search — without the $16B budget',
    description:
      'Context-aware semantic search across millions of SKUs, contracts, quotes, and invoices. Understands buyer role and industry context — an electrician searching "clamps" gets different results than a machinist. RAG-powered product discovery, part number cross-reference, and visual search built for B2B distribution.',
    metrics: [
      { icon: Zap, value: '95%+', label: 'Search relevance' },
      { icon: Clock, value: '<200ms', label: 'Query latency' },
      { icon: Layers, value: 'Millions', label: 'SKUs indexed' },
    ],
    capabilities: [
      'Context-aware results by buyer role and industry',
      'Part number cross-reference: OEM, competitor, NSN',
      'Contract clause search and pricing agreement lookup',
      'Invoice matching and PO reconciliation',
      'Real-time catalog sync with 100K+ daily product updates',
      'ERP and procurement system integration (SAP, Oracle, NetSuite)',
    ],
    useCases: [
      { industry: 'Distribution', example: 'Product discovery across 2M+ SKUs, price agreement lookup, supplier cross-reference' },
      { industry: 'Manufacturing', example: 'BOM cost search, vendor contract compliance, spare parts identification' },
      { industry: 'Procurement', example: 'Quote comparison, invoice discrepancy detection, spend analytics' },
    ],
  },
  {
    id: 'procurement',
    icon: ShoppingCart,
    label: 'Procurement Intelligence',
    headline: 'Negotiate better with AI-powered insights',
    description:
      'Analyze supplier proposals, benchmark pricing, and surface savings opportunities. The AI reads RFPs, compares bids, and recommends negotiation strategies based on your historical data.',
    metrics: [
      { icon: DollarSign, value: '15–25%', label: 'Cost savings identified' },
      { icon: Clock, value: '80%', label: 'Faster RFP analysis' },
      { icon: FileText, value: '1000s', label: 'Contracts analyzed' },
    ],
    capabilities: [
      'Automated RFP analysis and scoring',
      'Supplier price benchmarking',
      'Contract clause extraction and comparison',
      'Spend analytics and savings identification',
      'Supplier risk assessment',
      'Negotiation strategy recommendations',
    ],
    useCases: [
      { industry: 'Distribution', example: 'Multi-supplier bid comparison, volume discount optimization' },
      { industry: 'Manufacturing', example: 'Raw material sourcing, supplier consolidation' },
      { industry: 'Retail', example: 'Vendor management, seasonal procurement planning' },
    ],
  },
  {
    id: 'analytics',
    icon: BarChart3,
    label: 'Revenue Analytics',
    headline: 'Turn conversation data into revenue signals',
    description:
      'Every customer interaction generates intelligence. Identify churn risks, upsell opportunities, and product gaps from the conversations your AI is already having.',
    metrics: [
      { icon: TrendingUp, value: '20%', label: 'Churn reduction' },
      { icon: DollarSign, value: '15%', label: 'Upsell revenue lift' },
      { icon: Bot, value: 'Real-time', label: 'Signal detection' },
    ],
    capabilities: [
      'Churn risk scoring from conversation sentiment',
      'Upsell/cross-sell opportunity detection',
      'Product feedback aggregation',
      'Customer health dashboards',
      'Revenue impact attribution',
      'Automated alerts for at-risk accounts',
    ],
    useCases: [
      { industry: 'SaaS', example: 'Feature request tracking, expansion revenue identification' },
      { industry: 'E-commerce', example: 'Customer lifetime value optimization, category insights' },
      { industry: 'Financial Services', example: 'Product-market fit signals, advisory opportunity detection' },
    ],
  },
]

export default function SolutionTabs() {
  const [active, setActive] = useState('support')
  const [paused, setPaused] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const advance = useCallback(() => {
    setActive((prev) => {
      const idx = solutions.findIndex((s) => s.id === prev)
      return solutions[(idx + 1) % solutions.length].id
    })
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(advance, 5000)
    return () => clearInterval(timer)
  }, [paused, advance])

  const handleTabClick = (id: string) => {
    setActive(id)
    setPaused(true)
    setTimeout(() => setPaused(false), 15000)
  }

  const current = solutions.find((s) => s.id === active)!

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {solutions.map((s) => (
            <button
              key={s.id}
              onClick={() => handleTabClick(s.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === s.id
                  ? 'bg-green-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <s.icon className="w-4 h-4" />
              {s.label}
            </button>
          ))}
        </motion.div>

        {/* Active solution */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Headline + description */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {current.headline}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {current.description}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {current.metrics.map((m) => (
              <div
                key={m.label}
                className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100"
              >
                <m.icon className="w-5 h-5 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 font-mono-metric mb-1">
                  {m.value}
                </div>
                <div className="text-sm text-gray-500">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Capabilities + Use Cases */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Capabilities</h3>
              <div className="space-y-3">
                {current.capabilities.map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Use cases</h3>
              <div className="space-y-4">
                {current.useCases.map((u) => (
                  <div key={u.industry} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="text-sm font-semibold text-gray-900 mb-1">{u.industry}</div>
                    <div className="text-xs text-gray-500">{u.example}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
