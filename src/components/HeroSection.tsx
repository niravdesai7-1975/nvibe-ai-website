'use client'

import { useState, useEffect } from 'react'
import { LiveQuoteDemo } from './AgentDemos'

function SmallTicker() {
  const [n, setN] = useState(7420)
  useEffect(() => {
    const i = setInterval(() => setN(p => p + Math.floor(12 + Math.random() * 8)), 800)
    return () => clearInterval(i)
  }, [])
  return <span style={{ fontFamily: 'monospace', color: '#c5221f', fontWeight: 700 }}>${n.toLocaleString()}</span>
}

export default function HeroSection() {
  return (
    <section style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '120px 24px 72px', position: 'relative',
      background: 'linear-gradient(180deg, #EFF6FF 0%, #ffffff 100%)',
    }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div style={{ textAlign: 'center', marginBottom: 52, position: 'relative', zIndex: 1, maxWidth: 800, width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ffffff', border: '1px solid #e8eaed', padding: '7px 16px', borderRadius: 20, marginBottom: 28, boxShadow: '0 1px 2px rgba(60,64,67,0.3)' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#c5221f', boxShadow: '0 0 6px rgba(197,34,31,0.88)' }} />
          <span style={{ fontSize: 13, color: '#3c4043', fontWeight: 500 }}>Your team loses <SmallTicker /> every day to manual quoting</span>
        </div>
        <h1 style={{ fontSize: 'clamp(38px, 6vw, 56px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: -2, margin: '0 auto 22px', color: '#202124' }}>
          A real quote. 8 steps.{' '}
          <span style={{ background: 'linear-gradient(135deg, #1a73e8, #137333)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Under 3 minutes.</span>
        </h1>
        <p style={{ fontSize: 18, color: '#3c4043', maxWidth: 560, margin: '0 auto', lineHeight: 1.75 }}>
          Every hour your team spends on manual quotes is revenue leaking out the door. NVibe closes that gap — automatically.
        </p>
      </div>

      <div style={{ maxWidth: 640, width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 20, padding: '4px 12px', marginBottom: 12 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a', boxShadow: '0 0 6px rgba(22,163,74,0.5)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#16a34a', textTransform: 'uppercase' as const, letterSpacing: 1.5 }}>AI Quote Engine</span>
          </div>
          <div style={{ fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 800, color: '#202124', letterSpacing: -0.5, lineHeight: 1.2 }}>
            Email in <span style={{ color: '#16a34a' }}>→</span> quote out in{' '}
            <span style={{ background: 'linear-gradient(135deg, #16a34a, #15803d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>3 minutes</span>
          </div>
        </div>
        <LiveQuoteDemo />
      </div>

      <div style={{ textAlign: 'center', marginTop: 48, position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 32 }}>
          <a href="#contact" style={{ display: 'inline-block', padding: '17px 38px', borderRadius: 10, background: '#16a34a', color: '#ffffff', fontSize: 16, fontWeight: 600, textDecoration: 'none', boxShadow: '0 2px 8px rgba(22,163,74,0.3)' }}>
            Send Us Your 5 Messiest Quotes
          </a>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' as const }}>
          {['NVIDIA Inception', 'SOC 2 Type II', 'HIPAA Ready', 'VPC-Native'].map(b => (
            <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 16px', borderRadius: 8, background: '#ffffff', border: '1px solid #e8eaed', boxShadow: '0 1px 2px rgba(60,64,67,0.3)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#137333' }} />
              <span style={{ fontSize: 12, color: '#5f6368', fontWeight: 600, letterSpacing: 0.5 }}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
