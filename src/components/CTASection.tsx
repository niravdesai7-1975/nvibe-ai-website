'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        try {
          await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            'template_h1vkudn',
            {
              from_name: formData.name,
              from_email: formData.email,
              company: formData.company || 'Not provided',
              message: formData.message,
              to_name: formData.name,
              reply_to: 'nirav@nvibe.ai'
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          )
        } catch {
          // Don't fail if email fails
        }

        try {
          await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            'template_yqbrwj8',
            {
              from_name: formData.name,
              from_email: formData.email,
              company: formData.company || 'Not provided',
              message: formData.message,
              to_name: 'NVibe AI Team',
              reply_to: formData.email
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          )
        } catch {
          // Don't fail if email fails
        }
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch {
      alert('An error occurred. Please try again or contact us directly at nirav@nvibe.ai')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            3 pilot slots this quarter
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            We work closely with each design partner. This is not self-serve.
            Book a 20-minute call — we&apos;ll walk through the demo, discuss your use case,
            and tell you what we need to get started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Pilot info + contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pilot Structure</h3>
              <div className="space-y-3">
                {[
                  { week: 'Week 1–2', task: 'We collect your data, train the model' },
                  { week: 'Week 3', task: 'Deploy inside your VPC, you test' },
                  { week: 'Week 4–8', task: 'Live with real customers, we tune' },
                  { week: 'Week 9–12', task: 'Decide to continue, pricing, case study' },
                ].map((item) => (
                  <div key={item.week} className="flex gap-3">
                    <span className="font-mono text-xs font-semibold text-green-600 w-20 flex-shrink-0 pt-0.5">
                      {item.week}
                    </span>
                    <span className="text-sm text-gray-600">{item.task}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, text: 'nirav@nvibe.ai', href: 'mailto:nirav@nvibe.ai' },
                { icon: Phone, text: '646-413-4795', href: 'tel:+16464134795' },
                { icon: MapPin, text: 'San Francisco, CA', href: '#' },
              ].map((info) => (
                <a
                  key={info.text}
                  href={info.href}
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <info.icon className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">{info.text}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl border border-gray-100 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                  <input
                    type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                <input
                  type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} required rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your use case..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending...</>
                ) : isSubmitted ? (
                  <><span>&#10003;</span> Message Sent!</>
                ) : (
                  <><Send className="w-5 h-5" /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
