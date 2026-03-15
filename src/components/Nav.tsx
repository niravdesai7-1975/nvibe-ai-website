'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, User, LogOut } from 'lucide-react'
import { useAuth } from '@/contexts/MockAuthContext'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

const navLinks = [
  { name: 'Platform', href: '/platform' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Benchmarks', href: '/benchmarks.html' },
  { name: 'Trust', href: '/trust' },
  { name: 'About', href: '/about' },
]

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const { user, signOut } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  const scrollToContact = () => {
    setIsMobileMenuOpen(false)
    if (pathname === '/') {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push('/#contact')
    }
  }

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-lg font-bold text-gray-900">NVibe AI</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                    ? 'text-green-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={scrollToContact}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Desktop auth */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <a
                  href="/demo"
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  <User className="w-4 h-4" />
                  Dashboard
                </a>
                <button
                  onClick={signOut}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Sign In
                </button>
                <a
                  href="https://demo.nvibe.ai"
                  className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  Try Demo →
                </a>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={scrollToContact}
              className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 w-full text-left"
            >
              Contact
            </button>
            <div className="pt-3 border-t border-gray-100 space-y-2">
              {user ? (
                <>
                  <a href="/demo" className="block py-2 text-sm font-medium text-green-600" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</a>
                  <button onClick={() => { signOut(); setIsMobileMenuOpen(false); }} className="block py-2 text-sm text-gray-500 w-full text-left">Sign Out</button>
                </>
              ) : (
                <>
                  <button onClick={() => { setIsLoginOpen(true); setIsMobileMenuOpen(false); }} className="block py-2 text-sm text-gray-600 w-full text-left">Sign In</button>
                  <a href="https://demo.nvibe.ai" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-green-600 w-full text-left">Try Demo →</a>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modals — kept exactly as-is */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={() => { setIsLoginOpen(false); setIsRegisterOpen(true); }}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => { setIsRegisterOpen(false); setIsLoginOpen(true); }}
      />
    </>
  )
}
