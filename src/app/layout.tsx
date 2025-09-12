import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NVibe Private AI - Fortune 500 Insights for Small Business',
  description: 'NVibe Private AI, built on NVIDIA\'s world-class AI platform, supercharges your profits by connecting to your financial systems and building a Profit Grid to pinpoint exactly where your profits soar and bleed.',
  keywords: 'private AI, profit optimization, financial intelligence, NVIDIA NeMo, business analytics, profit grid, cost optimization, Fortune 500 insights, small business AI',
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
    title: 'NVibe Private AI - Fortune 500 Insights for Small Business',
    description: 'Built on NVIDIA\'s world-class AI platform to solve your toughest business problems. The first private AI that supercharges your profits.',
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
    title: 'NVibe Private AI - Fortune 500 Insights for Small Business',
    description: 'Built on NVIDIA\'s world-class AI platform to solve your toughest business problems. The first private AI that supercharges your profits.',
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}