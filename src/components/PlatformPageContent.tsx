'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import {
  MessageSquare, Inbox, FileText, BarChart3, Clock, Users, Shield, ArrowRight
} from 'lucide-react'

const platformFeatures = [
  {
    icon: MessageSquare,
    title: 'Agent Console',
    description: 'Live AI suggestions, real-time conversation, customer context panel. AI is a first-class actor alongside human agents.',
  },
  {
    icon: Inbox,
    title: 'Ticketing + Inbox',
    description: 'Kanban board + table view. Multi-channel unified inbox — email, web chat, SMS. Thread-based, customer-centric.',
  },
  {
    icon: FileText,
    title: 'Knowledge Base',
    description: 'Versioned articles, categories, AI-indexed search. The model pulls answers from your KB in real-time.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Resolution rates, response times, agent performance, CSAT. AI resolution counter + cost savings display.',
  },
  {
    icon: Clock,
    title: 'SLA Management',
    description: 'Policies, milestones, breach alerts. Automatic SLA tracking per customer tier and service contract.',
  },
  {
    icon: Users,
    title: 'Accounts + Contacts',
    description: 'Full B2B and B2C data model with service contracts. 29-table schema mirrors Salesforce Service Cloud.',
  },
]

const competitorComparison = [
  {
    name: 'Salesforce Service Cloud',
    bet: 'CRM integration, enterprise workflow',
    pricing: '$150–300/agent/mo',
    better: 'Deep CRM, compliance, enterprise procurement',
    miss: 'Pre-AI architecture, weeks to deploy, rigid',
  },
  {
    name: 'Zendesk',
    bet: 'Volume management, ticket routing',
    pricing: 'Seat + AI add-on',
    better: 'Ecosystem, 1,000+ integrations',
    miss: 'Reactive; AI is a separate paid product',
  },
  {
    name: 'Intercom',
    bet: 'Proactive engagement + AI deflection',
    pricing: 'Seat + $0.99/resolution',
    better: 'Fin AI Engine, behavioral triggers',
    miss: 'Generic LLM — Fin is not domain-customized',
  },
  {
    name: 'Kustomer',
    bet: 'AI-native CRM, full history',
    pricing: '$0.60/conversation',
    better: 'Persistent memory across interactions',
    miss: 'Per-use pricing; no GPU ownership',
  },
]

const zomatoComparison = [
  { dimension: 'Inference', zomato: 'Together AI per-token API', nvibe: 'Self-hosted Triton on H100 (fixed cost)' },
  { dimension: 'Guardrails', zomato: 'Custom-built by 100+ engineers', nvibe: 'NeMo Guardrails (free, Apache 2.0)' },
  { dimension: 'Infrastructure', zomato: 'Kafka + Redis + microservices', nvibe: 'Managed GCP: Cloud SQL + Cloud Run' },
  { dimension: 'Pricing', zomato: 'Per-token (linear cost growth)', nvibe: 'Fixed GPU cost → $99/agent unlimited' },
]

const pricingTiers = [
  { name: 'Starter', price: '$49', per: '/agent/month', features: ['3 agents', 'Email + webchat', '1,000 AI resolutions/mo'] },
  { name: 'Professional', price: '$99', per: '/agent/month', features: ['Unlimited agents', 'All channels', 'Unlimited AI', 'SLA management'], highlight: true },
  { name: 'Enterprise', price: '$199', per: '/agent/month', features: ['VPC deployment', 'SSO', 'Custom fine-tuning', 'Dedicated support'] },
]

export default function PlatformPageContent() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900"
          >
            AI-Native Customer Support Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto"
          >
            Modeled on Salesforce Service Cloud. Rebuilt from scratch for AI as the primary actor.
            29-table data model, multi-tenant RLS, domain-fine-tuned inference — all included.
          </motion.p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl border border-gray-100 p-8"
              >
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-10 h-10 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Security &amp; multi-tenancy</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            PostgreSQL Row-Level Security on every table — the same pattern Salesforce uses internally.
            VPC-native deployment: no third-party API calls for AI inference.
            Every customer conversation, every model weight, every training example stays inside your infrastructure.
          </p>
        </div>
      </section>

      {/* Competitive landscape */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">How NVibe compares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitorComparison.map((comp) => (
              <div key={comp.name} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-1">{comp.name}</h3>
                <p className="text-xs text-gray-400 font-mono mb-3">{comp.pricing}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="text-green-600 font-medium">Strength:</span> <span className="text-gray-600">{comp.better}</span></p>
                  <p><span className="text-red-400 font-medium">Gap:</span> <span className="text-gray-600">{comp.miss}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zomato proof point */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Validated at Zomato scale
          </h2>
          <p className="text-gray-500 text-center max-w-3xl mx-auto mb-10">
            Zomato (1M+ daily orders) built this architecture with Together AI and 100+ engineers.
            NVibe packages the same capability as a product — at fixed price, for any company.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-100 overflow-hidden">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="text-left py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Dimension</th>
                  <th className="text-left py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Zomato&apos;s Approach</th>
                  <th className="text-left py-3 px-6 text-xs font-semibold text-green-600 uppercase tracking-wider">NVibe&apos;s Approach</th>
                </tr>
              </thead>
              <tbody>
                {zomatoComparison.map((row) => (
                  <tr key={row.dimension} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 px-6 text-sm font-medium text-gray-900">{row.dimension}</td>
                    <td className="py-3 px-6 text-sm text-gray-500">{row.zomato}</td>
                    <td className="py-3 px-6 text-sm font-medium text-gray-900">{row.nvibe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-8 ${
                  tier.highlight
                    ? 'border-green-200 bg-green-50 ring-2 ring-green-500/20'
                    : 'border-gray-100 bg-white'
                }`}
              >
                <h3 className="font-semibold text-gray-900 mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-gray-900 font-mono">{tier.price}</span>
                  <span className="text-gray-500 text-sm">{tier.per}</span>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to see it live?</h2>
        <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
          Book a Demo <ArrowRight className="w-5 h-5" />
        </a>
      </section>

      <Footer />
    </main>
  )
}
