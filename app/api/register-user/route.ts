import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { getDb } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { referer, userAgent } = await request.json()
    const userId = uuidv4()
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    const db = await getDb()

    try {
      await db.query(
        'INSERT INTO users (id, ip, referer, user_agent) VALUES ($1, $2, $3, $4)',
        [userId, ip, referer, userAgent]
      )
    } catch (dbError) {
      console.warn('Failed to insert user into database:', dbError)
      // Continue without database insertion
    }

    return NextResponse.json({ id: userId, ip, referer, userAgent })
  } catch (error) {
    console.error('Error in POST /api/register-user:', error)
    return NextResponse.json({
      error: 'Failed to register user',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}
