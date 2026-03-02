'use client'

import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">NVibe AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
              Custom AI for your business — from the GPU up. Trained on your data,
              deployed in your VPC, faster than Together AI on all 5 batch sizes.
            </p>
            <div className="space-y-2">
              {[
                { icon: Mail, text: 'nirav@nvibe.ai', href: 'mailto:nirav@nvibe.ai' },
                { icon: Phone, text: '646-413-4795', href: 'tel:+16464134795' },
                { icon: MapPin, text: 'San Francisco, CA', href: '#' },
              ].map((info) => (
                <a
                  key={info.text}
                  href={info.href}
                  className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-sm"
                >
                  <info.icon className="w-4 h-4" />
                  <span>{info.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-2">
              {[
                { name: 'Platform', href: '/platform' },
                { name: 'Benchmarks', href: '/benchmarks' },
                { name: 'Demo', href: '/demo' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Get Started</h3>
            <p className="text-gray-500 text-sm mb-4">
              3 pilot slots this quarter. Direct founder access.
            </p>
            <a
              href="/#contact"
              className="inline-block px-5 py-2.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} NVibe AI. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-700 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
