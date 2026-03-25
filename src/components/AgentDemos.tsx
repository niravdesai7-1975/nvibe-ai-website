'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

// ── Types ────────────────────────────────────────────────────────────────────
interface StepData {
  title: string
  main: string
  detail: string
  benefit: string
  manual?: string
}

interface DemoConfig {
  id: string
  label: string
  tagline: string
  taglineStat: string
  inputTag: string
  inputText: string
  steps: StepData[]
  output: React.ReactNode
  finalTime: string
}

// ── Demo Data ────────────────────────────────────────────────────────────────

const QUOTE_STEPS: StepData[] = [
  {
    title: 'Read Quote Request',
    main: '47 line items extracted from a single email',
    detail: 'Customer: <strong>Mike Chen, Oakwood Builders</strong>. Competitor benchmark: <strong>$127K (Graybar)</strong>. Deadline: <strong>March 28</strong>.',
    benefit: 'Parsed in 3 seconds',
    manual: 'Manual: 15–60 min',
  },
  {
    title: 'Match Products',
    main: '47 of 47 matched across 12,847 SKU catalog',
    detail: '<strong>45 exact</strong> matches. <strong>2 resolved by context</strong>-aware matching. <strong>Zero unresolved</strong> — no human cleanup needed.',
    benefit: 'Natural language → part numbers, instantly',
    manual: 'Manual: half a day',
  },
  {
    title: 'Real-Time Pricing',
    main: '4 vendor feeds pulled live — Tier B + Q1 promo applied',
    detail: '<strong>Real-time costs</strong>, not last month\'s spreadsheet. Benchmark: <strong>5.1% below Graybar</strong>\'s $127K.',
    benefit: 'Discounts auto-applied, competition beaten',
    manual: 'Manual: 20–90 min',
  },
  {
    title: 'Margin Check',
    main: 'Blended margin 31.2% — Gross profit $37,434',
    detail: '<strong>44 items within policy</strong>. 6 at threshold. <strong>3 flagged below 22%</strong> minimum. Competitor pressure factored in.',
    benefit: 'Every line item validated instantly',
    manual: 'Manual: over an hour',
  },
  {
    title: 'Inventory Check',
    main: '3 warehouses scanned — 44 in stock, 3 alternatives sourced',
    detail: 'Main warehouse: <strong>39</strong>. Regional DC: <strong>5</strong>. Vendor direct: <strong>3</strong>. All items ship in <strong>2 days</strong> — ahead of deadline.',
    benefit: 'Solutions found, not just stock counts',
    manual: 'Manual: multiple calls',
  },
  {
    title: 'Generate Quote',
    main: 'Branded PDF — 47 line items, beats competition by 5.1%',
    detail: 'Subtotal <strong>$138,426</strong> → Discounts <strong>−$17,863</strong> → Total <strong>$120,563</strong>. Saves customer <strong>$6,437</strong> vs Graybar.',
    benefit: 'One click, not one day',
  },
  {
    title: 'Smart Approval',
    main: '44 auto-approved · 3 items routed to manager',
    detail: 'AI recommendation: <strong>Approve</strong>. Repeat buyer — <strong>$380K LTV</strong>, <strong>4 orders</strong> in 12 months. Holding price retains relationship.',
    benefit: 'All 47 approved in 12 seconds',
  },
  {
    title: 'Deliver & Track',
    main: 'Quote emailed to mike.chen@oakwoodbuilders.com',
    detail: 'CRM record: <strong>Oakwood Phase II — $120,563</strong> — Proposal sent. Auto follow-up in <strong>48 hours</strong>.',
    benefit: 'Sent. Logged. Follow-up scheduled. Zero typing.',
  },
]

const REVENUE_STEPS: StepData[] = [
  {
    title: 'Read Customer Message',
    main: '2 separate topics identified in one message',
    detail: 'Topic 1: <strong>Urgent support issue</strong> (valve regulator, Line 3). Topic 2: <strong>Expansion signal</strong> (new warehouse, Q3).',
    benefit: 'Context separated in under 2 seconds',
  },
  {
    title: 'Classify Intent',
    main: 'Support request + revenue expansion signal',
    detail: 'Support: <strong>Priority high</strong> — recurring issue, twice this week. Revenue: <strong>$120K estimated</strong> — full warehouse outfitting, <strong>Q3 timeline</strong>.',
    benefit: 'Dual-intent detected — most reps would miss the revenue signal',
  },
  {
    title: 'Find the Fix',
    main: 'Knowledge base searched — 2 relevant guides matched',
    detail: 'Root cause: <strong>pressure calibration drift</strong> on RV-200 series. Fix: recalibrate to <strong>45 PSI</strong>, replace gasket if >6 months old.',
    benefit: 'First-contact resolution — no escalation needed',
  },
  {
    title: 'Resolve the Issue',
    main: 'Fix guide + replacement part link sent to customer',
    detail: 'Personalized response with step-by-step instructions. Replacement gasket <strong>RV-GSK-200</strong> linked — <strong>$12.50</strong>, ships same day.',
    benefit: 'Issue resolved on first contact',
    manual: 'Manual: 2–3 email exchanges',
  },
  {
    title: 'Score Account Health',
    main: 'Account health: Strong — satisfaction positive, renewal likely',
    detail: 'Customer for <strong>3 years</strong>. <strong>12 orders</strong> last year, <strong>$340K total</strong>. Support tickets trending down. NPS: <strong>Promoter</strong>.',
    benefit: 'Context your AE needs before reaching out',
  },
  {
    title: 'Spot the Opportunity',
    main: '$120K expansion opportunity detected — high confidence',
    detail: 'New warehouse = <strong>full outfitting</strong>. Based on current facility: valves, fittings, electrical, HVAC. Expected close: <strong>Q3</strong>.',
    benefit: 'Revenue signal your team would have walked past',
  },
  {
    title: 'Route to Sales',
    main: 'Deal card created and assigned to Sarah Chen (AE)',
    detail: 'Full context attached: <strong>customer history</strong>, expansion details, <strong>recommended product list</strong>, account health score, <strong>suggested talk track</strong>.',
    benefit: 'AE gets a warm handoff, not a cold lead',
  },
  {
    title: 'Update Pipeline',
    main: 'CRM record created: $120K expansion — Q3 close',
    detail: 'Pipeline stage: <strong>Discovery</strong>. Source: <strong>AI-detected</strong> from support message. Follow-up: <strong>Sarah Chen — call by Friday</strong>.',
    benefit: 'Pipeline updated. Zero data entry.',
  },
]

const SUPPORT_STEPS: StepData[] = [
  {
    title: 'Read & Classify',
    main: 'Ticket classified: Wrong item shipped — Priority: Critical',
    detail: 'Order <strong>#PO-38271</strong> identified. SKU mismatch: <strong>CU-ELB-090 shipped</strong> instead of <strong>CU-ELB-075</strong>. Install crew on-site <strong>tomorrow</strong>.',
    benefit: 'Classified and prioritized in 2 seconds',
  },
  {
    title: 'Verify the Order',
    main: 'Order confirmed: CU-ELB-075 ordered, CU-ELB-090 picked',
    detail: 'Root cause: <strong>warehouse pick error</strong> — adjacent bin locations (<strong>Bin 14A vs 14B</strong>). Original PO and invoice confirm <strong>CU-ELB-075</strong>.',
    benefit: 'Root cause identified — not just the symptom',
    manual: 'Manual: 20+ min',
  },
  {
    title: 'Find Replacement Stock',
    main: '500 units of CU-ELB-075 found — Regional DC, ships today',
    detail: 'Main warehouse: <strong>0 available</strong>. Regional DC: <strong>620 units</strong>. Vendor direct: 3-day lead. Best option: <strong>Regional DC — next-day delivery</strong>.',
    benefit: 'Checked 3 warehouses + vendor in 4 seconds',
    manual: 'Manual: multiple calls',
  },
  {
    title: 'Arrange Express Shipment',
    main: 'Express freight booked — arrives tomorrow 7 AM',
    detail: 'Carrier: <strong>FedEx Priority Overnight</strong>. Tracking generated. Cost: <strong>$285 absorbed</strong> (our error). Delivery: <strong>tomorrow 7 AM</strong> — before crew arrives.',
    benefit: 'Customer\'s deadline saved — install crew has parts on time',
  },
  {
    title: 'Process Return',
    main: 'Return label generated for 500× CU-ELB-090',
    detail: '<strong>Prepaid return label</strong> emailed. Pickup: <strong>Friday</strong>. Credit <strong>auto-applies</strong> to next invoice once scanned in.',
    benefit: 'Return + credit handled — no back-and-forth needed',
  },
  {
    title: 'Draft Customer Response',
    main: 'Personalized apology + resolution email drafted',
    detail: 'Includes: acknowledgment of error, <strong>tracking number</strong> for correct parts, return instructions, and <strong>5% credit</strong> on next order as goodwill.',
    benefit: 'Professional, empathetic response — ready for review',
  },
  {
    title: 'Flag Root Cause',
    main: 'Warehouse alert: Bin 14A/14B adjacent pick error flagged',
    detail: '<strong>3rd pick error this quarter</strong> from Bin 14A/14B. Pattern detected — recommending <strong>bin relocation</strong> to warehouse ops.',
    benefit: 'Prevents future errors — not just fixing this one',
  },
  {
    title: 'Log & Close',
    main: 'Ticket resolved — full audit trail logged',
    detail: 'CRM updated: resolution time <strong>3m 12s</strong>. Satisfaction survey triggered. Account health: <strong>stable — no churn risk</strong>.',
    benefit: 'Resolved, logged, and closed. Zero typing.',
  },
]

// ── Output components ────────────────────────────────────────────────────────

function QuoteOutput() {
  return (
    <div style={{ maxWidth: 820, width: '100%' }}>
      <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ padding: '14px 20px', background: '#f9fafb', borderBottom: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#111' }}>Quote #NV-2026-04872</span>
          <span style={{ fontSize: 12, color: '#16a34a', fontWeight: 600 }}>2m 47s</span>
        </div>
        <div style={{ padding: '10px 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13 }}>
            <span style={{ color: '#6b7280', fontWeight: 500 }}>47 line items (Copper, PVC, Electrical)</span>
            <span style={{ color: '#111', fontWeight: 600 }}>$138,426</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13, borderTop: '1px dashed #e5e7eb' }}>
            <span style={{ color: '#16a34a', fontWeight: 500, fontStyle: 'italic' }}>Tier B Discount (12%)</span>
            <span style={{ color: '#16a34a', fontWeight: 600 }}>−$16,611</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13, borderTop: '1px dashed #e5e7eb' }}>
            <span style={{ color: '#16a34a', fontWeight: 500, fontStyle: 'italic' }}>Q1 Copper Promo (3%)</span>
            <span style={{ color: '#16a34a', fontWeight: 600 }}>−$1,252</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', background: '#f0fdf4', borderTop: '1px solid #dcfce7' }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#111' }}>Total</span>
          <span style={{ fontSize: 22, fontWeight: 800, color: '#16a34a' }}>$120,563</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center', padding: '10px 20px', fontSize: 11 }}>
          <span style={{ color: '#9ca3af' }}>Margin 31.2%</span>
          <span style={{ color: '#d1d5db' }}>·</span>
          <span style={{ color: '#9ca3af' }}>GP $37,434</span>
          <span style={{ color: '#d1d5db' }}>·</span>
          <span style={{ color: '#16a34a', fontWeight: 600 }}>Auto-approved</span>
          <span style={{ color: '#d1d5db' }}>·</span>
          <span style={{ background: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: 4, padding: '2px 8px', color: '#16a34a', fontWeight: 700 }}>5.1% below Graybar</span>
        </div>
      </div>
    </div>
  )
}

function ResultCard({ icon, iconBg, iconColor, bgColor, borderColor, tag, value }: {
  icon: string; iconBg: string; iconColor: string; bgColor?: string; borderColor?: string; tag: string; value: string
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderRadius: 12, border: `1px solid ${borderColor || '#e5e7eb'}`, background: bgColor || '#fff' }}>
      <div style={{ width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, flexShrink: 0, background: iconBg, color: iconColor }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 0.8 }}>{tag}</div>
        <div style={{ fontSize: 14, color: '#111', fontWeight: 700, marginTop: 3 }}>{value}</div>
      </div>
    </div>
  )
}

function RevenueOutput() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 820, width: '100%'}}>
      <ResultCard icon="✓" iconBg="#dcfce7" iconColor="#16a34a" bgColor="#f0fdf4" borderColor="#bbf7d0" tag="Issue Resolved" value="Valve regulator fix guide + replacement part sent" />
      <ResultCard icon="$" iconBg="#dbeafe" iconColor="#2563eb" bgColor="#eff6ff" borderColor="#bfdbfe" tag="Revenue Captured" value="$120K warehouse expansion — routed to Sarah Chen" />
      <ResultCard icon="⏱" iconBg="#f3f4f6" iconColor="#6b7280" tag="Time" value="1 message → 2 outcomes in 1m 47s" />
    </div>
  )
}

function SupportOutput() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 820, width: '100%'}}>
      <ResultCard icon="✓" iconBg="#dcfce7" iconColor="#16a34a" bgColor="#f0fdf4" borderColor="#bbf7d0" tag="Issue Resolved" value="Correct parts arriving tomorrow 7 AM — deadline saved" />
      <ResultCard icon="↩" iconBg="#dcfce7" iconColor="#16a34a" bgColor="#f0fdf4" borderColor="#bbf7d0" tag="Return Processed" value="Return label sent, pickup Friday, auto-credit on next invoice" />
      <ResultCard icon="⚠" iconBg="#fef3c7" iconColor="#d97706" bgColor="#fffbeb" borderColor="#fde68a" tag="Root Cause Flagged" value="Bin 14A/14B — 3rd pick error this quarter → relocation recommended" />
      <ResultCard icon="⏱" iconBg="#f3f4f6" iconColor="#6b7280" tag="Resolution Time" value="3 minutes 12 seconds — first contact resolution" />
    </div>
  )
}

// ── Demo configs ─────────────────────────────────────────────────────────────

const DEMOS: DemoConfig[] = [
  {
    id: 'quote',
    label: 'Quote AI',
    tagline: 'Quotes in under 3 minutes',
    taglineStat: 'Your team takes 2–5 days',
    inputTag: 'Incoming Email',
    inputText: '"Hey Sarah, need pricing ASAP for Oakwood Phase II — 48 units. Copper fittings, PVC, electrical. Can you beat Graybar at $127K? Delivery to 4200 Oakwood Dr by March 28."',
    steps: QUOTE_STEPS,
    output: <QuoteOutput />,
    finalTime: '2:47',
  },
  {
    id: 'revenue',
    label: 'Revenue AI',
    tagline: '35% more pipeline from existing conversations',
    taglineStat: 'Most reps miss the signals entirely',
    inputTag: 'Customer Message',
    inputText: '"Our valve regulator keeps tripping on Line 3. We\'ve reset it twice this week. Also, we\'re planning to open a second warehouse in Q3 — will need to outfit the whole facility."',
    steps: REVENUE_STEPS,
    output: <RevenueOutput />,
    finalTime: '1:47',
  },
  {
    id: 'support',
    label: 'Support AI',
    tagline: '70% first-contact resolution, automatically',
    taglineStat: 'Average teams resolve 20% on first contact',
    inputTag: 'Support Ticket #4891',
    inputText: '"We ordered 500 units of CU-ELB-075 last Tuesday but received CU-ELB-090 instead. Our install crew is on-site tomorrow — we need the right parts ASAP or we\'ll miss the GC\'s deadline and face penalties."',
    steps: SUPPORT_STEPS,
    output: <SupportOutput />,
    finalTime: '3:12',
  },
]

// ── Timing ───────────────────────────────────────────────────────────────────

const INPUT_HOLD = 3500
const STEP_HOLD = 4000
const OUTPUT_HOLD = 5000
const RESTART_DELAY = 2000
const AUTO_ROTATE_INTERVAL = 45000

// ── Single Demo Card ─────────────────────────────────────────────────────────

type Phase = { type: 'input' } | { type: 'step'; index: number } | { type: 'output' }

function DemoCard({ config, active }: { config: DemoConfig; active: boolean }) {
  const [phase, setPhase] = useState<Phase | null>(null)
  const [slideClass, setSlideClass] = useState<'entering' | 'active' | 'exiting'>('entering')
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [timerText, setTimerText] = useState('0:00')
  const [timerState, setTimerState] = useState<'idle' | 'running' | 'done'>('idle')
  const runningRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const startTimeRef = useRef(0)

  const numSteps = config.steps.length

  const cleanup = useCallback(() => {
    runningRef.current = false
    if (timerRef.current) clearInterval(timerRef.current)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timerRef.current = null
    timeoutRef.current = null
  }, [])

  const startTimer = useCallback(() => {
    startTimeRef.current = Date.now()
    setTimerState('running')
    timerRef.current = setInterval(() => {
      const e = Date.now() - startTimeRef.current
      const m = Math.floor(e / 60000)
      const s = String(Math.floor((e % 60000) / 1000)).padStart(2, '0')
      setTimerText(`${m}:${s}`)
    }, 200)
  }, [])

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = null
    setTimerText(config.finalTime)
    setTimerState('done')
  }, [config.finalTime])

  const transition = useCallback((newPhase: Phase) => {
    setSlideClass('exiting')
    timeoutRef.current = setTimeout(() => {
      if (!runningRef.current) return
      setPhase(newPhase)
      setSlideClass('entering')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (runningRef.current) setSlideClass('active')
        })
      })
    }, 500)
  }, [])

  const runLoop = useCallback(() => {
    if (!runningRef.current) return
    setCompletedSteps(new Set())
    setTimerText('0:00')
    setTimerState('idle')
    setPhase({ type: 'input' })
    setSlideClass('entering')
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (runningRef.current) setSlideClass('active')
      })
    })

    // After INPUT_HOLD, start stepping
    timeoutRef.current = setTimeout(() => {
      if (!runningRef.current) return
      startTimer()
      let i = 0

      function nextStep() {
        if (!runningRef.current) return
        if (i >= numSteps) {
          // All steps done → show output
          timeoutRef.current = setTimeout(() => {
            if (!runningRef.current) return
            stopTimer()
            transition({ type: 'output' })
            // After OUTPUT_HOLD → restart
            timeoutRef.current = setTimeout(() => {
              if (!runningRef.current) return
              setSlideClass('exiting')
              timeoutRef.current = setTimeout(() => {
                if (runningRef.current) runLoop()
              }, RESTART_DELAY)
            }, OUTPUT_HOLD)
          }, 500)
          return
        }
        transition({ type: 'step', index: i })

        timeoutRef.current = setTimeout(() => {
          if (!runningRef.current) return
          setCompletedSteps(prev => {
            const n = new Set(prev)
            n.add(i)
            return n
          })
          i++
          nextStep()
        }, STEP_HOLD)
      }

      transition({ type: 'step', index: 0 })
      timeoutRef.current = setTimeout(() => {
        if (!runningRef.current) return
        setCompletedSteps(prev => {
          const n = new Set(prev)
          n.add(0)
          return n
        })
        i = 1
        nextStep()
      }, STEP_HOLD)
    }, INPUT_HOLD)
  }, [numSteps, startTimer, stopTimer, transition])

  useEffect(() => {
    if (active) {
      cleanup()
      runningRef.current = true
      runLoop()
    } else {
      cleanup()
      setPhase(null)
      setCompletedSteps(new Set())
      setTimerText('0:00')
      setTimerState('idle')
    }
    return cleanup
  }, [active, cleanup, runLoop])

  // Active step index for dot highlight
  const activeStepIdx = phase?.type === 'step' ? phase.index : -1

  return (
    <div style={{
      maxWidth: 1100, width: '100%', margin: '0 auto',
      background: '#fff', borderRadius: 20,
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.05)',
      overflow: 'hidden',
      display: active ? 'block' : 'none',
    }}>
      {/* Header */}
      <div style={{ padding: '10px 24px', borderBottom: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#16a34a' }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#16a34a', textTransform: 'uppercase' as const, letterSpacing: 1.2 }}>{config.label}</span>
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {Array.from({ length: numSteps }).map((_, i) => {
            const isDone = completedSteps.has(i)
            const isActive = i === activeStepIdx && !isDone
            return (
              <div key={i} style={{
                width: 8, height: 8, borderRadius: '50%',
                background: isDone ? '#16a34a' : isActive ? '#16a34a' : '#e5e7eb',
                boxShadow: isActive ? '0 0 0 3px rgba(22,163,74,0.12)' : 'none',
                transform: isActive ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.4s ease',
              }} />
            )
          })}
        </div>
        <div style={{
          fontSize: 13, fontWeight: 600, fontVariantNumeric: 'tabular-nums',
          color: timerState === 'done' ? '#16a34a' : timerState === 'running' ? '#9ca3af' : '#d1d5db',
          minWidth: 36, textAlign: 'right' as const,
          transition: 'color 0.3s',
        }}>
          {timerText}
        </div>
      </div>

      {/* Body */}
      <div style={{ position: 'relative', minHeight: 340, overflow: 'hidden' }}>
        {phase && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '24px 32px',
            opacity: slideClass === 'active' ? 1 : 0,
            transform: slideClass === 'entering' ? 'translateY(20px)' : slideClass === 'exiting' ? 'translateY(-15px)' : 'translateY(0)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}>
            {phase.type === 'input' && (
              <>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: 1.5, marginBottom: 12 }}>
                  {config.inputTag}
                </div>
                <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12, padding: '22px 28px', fontSize: 15.5, color: '#374151', lineHeight: 1.6, maxWidth: 820, textAlign: 'left' as const }}>
                  {config.inputText}
                </div>
              </>
            )}
            {phase.type === 'step' && (() => {
              const s = config.steps[phase.index]
              const stepNum = String(phase.index + 1).padStart(2, '0')
              return (
                <>
                  <div style={{ fontSize: 42, fontWeight: 900, color: 'rgba(22,163,74,0.12)', lineHeight: 1, marginBottom: 2 }}>{stepNum}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#d1d5db', marginBottom: 8, letterSpacing: 0.5 }}>of 08</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: '#111', letterSpacing: -0.5, marginBottom: 12, textAlign: 'center' as const }}>{s.title}</div>
                  <div style={{
                    background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12,
                    padding: '16px 22px', maxWidth: 820, width: '100%',
                    opacity: slideClass === 'active' ? 1 : 0,
                    transform: slideClass === 'active' ? 'translateY(0)' : 'translateY(8px)',
                    transition: 'opacity 0.4s ease 0.3s, transform 0.4s ease 0.3s',
                  }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 10, lineHeight: 1.4 }}>{s.main}</div>
                    <div style={{
                      fontSize: 13.5, color: '#6b7280', lineHeight: 1.6, marginBottom: 10,
                      background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 14px',
                    }} dangerouslySetInnerHTML={{ __html: s.detail }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: '#16a34a' }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        width: 18, height: 18, borderRadius: '50%', background: '#dcfce7', fontSize: 10, flexShrink: 0,
                      }}>✓</span>
                      {s.benefit}
                      {s.manual && (
                        <span style={{ color: '#ef4444', fontWeight: 500, textDecoration: 'line-through', opacity: 0.5, fontSize: 11, marginLeft: 4 }}>{s.manual}</span>
                      )}
                    </div>
                  </div>
                </>
              )
            })()}
            {phase.type === 'output' && config.output}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Main Tabbed Demo Component ───────────────────────────────────────────────

export default function AgentDemosTabbed({ onTabChange }: { onTabChange?: (idx: number) => void } = {}) {
  const [activeTab, setActiveTab] = useState(0)
  const [userInteracted, setUserInteracted] = useState(false)
  const autoRotateRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Visibility observer
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => setIsVisible(e.isIntersecting), { threshold: 0.15 })
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [])

  // Auto-rotate tabs
  useEffect(() => {
    if (!isVisible) return
    if (userInteracted) {
      // After user clicks, resume auto-rotate after 2 full cycles of the current demo
      const resumeTimer = setTimeout(() => {
        setUserInteracted(false)
      }, AUTO_ROTATE_INTERVAL * 2)
      return () => clearTimeout(resumeTimer)
    }
    autoRotateRef.current = setInterval(() => {
      setActiveTab(prev => (prev + 1) % DEMOS.length)
    }, AUTO_ROTATE_INTERVAL)
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current)
    }
  }, [isVisible, userInteracted])

  const handleTabClick = (idx: number) => {
    setActiveTab(idx)
    setUserInteracted(true)
    onTabChange?.(idx)
  }

  // Notify parent of auto-rotate tab changes
  useEffect(() => {
    onTabChange?.(activeTab)
  }, [activeTab, onTabChange])

  const activeDemo = DEMOS[activeTab]

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
        {DEMOS.map((d, i) => {
          const isActive = i === activeTab
          return (
            <button key={d.id} onClick={() => handleTabClick(i)} style={{
              padding: '12px 32px', borderRadius: 10, cursor: 'pointer',
              fontSize: 15, fontWeight: 600,
              color: isActive ? '#fff' : '#6b7280',
              background: isActive ? '#16a34a' : '#fff',
              border: `1px solid ${isActive ? '#16a34a' : '#e5e7eb'}`,
              boxShadow: isActive ? '0 2px 8px rgba(22,163,74,0.3)' : '0 1px 3px rgba(0,0,0,0.06)',
              display: 'flex', alignItems: 'center', gap: 8,
              transition: 'all 0.3s ease',
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: isActive ? '#fff' : '#d1d5db',
                transition: 'background 0.3s',
              }} />
              {d.label}
            </button>
          )
        })}
      </div>

      {/* Demo Cards */}
      {DEMOS.map((d, i) => (
        <DemoCard key={d.id} config={d} active={i === activeTab && isVisible} />
      ))}
    </div>
  )
}

// ── MiniAgentDemo (compact version for use in other sections) ────────────────

interface MiniStep { fn: string; label: string; out: string; time?: string }

const MINI_STEPS: MiniStep[] = [
  { fn: 'catalog_lookup', label: 'Matching products in your catalog', out: 'All 3 items found — copper fittings, PVC elbows, ball valves' },
  { fn: 'price_engine', label: 'Calculating price and discounts', out: '$4,280.00 — volume discount applied automatically' },
  { fn: 'margin_calculator', label: 'Checking profit margin', out: 'Margin at 34.2% — within your target range' },
  { fn: 'send_quote', label: 'Sending quote to the customer', out: 'Delivered — branded PDF with one-click accept link' },
]

export function MiniAgentDemo({ steps: customSteps }: { steps?: MiniStep[] }) {
  const stepsToUse = customSteps ?? MINI_STEPS
  const [step, setStep] = useState(-1)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => { if (vis && !started) { setStarted(true); setStep(0) } }, [vis, started])
  useEffect(() => {
    if (step < 0 || step >= stepsToUse.length) return
    const delay = step === 0 ? 600 : step === stepsToUse.length - 1 ? 900 : 650 + Math.random() * 250
    const t = setTimeout(() => { if (step < stepsToUse.length - 1) setStep(step + 1) }, delay)
    return () => clearTimeout(t)
  }, [step, stepsToUse.length])

  const done = step === stepsToUse.length - 1

  return (
    <div ref={ref} style={{
      background: '#f9fafb', borderRadius: 12, overflow: 'hidden',
      border: '1px solid #e5e7eb',
    }}>
      <div style={{ padding: '10px 14px', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: done ? '#16a34a' : step >= 0 ? '#facc15' : '#d1d5db' }} />
          <span style={{ fontSize: 11, fontWeight: 600, color: done ? '#16a34a' : step >= 0 ? '#b45309' : '#9ca3af' }}>
            {done ? 'Quote Delivered' : step >= 0 ? 'Processing...' : 'Ready'}
          </span>
        </div>
        {done && <span style={{ fontSize: 13, fontWeight: 800, color: '#16a34a', fontFamily: 'monospace' }}>2:47</span>}
      </div>
      <div style={{ padding: '6px 0' }}>
        {stepsToUse.map((s, i) => {
          const isActive = i === step && !done
          const isComplete = i < step || done
          const isPending = i > step && !done
          return (
            <div key={i} style={{
              padding: '8px 16px',
              background: isActive ? 'rgba(22,163,74,0.04)' : 'transparent',
              borderLeft: `3px solid ${isActive ? '#16a34a' : isComplete ? '#16a34a' : 'transparent'}`,
              opacity: isPending ? 0.3 : 1,
              transition: 'all 0.4s ease',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <div style={{
                  width: 17, height: 17, borderRadius: '50%', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: isComplete ? '#16a34a' : 'transparent',
                  border: `2px solid ${isComplete ? '#16a34a' : isActive ? '#16a34a' : '#d1d5db'}`,
                  transition: 'all 0.4s ease',
                }}>
                  {isComplete && <span style={{ fontSize: 9, color: '#fff', fontWeight: 800 }}>✓</span>}
                  {isActive && <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#16a34a' }} />}
                </div>
                <span style={{
                  fontSize: 12, fontWeight: 600,
                  color: isComplete ? '#16a34a' : isActive ? '#111' : '#9ca3af',
                  transition: 'color 0.3s ease',
                }}>
                  {s.label}
                </span>
              </div>
              {(isActive || isComplete) && (
                <div style={{
                  marginTop: 4, marginLeft: 26,
                  fontSize: 10.5, color: isComplete ? '#6b7280' : '#16a34a',
                  lineHeight: 1.5, opacity: isComplete ? 0.7 : 1,
                }}>
                  → {s.out}
                </div>
              )}
            </div>
          )
        })}
      </div>
      {done && (
        <div style={{
          padding: '10px 16px', borderTop: '1px solid #dcfce7', background: '#f0fdf4',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#16a34a' }}>Quote delivered in 2:47</span>
        </div>
      )}
    </div>
  )
}

// ── Keep old exports for backward compatibility ──────────────────────────────
export { AgentDemosTabbed as LiveQuoteDemo }
export { AgentDemosTabbed as LiveRevenueDemo }
