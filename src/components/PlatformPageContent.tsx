'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import {
  MessageSquare,
  Inbox,
  FileText,
  BarChart3,
  Clock,
  Users,
  Shield,
  ArrowRight,
  Cpu,
  Brain,
  RefreshCw,
  Mic,
  Phone,
  Mail,
  Hash,
  Globe,
  Zap,
  Database,
  Lock,
  CheckCircle2,
} from 'lucide-react'

/* ── Three Pillars ────────────────────────────────────── */
const pillars = [
  {
    icon: Cpu,
    title: 'Agent OS',
    subtitle: 'The operational layer',
    description: 'Full customer operations platform — agent console, ticketing, knowledge base, analytics, SLA management, and accounts. Everything your team needs to run support, sales, and procurement.',
    features: [
      'Agent console with live AI copilot',
      'Multi-channel inbox: email, chat, SMS, voice',
      'Kanban + table ticketing views',
      'Knowledge base with AI-indexed search',
      'SLA tracking and breach alerts',
      'Accounts, contacts, and service contracts',
    ],
  },
  {
    icon: Brain,
    title: 'Dynamic Inference Engine',
    subtitle: 'The AI layer',
    description: 'Domain-specific models fine-tuned on your data, served via NVIDIA TensorRT-LLM and Triton — inside your VPC. Not a GPT wrapper. Your model, your infrastructure, your data.',
    features: [
      'NVIDIA TensorRT-LLM inference (10,710 tok/s)',
      'NeMo fine-tuning on your domain data',
      'Triton model serving with auto-scaling',
      '4-agent safety pipeline per response',
      'Constitutional AI guardrails',
      'RAG with vector search over your KB',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Continuous Flywheel',
    subtitle: 'The improvement layer',
    description: 'Every conversation makes the model smarter. Automated retraining, A/B testing, and performance monitoring — the AI improves continuously without manual intervention.',
    features: [
      'Automated model retraining from conversations',
      'A/B testing across model versions',
      'Real-time quality and drift monitoring',
      'Human feedback loop integration',
      'Cost and latency optimization',
      'Benchmark tracking against baselines',
    ],
  },
]

/* ── Platform Features ────────────────────────────────── */
const platformFeatures = [
  { icon: MessageSquare, title: 'Agent Console', description: 'Live AI suggestions, real-time conversation, customer context panel. AI works alongside human agents.' },
  { icon: Inbox, title: 'Ticketing + Inbox', description: 'Kanban and table views. Multi-channel unified inbox — email, chat, SMS, voice. Thread-based, customer-centric.' },
  { icon: FileText, title: 'Knowledge Base', description: 'Versioned articles, categories, AI-indexed search. The model pulls answers from your KB in real-time.' },
  { icon: BarChart3, title: 'Analytics Dashboard', description: 'Resolution rates, response times, agent performance, CSAT. AI resolution counter and cost savings.' },
  { icon: Clock, title: 'SLA Management', description: 'Policies, milestones, breach alerts. Automatic SLA tracking per customer tier and service contract.' },
  { icon: Users, title: 'Accounts + Contacts', description: 'Full B2B and B2C data model with service contracts. 29-table schema built for enterprise operations.' },
]

/* ── Channels ─────────────────────────────────────────── */
const channels = [
  { icon: Globe, name: 'Web Chat', description: 'Embedded widget on your site' },
  { icon: Mail, name: 'Email', description: 'Automated triage and response' },
  { icon: Phone, name: 'Voice', description: 'AI voice agent with STT/TTS' },
  { icon: Hash, name: 'SMS', description: 'Two-way conversational SMS' },
  { icon: Mic, name: 'Voice (IVR)', description: 'Phone tree replacement' },
  { icon: MessageSquare, name: 'API', description: 'Integrate into any channel' },
]

/* ── Pricing ──────────────────────────────────────────── */
const pricingTiers = [
  {
    name: 'Starter',
    price: '$2K',
    per: '/month',
    features: ['Up to 5 agents', 'Email + web chat', '5,000 AI resolutions/mo', 'Knowledge base', 'Basic analytics'],
  },
  {
    name: 'Professional',
    price: '$5K',
    per: '/month',
    features: ['Unlimited agents', 'All channels incl. voice & SMS', 'Unlimited AI resolutions', 'SLA management', 'Custom fine-tuning', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$10K',
    per: '/month',
    features: ['VPC deployment', 'SSO / SAML', 'Dedicated inference cluster', 'Custom model training', 'Dedicated success manager', 'SLA guarantee'],
  },
]

/* ── Sections ─────────────────────────────────────────── */

function PlatformHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-6">
            <Cpu className="w-4 h-4" />
            Platform
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Three layers. One platform.
            <br />
            <span className="gradient-text">From GPU to customer conversation.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Agent OS for operations. Dynamic Inference Engine for AI. Continuous Flywheel
            for improvement. All deployed in your VPC.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ThreePillars() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="bg-white rounded-xl border border-gray-100 p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                <pillar.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{pillar.title}</h3>
              <p className="text-sm text-green-600 font-medium mb-3">{pillar.subtitle}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{pillar.description}</p>
              <div className="space-y-2">
                {pillar.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Agent OS features</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Everything your operations team needs — built for AI-first workflows.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-xl border border-gray-100 p-6"
            >
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-3">
                <feature.icon className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ChannelStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Every channel, one platform</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Meet your customers wherever they are — same AI, same brand voice.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="text-center p-5 rounded-xl border border-gray-100 bg-white"
            >
              <ch.icon className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <h3 className="text-sm font-semibold text-gray-900 mb-1">{ch.name}</h3>
              <p className="text-xs text-gray-500">{ch.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SecuritySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const points = [
    { icon: Shield, text: 'VPC-native deployment — your infrastructure, your data' },
    { icon: Lock, text: 'PostgreSQL Row-Level Security on every table' },
    { icon: Database, text: 'Multi-tenant isolation with per-org encryption' },
    { icon: Zap, text: 'Zero egress — AI inference runs locally on your GPUs' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Shield className="w-10 h-10 text-green-400 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Security and multi-tenancy</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Enterprise-grade security built in from day one. Not bolted on later.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {points.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-start gap-3 text-left p-4 rounded-lg bg-gray-800/50"
            >
              <p.icon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">{p.text}</span>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="/trust"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="inline-flex items-center gap-2 mt-8 text-green-400 text-sm font-medium hover:text-green-300 transition-colors"
        >
          See full Trust & Security page <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  )
}

function PricingSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Pricing</h2>
          <p className="mt-4 text-gray-500">
            SaaS pricing. No per-token surprises. No consulting fees.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
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
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PlatformCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to see it live?</h2>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">
          Book a 20-minute call. We&apos;ll walk through the platform with your use case.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/#contact" className="btn-primary inline-flex items-center justify-center gap-2">
            Book a Demo <ArrowRight className="w-5 h-5" />
          </a>
          <a href="https://demo.nvibe.ai" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2">
            Try the Platform →
          </a>
        </div>
      </motion.div>
    </section>
  )
}

/* ── Page ─────────────────────────────────────────────── */
export default function PlatformPageContent() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />
      <PlatformHero />
      <ThreePillars />
      <FeatureGrid />
      <ChannelStrip />
      <SecuritySection />
      <PricingSection />
      <PlatformCTA />
      <Footer />
    </main>
  )
}
