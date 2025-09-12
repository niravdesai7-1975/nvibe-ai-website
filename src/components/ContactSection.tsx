'use client'

import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { submitContactForm } from '@/lib/supabase'
import emailjs from '@emailjs/browser'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
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
      // Check if environment variables are configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://your-project.supabase.co') {
        console.error('Supabase configuration missing. Please check your environment variables.')
        alert('Contact form is not configured. Please contact us directly at nirav@nvibe.ai')
        setIsSubmitting(false)
        return
      }

      // First, save to Supabase
      const result = await submitContactForm(formData)
      
      if (result.success) {
        // Send auto response email to user (only if EmailJS is configured)
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
            console.log('Auto response email sent successfully')
          } catch (emailError) {
            console.error('Failed to send auto response email:', emailError)
            // Don't fail the form submission if email fails
          }

          // Send notification email to NVibe AI team
          try {
            await emailjs.send(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
              'template_notification',
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
            console.log('Notification email sent to team')
          } catch (emailError) {
            console.error('Failed to send notification email:', emailError)
            // Don't fail the form submission if email fails
          }
        } else {
          console.log('EmailJS not configured, skipping email notifications')
        }

        setIsSubmitted(true)
        setFormData({ name: '', email: '', company: '', message: '' })
        
        // Reset success state after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      } else {
        console.error('Form submission failed:', result.error)
        alert('Failed to submit form. Please try again or contact us directly at nirav@nvibe.ai')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('An error occurred. Please try again or contact us directly at nirav@nvibe.ai')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nirav@nvibe.ai',
      href: 'mailto:nirav@nvibe.ai'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '646-413-4795',
      href: 'tel:+16464134795'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Get in touch to learn how NVibe AI can revolutionize your sales and 
            manufacturing processes with cutting-edge AI technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-white/70 text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <span>✓</span>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
