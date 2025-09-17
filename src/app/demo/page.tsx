'use client'

import ProtectedRoute from '@/components/ProtectedRoute'
import DemoDashboard from '@/components/DemoDashboard'

export default function DemoPage() {
  return (
    <ProtectedRoute>
      <DemoDashboard />
    </ProtectedRoute>
  )
}
