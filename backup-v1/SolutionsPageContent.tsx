'use client'

import { useState, useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import SolutionTabs from './SolutionTabs'
import ComparisonSection from './ComparisonSection'
import IndustriesSection from './IndustriesSection'
import { MiniAgentDemo } from './AgentDemos'

const GREEN = '#16a34a'

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

// ── Hero ─────────────────────────────────────────────────────────────────────

function SolutionsHero() {
  const isMobile = useIsMobile()
  return (
    <section style={{
      padding: isMobile ? '80px 16px 48px' : '100px 24px 64px',
      background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)',
      borderBottom: '1px solid #e8eaed',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#ffffff', border: '1px solid #bbf7d0', borderRadius: 20, padding: '5px 14px', marginBottom: 24, boxShadow: '0 1px 2px rgba(60,64,67,0.15)' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN, boxShadow: '0 0 6px rgba(22,163,74,0.5)' }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: GREEN, textTransform: 'uppercase' as const, letterSpacing: 1.5 }}>Solutions</span>
        </div>
        <h1 style={{ fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: 800, color: '#202124', letterSpacing: -1.5, lineHeight: 1.1, margin: '0 0 20px' }}>
          The right solution for{' '}
          <span style={{ background: 'linear-gradient(135deg, #16a34a, #15803d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>where you are today.</span>
        </h1>
        <p style={{ fontSize: isMobile ? 16 : 18, color: '#3c4043', lineHeight: 1.75, maxWidth: 600, margin: '0 auto 32px' }}>
          Whether you&apos;re quoting from spreadsheets, escaping Salesforce CPQ, or stuck mid-SAP migration — NVibe gets you quoting in minutes, not months.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' as const }}>
          <a href="#contact" style={{ display: 'inline-block', padding: '14px 28px', borderRadius: 10, background: GREEN, color: '#fff', fontSize: 15, fontWeight: 600, textDecoration: 'none', boxShadow: '0 2px 8px rgba(22,163,74,0.3)' }}>
            Send us 5 quotes →
          </a>
          <a href="#how-it-works" style={{ display: 'inline-block', padding: '14px 28px', borderRadius: 10, background: '#ffffff', color: '#3c4043', fontSize: 15, fontWeight: 600, textDecoration: 'none', border: '1px solid #e8eaed', boxShadow: '0 1px 2px rgba(60,64,67,0.15)' }}>
            See how it works
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Two capabilities ──────────────────────────────────────────────────────────

const QUOTE_STEPS_MINI = [
  { fn: 'catalog_lookup',    label: 'Matching products in your catalog',  out: 'All 3 items found — copper fittings, PVC elbows, ball valves' },
  { fn: 'price_engine',      label: 'Calculating price and discounts',    out: '$4,280.00 — volume discount applied automatically' },
  { fn: 'margin_calculator', label: 'Checking profit margin',             out: 'Margin at 34.2% — within your target range' },
  { fn: 'send_quote',        label: 'Sending quote to the customer',      out: 'Delivered — branded PDF with one-click accept link' },
]

const REVENUE_STEPS_MINI = [
  { fn: 'intent_classifier', label: 'Understanding what they need',       out: 'Support issue + warehouse expansion interest detected' },
  { fn: 'response_generator',label: 'Sending the resolution',             out: 'Issue resolved on first contact — no follow-up needed' },
  { fn: 'signal_detector',   label: 'Spotting the revenue opportunity',   out: '$120K expansion — high confidence — expected close Q3' },
  { fn: 'crm_updater',       label: 'Routing deal to your sales team',    out: 'Assigned to Alex Rivera — discovery call booked Mar 24' },
]

interface CapabilityCardProps {
  label: string
  heading: string
  sub: string
  steps: Array<{ fn: string; label: string; out: string }>
  stat: string
  statSub: string
}

function CapabilityCard({ label, heading, sub, steps, stat, statSub }: CapabilityCardProps) {
  return (
    <div style={{ flex: 1, minWidth: 0, background: '#ffffff', borderRadius: 16, border: '1px solid #e8eaed', boxShadow: '0 1px 3px rgba(60,64,67,0.15)', overflow: 'hidden', display: 'flex', flexDirection: 'column' as const }}>
      <div style={{ padding: '28px 28px 20px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 20, padding: '4px 12px', marginBottom: 14 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: GREEN }} />
          <span style={{ fontSize: 10, fontWeight: 700, color: GREEN, textTransform: 'uppercase' as const, letterSpacing: 1.5 }}>{label}</span>
        </div>
        <h3 style={{ fontSize: 'clamp(16px, 2.5vw, 21px)', fontWeight: 800, color: '#202124', letterSpacing: -0.5, lineHeight: 1.2, margin: '0 0 8px' }}>{heading}</h3>
        <p style={{ fontSize: 14, color: '#5f6368', lineHeight: 1.65, margin: 0 }}>{sub}</p>
      </div>
      <div style={{ borderTop: '1px solid #e8eaed', flex: 1 }}>
        <MiniAgentDemo steps={steps} />
      </div>
      <div style={{ padding: '16px 28px', background: '#f9fafb', borderTop: '1px solid #e8eaed', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: GREEN, fontFamily: 'monospace', lineHeight: 1 }}>{stat}</div>
        <div style={{ fontSize: 13, color: '#5f6368', lineHeight: 1.4 }}>{statSub}</div>
      </div>
    </div>
  )
}

function TwoCapabilities() {
  const isMobile = useIsMobile()
  return (
    <section style={{ padding: isMobile ? '48px 16px' : '72px 24px', background: '#f9fafb', borderTop: '1px solid #e8eaed', borderBottom: '1px solid #e8eaed' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 36 : 52 }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 20, background: '#f0fdf4', color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, border: '1px solid #bbf7d0' }}>
            What NVibe Does
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, marginTop: 16, letterSpacing: -1, color: '#202124' }}>
            Two things. Both on autopilot.
          </h2>
          <p style={{ fontSize: isMobile ? 15 : 17, color: '#3c4043', marginTop: 12, maxWidth: 560, margin: '12px auto 0', lineHeight: 1.75 }}>
            Quote faster than your competition. Capture revenue your team would have missed.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 20, flexDirection: isMobile ? 'column' : 'row' as const }}>
          <CapabilityCard
            label="Quote Automation"
            heading="Email in → quote out in 3 minutes"
            sub="Customer sends an email. NVibe reads it, matches your catalog, checks margins, builds the PDF, and sends — all without a rep touching it."
            steps={QUOTE_STEPS_MINI}
            stat="2:47"
            statSub="Average time from email to delivered quote. Your team used to take 3–5 days."
          />
          <CapabilityCard
            label="Revenue Engine"
            heading="Support message → $120K opportunity routed to sales"
            sub="Every customer message hides a signal. NVibe resolves the issue and simultaneously routes the expansion opportunity to your sales team."
            steps={REVENUE_STEPS_MINI}
            stat="$120K"
            statSub="Average expansion opportunity captured per routed deal. From a ticket your team would have just closed."
          />
        </div>
      </div>
    </section>
  )
}

// ── How it works ──────────────────────────────────────────────────────────────

const HOW_STEPS = [
  {
    num: '01',
    title: 'Connect your catalog, pricing rules, and CRM',
    body: 'NVibe ingests your product catalog, price books, margin thresholds, and approval rules. No data leaves your infrastructure.',
  },
  {
    num: '02',
    title: 'Fine-tune on your business, not generic data',
    body: 'We train on your past quotes, your terminology, your customers. The result is an AI that knows your business — not a generic GPT wrapper.',
  },
  {
    num: '03',
    title: 'Deploy inside your VPC in days',
    body: 'Docker containers run inside your own infrastructure. Works alongside your existing Salesforce CRM. No rip-and-replace.',
  },
  {
    num: '04',
    title: 'Your team reviews. AI does the work.',
    body: 'Nothing goes to a customer without a human approving it. AI builds, your rep reviews, edits if needed, and hits send.',
  },
]

function HowItWorks() {
  const isMobile = useIsMobile()
  return (
    <section id="how-it-works" style={{ padding: isMobile ? '48px 16px' : '72px 24px', background: '#ffffff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 36 : 52 }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 20, background: '#f0fdf4', color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, border: '1px solid #bbf7d0' }}>
            How It Works
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, marginTop: 16, letterSpacing: -1, color: '#202124' }}>
            Live in weeks. Not months.
          </h2>
          <p style={{ fontSize: isMobile ? 15 : 17, color: '#3c4043', marginTop: 12, maxWidth: 520, margin: '12px auto 0', lineHeight: 1.75 }}>
            No 6-month implementation. No consultants. No rip-and-replace.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20 }}>
          {HOW_STEPS.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 18, padding: '24px', background: '#f9fafb', borderRadius: 14, border: '1px solid #e8eaed' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: GREEN, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, fontFamily: 'monospace', flexShrink: 0 }}>{s.num}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#202124', marginBottom: 6, lineHeight: 1.3 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: '#5f6368', lineHeight: 1.65 }}>{s.body}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28, padding: '18px 24px', background: '#f0fdf4', borderRadius: 12, border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' as const }}>
          <span style={{ fontSize: 20 }}>🔗</span>
          <div style={{ flex: 1, minWidth: 200 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#202124' }}>Works alongside Salesforce CRM — not instead of it.</span>
            <span style={{ fontSize: 14, color: '#5f6368', marginLeft: 6 }}>Your reps keep their existing workflow. NVibe handles the quoting layer on top.</span>
          </div>
          <a href="#contact" style={{ display: 'inline-block', padding: '10px 20px', borderRadius: 8, background: GREEN, color: '#fff', fontSize: 13, fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>
            Book a 20-min call →
          </a>
        </div>
      </div>
    </section>
  )
}

// ── CTA ───────────────────────────────────────────────────────────────────────

function SolutionsCTA() {
  const isMobile = useIsMobile()
  return (
    <section style={{ padding: isMobile ? '48px 16px' : '72px 24px', background: '#0F1117' }}>
      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: 20, padding: '5px 14px', marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80' }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#4ade80', textTransform: 'uppercase' as const, letterSpacing: 1.5 }}>No commitment</span>
        </div>
        <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#ffffff', letterSpacing: -1, lineHeight: 1.15, margin: '0 0 16px' }}>
          Send us your 5 messiest quotes.{' '}
          <span style={{ color: '#4ade80' }}>Watch AI process them live.</span>
        </h2>
        <p style={{ fontSize: isMobile ? 15 : 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: '0 0 36px' }}>
          Real quotes. Real catalog. Real margins. No demo environment. If it works, you&apos;ll know in under an hour.
        </p>
        <a href="#contact" style={{ display: 'inline-block', padding: isMobile ? '14px 28px' : '17px 40px', borderRadius: 10, background: GREEN, color: '#ffffff', fontSize: isMobile ? 15 : 16, fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 16px rgba(22,163,74,0.4)' }}>
          Send Us Your 5 Quotes →
        </a>
        <div style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
          No implementation fee. No consultants. No 6-month project.
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SolutionsPageContent() {
  return (
    <main style={{ minHeight: '100vh', background: '#ffffff', color: '#202124' }}>
      <Nav />
      <SolutionsHero />
      <SolutionTabs />
      <IndustriesSection />
      <TwoCapabilities />
      <ComparisonSection />
      <HowItWorks />
      <SolutionsCTA />
      <Footer />
    </main>
  )
}
