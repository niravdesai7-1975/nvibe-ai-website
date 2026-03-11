import type { Metadata } from 'next'
import SalesforceAlternativeContent from '@/components/SalesforceAlternativeContent'

export const metadata: Metadata = {
  title: 'Salesforce Alternative — AI-Native Service, Sales & Marketing Cloud',
  description: 'Replace Salesforce Service Cloud, Sales Cloud & Marketing Cloud with an AI-native platform. On-premise AI deployment on NVIDIA H100 GPUs. Zero hallucinations, $99/agent/month — 10x cheaper than Salesforce. Built by ex-Salesforce AI engineer.',
  keywords: 'Salesforce alternative, Salesforce Service Cloud alternative, Salesforce Sales Cloud alternative, Salesforce Marketing Cloud alternative, on-premise AI customer support, on-premise AI sales, on-premise AI marketing, AI CRM alternative, enterprise AI platform, NVIDIA H100 AI deployment',
  alternates: {
    canonical: 'https://nvibe.ai/salesforce-alternative',
  },
  openGraph: {
    title: 'Salesforce Alternative — AI-Native Service, Sales & Marketing Cloud | NVibe AI',
    description: 'Replace Salesforce with an AI-native platform deployed on-premise. Custom AI trained on your data. Zero hallucinations. $99/agent/month.',
    url: 'https://nvibe.ai/salesforce-alternative',
    siteName: 'NVibe AI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://nvibe.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NVibe AI — Salesforce Alternative',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salesforce Alternative — AI-Native Service, Sales & Marketing Cloud',
    description: 'On-premise AI platform replacing Salesforce Service, Sales & Marketing Cloud. $99/agent/month. Zero hallucinations.',
    images: ['https://nvibe.ai/og-image.png'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is NVibe AI a direct replacement for Salesforce Service Cloud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NVibe AI mirrors the Salesforce Service Cloud data model with a 29-table schema including accounts, contacts, cases, knowledge articles, and SLA management. AI is built in as the primary actor — not bolted on. Migration takes approximately 3 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can NVibe AI replace Salesforce Sales Cloud and Marketing Cloud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NVibe AI provides AI-native alternatives to Sales Cloud and Marketing Cloud. For sales, custom AI models are trained on your pipeline data for lead scoring, opportunity insights, and forecasting. For marketing, AI-driven personalization replaces rules-based segmentation with real-time customer intelligence.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does on-premise AI deployment work with NVibe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NVibe deploys entirely inside your VPC on NVIDIA H100 GPUs. The stack includes TensorRT-LLM for inference, NVIDIA NeMo for fine-tuning, and NVIDIA Triton Inference Server for serving. No customer data ever leaves your infrastructure — unlike Salesforce Einstein which routes through Salesforce servers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to migrate from Salesforce to NVibe AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NVibe AI reaches production deployment within 3 weeks. Week 1-2: data migration and custom AI model training using NVIDIA NeMo. Week 3: VPC deployment, load testing, and go-live. Compare this to typical Salesforce implementations that take 3-12 months.',
      },
    },
  ],
}

export default function SalesforceAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SalesforceAlternativeContent />
    </>
  )
}
