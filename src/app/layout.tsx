import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MockAuthProvider } from '@/contexts/MockAuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NVibe AI — Custom AI for Your Business, From the GPU Up',
  description: 'NVibe trains a custom AI on your data, deploys it inside your infrastructure, and serves it faster than Together AI. Zero hallucinations. Your data never leaves your VPC.',
  keywords: 'NVibe AI, custom AI, customer support AI, TensorRT-LLM, H100, inference engine, VPC deployment, fine-tuned LLM, Together AI alternative, NVIDIA',
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
    title: 'NVibe AI — Custom AI for Your Business, From the GPU Up',
    description: 'Fine-tuned on your data. Deployed in your VPC. Faster than Together AI on all 5 batch sizes. $15 per million messages.',
    url: 'https://nvibe.ai',
    siteName: 'NVibe AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVibe AI — Custom AI for Your Business, From the GPU Up',
    description: 'Fine-tuned on your data. Deployed in your VPC. Faster than Together AI on all 5 batch sizes.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <MockAuthProvider>
          {children}
        </MockAuthProvider>
      </body>
    </html>
  )
}
