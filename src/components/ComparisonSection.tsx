'use client'

export default function ComparisonSection() {
  return (
    <section style={{ padding: '72px 24px', background: '#f9fafb', borderTop: '1px solid #e8eaed', borderBottom: '1px solid #e8eaed' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 20, background: '#f0fdf4', color: '#16a34a', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, border: '1px solid #bbf7d0' }}>Legacy vs. AI-Native</span>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, marginTop: 16, letterSpacing: -1, color: '#202124' }}>
            CPQ was built in 1999.{' '}
            <span style={{ color: '#16a34a' }}>NVibe was built for 2026.</span>
          </h2>
          <p style={{ fontSize: 17, color: '#3c4043', marginTop: 12, maxWidth: 660, margin: '12px auto 0', lineHeight: 1.75 }}>
            Legacy CPQ / Revenue systems hit governor limits at 200+ line items, time out on complex bundles, and crash under real production load. NVibe processes thousands of line items without breaking a sweat.
          </p>
        </div>

        {/* Comparison cards */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const, justifyContent: 'center', maxWidth: 860, margin: '0 auto 32px' }}>
          <div style={{ flex: 1, minWidth: 250, background: '#ffffff', borderRadius: 16, padding: '30px 26px', border: '1px solid #e8eaed', boxShadow: '0 1px 2px rgba(60,64,67,0.3)' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#c5221f', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8, textTransform: 'uppercase' as const, letterSpacing: 1 }}>
              <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#c5221f' }} />
              Legacy CPQ / Revenue
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#202124', lineHeight: 1.4, marginBottom: 12 }}>
              Slows down at <span style={{ color: '#c5221f', fontFamily: 'monospace' }}>200</span> line items. Crashes at <span style={{ color: '#c5221f', fontFamily: 'monospace' }}>400+</span>.
            </div>
            <div style={{ fontSize: 15, color: '#3c4043', lineHeight: 1.7 }}>
              A distributor with 500 SKUs per order? The system times out. Your team splits quotes manually or waits for Apex workarounds.
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 250, background: '#ffffff', borderRadius: 16, padding: '30px 26px', border: '1px solid #e8eaed', boxShadow: '0 1px 2px rgba(60,64,67,0.3)' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#137333', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8, textTransform: 'uppercase' as const, letterSpacing: 1 }}>
              <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#137333' }} />
              NVibe AI
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#202124', lineHeight: 1.4, marginBottom: 12 }}>
              <span style={{ color: '#137333', fontFamily: 'monospace' }}>500</span>, <span style={{ color: '#137333', fontFamily: 'monospace' }}>1,000</span>, <span style={{ color: '#137333', fontFamily: 'monospace' }}>5,000</span> line items. Same speed.
            </div>
            <div style={{ fontSize: 15, color: '#3c4043', lineHeight: 1.7 }}>
              AI doesn&apos;t have governor limits. A 5,000-line quote processes the same way as a 5-line quote — no splitting, no workarounds.
            </div>
          </div>
        </div>

        {/* Legacy cost callout */}
        <div style={{ maxWidth: 700, margin: '0 auto 32px', background: '#ffffff', borderRadius: 14, border: '1px solid #e8eaed', boxShadow: '0 1px 2px rgba(60,64,67,0.3)', padding: '24px 28px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#c5221f', textTransform: 'uppercase' as const, letterSpacing: 2, marginBottom: 16 }}>
            What enterprises are already spending on legacy CPQ / Revenue
          </div>
          <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap' as const }}>
            {[
              { n: '$165K–$500K', label: 'Year 1',    sub: 'software licenses + consultant fees just to go live' },
              { n: '$2.5M–$7M',  label: 'per year',   sub: 'ongoing license, admin, and customization costs' },
              { n: '67%',        label: 'fail rate',  sub: 'of CPQ implementations fail on the first attempt' },
            ].map((s, i, arr) => (
              <div key={i} style={{ flex: 1, minWidth: 160, padding: '0 20px', borderRight: i < arr.length - 1 ? '1px solid #e8eaed' : 'none' }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: '#c5221f', fontFamily: 'monospace', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#5f6368', textTransform: 'uppercase' as const, letterSpacing: 0.5, marginTop: 4 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: '#80868b', marginTop: 5, lineHeight: 1.5 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          {[
            ['Time per quote',  '3-5 days',                                   '3 minutes'],
            ['Large quotes',    'Crashes at 400+ lines — Apex workarounds',   'Handles any size — no limits'],
            ['AI accuracy',     'Untested or hallucination-prone',            '0% hallucinations (verified)'],
            ['Your data',       'Generic AI — no knowledge of your business', 'Trained on your policies, rules, guardrails'],
          ].map(([label, oldV, newV], i) => (
            <div key={i} style={{ display: 'flex', marginBottom: 3, borderRadius: i === 0 ? '12px 12px 0 0' : i === 3 ? '0 0 12px 12px' : 0, overflow: 'hidden' }}>
              <div style={{ flex: 1, padding: '14px 18px', background: '#f9fafb' }}>
                <div style={{ fontSize: 12, color: '#80868b', marginBottom: 3, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 0.5 }}>{label}</div>
                <div style={{ fontSize: 15, color: '#c5221f', fontWeight: 600, textDecoration: 'line-through', opacity: 0.8 }}>{oldV}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', padding: '0 14px', color: '#80868b', background: '#ffffff', fontSize: 16, fontWeight: 300 }}>→</div>
              <div style={{ flex: 1, padding: '14px 18px', background: '#ffffff', borderLeft: '1px solid #e8eaed' }}>
                <div style={{ fontSize: 12, color: '#80868b', marginBottom: 3, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 0.5 }}>{label}</div>
                <div style={{ fontSize: 15, color: '#137333', fontWeight: 700 }}>{newV}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
