'use client';
import { motion } from 'framer-motion';

export default function Nvidia() {
  return (
    <section id="nvidia" className="py-16 bg-black text-white text-center">
      <motion.div
        className="flex flex-col items-center gap-4 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">Powered by NVIDIA Technology</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Leveraging NVIDIA's cutting-edge AI platform to deliver unparalleled performance and accuracy in machine learning applications.
        </p>
      </motion.div>
    </section>
  );
}
