'use client'

import { useState, useEffect } from 'react'

function useIsMobile() {
  const [m, setM] = useState(false)
  useEffect(() => {
    const check = () => setM(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return m
}

const GREEN = '#16a34a'

const industries = [
  { icon: '🏭', name: 'Wholesale Trade',             desc: 'High-volume, multi-SKU quotes at speed' },
  { icon: '🏗️', name: 'Construction',                desc: 'Complex BOMs, project-based pricing' },
  { icon: '⚙️', name: 'Manufacturing Aftermarket',   desc: 'Aftermarket parts, configurable SKUs' },
  { icon: '⚡', name: 'Energy & Utilities',           desc: 'Custom equipment, long-lead item pricing' },
  { icon: '🚗', name: 'Automotive Parts',             desc: 'Multi-tier pricing, dealer network quotes' },
  { icon: '💻', name: 'Electronics Distribution',    desc: 'Rapid repricing, short shelf-life items' },
  { icon: '🔧', name: 'HVAC / MRO',                  desc: 'Maintenance contracts, parts + labor quotes' },
  { icon: '🧪', name: 'Chemical Distribution',       desc: 'Bulk pricing, compliance-aware quoting' },
  { icon: '🔩', name: 'Industrial Equipment',        desc: 'Complex configs, service contract bundling' },
  { icon: '🩺', name: 'Medical Devices & Supplies',  desc: 'GPO pricing, compliance-heavy quote docs' },
  { icon: '📦', name: 'Packaging & Print',           desc: 'Custom specs, MOQs, run-size pricing' },
  { icon: '🪨', name: 'Steel & Metals',              desc: 'Spot pricing, mill certs, cut-to-order' },
  { icon: '🚿', name: 'Plumbing & Pipe',             desc: 'Large BOM projects, contractor pricing' },
  { icon: '🔥', name: 'Fire & Safety',               desc: 'Service contracts, compliance quotes' },
  { icon: '🖨️', name: 'Office & Janitorial Supply',  desc: 'Contract pricing, high-SKU catalog mgmt' },
  { icon: '🖥️', name: 'IT & Tech Distribution',      desc: 'Complex licensing, hardware + services bundles' },
  { icon: '📡', name: 'Telecom Equipment',           desc: 'Recurring + one-time pricing, SLA terms' },
  { icon: '🌾', name: 'Agriculture & Ag Equipment',  desc: 'Seasonal pricing, parts + service quotes' },
  { icon: '🚢', name: 'Marine & Offshore',           desc: 'Custom fabrication, long-lead components' },
  { icon: '✈️', name: 'Aerospace & Defense',         desc: 'Certified part sourcing, contract pricing' },
  { icon: '🏥', name: 'Healthcare Equipment',        desc: 'Capital equipment quotes, maintenance plans' },
  { icon: '🧱', name: 'Building Materials',          desc: 'Per-project pricing, volume discounts' },
  { icon: '🛢️', name: 'Oil & Gas Supply',            desc: 'Spec-driven quotes, hazmat compliance' },
  { icon: '🚂', name: 'Rail & Transportation',       desc: 'Fleet parts, service contract quoting' },
]

export default function IndustriesSection() {
  const isMobile = useIsMobile()

  return (
    <section style={{ padding: isMobile ? '48px 16px' : '72px 24px', background: '#f9fafb', borderTop: '1px solid #e8eaed', borderBottom: '1px solid #e8eaed' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: isMobile ? 36 : 52 }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 20, background: '#f0fdf4', color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, border: '1px solid #bbf7d0' }}>
            Industries
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, marginTop: 16, letterSpacing: -1, color: '#202124' }}>
            If you quote, NVibe works for you.
          </h2>
          <p style={{ fontSize: isMobile ? 15 : 17, color: '#3c4043', marginTop: 12, maxWidth: 560, margin: '12px auto 0', lineHeight: 1.75 }}>
            Any B2B company with a product catalog, pricing rules, and customers asking for quotes is a fit — regardless of industry.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: 12,
        }}>
          {industries.map((ind, i) => (
            <div
              key={i}
              style={{
                background: '#ffffff',
                borderRadius: 12,
                border: '1px solid #e8eaed',
                padding: isMobile ? '14px 12px' : '18px 16px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                transition: 'border-color 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#bbf7d0'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(22,163,74,0.08)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#e8eaed'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
            >
              <span style={{ fontSize: isMobile ? 18 : 20, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>{ind.icon}</span>
              <div>
                <div style={{ fontSize: isMobile ? 12 : 13, fontWeight: 700, color: '#202124', lineHeight: 1.3, marginBottom: 3 }}>{ind.name}</div>
                <div style={{ fontSize: isMobile ? 11 : 12, color: '#5f6368', lineHeight: 1.5 }}>{ind.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <p style={{ fontSize: 14, color: '#9aa0a6' }}>
            Don&apos;t see your industry? If your team quotes, we can automate it.{' '}
            <a href="#contact" style={{ color: GREEN, fontWeight: 600, textDecoration: 'none' }}>Tell us about your use case →</a>
          </p>
        </div>

      </div>
    </section>
  )
}
