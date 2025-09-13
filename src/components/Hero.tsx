'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="h-screen bg-gray-100 relative">
      <motion.div
        className="flex flex-col items-center justify-center h-full text-gray-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-5xl md:text-7xl font-bold font-sans text-center">
          An Innovative AI-Powered Solutions
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-700">
          custom build for your needs on industry standards
        </p>
        <p className="text-lg md:text-xl mt-2 text-green-500 font-semibold">
          Driven by NVIDIA's Platform
        </p>
        <motion.a
          href="#contact"
          className="mt-6 px-6 py-3 bg-green-500 text-white rounded-full font-semibold"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Transform your business with cutting-edge AI technology that supercharges your business.
        </motion.a>
      </motion.div>
    </div>
  );
}
