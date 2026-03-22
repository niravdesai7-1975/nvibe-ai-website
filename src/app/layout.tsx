import type { Metadata } from 'next'
// Inter loaded via <link> in <head> instead
// import { Inter } from 'next/font/google'
import './globals.css'
import { MockAuthProvider } from '@/contexts/MockAuthContext'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'NVibe AI — Three AIs That Run Your Revenue | Quote AI, Revenue AI, Support AI',
    template: '%s | NVibe AI',
  },
  description: 'Three AIs that run your revenue — Quote AI, Revenue AI, Support AI. Custom AI trained on your data, deployed inside your VPC. Zero hallucinations. Book a demo.',
  keywords: 'AI customer support platform, enterprise AI customer service, on-premise AI customer support, AI customer service software, AI help desk software, conversational AI customer support, Salesforce Service Cloud alternative, self-hosted AI support, VPC AI deployment, fine-tuned LLM customer support, AI support agent, zero hallucination AI, NVIDIA H100 inference, TensorRT-LLM, NVIDIA NeMo fine-tuning, NVIDIA Triton Inference Server, NVIDIA GPU inference, enterprise AI deployment, private AI deployment, custom AI support software',
  authors: [{ name: 'NVibe AI' }],
  creator: 'NVibe AI',
  publisher: 'NVibe AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nvibe.ai'),
  openGraph: {
    title: 'NVibe AI — Three AIs That Run Your Revenue | Quote AI, Revenue AI, Support AI',
    description: 'Three AIs that run your revenue — Quote AI, Revenue AI, Support AI. Custom AI trained on your data, deployed inside your VPC. Zero hallucinations.',
    url: 'https://nvibe.ai',
    siteName: 'NVibe AI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://nvibe.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NVibe AI — Three AIs That Run Your Revenue',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVibe AI — Three AIs That Run Your Revenue',
    description: 'Three AIs that run your revenue — Quote AI, Revenue AI, Support AI. Deployed in your VPC. Zero hallucinations.',
    images: ['https://nvibe.ai/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://nvibe.ai',
  },
  category: 'technology',
  other: {
    'theme-color': '#ffffff',
    'application-name': 'NVibe AI',
    'apple-mobile-web-app-title': 'NVibe AI',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NVibe AI',
  url: 'https://nvibe.ai',
  logo: 'https://nvibe.ai/logo.svg',
  description: 'Three AIs that run your revenue — Quote AI, Revenue AI, Support AI. Custom AI trained on your data, deployed inside your VPC.',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-646-413-4795',
    contactType: 'sales',
    email: 'nirav@nvibe.ai',
  },
  sameAs: [
    'https://www.linkedin.com/company/nvibe-ai',
  ],
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'NVibe AI Customer Support Platform',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Cloud, On-Premise, VPC',
  description: 'AI-native customer support platform with custom fine-tuned models, on-premise VPC deployment, zero hallucinations, and real-time sentiment detection. 10x cheaper than GPT-4o.',
  url: 'https://nvibe.ai',
  offers: {
    '@type': 'Offer',
    price: '15',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '15',
      priceCurrency: 'USD',
      unitText: 'per 1 million messages',
    },
  },
  featureList: [
    'Custom AI model trained on your business data',
    'On-premise VPC deployment — data never leaves your infrastructure',
    'Zero hallucination rate',
    'Real-time sentiment detection',
    'AI audit trail',
    'Faster than Together AI on all 5 batch sizes',
    '10,710 tokens/second throughput',
    'Production deployment in 3 weeks',
  ],
  author: {
    '@type': 'Organization',
    name: 'NVibe AI',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does NVibe AI work with existing support systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NVibe AI integrates with your existing tools via an OpenAI-compatible API and management portal. It also mirrors the Salesforce Service Cloud data model with a 29-table schema, making migration straightforward.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does NVibe AI prevent AI hallucinations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NVibe AI achieves a 0% hallucination rate by fine-tuning a custom model exclusively on your business data — your knowledge base, policies, past resolutions, and support history. Unlike general-purpose LLMs, the model only answers from what it has been trained on.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can NVibe AI be deployed in our own cloud or VPC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NVibe AI deploys entirely within your VPC on GCP, AWS, or on-premise hardware. No customer data ever leaves your infrastructure — AI inference runs on your own H100/H200 GPUs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does NVibe AI pricing compare to GPT-4o and Salesforce Service Cloud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NVibe AI costs $15 per 1 million messages — approximately 10x cheaper than GPT-4o. For a team of 40 agents, the total annual cost is approximately $132,000, compared to $2.5M–$4.5M per year for Salesforce Service Cloud.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does NVibe AI take to deploy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NVibe AI reaches production deployment within 3 weeks. The process includes 1–2 weeks for data collection and model training, followed by VPC deployment and testing in week 3.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is NVibe AI used for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NVibe AI is an AI-native customer support platform that replaces traditional helpdesks like Salesforce Service Cloud. It automates customer support conversations, detects sentiment in real-time, routes escalations, and provides full audit trails — all using a custom AI model trained on your specific business data.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        <MockAuthProvider>
          {children}
        </MockAuthProvider>
      </body>
    </html>
  )
}
