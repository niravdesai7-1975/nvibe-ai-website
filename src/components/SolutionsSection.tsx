'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Brain, BarChart3, Cog, Zap } from 'lucide-react'

const solutions = [
  {
    icon: BarChart3,
    title: 'Sales Intelligence',
    description: 'AI-driven insights that predict customer behavior, optimize pricing strategies, and maximize conversion rates with real-time analytics.',
    features: ['Customer Behavior Prediction', 'Dynamic Pricing Optimization', 'Lead Scoring & Qualification', 'Sales Forecasting']
  },
  {
    icon: Cog,
    title: 'Manufacturing Optimization',
    description: 'Streamline production processes with predictive maintenance, quality control, and supply chain optimization powered by AI.',
    features: ['Predictive Maintenance', 'Quality Control Automation', 'Supply Chain Optimization', 'Production Efficiency']
  },
  {
    icon: Brain,
    title: 'Predictive Analytics',
    description: 'Leverage machine learning to forecast trends, identify opportunities, and make data-driven decisions with confidence.',
    features: ['Trend Forecasting', 'Risk Assessment', 'Market Analysis', 'Performance Prediction']
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows to increase efficiency, reduce operational costs, and improve accuracy.',
    features: ['Workflow Automation', 'Task Optimization', 'Error Reduction', 'Cost Efficiency']
  }
]

export default function SolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="solutions" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Solutions
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI technology that revolutionizes 
            sales processes and manufacturing efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-black" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) + 0.3 }}
                      className="flex items-center text-sm text-white/60 group-hover:text-white/80 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Start Your AI Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
