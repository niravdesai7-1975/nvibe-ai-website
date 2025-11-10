'use client'
import Nav from '@/components/Nav'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <AboutSection />
      <Footer />
    </main>
  )
}