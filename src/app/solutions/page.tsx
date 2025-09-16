import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'NVibe AI Solutions - NVIDIA-Powered Business Automation',
  description: 'Discover NVibe AI\'s innovative solutions: real-time insights, advanced RAG capabilities, customer optimization, and predictive analytics powered by NVIDIA\'s platform.',
  keywords: 'NVibe AI solutions, AI-powered business automation, NVIDIA platform, real-time insights, customer optimization, predictive analytics, enterprise AI',
  openGraph: {
    title: 'NVibe AI Solutions - NVIDIA-Powered Business Automation',
    description: 'Transform your business with cutting-edge AI solutions including real-time insights, customer optimization, and predictive analytics.',
    url: 'https://nvibe.ai/solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVibe AI Solutions - AI-Powered Business Automation',
    description: 'Discover innovative AI solutions powered by NVIDIA\'s platform for business transformation.',
  },
  alternates: {
    canonical: 'https://nvibe.ai/solutions',
  },
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      
      {/* Solutions Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">NVibe AI Solutions</h1>
          <p className="text-xl mb-4">An Innovative AI-Powered Solutions custom build for your needs on industry standards</p>
          <p className="text-lg text-green-400 font-semibold mb-6">Driven by NVIDIA's Platform</p>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            Transform your business with cutting-edge AI technology that supercharges your business.
          </p>
        </div>
      </section>

      {/* How Our Solution Works */}
      <section className="py-20 px-4 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">How Our Solution Works</h2>
          <p className="text-xl text-gray-600 mb-8">Compete and Scale with NVibe AI</p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8">
              NVibe's cutting-edge SaaS AI, powered by Nvidia's full-stack innovation, transforms your enterprise by seamlessly integrating data systems in a secure, compliant cloud, achieving 3.5% margin protection, 10-12% cost savings, 3% revenue retention, and 10-15% CLV growth to drive unparalleled competitive advantage.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* NVibe AI Platform */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">NVibe AI Platform</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white text-black p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4">Real-Time Insights and Automation</h3>
              <p className="text-gray-600">
                Built on NVIDIA's cutting-edge AI platform to deliver unparalleled processing power, analyzing millions of transactions in real time for up-to-the-minute data insights and proactive decision-making.
              </p>
            </div>
            <div className="bg-white text-black p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-4">Advanced RAG Capabilities</h3>
              <p className="text-gray-600">
                Harness NVIDIA's advanced AI capabilities for precise and reliable insights through sophisticated data integration, ensuring comprehensive and actionable AI inputs.
              </p>
            </div>
            <div className="bg-white text-black p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-4">Full-Stack Innovation</h3>
              <p className="text-gray-600">
                Benefit from NVIDIA's full-stack AI innovation, providing seamless integration of hardware and software that scales effortlessly to meet any business size demands.
              </p>
            </div>
            <div className="bg-white text-black p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-4">Enterprise-Grade Security</h3>
              <p className="text-gray-600">
                Prioritize data security with NVIDIA's enterprise-grade AI platform, so you can focus on growing your business without worrying about risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Optimization */}
      <section className="py-20 px-4 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Customer Optimization</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-4">Uncover Profit Peaks</h3>
              <div className="space-y-2 text-sm">
                <p><strong>CFO:</strong> Identify 20% of customers driving 80% of profits.</p>
                <p><strong>CMO:</strong> Target top customers for high-impact campaigns.</p>
                <p><strong>Result:</strong> Boost profit focus by 20%.</p>
                <p><strong>Example:</strong> Pinpoint customers buying high-margin cosmetics for targeted campaigns.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-xl font-semibold mb-4">Eliminate Profit Drains</h3>
              <div className="space-y-2 text-sm">
                <p><strong>CFO:</strong> Cut losses from low-margin customers.</p>
                <p><strong>CMO:</strong> Shift focus to high-value customers.</p>
                <p><strong>Result:</strong> Reduce unprofitable spend by 15%.</p>
                <p><strong>Example:</strong> Identify customers with high returns eroding margins.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-4">Optimize High-Value Clients</h3>
              <div className="space-y-2 text-sm">
                <p><strong>CFO:</strong> Boost profits 20% with high-margin focus.</p>
                <p><strong>CMO:</strong> Engage top customers for growth.</p>
                <p><strong>Result:</strong> Increase ROI by 20%.</p>
                <p><strong>Example:</strong> Prioritize high-value loyalty members with 25% margin purchases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch to learn how NVibe AI can revolutionize your sales and manufacturing processes with cutting-edge AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request a Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
