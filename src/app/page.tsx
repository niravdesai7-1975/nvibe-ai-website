import Nav from '@/components/Nav'
import HeroSection from '@/components/HeroSection'
import PlatformOverview from '@/components/PlatformOverview'
import SolutionTabs from '@/components/SolutionTabs'
import ComparisonSection from '@/components/ComparisonSection'
import PerformanceSection from '@/components/PerformanceSection'
import FiveQuoteChallenge from '@/components/FiveQuoteChallenge'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />
      <HeroSection />
      <PlatformOverview />
      <SolutionTabs />
      <ComparisonSection />
      <PerformanceSection />
      <FiveQuoteChallenge />
      <CTASection />
      <Footer />
    </main>
  )
}
