'use client'

import { useState, useEffect, useRef } from 'react'

function useCount(target: number, dur = 1600, delay = 0) {
  const [val, setVal] = useState(0)
  const [go, setGo] = useState(false)
  useEffect(() => { const t = setTimeout(() => setGo(true), delay); return () => clearTimeout(t) }, [delay])
  useEffect(() => {
    if (!go) return
    const t0 = Date.now(); let raf: number
    const tick = () => {
      const p = Math.min((Date.now() - t0) / dur, 1)
      setVal(Math.floor(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [go, target, dur])
  return val
}

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

function PerfCard({ value, suffix = '', prefix = '', label, sub, color, delay = 0 }: { value: number; suffix?: string; prefix?: string; label: string; sub: string; color: string; delay?: number }) {
  const [ref, vis] = useVisible()
  const n = useCount(vis ? value : 0, 1600, delay + 300)
  return (
    <div ref={ref} style={{ background: '#ffffff', borderRadius: 16, padding: '28px 24px', flex: 1, minWidth: 220, border: '1px solid #e8eaed', boxShadow: '0 1px 2px rgba(60,64,67,0.3)' }}>
      <div style={{ fontSize: 40, fontWeight: 800, color, fontFamily: 'monospace', lineHeight: 1 }}>{prefix}{n.toLocaleString()}{suffix}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: '#202124', marginTop: 10 }}>{label}</div>
      <div style={{ fontSize: 14, color: '#3c4043', marginTop: 6, lineHeight: 1.65 }}>{sub}</div>
    </div>
  )
}

export default function PerformanceSection() {
  return (
    <section style={{ padding: '72px 24px', background: '#ffffff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 20, background: '#f0fdf4', color: '#16a34a', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, border: '1px solid #bbf7d0' }}>Production-Grade</span>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, marginTop: 16, letterSpacing: -1, color: '#202124' }}>Built for your busiest day. Not just a demo.</h2>
          <p style={{ fontSize: 17, color: '#3c4043', marginTop: 12, maxWidth: 600, margin: '12px auto 0', lineHeight: 1.75 }}>NVibe handles 1,000+ simultaneous conversations without slowing down. These are production numbers, not lab results.</p>
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          <PerfCard value={10710} suffix=" tok/s" label="Processing Speed"      sub="Fastest in class — instant responses even at peak load"                      color="#1a73e8" delay={0}   />
          <PerfCard value={840}   suffix="ms"     label="Response Time"         sub="Under 1 second, every time — even with 1,000 customers at once"              color="#137333" delay={100} />
          <PerfCard value={1000}  suffix="+"      label="Concurrent Customers"  sub="Simultaneous conversations handled without degradation — tested in production" color="#b06000" delay={200} />
          <PerfCard value={0}     suffix="%"      label="Wrong Answers"         sub="Zero hallucinations across 27 adversarial test categories"                    color="#137333" delay={300} />
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <p style={{ fontSize: 13, color: '#80868b', marginBottom: 14 }}>All benchmarks independently reproducible. Full methodology published.</p>
          <a href="/benchmarks.html" style={{ display: 'inline-block', padding: '14px 28px', borderRadius: 10, border: '1.5px solid #e8eaed', background: '#ffffff', color: '#3c4043', fontSize: 15, fontWeight: 600, textDecoration: 'none', boxShadow: '0 1px 2px rgba(60,64,67,0.3)' }}>
            See Full Performance Report →
          </a>
        </div>
      </div>
    </section>
  )
}
