'use client'

import { useState, useEffect } from 'react'

export default function PlatformOverview() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section style={{ padding: isMobile ? '48px 16px' : '72px 24px', background: '#ffffff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Trust strip */}
        <div style={{ background: '#f9fafb', borderRadius: 16, border: '1px solid #e8eaed', overflow: 'hidden' }}>
          <div style={{ padding: isMobile ? '20px 20px' : '28px 36px', borderBottom: '1px solid #e8eaed', display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontSize: 28, flexShrink: 0 }}>🔒</span>
            <span style={{ fontSize: 'clamp(18px, 3vw, 40px)', fontWeight: 800, color: '#202124', letterSpacing: -1, lineHeight: 1.15 }}>
              AI does the work. Your team owns the relationship.
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const }}>
            {[
              { icon: '✍️', title: 'You review before anything is sent', body: 'AI builds the quote. Your rep reviews, edits, and hits send. Nothing goes to a customer without a human approving it first.' },
              { icon: '🤝', title: 'AI flags the deal. Your AE closes it.', body: 'Revenue signals are routed to your sales team — not acted on automatically. Your rep owns the conversation, the relationship, and the close.' },
              { icon: '⚙️', title: 'Your rules. Your guardrails. Always.', body: 'Approval thresholds, tone policies, escalation rules — AI operates strictly inside the boundaries your team sets. It never goes rogue.' },
            ].map((t, i, arr) => (
              <div key={i} style={{ flex: 1, minWidth: isMobile ? '100%' : 220, padding: isMobile ? '24px 20px' : '32px 32px', borderRight: !isMobile && i < arr.length - 1 ? '1px solid #e8eaed' : 'none', borderBottom: isMobile && i < arr.length - 1 ? '1px solid #e8eaed' : 'none' }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{t.icon}</div>
                <div style={{ fontSize: isMobile ? 17 : 21, fontWeight: 600, color: '#202124', marginBottom: 10, lineHeight: 1.3 }}>{t.title}</div>
                <div style={{ fontSize: 14, color: '#3c4043', lineHeight: 1.7 }}>{t.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* DIE callout */}
        <div style={{ textAlign: 'center', marginTop: 24, padding: '14px 24px', background: '#ffffff', borderRadius: 12, border: '1px solid #e8eaed', boxShadow: '0 1px 2px rgba(60,64,67,0.3)' }}>
          <span style={{ fontSize: 14, color: '#5f6368' }}>
            Powered by the <strong style={{ color: '#3c4043' }}>Dynamic Inference Engine</strong> — fine-tuned on your data, deployed in your VPC. Not generic AI.
          </span>
        </div>
      </div>
    </section>
  )
}
