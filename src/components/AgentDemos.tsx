'use client'

import { useState, useEffect, useRef } from 'react'

// ── Mobile hook ───────────────────────────────────────────────────────────────
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

// ── Step data ────────────────────────────────────────────────────────────────

const ADK_QUOTE_STEPS = [
  { fn: 'parse_email_request',  label: 'Reading the customer email',           out: '3 products identified from the request',                          time: '0:00' },
  { fn: 'catalog_lookup',       label: 'Matching products in your catalog',    out: 'All 3 items found — copper fittings, PVC elbows, ball valves',    time: '0:12' },
  { fn: 'price_engine',         label: 'Calculating price and discounts',      out: '$4,280.00 — volume discount applied automatically',               time: '0:31' },
  { fn: 'margin_calculator',    label: 'Checking profit margin',               out: 'Margin at 34.2% — within your target range',                     time: '0:48' },
  { fn: 'inventory_check',      label: 'Confirming stock levels',              out: 'All items in stock — ships from Warehouse B',                    time: '1:04' },
  { fn: 'quote_builder',        label: 'Building the quote document',          out: 'Quote PDF ready — your branded template, payment terms included', time: '1:38' },
  { fn: 'approval_rules',       label: 'Checking your approval rules',         out: 'All checks passed — quote approved and ready to send',            time: '1:52' },
  { fn: 'send_quote',           label: 'Sending to the customer',              out: 'Delivered — branded PDF with one-click accept link attached',     time: '2:47' },
]

const ADK_REV_STEPS = [
  { fn: 'ingest_message',       label: 'Reading the customer message',         out: 'Two separate topics identified in one message',                   time: '0:00' },
  { fn: 'intent_classifier',    label: 'Understanding what they need',         out: 'Urgent support issue + new warehouse expansion interest',          time: '0:09' },
  { fn: 'knowledge_base_query', label: 'Finding the right solution',           out: 'Two relevant guides found — fix steps identified',                time: '0:21' },
  { fn: 'response_generator',   label: 'Sending the resolution',               out: 'Issue resolved on first contact — no follow-up needed',           time: '0:38' },
  { fn: 'health_scorer',        label: 'Scoring account health',               out: 'Account healthy — satisfaction positive — strong renewal signal', time: '0:55' },
  { fn: 'signal_detector',      label: 'Spotting the revenue opportunity',     out: '$120K expansion — high confidence — expected close in Q3',        time: '1:11' },
  { fn: 'crm_router',           label: 'Routing the deal to your sales team',  out: 'Assigned to Alex Rivera — expansion playbook started',            time: '1:28' },
  { fn: 'crm_updater',          label: 'Updating the pipeline',                out: 'Opportunity created — discovery call booked for Mar 24',          time: '1:47' },
]

const ADK_MINI_STEPS = [
  { fn: 'catalog_lookup',    label: 'Matching products in your catalog',  out: 'All 3 items found — copper fittings, PVC elbows, ball valves' },
  { fn: 'price_engine',      label: 'Calculating price and discounts',    out: '$4,280.00 — volume discount applied automatically' },
  { fn: 'margin_calculator', label: 'Checking profit margin',             out: 'Margin at 34.2% — within your target range' },
  { fn: 'send_quote',        label: 'Sending quote to the customer',      out: 'Delivered — branded PDF with one-click accept link' },
]

// ── Visibility hook ──────────────────────────────────────────────────────────

function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, vis] as const
}

// ── Dark step row ────────────────────────────────────────────────────────────

interface Step { fn: string; label: string; out: string; time?: string }
interface DarkStepRowProps { s: Step; active: boolean; complete: boolean; pending: boolean; compact?: boolean }

function DarkStepRow({ s, active, complete, pending, compact = false }: DarkStepRowProps) {
  return (
    <div style={{
      padding: compact ? '8px 16px' : '9px 22px',
      background: active ? 'rgba(74,222,128,0.05)' : 'transparent',
      borderLeft: `3px solid ${active ? '#4ade80' : complete ? '#16a34a' : 'transparent'}`,
      opacity: pending ? 0.18 : 1,
      transition: 'all 0.4s ease',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: compact ? 9 : 11 }}>
          {/* Circle indicator */}
          <div style={{
            width: compact ? 17 : 20, height: compact ? 17 : 20,
            borderRadius: '50%', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: complete ? '#16a34a' : 'transparent',
            border: `2px solid ${complete ? '#16a34a' : active ? '#facc15' : '#2d3748'}`,
            boxShadow: complete ? '0 0 8px rgba(74,222,128,0.4)' : active ? '0 0 8px rgba(250,204,21,0.3)' : 'none',
            transition: 'all 0.4s ease',
          }}>
            {complete && <span style={{ fontSize: compact ? 9 : 10, color: '#fff', fontWeight: 800 }}>✓</span>}
            {active && <div style={{ width: compact ? 5 : 7, height: compact ? 5 : 7, borderRadius: '50%', background: '#facc15', animation: 'tickerBlink 1s infinite' }} />}
          </div>
          <span style={{
            fontSize: compact ? 12 : 13, fontWeight: 600,
            color: complete ? '#4ade80' : active ? '#facc15' : '#4b5563',
            transition: 'color 0.3s ease',
          }}>
            {s.label}
          </span>
        </div>
        {s.time && (
          <span style={{
            fontSize: 10, fontFamily: 'monospace',
            color: complete ? '#374151' : active ? '#4ade80' : 'transparent',
            transition: 'color 0.3s ease',
          }}>{s.time}</span>
        )}
      </div>
      {(active || complete) && (
        <div style={{
          marginTop: 5, marginLeft: compact ? 26 : 31,
          fontSize: compact ? 10 : 11, fontFamily: 'monospace',
          color: complete ? '#6ee7b7' : '#86efac',
          lineHeight: 1.5, opacity: complete ? 0.75 : 1,
          animation: active ? 'rowSlide 0.3s ease' : 'none',
        }}>
          → {s.out}
        </div>
      )}
    </div>
  )
}

// ── Terminal titlebar dots ───────────────────────────────────────────────────

function TerminalDots() {
  return (
    <div style={{ display: 'flex', gap: 6 }}>
      {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
        <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.85 }} />
      ))}
    </div>
  )
}

function StatusChip({ done, active, label }: { done: boolean; active: boolean; label: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 6,
      padding: '3px 10px', borderRadius: 20,
      background: done ? 'rgba(74,222,128,0.12)' : active ? 'rgba(250,204,21,0.1)' : 'rgba(255,255,255,0.05)',
      border: `1px solid ${done ? 'rgba(74,222,128,0.3)' : active ? 'rgba(250,204,21,0.25)' : 'rgba(255,255,255,0.08)'}`,
    }}>
      {!done && active && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#facc15', display: 'inline-block', animation: 'tickerBlink 1.2s infinite' }} />}
      {done && <span style={{ fontSize: 10, color: '#4ade80' }}>✓</span>}
      <span style={{ fontSize: 10, fontWeight: 600, fontFamily: 'monospace', color: done ? '#4ade80' : active ? '#facc15' : 'rgba(255,255,255,0.3)' }}>
        {label}
      </span>
    </div>
  )
}

// ── LiveQuoteDemo ────────────────────────────────────────────────────────────

export function LiveQuoteDemo() {
  const [step, setStep] = useState(-1)
  const [started, setStarted] = useState(false)
  const [ref, vis] = useVisible(0.3)
  const isMobile = useIsMobile()

  useEffect(() => { if (vis && !started) { setStarted(true); setStep(0) } }, [vis, started])
  useEffect(() => {
    if (step < 0 || step >= ADK_QUOTE_STEPS.length) return
    const delay = step === 0 ? 900 : step === ADK_QUOTE_STEPS.length - 1 ? 1400 : 700 + Math.random() * 300
    const t = setTimeout(() => { if (step < ADK_QUOTE_STEPS.length - 1) setStep(step + 1) }, delay)
    return () => clearTimeout(t)
  }, [step])

  const done = step === ADK_QUOTE_STEPS.length - 1

  return (
    <div ref={ref} style={{
      background: '#0F1117', borderRadius: 16, overflow: 'hidden',
      boxShadow: done
        ? '0 0 0 1px rgba(74,222,128,0.25), 0 24px 64px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.4)'
        : '0 8px 32px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.3)',
      transition: 'box-shadow 1s ease',
    }}>
      <div style={{ padding: isMobile ? '10px 14px' : '12px 18px', background: '#161922', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
          <TerminalDots />
          {!isMobile && <span style={{ fontSize: 12, fontFamily: 'monospace', color: 'rgba(255,255,255,0.35)', letterSpacing: 0.5 }}>nvibe · quote-agent · DIE-v2</span>}
        </div>
        <StatusChip done={done} active={step >= 0} label={done ? 'Quote Delivered' : step >= 0 ? 'Processing' : 'Ready'} />
      </div>
      <div style={{ padding: isMobile ? '10px 14px 8px' : '12px 22px 10px', background: '#0d1117', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 5 }}>Customer Request</div>
        <div style={{ fontSize: isMobile ? 11 : 12, color: 'rgba(255,255,255,0.55)', fontFamily: 'monospace', lineHeight: 1.65 }}>
          &quot;Need 200 1/2&quot; copper fittings, 50 PVC elbows, 10 ball valves — need quote ASAP&quot;
        </div>
      </div>
      <div style={{ padding: '8px 0' }}>
        {ADK_QUOTE_STEPS.map((s, i) => (
          <DarkStepRow key={i} s={s} active={i === step && !done} complete={i < step || done} pending={i > step && !done} compact={isMobile} />
        ))}
      </div>
      {done && (
        <div style={{ padding: '16px 22px', borderTop: '1px solid rgba(74,222,128,0.15)', background: 'rgba(74,222,128,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', animation: 'fadeSlideUp 0.5s ease' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#4ade80' }}>Quote delivered in 2:47</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 3 }}>Your team would have taken 3–5 days</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#4ade80', fontFamily: 'monospace', lineHeight: 1 }}>2:47</div>
            <div style={{ fontSize: 10, color: '#4ade80', opacity: 0.5, letterSpacing: 1, marginTop: 2 }}>TOTAL TIME</div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── LiveRevenueDemo ──────────────────────────────────────────────────────────

export function LiveRevenueDemo() {
  const [step, setStep] = useState(-1)
  const [started, setStarted] = useState(false)
  const [ref, vis] = useVisible(0.25)
  const isMobile = useIsMobile()

  useEffect(() => { if (vis && !started) { setStarted(true); setStep(0) } }, [vis, started])
  useEffect(() => {
    if (step < 0 || step >= ADK_REV_STEPS.length) return
    const delay = step === 0 ? 1000 : step === ADK_REV_STEPS.length - 1 ? 1600 : 750 + Math.random() * 350
    const t = setTimeout(() => { if (step < ADK_REV_STEPS.length - 1) setStep(step + 1) }, delay)
    return () => clearTimeout(t)
  }, [step])

  const done = step === ADK_REV_STEPS.length - 1

  return (
    <div ref={ref} style={{
      background: '#0F1117', borderRadius: 16, overflow: 'hidden',
      boxShadow: done
        ? '0 0 0 1px rgba(74,222,128,0.25), 0 24px 64px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.4)'
        : '0 8px 32px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.3)',
      transition: 'box-shadow 1s ease',
    }}>
      <div style={{ padding: isMobile ? '10px 14px' : '12px 18px', background: '#161922', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
          <TerminalDots />
          {!isMobile && <span style={{ fontSize: 12, fontFamily: 'monospace', color: 'rgba(255,255,255,0.35)', letterSpacing: 0.5 }}>nvibe · revenue-agent · DIE-v2</span>}
        </div>
        <StatusChip done={done} active={step >= 0} label={done ? 'Revenue Captured' : step >= 0 ? 'Processing' : 'Ready'} />
      </div>
      <div style={{ padding: isMobile ? '10px 14px 8px' : '12px 22px 10px', background: '#0d1117', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 5 }}>Customer Message</div>
        <div style={{ fontSize: isMobile ? 11 : 12, color: 'rgba(255,255,255,0.55)', fontFamily: 'monospace', lineHeight: 1.65 }}>
          &quot;Our valve regulator keeps tripping on Line 3. Also, we&apos;re opening a second warehouse in Q3.&quot;
        </div>
      </div>
      <div style={{ padding: '8px 0' }}>
        {ADK_REV_STEPS.map((s, i) => (
          <DarkStepRow key={i} s={s} active={i === step && !done} complete={i < step || done} pending={i > step && !done} compact={isMobile} />
        ))}
      </div>
      {done && (
        <div style={{ padding: '16px 22px', borderTop: '1px solid rgba(74,222,128,0.15)', background: 'rgba(74,222,128,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', animation: 'fadeSlideUp 0.5s ease' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#4ade80' }}>$120K expansion opportunity captured</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 3 }}>From a support ticket your team would have just closed as resolved</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#4ade80', fontFamily: 'monospace', lineHeight: 1 }}>$120K</div>
            <div style={{ fontSize: 10, color: '#4ade80', opacity: 0.5, letterSpacing: 1, marginTop: 2 }}>PIPELINE ADDED</div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── MiniAgentDemo ────────────────────────────────────────────────────────────

export function MiniAgentDemo() {
  const [step, setStep] = useState(-1)
  const [started, setStarted] = useState(false)
  const [ref, vis] = useVisible(0.3)

  useEffect(() => { if (vis && !started) { setStarted(true); setStep(0) } }, [vis, started])
  useEffect(() => {
    if (step < 0 || step >= ADK_MINI_STEPS.length) return
    const delay = step === 0 ? 600 : step === ADK_MINI_STEPS.length - 1 ? 900 : 650 + Math.random() * 250
    const t = setTimeout(() => { if (step < ADK_MINI_STEPS.length - 1) setStep(step + 1) }, delay)
    return () => clearTimeout(t)
  }, [step])

  const done = step === ADK_MINI_STEPS.length - 1

  return (
    <div ref={ref} style={{
      background: '#0F1117', borderRadius: 12, overflow: 'hidden',
      boxShadow: done ? '0 0 0 1px rgba(74,222,128,0.2), 0 8px 24px rgba(0,0,0,0.5)' : '0 4px 16px rgba(0,0,0,0.4)',
      transition: 'box-shadow 0.8s ease',
    }}>
      <div style={{ padding: '10px 14px', background: '#161922', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', gap: 5 }}>
            {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
              <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c, opacity: 0.85 }} />
            ))}
          </div>
          <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.3)', letterSpacing: 0.3 }}>nvibe · quote-agent</span>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 5,
          padding: '2px 8px', borderRadius: 20,
          background: done ? 'rgba(74,222,128,0.12)' : step >= 0 ? 'rgba(250,204,21,0.1)' : 'rgba(255,255,255,0.05)',
          border: `1px solid ${done ? 'rgba(74,222,128,0.3)' : step >= 0 ? 'rgba(250,204,21,0.25)' : 'rgba(255,255,255,0.08)'}`,
        }}>
          {!done && step >= 0 && <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#facc15', display: 'inline-block', animation: 'tickerBlink 1.2s infinite' }} />}
          {done && <span style={{ fontSize: 9, color: '#4ade80' }}>✓</span>}
          <span style={{ fontSize: 9, fontWeight: 600, fontFamily: 'monospace', color: done ? '#4ade80' : step >= 0 ? '#facc15' : 'rgba(255,255,255,0.25)' }}>
            {done ? 'Quote Delivered' : step >= 0 ? 'Processing' : 'Ready'}
          </span>
        </div>
      </div>
      <div style={{ padding: '6px 0' }}>
        {ADK_MINI_STEPS.map((s, i) => (
          <DarkStepRow key={i} s={s} active={i === step && !done} complete={i < step || done} pending={i > step && !done} compact />
        ))}
      </div>
      {done && (
        <div style={{ padding: '10px 16px', borderTop: '1px solid rgba(74,222,128,0.15)', background: 'rgba(74,222,128,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', animation: 'fadeSlideUp 0.5s ease' }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#4ade80' }}>Quote delivered in 2:47</span>
          <span style={{ fontSize: 15, fontWeight: 800, color: '#4ade80', fontFamily: 'monospace' }}>2:47</span>
        </div>
      )}
    </div>
  )
}
