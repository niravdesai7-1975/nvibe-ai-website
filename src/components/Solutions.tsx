'use client';
import { motion } from 'framer-motion';

const platformFeatures = [
  {
    description: 'AI-powered solution for business optimization',
    title: 'NVibe AI Real-Time Insights and Automation',
    desc: 'Our solution is built on NVIDIA\'s cutting-edge AI platform to deliver unparalleled processing power, allowing us to analyze millions of transactions in real time, ensuring your business stays ahead of the curve with up-to-the-minute data insights and proactive decision-making.',
    icon: '⚡'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'NVibe AI Advanced RAG Capabilities',
    desc: 'By harnessing NVIDIA\'s advanced AI capabilities, we achieve precise and reliable insights through sophisticated data integration, ensuring our AI inputs to you are both comprehensive and actionable.',
    icon: '🧠'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'NVibe AI Full-Stack Innovation',
    desc: 'Our platform benefits from NVIDIA\'s full-stack AI innovation, providing a seamless integration of hardware and software that scales effortlessly to meet the demands of any business size.',
    icon: '🔧'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'NVibe AI Enterprise-Grade Security and Compliance',
    desc: 'We prioritize your data security with NVIDIA\'s enterprise-grade AI platform, so you can focus on growing your business without worrying about risks.',
    icon: '🔒'
  }
];

const customerOptimization = [
  {
    description: 'AI-powered solution for business optimization',
    title: 'Uncover Profit Peaks',
    cfo: 'Identify 20% of customers driving 80% of profits.',
    cmo: 'Target top customers for high-impact campaigns.',
    result: 'Boost profit focus by 20%.',
    retail: 'Pinpoint customers buying high-margin cosmetics for targeted campaigns.',
    icon: '📈'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'Eliminate Profit Drains',
    cfo: 'Cut losses from low-margin customers.',
    cmo: 'Shift focus to high-value customers.',
    result: 'Reduce unprofitable spend by 15%.',
    retail: 'Identify customers with high returns eroding margins for remediation.',
    icon: '🚫'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'Optimize High-Value Clients',
    cfo: 'Boost profits 20% with high-margin focus.',
    cmo: 'Engage top customers for growth.',
    result: 'Increase ROI by 20%.',
    retail: 'Prioritize high-value loyalty members with 25% margin purchases.',
    icon: '💎'
  }
];

const pricingStrategies = [
  {
    description: 'AI-powered solution for business optimization',
    title: 'Set Dynamic Prices',
    cfo: 'Boost margins 20% with dynamic pricing.',
    cmo: 'Tailor prices for customers.',
    result: 'Protect 20% margins.',
    retail: 'Dynamic prices for customers buying skincare products.',
    icon: '💰'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'Offer Profit-Driven Discounts',
    cfo: 'Target discounts for profits.',
    cmo: 'Engage top customers with offers.',
    result: 'Increase revenue 5-10%.',
    retail: 'Discounts for customers with high-margin loyalty purchases.',
    icon: '🎯'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'Price per Transaction',
    cfo: 'Maximize per-sale profits.',
    cmo: 'Optimize every customer transaction.',
    result: 'Boost profitability by 10%.',
    retail: 'Optimize prices for each customer apparel purchase.',
    icon: '💳'
  }
];

const retentionStrategies = [
  {
    description: 'AI-powered solution for business optimization',
    title: 'Retain Profit Peaks',
    cfo: 'Save 5-10% revenue with retention.',
    cmo: 'Keep top customers loyal.',
    result: 'Save 5-10% revenue.',
    retail: 'Retain high-margin loyalty members.',
    icon: '🔄'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'Optimize Service Costs',
    cfo: 'Cut service costs 10-20%.',
    cmo: 'Streamline low-value support.',
    result: 'Cut costs 10-20%.',
    retail: 'Shift customers with low-margin purchases to self-service.',
    icon: '⚙️'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'Re-Engage Lapsed Customers',
    cfo: 'Win back high-margin revenue.',
    cmo: 'Re-engage top customers.',
    result: 'Recover 5-10% revenue.',
    retail: 'Re-engage lapsed customers with high-margin purchases.',
    icon: '🔄'
  }
];

const loyaltyPrograms = [
  {
    description: 'AI-powered solution for business optimization',
    title: 'Hyper-Personalize Rewards',
    cfo: 'Boost profits with custom rewards.',
    cmo: 'Engage with tailored offers.',
    result: 'Grow CLV 10-15%.',
    retail: 'Personalize rewards for customers buying skincare.',
    icon: '🎁'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'Drive Subscription Loyalty',
    cfo: 'Generate recurring profits.',
    cmo: 'Build loyalty with subscriptions.',
    result: 'Increase revenue 5-15%.',
    retail: 'Subscription tiers for customers with high-margin purchases.',
    icon: '📱'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'Incentivize Cross-Sells',
    cfo: 'Increase profits with cross-sells.',
    cmo: 'Drive sales with add-on rewards.',
    result: 'Boost revenue 5-10%.',
    retail: 'Incentivize accessory cross-sells for customers.',
    icon: '🛍️'
  }
];

const segmentationTechniques = [
  {
    description: 'AI-powered solution for business optimization',
    title: 'Segment by Profitability',
    cfo: 'Target high-margin segments.',
    cmo: 'Group customers by profitability.',
    result: 'Boost revenue 10-15%.',
    retail: 'Segment customers by high-margin cosmetics purchases.',
    icon: '📊'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'Churn Risk Segments',
    cfo: 'Prevent high-margin churn.',
    cmo: 'Save at-risk customers.',
    result: 'Save 5-10% revenue.',
    retail: 'Identify at-risk customers with high-margin purchases.',
    icon: '⚠️'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'RFM + Profit Analysis',
    cfo: 'Enhance RFM for profits.',
    cmo: 'Segment customers with RFM.',
    result: 'Increase revenue 10-15%.',
    retail: 'Combine RFM with margins for customers.',
    icon: '🔍'
  }
];

const predictiveAnalytics = [
  {
    description: 'AI-powered solution for business optimization',
    title: 'Forecast Churn Risks',
    cfo: 'Save 5-10% with churn forecasts.',
    cmo: 'Predict customer churn.',
    result: 'Save 5-10% revenue.',
    retail: 'Forecast customer churn risks in loyalty programs.',
    icon: '🔮'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'Increase CLV',
    cfo: 'Grow CLV 10-15% with forecasts.',
    cmo: 'Boost customer lifetime value.',
    result: 'Grow CLV 10-15%.',
    retail: 'Grow CLV with propensity models for customers.',
    icon: '📈'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'Predict Upsell Opportunities',
    cfo: 'Drive 5-10% revenue with upsells.',
    cmo: 'Target accessory sales.',
    result: 'Boost revenue 5-10%.',
    retail: 'Predict accessory upsells for customers.',
    icon: '⬆️'
  }
];

const neuralNetworks = [
  {
    description: 'AI-powered solution for business optimization',
    title: 'Predict Churn with Neural Networks',
    cfo: 'Save revenue with AI churn predictions.',
    cmo: 'Predict customer churn.',
    result: 'Save 5-10% revenue.',
    retail: 'Predict customer churn in loyalty programs.',
    icon: '🧠'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'Scale with TensorFlow',
    cfo: 'Scale AI for profits.',
    cmo: 'Analyze all customers.',
    result: 'Boost revenue 5-10%.',
    retail: 'Scale analytics with TensorFlow for customers.',
    icon: '⚡'
  },
  {
    description: 'AI-powered solution for business optimization',
    title: 'Optimize with JAX',
    cfo: 'Enhance AI efficiency with JAX.',
    cmo: 'Optimize customer predictions.',
    result: 'Improve prediction efficiency.',
    retail: 'Optimize predictions for customers with JAX.',
    icon: '🎯'
  }
];

const SectionCard = ({ item, index }: { item: { title: string; description: string; cfo: string; cmo: string; result: string; retail: string; icon: string }; index: number }) => (
  <motion.div
    className="bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-700"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.02, y: -5 }}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="text-3xl">{item.icon}</div>
    </div>
    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
    <div className="space-y-2 text-sm">
      <p><span className="font-semibold text-orange-400">CFO:</span> <span className="text-gray-300">{item.cfo}</span></p>
      <p><span className="font-semibold text-orange-400">CMO:</span> <span className="text-gray-300">{item.cmo}</span></p>
      <p><span className="font-semibold text-orange-400">Result:</span> <span className="text-gray-300">{item.result}</span></p>
      <p><span className="font-semibold text-orange-400">Retail Example:</span> <span className="text-gray-300">{item.retail}</span></p>
    </div>
  </motion.div>
);

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-black">
      {/* Header Section - Apple-inspired clean typography */}
      <div className="container mx-auto px-4 text-center mb-16">
        <motion.h2 
          className="text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          How Our Solution Works
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          Compete and Scale with NVibe AI
        </motion.p>
      </div>

      {/* Intro Section - Premium feel with results */}
      <div className="container mx-auto px-4 text-center mb-20">
        <motion.h3 
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
        </motion.h3>
        <motion.p 
          className="text-lg text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          NVibe's cutting-edge SaaS AI, powered by Nvidia's full-stack innovation, transforms your enterprise by seamlessly integrating data systems in a secure, compliant cloud, achieving{' '}
          <span className="font-semibold text-orange-600">20% margin protection</span>,{' '}
          <span className="font-semibold text-orange-600">10-20% cost savings</span>,{' '}
          <span className="font-semibold text-orange-600">5-10% revenue retention</span>, and{' '}
          <span className="font-semibold text-orange-600">10-15% CLV growth</span> to drive unparalleled competitive advantage.
        </motion.p>
        <motion.a
          href="https://profitisle.com"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Demo
        </motion.a>
      </div>

      {/* NVibe AI Platform Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.h3 
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          NVibe AI Platform
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformFeatures.map((platform, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-3xl mb-4">{platform.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3">{platform.title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{platform.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Customer Optimization Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.h3 
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          NVibe AI Customer Optimization
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerOptimization.map((item, index) => (
            <SectionCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Granular Pricing Strategies Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.h3 
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          NVibe AI Granular Pricing Strategies
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingStrategies.map((item, index) => (
            <SectionCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Customer Retention Strategies Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.h3 
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          NVibe AI Customer Retention Strategies
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {retentionStrategies.map((item, index) => (
            <SectionCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Loyalty Program Trends Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.h3 
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          NVibe AI Loyalty Program Trends
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loyaltyPrograms.map((item, index) => (
            <SectionCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Customer Segmentation Techniques Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.h3 
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          NVibe AI Customer Segmentation Techniques
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segmentationTechniques.map((item, index) => (
            <SectionCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Predictive Analytics Applications Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.h3 
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          NVibe AI Predictive Analytics Applications
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {predictiveAnalytics.map((item, index) => (
            <SectionCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Neural Networks and Deep Learning Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.h3 
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          NVibe AI Neural Networks & Deep Learning
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neuralNetworks.map((item, index) => (
            <SectionCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* NVibe Button Section */}
      <motion.div 
        id="nvidia"
        className="container mx-auto px-4 text-center pt-24 mt-20 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="flex flex-col items-center gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="h-12 w-32 bg-gradient-to-r from-green-400 to-green-600 rounded flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-black font-bold text-lg">NVibe</span>
          </motion.div>
          <p className="text-lg font-sans group relative">
            Get Fortune 500 insights without their budget
            <span className="absolute hidden group-hover:block bg-gray-900 text-white p-2 rounded mt-2">
              Powered by NVibe + NVIDIA
            </span>
          </p>
        </motion.div>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div 
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h3 className="text-3xl font-bold text-white mb-4">See the Results for Yourself</h3>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Request an NVibe AI demo to explore how we can transform your business with AI
        </p>
        <motion.button
          onClick={() => {
            const element = document.querySelector('#contact')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Demo
        </motion.button>
      </motion.div>
    </section>
  );
}
