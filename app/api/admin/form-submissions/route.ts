import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { verifyToken } from '@/lib/auth'

export async function GET(request: Request) {
  const token = request.headers.get('Authorization')?.split(' ')[1]
  if (!token || !verifyToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const result = await sql`
      SELECT * FROM contact_submissions
      UNION ALL
      SELECT * FROM hero_form_submissions
      ORDER BY created_at DESC
      LIMIT 100
    `

    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Get form submissions error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

