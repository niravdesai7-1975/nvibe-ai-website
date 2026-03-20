'use client'

import { MiniAgentDemo } from './AgentDemos'

export default function FiveQuoteChallenge() {
  return (
    <section style={{ padding: '72px 24px', background: '#f9fafb', borderTop: '1px solid #e8eaed', borderBottom: '1px solid #e8eaed' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 20, background: '#f0fdf4', color: '#16a34a', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, border: '1px solid #bbf7d0' }}>Zero Risk Trial</span>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: 800, letterSpacing: -2, lineHeight: 1.1, marginTop: 16, color: '#202124' }}>Don&apos;t take our word for it.</h2>
          <p style={{ fontSize: 19, color: '#3c4043', marginTop: 16, maxWidth: 520, margin: '16px auto 0', lineHeight: 1.7 }}>
            Send us your 5 messiest quotes. We&apos;ll run them through AI — live, in front of you. No commitment.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, justifyContent: 'center', flexWrap: 'wrap' as const, maxWidth: 980, margin: '0 auto 48px' }}>

          {/* 01 */}
          <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 240 }}>
            <div style={{ background: '#ffffff', borderRadius: 16, padding: '40px 28px', border: '1px solid #e8eaed', boxShadow: '0 1px 2px rgba(60,64,67,0.3), 0 2px 6px rgba(60,64,67,0.15)', position: 'relative' as const, flex: 1, height: '100%' }}>
              <div style={{ position: 'absolute' as const, top: -15, left: 22, background: '#ffffff', color: '#16a34a', fontSize: 12, fontWeight: 800, padding: '5px 14px', borderRadius: 20, border: '1px solid #e8eaed', boxShadow: '0 1px 2px rgba(60,64,67,0.3)', letterSpacing: 0.5 }}>01</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#202124', marginTop: 12, marginBottom: 12, lineHeight: 1.3 }}>Send 5 Real Quotes</div>
              <div style={{ fontSize: 15, color: '#3c4043', lineHeight: 1.75 }}>Your actual, messy quote requests — the complex ones that take your team 3 days.</div>
            </div>
            <div style={{ flexShrink: 0, width: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: 20, color: '#80868b', fontWeight: 300 }}>→</div>
            </div>
          </div>

          {/* 02 — Live demo */}
          <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 260 }}>
            <div style={{ background: '#ffffff', borderRadius: 16, border: '1px solid #e8eaed', boxShadow: '0 1px 2px rgba(60,64,67,0.3), 0 2px 6px rgba(60,64,67,0.15)', position: 'relative' as const, flex: 1, height: '100%' }}>
              <div style={{ position: 'absolute' as const, top: -15, left: 22, background: '#ffffff', color: '#16a34a', fontSize: 12, fontWeight: 800, padding: '5px 14px', borderRadius: 20, border: '1px solid #e8eaed', boxShadow: '0 1px 2px rgba(60,64,67,0.3)', letterSpacing: 0.5, zIndex: 1 }}>02</div>
              <div style={{ padding: '28px 22px 16px', borderBottom: '1px solid #e8eaed' }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#202124', marginTop: 8, marginBottom: 4, lineHeight: 1.3 }}>Watch AI Process Them Live</div>
                <div style={{ fontSize: 13, color: '#5f6368', lineHeight: 1.6 }}>Every step — product matching, pricing, approvals — in real time. Nothing hidden.</div>
              </div>
              <div style={{ padding: '12px 12px 16px' }}>
                <MiniAgentDemo />
              </div>
            </div>
            <div style={{ flexShrink: 0, width: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: 20, color: '#80868b', fontWeight: 300 }}>→</div>
            </div>
          </div>

          {/* 03 */}
          <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 240 }}>
            <div style={{ background: '#ffffff', borderRadius: 16, padding: '40px 28px', border: '1px solid #e8eaed', boxShadow: '0 1px 2px rgba(60,64,67,0.3), 0 2px 6px rgba(60,64,67,0.15)', position: 'relative' as const, flex: 1, height: '100%' }}>
              <div style={{ position: 'absolute' as const, top: -15, left: 22, background: '#ffffff', color: '#16a34a', fontSize: 12, fontWeight: 800, padding: '5px 14px', borderRadius: 20, border: '1px solid #e8eaed', boxShadow: '0 1px 2px rgba(60,64,67,0.3)', letterSpacing: 0.5 }}>03</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#202124', marginTop: 12, marginBottom: 12, lineHeight: 1.3 }}>See Results. Decide.</div>
              <div style={{ fontSize: 15, color: '#3c4043', lineHeight: 1.75 }}>5 completed quotes in minutes. If it doesn&apos;t blow your mind, walk away. No commitment.</div>
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginBottom: 20 }}>
            {['Zero cost', 'Zero commitment', 'Zero risk'].map(t => (
              <span key={t} style={{ fontSize: 13, color: '#137333', fontWeight: 600 }}>✓ {t}</span>
            ))}
          </div>
          <a href="#contact" style={{ display: 'inline-block', padding: '17px 38px', borderRadius: 10, background: '#16a34a', color: '#ffffff', fontSize: 16, fontWeight: 600, textDecoration: 'none', boxShadow: '0 2px 8px rgba(22,163,74,0.3)' }}>
            Start the 5-Quote Challenge
          </a>
        </div>
      </div>
    </section>
  )
}
