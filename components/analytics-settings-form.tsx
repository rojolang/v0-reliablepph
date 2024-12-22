'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AnalyticsSettingsForm() {
  const [googleAnalyticsId, setGoogleAnalyticsId] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    fetchAnalyticsSettings()
  }, [])

  const fetchAnalyticsSettings = async () => {
    try {
      const response = await fetch('/api/admin/analytics-settings')
      if (response.ok) {
        const data = await response.json()
        setGoogleAnalyticsId(data.google_analytics_id || '')
      } else {
        setError('Failed to fetch analytics settings')
      }
    } catch (error) {
      setError('An error occurred while fetching analytics settings')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      const response = await fetch('/api/admin/analytics-settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ googleAnalyticsId }),
      })

      if (response.ok) {
        setSuccess('Analytics settings updated successfully')
      } else {
        setError('Failed to update analytics settings')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Google Analytics ID"
        value={googleAnalyticsId}
        onChange={(e) => setGoogleAnalyticsId(e.target.value)}
      />
      <Button type="submit">Update Analytics Settings</Button>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </form>
  )
}

