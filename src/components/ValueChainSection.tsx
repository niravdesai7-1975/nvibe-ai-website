'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Database, Cpu, Users, Package, DollarSign, FileText, Shield, Search, TrendingUp, Headphones, BarChart3 } from 'lucide-react'

export default function ValueChainSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Where NVibe sits in your value chain
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            NVibe powers the entire supplier → distributor → customer journey with AI — deployed privately in your VPC.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Suppliers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-200 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Suppliers</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">Feed NVibe with your business data</p>
            <ul className="space-y-3">
              {['Product catalogs', 'Inventory & pricing', 'Compliance docs', 'Technical specs'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NVibe (Center) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_70%)]" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">NVibe Platform</h3>
              </div>
              <p className="text-sm text-green-100 mb-4">AI-powered intelligence layer</p>
              <ul className="space-y-3">
                {[
                  { icon: Search, label: 'Semantic Search & Q/A' },
                  { icon: TrendingUp, label: 'Lead scoring & upsells' },
                  { icon: Headphones, label: 'AI customer support' },
                  { icon: DollarSign, label: 'SLA estimates & quoting' },
                  { icon: BarChart3, label: 'Revenue analytics' },
                  { icon: Shield, label: 'Procurement intelligence' },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm text-white">
                    <Icon className="w-4 h-4 text-green-200 flex-shrink-0" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Customers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl border border-gray-200 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Customers</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">Get instant, intelligent service</p>
            <ul className="space-y-3">
              {['Technical product search', 'Instant quoting', 'Order tracking', 'AI-powered support'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Arrow indicators for desktop */}
        <div className="hidden lg:flex justify-center items-center gap-4 mt-8">
          <span className="text-sm text-gray-400">Data flows in</span>
          <ArrowRight className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium text-green-600">NVibe processes</span>
          <ArrowRight className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">Value flows out</span>
        </div>
      </div>
    </section>
  )
}
