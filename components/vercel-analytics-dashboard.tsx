'use client'

import { useState, useEffect } from 'react'

interface AnalyticsData {
  pageViews: number
  uniqueVisitors: number
}

export function VercelAnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch('/api/admin/vercel-analytics')
        if (response.ok) {
          const data = await response.json()
          setAnalyticsData(data)
        } else {
          setError('Failed to fetch analytics data')
        }
      } catch (error) {
        setError('An error occurred while fetching analytics data')
      } finally {
        setIsLoading(false)
      }
    }

    fetchAnalytics()
  }, [])

  if (isLoading) {
    return <div>Loading analytics data...</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  if (!analyticsData) {
    return <div>No analytics data available</div>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Vercel Analytics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Page Views</h3>
          <p className="text-3xl font-bold">{analyticsData.pageViews}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Unique Visitors</h3>
          <p className="text-3xl font-bold">{analyticsData.uniqueVisitors}</p>
        </div>
      </div>
    </div>
  )
}

