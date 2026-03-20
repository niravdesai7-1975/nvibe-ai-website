'use client'

import { useState, useEffect, useRef } from 'react'

const personas = [
  {
    tab: 'Manual Spreadsheets', icon: '📊',
    stat: '3–5 days', statLabel: 'average quote turnaround',
    badge: 'Most common',
    title: "You've never had a quoting system.",
    context: 'Your team quotes in Excel and email — and it costs you deals every week.',
    bullets: [
      'Line items copied from emails into spreadsheets by hand',
      'Prices looked up manually — margin errors every week',
      'Quotes take 3–5 days. Buyers already chose someone else.',
      'CPQ tools quoted you $150K+ for a 6-month project that might fail',
    ],
    ctaShort: 'Get started',
    cta: 'No implementation. No consultants. Email in, quote out in 3 minutes.',
  },
  {
    tab: 'Salesforce CPQ', icon: '☁️',
    stat: '150K+', statLabel: 'companies orphaned by CPQ End of Sale',
    badge: 'End of Sale Mar 2025',
    title: 'Salesforce killed CPQ. Now what?',
    context: "End of Sale March 2025. You can't stay, and you can't afford to start over.",
    bullets: [
      'No new features — ever. Support ends on a date TBD.',
      'Revenue Cloud Advanced is a full reimplementation, not a migration',
      'Different data model. 6–12 months. $150K+.',
      '67% of CPQ projects fail the first time. Now do it again?',
    ],
    ctaShort: 'Book a demo',
    cta: 'Works alongside Salesforce CRM. No rip-and-replace. Your reps quote today.',
  },
  {
    tab: 'SAP Migration', icon: '⚙️',
    stat: '92%', statLabel: 'of S/4HANA migrations behind schedule',
    badge: '49% over budget',
    title: "S/4HANA is 2 years behind. Quoting can't wait.",
    context: 'Your ERP migration is consuming every resource. SAP CPQ on top isn\'t happening.',
    bullets: [
      '92% behind schedule. 49% over budget. Industry-wide.',
      'SAP CPQ has 708 unresolved feature requests',
      "Joule AI doesn't work as advertised — confirmed by customers",
      'Your sales team still needs to send quotes. Today.',
    ],
    ctaShort: 'Quote independently',
    cta: "NVibe runs independent of your ERP. Keep quoting while S/4HANA catches up.",
  },
]

const GREEN = '#16a34a'
const GREEN_LIGHT = '#f0fdf4'

export default function SolutionTabs() {
  const [active, setActive] = useState(0)
  const [fade, setFade] = useState(true)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAuto = () => {
    autoRef.current = setInterval(() => {
      setFade(false)
      setTimeout(() => { setActive(p => (p + 1) % personas.length); setFade(true) }, 260)
    }, 6500)
  }

  useEffect(() => { startAuto(); return () => { if (autoRef.current) clearInterval(autoRef.current) } }, [])

  const switchTo = (i: number) => {
    if (autoRef.current) clearInterval(autoRef.current)
    setFade(false)
    setTimeout(() => { setActive(i); setFade(true) }, 200)
    startAuto()
  }

  const p = personas[active]

  return (
    <section style={{ padding: '72px 24px', background: '#f9fafb', borderTop: '1px solid #e8eaed', borderBottom: '1px solid #e8eaed' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 20, background: '#f0fdf4', color: '#16a34a', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, border: '1px solid #bbf7d0' }}>Sound familiar?</span>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, marginTop: 16, letterSpacing: -1, color: '#202124' }}>Which one are you?</h2>
          <p style={{ fontSize: 17, color: '#3c4043', marginTop: 10, lineHeight: 1.7 }}>Three types of companies find NVibe. All of them have the same problem: quoting is broken.</p>
        </div>

        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          {/* Tab selector */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#f9fafb', borderRadius: 28, padding: 4, marginBottom: 24, gap: 2 }}>
            {personas.map((pp, i) => (
              <button key={i} onClick={() => switchTo(i)} style={{
                padding: '12px 8px', borderRadius: 24, border: 'none',
                background: active === i ? '#ffffff' : 'transparent',
                color: active === i ? GREEN : '#5f6368',
                fontSize: 13, fontWeight: active === i ? 600 : 400,
                cursor: 'pointer', transition: 'all 0.2s ease',
                boxShadow: active === i ? '0 1px 2px rgba(60,64,67,0.3), 0 1px 3px rgba(60,64,67,0.15)' : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 7, overflow: 'hidden', position: 'relative' as const,
              }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>{pp.icon}</span>
                <span style={{ whiteSpace: 'nowrap' as const, overflow: 'hidden', textOverflow: 'ellipsis' }}>{pp.tab}</span>
                {active === i && (
                  <div style={{ position: 'absolute', bottom: 3, left: '12%', right: '12%', height: 2, background: GREEN, borderRadius: 1, animation: 'tabProgress 6.5s linear forwards' }} />
                )}
              </button>
            ))}
          </div>

          {/* Card */}
          <div style={{
            display: 'flex', borderRadius: 16, overflow: 'hidden',
            boxShadow: '0 1px 2px rgba(60,64,67,0.3), 0 2px 6px rgba(60,64,67,0.15)',
            opacity: fade ? 1 : 0,
            transform: fade ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.32s ease',
            minHeight: 320,
          }}>
            {/* Left panel */}
            <div style={{ width: 188, flexShrink: 0, background: '#ffffff', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center', padding: '32px 18px', borderRight: '1px solid #e8eaed' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, boxShadow: '0 1px 2px rgba(60,64,67,0.3)', marginBottom: 18 }}>{p.icon}</div>
              <div style={{ fontSize: 34, fontWeight: 700, color: GREEN, lineHeight: 1, marginBottom: 5, letterSpacing: -0.5 }}>{p.stat}</div>
              <div style={{ fontSize: 13, color: '#5f6368', textAlign: 'center', lineHeight: 1.5, maxWidth: 140 }}>{p.statLabel}</div>
              <div style={{ marginTop: 16, background: '#f9fafb', borderRadius: 20, padding: '4px 12px', border: '1px solid #e8eaed' }}>
                <span style={{ fontSize: 12, fontWeight: 500, color: '#5f6368' }}>{p.badge}</span>
              </div>
            </div>

            {/* Right panel */}
            <div style={{ flex: 1, background: '#ffffff', padding: '30px 32px', display: 'flex', flexDirection: 'column' as const }}>
              <h3 style={{ fontSize: 21, fontWeight: 600, color: '#202124', margin: '0 0 6px', lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: '#5f6368', margin: '0 0 18px', lineHeight: 1.6 }}>{p.context}</p>
              <div style={{ height: 1, background: '#e8eaed', marginBottom: 18 }} />
              <div style={{ flex: 1, marginBottom: 20 }}>
                {p.bullets.map((b, bi) => (
                  <div key={bi} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10, fontSize: 14, color: '#3c4043', lineHeight: 1.6, opacity: fade ? 1 : 0, transform: fade ? 'none' : 'translateX(-6px)', transition: `all 0.28s ease ${bi * 55}ms` }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN, flexShrink: 0, marginTop: 7 }} />
                    {b}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, opacity: fade ? 1 : 0, transition: 'opacity 0.28s ease 0.26s' }}>
                <a href="#contact" style={{ background: GREEN, color: '#fff', border: 'none', borderRadius: 24, padding: '10px 22px', fontSize: 13, fontWeight: 500, cursor: 'pointer', flexShrink: 0, textDecoration: 'none', boxShadow: `0 1px 2px ${GREEN}44` }}>
                  {p.ctaShort} →
                </a>
                <span style={{ fontSize: 13, color: '#5f6368', lineHeight: 1.5 }}>{p.cta}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
