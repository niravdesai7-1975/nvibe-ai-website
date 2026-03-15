'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Nav from './Nav'
import Footer from './Footer'

export default function AboutPageContent() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              25 years inside the enterprise.
              <br />
              <span className="gradient-text">Now building the AI it actually needs.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-24 h-24 rounded-full border-2 border-gray-200 p-1 bg-gray-100 flex-shrink-0">
                <Image
                  src="/images/nirav-desai.png"
                  alt="Nirav Desai"
                  width={96}
                  height={96}
                  className="w-full h-full rounded-full object-cover"
                  priority
                  unoptimized
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Nirav Desai</h2>
                <p className="text-green-600 font-semibold text-lg">Founder & CTO</p>
                <a
                  href="https://www.linkedin.com/in/ndesai730/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors mt-1 inline-block"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Nirav spent 25 years on the Salesforce and SAP platform shipping AI and Analytics
              products to Fortune 500 teams at a scale of 1M+ users and $1.2B ARR. He built NVibe
              because he saw the gap between what enterprises need — VPC-native, fine-tuned,
              compliant — and what the market offers.
            </p>

            <blockquote className="border-l-4 border-green-500 pl-6 py-3 mb-8">
              <p className="text-xl text-gray-800 italic leading-relaxed">
                &ldquo;Two and a half decades inside the enterprise taught me what ships and what
                stalls. AI that lives outside your firewall, not built for your business, stalls.
                NVibe is built for that reality — to ship.&rdquo;
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
            <p className="text-gray-500 mb-8">
              Book a 20-minute call — Nirav walks through every demo personally.
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
