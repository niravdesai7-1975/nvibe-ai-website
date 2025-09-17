'use client'

import { useState } from 'react'
import { Play, BarChart3, TrendingUp, Target, DollarSign } from 'lucide-react'

interface DemoStep {
  id: number
  title: string
  description: string
  duration: string
  icon: React.ReactNode
  status: 'pending' | 'active' | 'completed'
}

export default function AIQDemo() {
  const [isRunning, setIsRunning] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const demoSteps: DemoStep[] = [
    {
      id: 1,
      title: "AI-Q Query Setup",
      description: "Analyze PriceSmart Q3 2025 P&L for profit grid and invoice margins",
      duration: "5s",
      icon: <Play className="w-5 h-5" />,
      status: 'pending'
    },
    {
      id: 2,
      title: "P&L Analysis",
      description: "Sales $1.31B, margin 15.8%—with sources",
      duration: "4s",
      icon: <BarChart3 className="w-5 h-5" />,
      status: 'pending'
    },
    {
      id: 3,
      title: "Profit Grid Generation",
      description: "High-profit 20% drives 80% of profits",
      duration: "4s",
      icon: <TrendingUp className="w-5 h-5" />,
      status: 'pending'
    },
    {
      id: 4,
      title: "Invoice Drill-Down",
      description: "Electronics: 40% margin opportunity",
      duration: "4s",
      icon: <Target className="w-5 h-5" />,
      status: 'pending'
    },
    {
      id: 5,
      title: "Recommendations",
      description: "20% margin protection, 10-20% cost cuts, 10-15% CLV growth",
      duration: "4s",
      icon: <DollarSign className="w-5 h-5" />,
      status: 'pending'
    }
  ]

  const startDemo = () => {
    setIsRunning(true)
    setCurrentStep(0)
    
    // Simulate demo progression
    demoSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index)
        if (index === demoSteps.length - 1) {
          setTimeout(() => {
            setIsRunning(false)
            setCurrentStep(0)
          }, 4000)
        }
      }, index * 4000)
    })
  }

  const getStepStatus = (stepId: number) => {
    if (stepId < currentStep) return 'completed'
    if (stepId === currentStep) return 'active'
    return 'pending'
  }

  return (
    <div className="bg-gray-900 rounded-lg p-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">NVibe AI - Research Assistant</h2>
        <p className="text-gray-300 mb-6">
          AI-powered deep research and profit optimization solutions
        </p>
        <button
          onClick={startDemo}
          disabled={isRunning}
          className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          {isRunning ? 'Demo Running...' : 'Start 2-Minute Demo'}
        </button>
      </div>

      <div className="space-y-4">
        {demoSteps.map((step) => {
          const status = getStepStatus(step.id - 1)
          return (
            <div
              key={step.id}
              className={`p-6 rounded-lg border-2 transition-all duration-500 min-h-[100px] ${
                status === 'active'
                  ? 'border-green-500 bg-green-900/20'
                  : status === 'completed'
                  ? 'border-green-300 bg-green-800/10'
                  : 'border-gray-600 bg-gray-800'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-full flex-shrink-0 ${
                    status === 'active'
                      ? 'bg-green-500 text-white'
                      : status === 'completed'
                      ? 'bg-green-300 text-green-900'
                      : 'bg-gray-600 text-gray-300'
                  }`}
                >
                  {step.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
                <div className="text-sm text-gray-400 flex-shrink-0 ml-4">
                  {step.duration}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          Experience the full AI Research Assistant with advanced models
        </p>
        <a
          href="/demo/nvibe-aiq-demo.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-green-400 hover:text-green-300 underline"
        >
          Open Full Demo Interface →
        </a>
      </div>
    </div>
  )
}
