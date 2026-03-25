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
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-4">Our Mission</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              B2B revenue operations is a<br />
              <span className="gradient-text">$30 trillion market.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              <span className="text-green-600 font-bold">Quotes, Revenue Ops, and Support</span> still handled the way they were 20 years ago. That&apos;s the problem we&apos;re fixing — with AI trained on your business, deployed in your cloud, running your revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder's Journey */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-4">The Person Behind the Company</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Founder&apos;s Journey</h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-5">
              Nirav Desai comes from a family of manufacturers. From a young age, he worked on product design for nuclear power plants and textile machinery. Today, at 78, his father still runs two manufacturing companies — and remains the sole supplier of critical airlock door seals for India&apos;s nuclear plants.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-5">
              Determined to forge his own path, Nirav began his career at Accenture, where he led large-scale global transformations. He then joined Salesforce, where he shaped the strategic vision and execution of Einstein and AgentForce — Salesforce&apos;s flagship AI platform. Under his technical leadership, it scaled from concept to more than 1 million daily active users and generated over $1.2 billion in annual recurring revenue.
            </p>

            <a
              href="https://www.linkedin.com/in/ndesai730/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>

            <p className="text-lg text-gray-600 leading-relaxed">
              With over 25 years of experience driving AI- and data-powered growth strategies for Global 2000 companies across 20+ industries, he understands what enterprise deployment actually takes — and we built NVibe to clear every one of those hurdles by default.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Thesis */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why NVibe exists</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-5">
              In 2023, Nirav founded NVibe AI — because generic AI falls short in the enterprise. A model that doesn&apos;t know your 10,000 SKUs, your margin rules, your customer history, or your compliance requirements can&apos;t run your revenue. It can write an email. That&apos;s not the problem.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-5">
              The problem is that Fortune 500 sales teams are still quoting in Excel, missing revenue signals in support tickets, and losing deals because a three-minute job takes three days. That&apos;s not a people problem. That&apos;s a tooling problem — and it&apos;s worth trillions.
            </p>
            <blockquote className="border-l-4 border-green-500 pl-6 py-3">
              <p className="text-xl text-gray-800 italic leading-relaxed">
                &ldquo;AI that lives outside your firewall, not trained on your business, stalls. We built NVibe for the reality of the enterprise — VPC-native, fine-tuned, compliant, and deployable in days.&rdquo;
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Traction</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              NVibe is working with 12 design partners across industrial distribution, healthcare, and manufacturing — co-building with real catalogs, real quoting workflows, and real revenue data.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
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
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The team</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are enterprise operators turned founders. Our team has shipped AI products to some of the world&apos;s largest companies and has seen firsthand where the gaps are — and what it takes to close them.
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
                  href="mailto:nirav@nvibe.ai"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700"
                >
                  nirav@nvibe.ai <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
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
