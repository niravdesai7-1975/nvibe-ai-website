'use client';
import { motion } from 'framer-motion';

export default function Nav() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
          <span className="text-xl font-bold text-green-500">Demo</span>
        </motion.div>
        
        {/* Navigation Links */}
        <ul className="flex gap-8 font-sans text-sm md:text-base">
          <li><button onClick={() => scrollToSection('#home')} className="hover:text-gray-300 transition-colors">Home</button></li>
          <li><button onClick={() => scrollToSection('#solutions')} className="hover:text-gray-300 transition-colors">Solutions</button></li>
          <li><button onClick={() => scrollToSection('#nvidia')} className="hover:text-gray-300 transition-colors">NVibe</button></li>
          <li><button onClick={() => scrollToSection('#contact')} className="hover:text-gray-300 transition-colors">Contact</button></li>
        </ul>
      </div>
    </motion.nav>
  );
}
