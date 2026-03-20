'use client'

import { useState, useEffect } from 'react'
import { LiveQuoteDemo } from './AgentDemos'

const GREEN = '#16a34a'

function SmallTicker() {
  const [n, setN] = useState(7420)
  useEffect(() => {
    const i = setInterval(() => setN(p => p + Math.floor(12 + Math.random() * 8)), 800)
    return () => clearInterval(i)
  }, [])
  return <span style={{ fontFamily: 'monospace', color: '#c5221f', fontWeight: 700 }}>${n.toLocaleString()}</span>
}

function AIPill({ label, desc }: { label: string; desc: string }) {
  return (
    <div style={{
      flex: 1, minWidth: 180,
      background: '#ffffff', borderRadius: 12,
      border: '1px solid #e8eaed',
      padding: '16px 18px',
      boxShadow: '0 1px 3px rgba(60,64,67,0.12)',
      textAlign: 'left',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: GREEN, boxShadow: '0 0 8px rgba(22,163,74,0.4)' }} />
        <span style={{ fontSize: 14, fontWeight: 700, color: '#202124' }}>{label}</span>
      </div>
      <div style={{ fontSize: 13, color: '#5f6368', lineHeight: 1.5 }}>{desc}</div>
    </div>
  )
}

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section style={{
      padding: isMobile ? '80px 16px 48px' : '120px 24px 72px',
      position: 'relative',
      background: 'linear-gradient(180deg, #EFF6FF 0%, #ffffff 100%)',
    }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Company positioning ── */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 36 : 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ffffff', border: '1px solid #e8eaed', padding: '7px 16px', borderRadius: 20, marginBottom: 28, boxShadow: '0 1px 2px rgba(60,64,67,0.3)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN, boxShadow: `0 0 6px ${GREEN}88` }} />
            <span style={{ fontSize: isMobile ? 12 : 13, color: '#3c4043', fontWeight: 500 }}>Trained on your business. Deployed in your VPC.</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 6vw, 58px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, margin: '0 auto 20px', color: '#202124' }}>
            Three AIs that run{' '}
            <span style={{ background: 'linear-gradient(135deg, #1a73e8, #137333)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>your revenue.</span>
          </h1>

          <p style={{ fontSize: isMobile ? 16 : 19, color: '#3c4043', maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Quote AI. Revenue AI. Support AI. One platform trained on your catalog, your rules, your customers — not generic models.
          </p>

          {/* Three AI pillars */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' as const, maxWidth: 720, margin: '0 auto' }}>
            <AIPill label="Quote AI" desc="Email in → branded quote out in under 3 minutes" />
            <AIPill label="Revenue AI" desc="Catches expansion signals and routes deals to sales" />
            <AIPill label="Support AI" desc="Resolves issues on first contact — no ticket backlog" />
          </div>
        </div>

        {/* ── Live demo ── */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ffffff', border: '1px solid #e8eaed', padding: '7px 16px', borderRadius: 20, marginBottom: 16, boxShadow: '0 1px 2px rgba(60,64,67,0.15)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#c5221f', boxShadow: '0 0 6px rgba(197,34,31,0.88)', flexShrink: 0 }} />
            <span style={{ fontSize: isMobile ? 12 : 13, color: '#3c4043', fontWeight: 500 }}>Your team loses <SmallTicker /> every day to manual quoting</span>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 20, padding: '4px 12px', marginBottom: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN, boxShadow: `0 0 6px ${GREEN}80` }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: GREEN, textTransform: 'uppercase' as const, letterSpacing: 1.5 }}>Quote AI — Live Demo</span>
            </div>
            <div style={{ fontSize: 'clamp(16px, 3vw, 24px)', fontWeight: 800, color: '#202124', letterSpacing: -0.5, lineHeight: 1.2 }}>
              A real quote. 8 steps.{' '}
              <span style={{ background: `linear-gradient(135deg, ${GREEN}, #15803d)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Under 3 minutes.</span>
            </div>
          </div>
          <LiveQuoteDemo />
        </div>

        {/* ── CTA + trust badges ── */}
        <div style={{ textAlign: 'center', marginTop: isMobile ? 32 : 48 }}>
          <div style={{ marginBottom: 24 }}>
            <a href="#contact" style={{ display: 'inline-block', padding: isMobile ? '14px 28px' : '17px 38px', borderRadius: 10, background: GREEN, color: '#ffffff', fontSize: isMobile ? 15 : 16, fontWeight: 600, textDecoration: 'none', boxShadow: '0 2px 8px rgba(22,163,74,0.3)' }}>
              Send Us Your 5 Messiest Quotes
            </a>
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' as const }}>
            {['NVIDIA Inception', 'SOC 2 Type II', 'HIPAA Ready', 'VPC-Native'].map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 14px', borderRadius: 8, background: '#ffffff', border: '1px solid #e8eaed', boxShadow: '0 1px 2px rgba(60,64,67,0.3)' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#137333' }} />
                <span style={{ fontSize: 12, color: '#5f6368', fontWeight: 600, letterSpacing: 0.5 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
