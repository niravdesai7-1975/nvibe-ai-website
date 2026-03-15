import type { Metadata } from 'next'
import TrustPageContent from '@/components/TrustPageContent'

export const metadata: Metadata = {
  title: 'Trust & Security — NVibe AI',
  description: 'Enterprise-grade security: VPC deployment, Constitutional AI safety, 4-agent verification pipeline, audit logging, SOC 2 in progress, GDPR-ready architecture.',
  alternates: {
    canonical: 'https://nvibe.ai/trust',
  },
  openGraph: {
    title: 'Trust & Security | NVibe AI',
    description: 'Your data never leaves your infrastructure. VPC-native deployment, Constitutional AI guardrails, immutable audit logs, and zero hallucination guarantees.',
    url: 'https://nvibe.ai/trust',
    images: [
      {
        url: 'https://nvibe.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NVibe AI — Trust & Security',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trust & Security | NVibe AI',
    description: 'VPC deployment, Constitutional AI safety, SOC 2 in progress. Your data stays yours.',
  },
}

export default function TrustPage() {
  return <TrustPageContent />
}
