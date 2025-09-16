'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 w-full bg-black text-white z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center space-x-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('#home')}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">N</span>
          </div>
          <span className="text-lg sm:text-xl font-bold text-green-500">NVibe AI</span>
        </motion.a>
        
        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-6 lg:gap-8 font-sans text-sm lg:text-base">
          <li><a href="#home" className="hover:text-gray-300 transition-colors" onClick={() => scrollToSection('#home')}>Home</a></li>
          <li><a href="#solutions" className="hover:text-gray-300 transition-colors" onClick={() => scrollToSection('#solutions')}>Solutions</a></li>
          <li><a href="#nvidia" className="hover:text-gray-300 transition-colors" onClick={() => scrollToSection('#nvidia')}>Demo</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition-colors" onClick={() => scrollToSection('#contact')}>Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/95 border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-3">
            <a 
              href="#home" 
              className="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
              onClick={() => scrollToSection('#home')}
            >
              Home
            </a>
            <a 
              href="#solutions" 
              className="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
              onClick={() => scrollToSection('#solutions')}
            >
              Solutions
            </a>
            <a 
              href="#nvidia" 
              className="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
              onClick={() => scrollToSection('#nvidia')}
            >
              Demo
            </a>
            <a 
              href="#contact" 
              className="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
              onClick={() => scrollToSection('#contact')}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
