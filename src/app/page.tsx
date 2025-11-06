'use client'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <About />
      <Footer />
    </main>
  )
}