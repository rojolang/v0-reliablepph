'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactInfoForm() {
  const [contactInfo, setContactInfo] = useState({
    telegram: '',
    email: '',
    phone: '',
    signal: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    fetchContactInfo()
  }, [])

  const fetchContactInfo = async () => {
    try {
      const response = await fetch('/api/admin/contact-info')
      if (response.ok) {
        const data = await response.json()
        setContactInfo(data)
      } else {
        setError('Failed to fetch contact information')
      }
    } catch (error) {
      setError('An error occurred while fetching contact information')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      const response = await fetch('/api/admin/contact-info', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactInfo),
      })

      if (response.ok) {
        setSuccess('Contact information updated successfully')
      } else {
        setError('Failed to update contact information')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Telegram"
        value={contactInfo.telegram}
        onChange={(e) => setContactInfo({ ...contactInfo, telegram: e.target.value })}
      />
      <Input
        type="email"
        placeholder="Email"
        value={contactInfo.email}
        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
      />
      <Input
        type="tel"
        placeholder="Phone"
        value={contactInfo.phone}
        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Signal"
        value={contactInfo.signal}
        onChange={(e) => setContactInfo({ ...contactInfo, signal: e.target.value })}
      />
      <Button type="submit">Update Contact Information</Button>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </form>
  )
}

