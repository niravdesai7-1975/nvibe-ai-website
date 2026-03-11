import type { Metadata } from 'next'
import PlatformPageContent from '@/components/PlatformPageContent'

export const metadata: Metadata = {
  title: 'AI-Native Customer Support Platform — Features & Pricing',
  description: 'NVibe AI platform: Agent console, ticketing, knowledge base, analytics, SLA management, and VPC-native AI inference. Replace Salesforce Service Cloud at $49–$199/agent/month.',
  alternates: {
    canonical: 'https://nvibe.ai/platform',
  },
  openGraph: {
    title: 'AI-Native Customer Support Platform | NVibe AI',
    description: 'Full-stack AI customer support: custom fine-tuned models, on-premise VPC deployment, 29-table data model. Replace Salesforce Service Cloud at 10x lower cost.',
    url: 'https://nvibe.ai/platform',
    images: [
      {
        url: 'https://nvibe.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NVibe AI Platform — AI Customer Support Features',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Native Customer Support Platform | NVibe AI',
    description: 'Replace Salesforce Service Cloud. Custom AI, VPC deployment, $49–$199/agent/month.',
  },
}

export default function PlatformPage() {
  return <PlatformPageContent />
}
