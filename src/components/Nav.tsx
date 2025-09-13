'use client';
import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <motion.nav
      className="fixed top-0 w-full backdrop-blur-md bg-black/80 text-white z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">N</span>
          </div>
          <span className="text-xl font-bold text-green-500">NVibe AI</span>
        </motion.div>
        
        {/* Navigation Links */}
        <ul className="flex gap-8 font-sans text-sm md:text-base">
          <li><a href="#home" className="hover:text-gray-300 transition-colors">Home</a></li>
          <li><a href="#solutions" className="hover:text-gray-300 transition-colors">Solutions</a></li>
          <li><a href="#nvidia" className="hover:text-gray-300 transition-colors">NVibe</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
}
