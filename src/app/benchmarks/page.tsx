'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BenchmarksPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />
      <div className="pt-16 flex flex-col min-h-[calc(100vh-4rem)]">
        {/* Header: highlight that this is the Benchmark report */}
        <div className="flex-shrink-0 bg-gray-50 border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <h1 className="text-lg font-semibold text-gray-900">Benchmark Results</h1>
          <Link
            href="/benchmarks.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-green-600 hover:text-green-700 whitespace-nowrap"
          >
            Open full report →
          </Link>
        </div>
        {/* Benchmark report (benchmarks.html) */}
        <div className="flex-1 min-h-[600px] w-full">
          <iframe
            src="/benchmarks.html"
            className="w-full border-0 rounded-b-lg"
            style={{ minHeight: 'calc(100vh - 8rem)', height: '100%' }}
            title="NVibe Benchmark Results"
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
