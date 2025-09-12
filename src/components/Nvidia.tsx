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
        <motion.div
          className="h-12 w-32 bg-gradient-to-r from-green-400 to-green-600 rounded flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-black font-bold text-lg">NVibe</span>
        </motion.div>
        <p className="text-lg font-sans group relative">
          Get Fortune 500 insights without their budget
          <span className="absolute hidden group-hover:block bg-gray-900 text-white p-2 rounded mt-2">
            Powered by NVibe + NVIDIA
          </span>
        </p>
      </motion.div>
    </section>
  );
}
