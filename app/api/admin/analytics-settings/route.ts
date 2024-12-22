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
      SELECT * FROM analytics_settings WHERE id = 1
    `

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Analytics settings not found' }, { status: 404 })
    }

    return NextResponse.json(result.rows[0])
  } catch (error) {
    console.error('Get analytics settings error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  const token = request.headers.get('Authorization')?.split(' ')[1]
  if (!token || !verifyToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { googleAnalyticsId } = await request.json()

  try {
    await sql`
      INSERT INTO analytics_settings (id, google_analytics_id)
      VALUES (1, ${googleAnalyticsId})
      ON CONFLICT (id) DO UPDATE
      SET google_analytics_id = ${googleAnalyticsId}
    `

    return NextResponse.json({ message: 'Analytics settings updated successfully' })
  } catch (error) {
    console.error('Update analytics settings error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

