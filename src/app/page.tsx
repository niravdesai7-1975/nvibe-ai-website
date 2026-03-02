'use client'

import Nav from '@/components/Nav'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import PlatformPreview from '@/components/PlatformPreview'
import WowFeatures from '@/components/WowFeatures'
import PerformanceSection from '@/components/PerformanceSection'
import CostSection from '@/components/CostSection'
import StackSection from '@/components/StackSection'
import FounderSection from '@/components/FounderSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <PlatformPreview />
      <WowFeatures />
      <PerformanceSection />
      <CostSection />
      <StackSection />
      <FounderSection />
      <CTASection />
      <Footer />
    </main>
  )
}
