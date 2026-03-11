'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import {
  DollarSign, Clock, Lock, Cpu, Shield, Server, ArrowRight,
  Headphones, TrendingUp, Megaphone, CheckCircle2, XCircle
} from 'lucide-react'

const painPoints = [
  {
    icon: DollarSign,
    title: '$2.5M–$4.5M annual TCO',
    description: 'Licenses, consulting, customization, admin, and agent seats. Salesforce charges at every layer — and costs compound annually.',
  },
  {
    icon: Clock,
    title: '3–12 month implementations',
    description: 'Enterprise Salesforce deployments require months of consulting, data migration, and custom Apex development before going live.',
  },
  {
    icon: Cpu,
    title: 'AI bolted on, not built in',
    description: 'Salesforce Einstein is a wrapper around generic LLMs. It hallucinates your business data because it was never trained on it.',
  },
  {
    icon: Lock,
    title: 'Your data on their servers',
    description: 'Every Einstein AI call routes through Salesforce infrastructure. Customer data leaves your network with every interaction.',
  },
]

const cloudComparisons = [
  {
    cloud: 'Service Cloud',
    icon: Headphones,
    salesforce: {
      pricing: '$150–300/agent/mo',
      features: ['Bolt-on Einstein AI', 'Generic LLM responses', 'Months to customize', 'Data routed through Salesforce'],
    },
    nvibe: {
      pricing: '$99/agent/mo',
      features: ['AI-native from the ground up', 'Zero hallucination — trained on your data', 'Production in 3 weeks', 'On-premise VPC deployment'],
    },
  },
  {
    cloud: 'Sales Cloud',
    icon: TrendingUp,
    salesforce: {
      pricing: '$75–300/user/mo',
      features: ['Einstein Copilot (generic)', 'Rules-based lead scoring', 'Manual pipeline management', 'Third-party AI APIs'],
    },
    nvibe: {
      pricing: 'Custom AI models',
      features: ['AI trained on your pipeline data', 'Predictive lead scoring with your history', 'Automated opportunity insights', 'On-premise NVIDIA GPU inference'],
    },
  },
  {
    cloud: 'Marketing Cloud',
    icon: Megaphone,
    salesforce: {
      pricing: '$1,250–$15,000/mo',
      features: ['Segmentation-first approach', 'Rules-based personalization', 'Einstein generic recommendations', 'Complex multi-product licensing'],
    },
    nvibe: {
      pricing: 'AI-driven personalization',
      features: ['Real-time customer intelligence', 'Fine-tuned AI personalization', 'Unified data model across channels', 'Single platform, no add-ons'],
    },
  },
]

const deploymentFeatures = [
  {
    icon: Server,
    title: 'VPC-Native Deployment',
    description: 'NVibe deploys entirely inside your VPC on GCP, AWS, or on-premise hardware. No customer data ever leaves your infrastructure.',
  },
  {
    icon: Cpu,
    title: 'NVIDIA H100 GPU Inference',
    description: 'TensorRT-LLM optimized inference on NVIDIA H100 GPUs. 10,710 tokens/second throughput — served via NVIDIA Triton Inference Server.',
  },
  {
    icon: Shield,
    title: 'Zero Data Leakage',
    description: 'Unlike Salesforce Einstein which routes through external servers, NVibe runs AI inference locally. PostgreSQL Row-Level Security on every table.',
  },
]

const tcoRows = [
  { category: 'Platform licenses (40 agents)', salesforce: '$80K–$240K/yr', nvibe: 'Included' },
  { category: 'Platform fees (data, encryption, API)', salesforce: '$50K–$200K/yr', nvibe: 'Included' },
  { category: 'Implementation consulting', salesforce: '$100K–$500K', nvibe: '$0 — deploy in 3 weeks' },
  { category: 'Ongoing admin + customization', salesforce: '$75K–$200K/yr', nvibe: '$0 — AI-managed' },
  { category: 'AI add-on (Einstein)', salesforce: '$50–$75/user/mo extra', nvibe: 'Built in' },
  { category: 'Contact center agents (40 FTEs)', salesforce: '$1.4M–$2.0M/yr', nvibe: 'AI resolves 70%+' },
]

const faqs = [
  {
    q: 'Is NVibe AI a direct replacement for Salesforce Service Cloud?',
    a: 'Yes. NVibe mirrors the Salesforce Service Cloud data model with a 29-table schema including accounts, contacts, cases, knowledge articles, and SLA management. AI is built in as the primary actor — not bolted on. Migration takes approximately 3 weeks.',
  },
  {
    q: 'Can NVibe AI replace Salesforce Sales Cloud and Marketing Cloud?',
    a: 'NVibe provides AI-native alternatives to Sales Cloud and Marketing Cloud. For sales, custom AI models are trained on your pipeline data for lead scoring, opportunity insights, and forecasting. For marketing, AI-driven personalization replaces rules-based segmentation with real-time customer intelligence.',
  },
  {
    q: 'How does on-premise AI deployment work with NVibe?',
    a: 'NVibe deploys entirely inside your VPC on NVIDIA H100 GPUs. The stack includes TensorRT-LLM for inference, NVIDIA NeMo for fine-tuning, and NVIDIA Triton Inference Server for serving. No customer data ever leaves your infrastructure.',
  },
  {
    q: 'How long does it take to migrate from Salesforce to NVibe AI?',
    a: 'NVibe reaches production deployment within 3 weeks. Week 1-2: data migration and custom AI model training using NVIDIA NeMo. Week 3: VPC deployment, load testing, and go-live. Compare this to typical Salesforce implementations that take 3-12 months.',
  },
]

export default function SalesforceAlternativeContent() {
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
            The AI-Native Alternative to
            <span className="block gradient-text mt-1">Salesforce Service, Sales &amp; Marketing Cloud</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto"
          >
            Replace Salesforce with an AI-native platform deployed on-premise on NVIDIA H100 GPUs.
            Custom AI trained on your data. Zero hallucinations. $99/agent/month — not $2.5M+/year.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/#contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Book a Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/platform" className="btn-secondary inline-flex items-center justify-center gap-2">
              See Full Platform
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why companies are leaving Salesforce */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Why companies are leaving Salesforce
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {painPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl border border-gray-100 p-8"
              >
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud-by-Cloud Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Salesforce vs NVibe AI — cloud by cloud
          </h2>
          <p className="text-gray-500 text-center max-w-3xl mx-auto mb-10">
            NVibe replaces Salesforce Service Cloud, Sales Cloud, and Marketing Cloud with a single AI-native platform deployed on your infrastructure.
          </p>
          <div className="space-y-8">
            {cloudComparisons.map((comp, i) => (
              <motion.div
                key={comp.cloud}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-gray-100 overflow-hidden"
              >
                <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                    <comp.icon className="w-4 h-4 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{comp.cloud}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Salesforce column */}
                  <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Salesforce</p>
                    <p className="text-sm font-mono text-gray-500 mb-4">{comp.salesforce.pricing}</p>
                    <ul className="space-y-2">
                      {comp.salesforce.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-500">
                          <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* NVibe column */}
                  <div className="p-6 bg-green-50/30">
                    <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">NVibe AI</p>
                    <p className="text-sm font-mono text-gray-900 font-medium mb-4">{comp.nvibe.pricing}</p>
                    <ul className="space-y-2">
                      {comp.nvibe.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-900">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Premise AI Deployment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            On-premise AI for sales, marketing &amp; customer support
          </h2>
          <p className="text-gray-500 text-center max-w-3xl mx-auto mb-10">
            Unlike Salesforce Einstein, NVibe runs AI inference entirely inside your infrastructure using NVIDIA H100 GPUs, TensorRT-LLM, and NVIDIA NeMo fine-tuning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deploymentFeatures.map((feature, i) => (
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

      {/* TCO Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Total cost of ownership: Salesforce vs NVibe AI
          </h2>
          <p className="text-gray-500 text-center max-w-3xl mx-auto mb-10">
            For a typical enterprise with 40 support agents, the Salesforce stack costs $2.5M–$4.5M per year. NVibe replaces it for $132K/year.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-100 overflow-hidden">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="text-left py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Cost Category</th>
                  <th className="text-left py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Salesforce</th>
                  <th className="text-left py-3 px-6 text-xs font-semibold text-green-600 uppercase tracking-wider">NVibe AI</th>
                </tr>
              </thead>
              <tbody>
                {tcoRows.map((row) => (
                  <tr key={row.category} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 px-6 text-sm text-gray-600">{row.category}</td>
                    <td className="py-3 px-6 text-sm font-mono text-gray-500">{row.salesforce}</td>
                    <td className="py-3 px-6 text-sm font-mono font-medium text-gray-900">{row.nvibe}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 text-sm font-bold text-gray-900">Annual TCO</td>
                  <td className="py-4 px-6 font-mono text-sm font-bold text-red-600">$2.5M – $4.5M</td>
                  <td className="py-4 px-6 font-mono text-sm font-bold text-green-600">$132K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl border border-gray-100 p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to replace Salesforce?</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-6">
          See how NVibe AI can replace your Salesforce Service, Sales, and Marketing Cloud — deployed on-premise, at a fraction of the cost.
        </p>
        <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
          Book a Demo <ArrowRight className="w-5 h-5" />
        </a>
      </section>

      <Footer />
    </main>
  )
}
