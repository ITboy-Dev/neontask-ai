import DashboardClient from './DashboardClient'
import { Suspense } from 'react'

// Force dynamic rendering to skip static generation for this auth-protected route
export const dynamic = 'force-dynamic'

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-cyan-500 font-mono animate-pulse">LOADING DASHBOARD...</div>}>
      <DashboardClient />
    </Suspense>
  )
}