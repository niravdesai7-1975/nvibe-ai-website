import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MockAuthProvider } from '@/contexts/MockAuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NVibe AI: NVIDIA-Powered Business Automation',
  description: 'NVibe AI - An Innovative AI-Powered Solutions custom build for your needs on industry standards. Driven by NVIDIA\'s Platform. Transform your business with cutting-edge AI technology that supercharges your business.',
  keywords: 'NVibe AI, NVibe, nvibe ai, AI-powered solutions, sales intelligence, manufacturing optimization, predictive analytics, process automation, NVIDIA platform, business transformation, NVibe AI company, NVibe AI solutions',
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
    title: 'NVibe AI: NVIDIA-Powered Business Automation',
    description: 'NVibe AI - An Innovative AI-Powered Solutions custom build for your needs on industry standards. Driven by NVIDIA\'s Platform.',
    url: 'https://nvibe.ai',
    siteName: 'NVibe AI',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        width: 2070,
        height: 1380,
        alt: 'NVibe AI - AI-Powered Business Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVibe AI: NVIDIA-Powered Business Automation',
    description: 'NVibe AI - An Innovative AI-Powered Solutions custom build for your needs on industry standards. Driven by NVIDIA\'s Platform.',
    images: ['https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'],
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
  classification: 'AI Business Solutions',
  other: {
    'theme-color': '#1a1a2e',
    'msapplication-TileColor': '#1a1a2e',
    'application-name': 'NVibe AI',
    'apple-mobile-web-app-title': 'NVibe AI',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'language': 'English',
    'geo.region': 'US-CA',
    'geo.placename': 'San Francisco',
    'geo.position': '37.7749;-122.4194',
    'ICBM': '37.7749, -122.4194',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
      </head>
      <body className={inter.className}>
        <MockAuthProvider>
          {children}
        </MockAuthProvider>
      </body>
    </html>
  )
}