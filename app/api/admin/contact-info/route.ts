import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { verifyToken } from '@/lib/auth'

export const revalidate = 60 // Revalidate every 60 seconds

export async function GET(request: Request) {
  const token = request.headers.get('Authorization')?.split(' ')[1]
  if (!token || !verifyToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const result = await sql`
      SELECT * FROM contact_info WHERE id = 1
    `

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Contact information not found' }, { status: 404 })
    }

    return NextResponse.json(result.rows[0])
  } catch (error) {
    console.error('Get contact info error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  const token = request.headers.get('Authorization')?.split(' ')[1]
  if (!token || !verifyToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { telegram, email, phone, signal } = await request.json()

  try {
    await sql`
      UPDATE contact_info
      SET telegram = ${telegram}, email = ${email}, phone = ${phone}, signal = ${signal}
      WHERE id = 1
    `

    return NextResponse.json({ message: 'Contact information updated successfully' })
  } catch (error) {
    console.error('Update contact info error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

