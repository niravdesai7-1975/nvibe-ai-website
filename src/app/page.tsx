'use client'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Solutions from '@/components/Solutions'
import Nvidia from '@/components/Nvidia'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />
      <Solutions />
      <Nvidia />
      <ContactSection />
      <Footer />
    </main>
  )
}