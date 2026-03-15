'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Shield,
  Server,
  Lock,
  Eye,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Bot,
  Brain,
  Scale,
  ScrollText,
  Database,
  Globe,
  Clock,
  Users,
} from 'lucide-react'
import Nav from './Nav'
import Footer from './Footer'

/* ── Hero ─────────────────────────────────────────────── */
function TrustHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Enterprise Security
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Your data never leaves
            <br />
            <span className="gradient-text">your infrastructure</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            NVibe deploys inside your VPC. Every AI response passes through a 4-agent
            safety pipeline. Every action is logged immutably. No data leaves your
            perimeter — ever.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ── VPC Deployment ───────────────────────────────────── */
function VPCSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const points = [
    { icon: Server, title: 'Runs inside your VPC', desc: 'Docker containers deploy to your AWS, GCP, or Azure account. Nothing is hosted on our servers.' },
    { icon: Database, title: 'Your database, your keys', desc: 'Postgres runs in your network. Encryption keys stay in your KMS. We never see raw customer data.' },
    { icon: Lock, title: 'Zero egress by default', desc: 'AI inference runs locally on your GPU instances. No API calls to external LLM providers required.' },
    { icon: Globe, title: 'Data residency compliant', desc: 'Deploy in any region. EU data stays in EU, APAC data stays in APAC. Full sovereignty.' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">VPC-native deployment</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Not &quot;cloud-hosted with encryption.&quot; Actually running on your metal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl border border-gray-100 bg-white"
            >
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                <p.icon className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 4-Agent Safety Pipeline ──────────────────────────── */
function SafetyPipeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const agents = [
    {
      icon: Brain,
      name: 'Primary Agent',
      role: 'Generates the response using your fine-tuned model and knowledge base.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Scale,
      name: 'Constitutional Reviewer',
      role: 'Checks response against your brand policies, tone rules, and forbidden topics.',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Eye,
      name: 'Hallucination Detector',
      role: 'Verifies every claim against source documents. Flags unsupported statements.',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: Shield,
      name: 'Safety Gate',
      role: 'Final check for PII leakage, prompt injection, and policy violations before delivery.',
      color: 'bg-green-50 text-green-600',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            4-agent safety pipeline
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Every AI response passes through four independent verification agents before
            reaching your customer.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative bg-white rounded-xl border border-gray-100 p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-xl ${agent.color} flex items-center justify-center`}>
                    <agent.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{agent.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{agent.role}</p>
                {i < agents.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-full text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Response delivered to customer
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Constitutional AI ────────────────────────────────── */
function ConstitutionalAI() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const rules = [
    'Never reveal internal pricing, margins, or supplier costs',
    'Never promise delivery dates the system cannot guarantee',
    'Never discuss competitors — redirect to own value proposition',
    'Never share PII from one customer with another',
    'Always escalate suicide/self-harm mentions to human agents',
    'Always cite source documents when making factual claims',
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Constitutional AI guardrails
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              You define the rules. The AI follows them — not as suggestions, but as
              hard constraints enforced at the model level. Every response is checked
              against your constitution before delivery.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-green-600 font-medium text-sm hover:text-green-700 transition-colors"
            >
              See it in action <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-gray-900 rounded-xl p-6 font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-4 text-gray-500 text-xs">
              <ScrollText className="w-4 h-4" />
              brand_constitution.yaml
            </div>
            <div className="space-y-3">
              {rules.map((rule, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span className="text-gray-300 text-xs leading-relaxed">{rule}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Audit & Compliance ───────────────────────────────── */
function AuditCompliance() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const items = [
    { icon: ScrollText, title: 'Immutable audit logs', desc: 'Every AI decision, escalation, and customer interaction is logged with tamper-proof timestamps.' },
    { icon: Clock, title: 'Full reasoning traces', desc: 'See exactly why the AI chose each response — which KB articles it consulted, which rules it applied.' },
    { icon: Users, title: 'Role-based access control', desc: 'Admins, agents, and auditors see only what they need. Granular permissions per team and partner.' },
    { icon: FileCheck, title: 'SOC 2 Type II (in progress)', desc: 'Working toward SOC 2 certification. Current controls already meet Trust Services Criteria.' },
    { icon: AlertTriangle, title: 'Real-time anomaly alerts', desc: 'Get notified when AI confidence drops, escalation rates spike, or unusual patterns emerge.' },
    { icon: Bot, title: 'Human-in-the-loop ready', desc: 'Configure escalation thresholds. Low-confidence responses route to human agents automatically.' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Audit & compliance</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Enterprise governance built in from day one — not bolted on later.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl border border-gray-100 p-6"
            >
              <item.icon className="w-5 h-5 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Compliance Roadmap ───────────────────────────────── */
function ComplianceRoadmap() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const milestones = [
    { label: 'Live now', items: ['VPC deployment', 'Constitutional AI', 'Audit logging', 'RBAC', 'Encryption at rest & in transit'] },
    { label: 'Q2 2026', items: ['SOC 2 Type II audit', 'HIPAA BAA support', 'Pen test report'] },
    { label: 'Q3 2026', items: ['ISO 27001', 'GDPR DPA template', 'FedRAMP exploration'] },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Compliance roadmap</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            We&apos;re building toward the certifications your procurement team needs.
          </p>
        </motion.div>

        <div className="space-y-8">
          {milestones.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-24">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  i === 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                }`}>
                  {m.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {m.items.map((item) => (
                  <span
                    key={item}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${
                      i === 0
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-gray-50 text-gray-600 border border-gray-200'
                    }`}
                  >
                    {i === 0 && <CheckCircle2 className="w-3 h-3" />}
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA ──────────────────────────────────────────────── */
function TrustCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready for your security review?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            We&apos;ll walk your CISO through our architecture, share our pen test
            results, and answer every question on your vendor security questionnaire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Schedule Security Review
            </a>
            <a
              href="mailto:nirav@nvibe.ai"
              className="inline-block px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-400 hover:text-white transition-colors"
            >
              Request SOC 2 Report
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Page ─────────────────────────────────────────────── */
export default function TrustPageContent() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />
      <TrustHero />
      <VPCSection />
      <SafetyPipeline />
      <ConstitutionalAI />
      <AuditCompliance />
      <ComplianceRoadmap />
      <TrustCTA />
      <Footer />
    </main>
  )
}
