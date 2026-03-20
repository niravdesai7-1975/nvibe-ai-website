'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Nav from './Nav'
import Footer from './Footer'

export default function AboutPageContent() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />

      {/* Hero — Mission */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-4">Our Mission</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Enterprise revenue runs on<br />
              <span className="gradient-text">people doing work AI should do.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We're fixing the most expensive inefficiency in B2B — the gap between a customer signal and a revenue outcome. Quotes that take days. Pipeline that goes undetected. Support tickets that never become opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Thesis */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why NVibe exists</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Generic AI doesn't work in the enterprise. A language model that doesn't know your 10,000 SKUs, your margin rules, your customer history, or your compliance requirements can't run your revenue. It can write an email. That's not the problem.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The problem is that Fortune 500 sales teams are still quoting in Excel, missing revenue signals in support tickets, and losing deals because a three-minute job takes three days. That's not a people problem. That's a tooling problem — and it's worth trillions.
            </p>
            <blockquote className="border-l-4 border-green-500 pl-6 py-3 mb-8">
              <p className="text-xl text-gray-800 italic leading-relaxed">
                &ldquo;AI that lives outside your firewall, not trained on your business, stalls. We built NVibe for the reality of the enterprise — VPC-native, fine-tuned, compliant, and deployable in days.&rdquo;
              </p>
            </blockquote>

            <p className="text-lg text-gray-600 leading-relaxed">
              NVibe was founded by operators who spent 25 years shipping AI and analytics products to Fortune 500 enterprises at $1.2B ARR and 1M+ users on platforms like Salesforce and SAP. We know what enterprise deployment actually takes — and we built NVibe to clear every one of those hurdles by default.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Traction</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              NVibe is working with 12 design partners across industrial distribution, healthcare, and manufacturing — co-building with real catalogs, real quoting workflows, and real revenue data.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { num: '12', label: 'Design Partners' },
                { num: '3 min', label: 'Avg Quote Turnaround' },
                { num: '70%', label: 'First-Contact Resolution' },
                { num: '$30T', label: 'Revenue Market' },
              ].map(s => (
                <div key={s.label} className="text-center p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">{s.num}</div>
                  <div className="text-sm text-gray-500 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Built with</h3>
            <div className="flex flex-wrap gap-3">
              {['NVIDIA Inception Partner', 'Google Cloud Partner', 'SOC 2 Type II', 'HIPAA Ready', 'VPC-Native', 'ERP-Integrated'].map(b => (
                <div key={b} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200">
                  <span className="w-2 h-2 rounded-full bg-green-600" />
                  <span className="text-sm text-gray-600 font-semibold">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The team</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We are enterprise operators turned founders. Our team has shipped AI products to some of the world's largest companies and has seen firsthand where the gaps are — and what it takes to close them.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-1">Leadership</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">25 years in enterprise AI</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Built and shipped AI and analytics at $1.2B ARR and 1M+ users across Salesforce and SAP ecosystems. Deep domain expertise in CPQ, ERP, and enterprise deployment.</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-1">We&apos;re Hiring</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Building the founding team</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">If you want to build enterprise AI that actually ships — not demos, not decks — and you have depth in ML, infrastructure, or enterprise GTM, let&apos;s talk.</p>
                <a
                  href="mailto:team@nvibe.ai"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700"
                >
                  team@nvibe.ai <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Let&apos;s talk about your use case
            </h2>
            <p className="text-gray-500 mb-8 text-lg">
              Book a 20-minute call. We&apos;ll walk through exactly where NVibe fits your workflow.
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

      <Footer />
    </main>
  )
}
