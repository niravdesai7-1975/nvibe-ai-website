'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Cpu, Cloud } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-500">
              About NVibe AI
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              We are at the forefront of AI innovation, specializing in solutions that bridge the gap between cutting-edge technology and practical business applications. Our platform leverages NVIDIA&apos;s powerful computing capabilities to deliver unprecedented performance and accuracy, serving millions of users worldwide.
            </p>
            
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-lg">
                  Powered by NVIDIA&apos;s advanced AI platform
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-lg">
                  Industry-leading accuracy and performance
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-lg">
                  Scalable solutions for businesses of all sizes
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Video and Tech Stack */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* YouTube Video Card */}
            <motion.div
              className="bg-gray-900 p-4 rounded-xl border border-gray-700 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/gwXBj6MrVdY"
                  title="NVibe AI Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* Tech Stack Visual Section */}
            <motion.div
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 flex items-center gap-4"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">N</span>
              </div>
              <span className="text-white text-lg font-semibold">NVIDIA Platform</span>
            </motion.div>
            
            <motion.div
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 flex items-center gap-4"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Cpu className="w-12 h-12 text-blue-500" />
              <span className="text-white text-lg font-semibold">AI/ML</span>
            </motion.div>
            
            <motion.div
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 flex items-center gap-4"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Cloud className="w-12 h-12 text-cyan-500" />
              <span className="text-white text-lg font-semibold">Cloud Native</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

