'use client'

import { LiveRevenueDemo } from './AgentDemos'

export default function PlatformOverview() {
  return (
    <section style={{ padding: '72px 24px', background: '#ffffff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 20, background: '#f0fdf4', color: '#16a34a', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, border: '1px solid #bbf7d0' }}>
            The Platform
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginTop: 16, letterSpacing: -1, color: '#202124' }}>
            Not just quoting. A complete revenue engine.
          </h2>
          <p style={{ fontSize: 17, color: '#3c4043', marginTop: 14, maxWidth: 620, margin: '14px auto 0', lineHeight: 1.75 }}>
            The quote you saw above is just the start. Every customer support message hides a revenue signal your team is walking past. Watch NVibe catch it.
          </p>
        </div>

        {/* Revenue Engine demo */}
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 20, padding: '4px 12px', marginBottom: 12 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a', boxShadow: '0 0 6px rgba(22,163,74,0.5)' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#16a34a', textTransform: 'uppercase' as const, letterSpacing: 1.5 }}>Revenue Engine</span>
            </div>
            <div style={{ fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 800, color: '#202124', letterSpacing: -0.5, lineHeight: 1.2 }}>
              Support message <span style={{ color: '#16a34a' }}>→</span> issue resolved +{' '}
              <span style={{ background: 'linear-gradient(135deg, #16a34a, #15803d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>$120K opportunity</span>{' '}
              routed to sales
            </div>
          </div>
          <LiveRevenueDemo />
        </div>

        {/* Trust strip */}
        <div style={{ marginTop: 52, background: '#f9fafb', borderRadius: 16, border: '1px solid #e8eaed', overflow: 'hidden' }}>
          <div style={{ padding: '28px 36px', borderBottom: '1px solid #e8eaed', display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontSize: 28, flexShrink: 0 }}>🔒</span>
            <span style={{ fontSize: 'clamp(22px, 3vw, 40px)', fontWeight: 800, color: '#202124', letterSpacing: -1, lineHeight: 1.15 }}>
              AI does the work. Your team owns the relationship.
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const }}>
            {[
              { icon: '✍️', title: 'You review before anything is sent', body: 'AI builds the quote. Your rep reviews, edits, and hits send. Nothing goes to a customer without a human approving it first.' },
              { icon: '🤝', title: 'AI flags the deal. Your AE closes it.', body: 'Revenue signals are routed to your sales team — not acted on automatically. Your rep owns the conversation, the relationship, and the close.' },
              { icon: '⚙️', title: 'Your rules. Your guardrails. Always.', body: 'Approval thresholds, tone policies, escalation rules — AI operates strictly inside the boundaries your team sets. It never goes rogue.' },
            ].map((t, i, arr) => (
              <div key={i} style={{ flex: 1, minWidth: 220, padding: '32px 32px', borderRight: i < arr.length - 1 ? '1px solid #e8eaed' : 'none' }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{t.icon}</div>
                <div style={{ fontSize: 21, fontWeight: 600, color: '#202124', marginBottom: 10, lineHeight: 1.3 }}>{t.title}</div>
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
