import type { Metadata } from 'next'
import AboutPageContent from '@/components/AboutPageContent'

export const metadata: Metadata = {
  title: 'About — NVibe AI',
  description: 'Meet the founder behind NVibe AI. 25 years inside the enterprise, now building the AI it actually needs.',
  alternates: {
    canonical: 'https://nvibe.ai/about',
  },
  openGraph: {
    title: 'About | NVibe AI',
    description: '25 years inside the enterprise. Now building the AI it actually needs.',
    url: 'https://nvibe.ai/about',
    images: [
      {
        url: 'https://nvibe.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NVibe AI — About',
      },
    ],
  },
}

export default function AboutPage() {
  return <AboutPageContent />
}
