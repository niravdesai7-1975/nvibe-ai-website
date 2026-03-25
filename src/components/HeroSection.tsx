'use client'

import { useState, useEffect, useCallback } from 'react'
import AgentDemosTabbed from './AgentDemos'

const GREEN = '#16a34a'

const SUBTITLES = [
  { text: 'Your competitors quote in 3 minutes.', strike: 'Your team takes 2–5 days.' },
  { text: '35% of revenue signals hide in support tickets.', strike: 'Your reps walk right past them.' },
  { text: '70% first-contact resolution, automatically.', strike: 'Your team averages 20%.' },
]

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleTabChange = useCallback((idx: number) => {
    setFade(false)
    setTimeout(() => {
      setActiveIdx(idx)
      setFade(true)
    }, 180)
  }, [])

  const sub = SUBTITLES[activeIdx]

  return (
    <section style={{
      padding: isMobile ? '72px 16px 24px' : '80px 40px 28px',
      position: 'relative',
      background: 'linear-gradient(180deg, #EFF6FF 0%, #ffffff 100%)',
    }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Headline + subtitle ── */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 16 : 20 }}>
          <h1 style={{
            fontSize: isMobile ? 'clamp(32px, 8vw, 42px)' : 'clamp(48px, 5.5vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: isMobile ? -1.5 : -3,
            margin: '0 auto 12px',
            color: '#202124',
          }}>
            Three AIs that run{' '}
            <span style={{ background: 'linear-gradient(135deg, #1a73e8, #137333)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>your revenue.</span>
          </h1>

          <p style={{ fontSize: isMobile ? 15 : 19, color: '#3c4043', maxWidth: 700, margin: '0 auto', lineHeight: 1.5, fontWeight: 500 }}>
            Built on your data <span style={{ margin: '0 8px', color: '#16a34a', fontSize: '60%', verticalAlign: 'middle' }}>●</span> Deployed in your cloud <span style={{ margin: '0 8px', color: '#16a34a', fontSize: '60%', verticalAlign: 'middle' }}>●</span> Running your revenue
          </p>
        </div>

        {/* ── Tabbed AI Demos ── */}
        <AgentDemosTabbed onTabChange={handleTabChange} />

        {/* ── Urgency hook below demo ── */}
        <p style={{
          textAlign: 'center',
          marginTop: 14,
          fontSize: isMobile ? 14 : 16,
          fontWeight: 600,
          color: '#111',
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.18s ease',
          minHeight: 24,
        }}>
          {sub.text}{' '}
          <span style={{ textDecoration: 'line-through', color: '#ef4444', opacity: 0.7, fontWeight: 500 }}>{sub.strike}</span>
        </p>

        {/* ── Trust line ── */}
        <p style={{ textAlign: 'center', marginTop: 8, fontSize: 13, color: '#9ca3af', fontWeight: 500, letterSpacing: 0.2 }}>
          NVIDIA Inception Partner · Google Cloud Partner · SOC 2 Type II · HIPAA Ready · VPC-Native
        </p>

      </div>
    </section>
  )
}
