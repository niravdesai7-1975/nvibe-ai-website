'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, MessageSquare, Layers } from 'lucide-react'
import Nav from './Nav'
import Footer from './Footer'
import ValueChainSection from './ValueChainSection'
import CapabilityPillars from './CapabilityPillars'
import SolutionTabs from './SolutionTabs'

/* ── Hero ─────────────────────────────────────────────── */
function SolutionsHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-6">
            <Layers className="w-4 h-4" />
            5 Solutions, One Platform
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            AI that works across your
            <br />
            <span className="gradient-text">entire revenue engine</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From support automation to procurement intelligence — NVibe turns every
            B2B conversation into a revenue opportunity.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ── How It Works ─────────────────────────────────────── */
function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const steps = [
    { num: '01', title: 'Connect your data', desc: 'We ingest your knowledge base, CRM, tickets, and conversation history.' },
    { num: '02', title: 'Fine-tune your model', desc: 'Domain-specific training on your data — not a generic GPT wrapper.' },
    { num: '03', title: 'Deploy in your VPC', desc: 'Docker containers run inside your infrastructure. No data leaves.' },
    { num: '04', title: 'Go live & improve', desc: 'Launch with real customers. The model improves continuously from every conversation.' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Live in 4 weeks
          </h2>
          <p className="mt-4 text-gray-500">
            From kickoff to production — not months, weeks.
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center font-mono text-sm font-bold flex-shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA ──────────────────────────────────────────────── */
function SolutionsCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <MessageSquare className="w-8 h-8 text-green-400 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Which solution fits your business?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Book a 20-minute call. We&apos;ll map your use case to the right solution
            and show you a live demo with your data.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Book a Demo <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Page ─────────────────────────────────────────────── */
export default function SolutionsPageContent() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />
      <SolutionsHero />
      <ValueChainSection />
      <CapabilityPillars />
      <SolutionTabs />
      <HowItWorks />
      <SolutionsCTA />
      <Footer />
    </main>
  )
}
