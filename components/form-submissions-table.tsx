'use client'

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface FormSubmission {
  id: number
  name: string
  email: string
  phone: string
  message?: string
  accounts?: string
  created_at: string
}

export function FormSubmissionsTable() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchFormSubmissions()
  }, [])

  const fetchFormSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/form-submissions')
      if (response.ok) {
        const data = await response.json()
        setSubmissions(data)
      } else {
        setError('Failed to fetch form submissions')
      }
    } catch (error) {
      setError('An error occurred while fetching form submissions')
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Form Submissions</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Message/Accounts</TableHead>
            <TableHead>Submitted At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((submission) => (
            <TableRow key={submission.id}>
              <TableCell>{submission.name}</TableCell>
              <TableCell>{submission.email}</TableCell>
              <TableCell>{submission.phone}</TableCell>
              <TableCell>{submission.message || submission.accounts}</TableCell>
              <TableCell>{new Date(submission.created_at).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

