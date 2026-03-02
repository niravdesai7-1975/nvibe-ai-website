'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function BenchmarksPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />
      <div className="pt-16">
        <iframe
          src="/benchmarks.html"
          className="w-full border-0"
          style={{ height: 'calc(100vh - 4rem)' }}
          title="NVibe Benchmark Results"
        />
      </div>
    </main>
  )
}
