'use client'

import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function NvidiaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="nvidia" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Powered by <span className="nvidia-green">NVIDIA</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="relative inline-block"
            >
              {/* NVIDIA Logo */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-32 h-32 mx-auto mb-8 relative"
              >
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-black font-bold text-4xl">NVIDIA</span>
                </div>
                
                {/* Glow effect */}
                <motion.div
                  animate={{ 
                    scale: isHovered ? 1.2 : 1,
                    opacity: isHovered ? 0.3 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-green-400 rounded-2xl blur-xl"
                />
              </motion.div>

              {/* Tagline */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-3xl font-semibold text-white mb-6"
              >
                Industry-leading AI/ML Performance
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-white/70 mb-8 max-w-2xl mx-auto"
              >
                Leveraging NVIDIA&apos;s cutting-edge GPU technology and AI frameworks 
                to deliver unprecedented performance and accuracy in machine learning applications.
              </motion.p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { title: 'GPU Acceleration', desc: 'High-performance computing power' },
                  { title: 'AI Frameworks', desc: 'TensorFlow, PyTorch, CUDA support' },
                  { title: 'Real-time Processing', desc: 'Low-latency inference capabilities' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-white/60">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="glass rounded-lg px-4 py-2 whitespace-nowrap">
                    <p className="text-sm text-white font-medium">
                      NVIDIA RTX & A100 GPU Technology
                    </p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/20" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
