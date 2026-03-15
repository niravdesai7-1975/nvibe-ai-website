import Nav from '@/components/Nav'
import HeroSection from '@/components/HeroSection'
import SolutionTabs from '@/components/SolutionTabs'
import MetricsTicker from '@/components/MetricsTicker'
import PlatformOverview from '@/components/PlatformOverview'
import TrustStrip from '@/components/TrustStrip'
import IndustriesSection from '@/components/IndustriesSection'
import ComparisonSection from '@/components/ComparisonSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />
      <HeroSection />
      <SolutionTabs />
      <MetricsTicker />
      <PlatformOverview />
      <TrustStrip />
      <IndustriesSection />
      <ComparisonSection />
      <CTASection />
      <Footer />
    </main>
  )
}
