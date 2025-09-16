/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEO = {
  title: 'NVibe AI - Innovative AI-Powered Solutions for Sales & Manufacturing',
  description: 'NVibe AI provides innovative AI-powered solutions for modern sales and manufacturing challenges, powered by NVIDIA\'s platform.',
  canonical: 'https://nvibe.ai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nvibe.ai',
    siteName: 'NVibe AI',
    title: 'NVibe AI - Innovative AI-Powered Solutions for Sales & Manufacturing',
    description: 'Transform your business with cutting-edge AI technology that revolutionizes sales processes and manufacturing efficiency.',
    images: [
      {
        url: 'https://nvibe.ai/logo.svg',
        width: 1200,
        height: 630,
        alt: 'NVibe AI Logo',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    handle: '@nvibeai',
    site: '@nvibeai',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'NVibe AI, AI-powered solutions, sales intelligence, manufacturing optimization, predictive analytics, process automation, NVIDIA platform, business transformation, artificial intelligence, machine learning',
    },
    {
      name: 'author',
      content: 'NVibe AI',
    },
    {
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    },
    {
      name: 'googlebot',
      content: 'index, follow',
    },
    {
      name: 'bingbot',
      content: 'index, follow',
    },
    {
      name: 'theme-color',
      content: '#1a1a2e',
    },
    {
      name: 'msapplication-TileColor',
      content: '#1a1a2e',
    },
    {
      name: 'application-name',
      content: 'NVibe AI',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'NVibe AI',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'language',
      content: 'English',
    },
    {
      name: 'geo.region',
      content: 'US-CA',
    },
    {
      name: 'geo.placename',
      content: 'San Francisco',
    },
    {
      name: 'geo.position',
      content: '37.7749;-122.4194',
    },
    {
      name: 'ICBM',
      content: '37.7749, -122.4194',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      href: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preconnect',
      href: 'https://cdnjs.cloudflare.com',
    },
  ],
};

export default defaultSEO;
