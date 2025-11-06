'use client'
import Image from 'next/image'

export default function AboutSection() {
  return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Founder Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 lg:gap-12">
            {/* Founder Image */}
            <div className="flex-shrink-0 text-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border border-black p-2 bg-black mx-auto">
                <Image
                  src="/images/nirav-desai.png"
                  alt="Nirav Desai"
                  width={256}
                  height={256}
                  className="w-full h-full rounded-full object-cover"
                  priority
                  unoptimized
                />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-4 lg:mt-6">Nirav Desai</h3>
              <h4 className="text-lg sm:text-xl lg:text-2xl text-green-400 font-bold mb-4 lg:mb-6">Founder & CTO</h4>
              
              {/* Social Links */}
              <div className="flex justify-center gap-4">
                    <a 
                      href="https://www.linkedin.com/in/ndesai730/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors border border-gray-300"
                    >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Founder Info */}
            <div className="text-center lg:text-left max-w-lg lg:max-w-xl lg:-mt-8">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                After <strong>engineering AI at Salesforce</strong> and scaling it to <strong>millions of customers</strong> and over <strong>$1.2 billion in ARR</strong>, Nirav is now bringing that same <strong>high-performance AI innovation</strong> directly to companies of all sizes.
                <br /><br />
                    He believes the era of costly, slow <strong>"keep-the-lights-on" technology is over</strong>.
                <br /><br />
                The <strong>next chapter belongs</strong> to companies <strong>bold enough to lead — and thrive — in the third industrial AI revolution</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">Our Mission</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 lg:mb-12 px-4">
            At NVibe AI, we believe that artificial intelligence should be accessible to businesses of all sizes. We're dedicated to creating innovative AI-powered solutions that position companies for unprecedented growth.
          </p>
          
          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16 px-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">We continuously push the boundaries of what's possible with AI</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                  <p className="text-gray-600">Making advanced AI technology accessible to businesses of all sizes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                  <p className="text-gray-600">Enterprise-grade reliability and performance for mission-critical operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">Ready to Transform Your Business?</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 lg:mb-12 px-4">
            Join the companies already leveraging NVibe AI's innovative solutions to optimize their operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a 
              href="/#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </a>
            <a 
              href="/#contact" 
              className="border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
