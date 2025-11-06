'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AboutSection from '@/components/AboutSection'

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <AboutSection />
      <Footer />
    </main>
  )
}
