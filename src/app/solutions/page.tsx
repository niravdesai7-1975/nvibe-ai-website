import type { Metadata } from 'next'
import SolutionsPageContent from '@/components/SolutionsPageContent'

export const metadata: Metadata = {
  title: 'Solutions — NVibe AI',
  description: 'AI solutions for Support, Sales, Semantic Search, Procurement Intelligence, and Revenue Analytics. Turn every B2B conversation into revenue.',
  alternates: {
    canonical: 'https://nvibe.ai/solutions',
  },
  openGraph: {
    title: 'Solutions | NVibe AI',
    description: 'Five AI-powered solutions that turn B2B conversations into revenue — from support automation to procurement intelligence.',
    url: 'https://nvibe.ai/solutions',
    images: [
      {
        url: 'https://nvibe.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NVibe AI Solutions',
      },
    ],
  },
}

export default function SolutionsPage() {
  return <SolutionsPageContent />
}
