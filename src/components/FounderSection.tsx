'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function FounderSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            25 years inside the enterprise. Now building the AI it actually needs.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-5 mb-6">
            <div className="w-20 h-20 rounded-full border-2 border-gray-200 p-1 bg-gray-100 flex-shrink-0">
              <Image
                src="/images/nirav-desai.png"
                alt="Nirav Desai"
                width={80}
                height={80}
                className="w-full h-full rounded-full object-cover"
                priority
                unoptimized
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Nirav Desai</h3>
              <p className="text-green-600 font-semibold">Founder & CTO</p>
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

          <p className="text-gray-600 leading-relaxed mb-4">
            Nirav spent 25 years on the Salesforce and SAP platform shipping AI and Analytics products to Fortune 500
            teams at a scale of 1M+ users and $1.2B ARR. He built NVibe because he saw the gap
            between what enterprises need — VPC-native, fine-tuned, compliant — and what the
            market offers.
          </p>

          <blockquote className="border-l-4 border-green-500 pl-4 py-2">
            <p className="text-gray-700 italic leading-relaxed">
              &ldquo;Two and a half decades inside the enterprise taught me what ships and what
              stalls. AI that lives outside your firewall, not built for your business, stalls.
              NVibe is built for that reality — to ship.&rdquo;
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
