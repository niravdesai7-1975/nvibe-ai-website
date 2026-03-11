'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import YouTubePlayer from './YouTubePlayer'

export default function FounderSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Built by a Salesforce AI engineer with NVIDIA GPU expertise — not a generalist
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Founder bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
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
              25 years in Data, Analytics, and AI. 20 years on the Salesforce platform at
              Salesforce and Accenture, engineering AI systems that scaled to 1M+ users and $1.2B ARR.
            </p>

            <blockquote className="border-l-4 border-green-500 pl-4 py-2 mb-4">
              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;We stopped building on top of someone else&apos;s stack. We built our own — from the GPU up.
                NVibe&apos;s inference engine, fine-tuning pipeline, production portal, and benchmarking
                framework were all built full stack from ground up.&rdquo;
              </p>
            </blockquote>

            <p className="text-gray-600 leading-relaxed">
              The result: an NVIDIA TensorRT-LLM inference engine that beats Together AI on all 5 batch sizes,
              an NVIDIA NeMo fine-tuning pipeline that produces zero-hallucination AI customer support models,
              and a production stack served via NVIDIA Triton that runs entirely inside your VPC.
            </p>
          </motion.div>

          {/* Right: YouTube video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
          >
            <YouTubePlayer
              videoId="gwXBj6MrVdY"
              title="NVibe AI Product Demo"
              playbackRate={1.3}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
