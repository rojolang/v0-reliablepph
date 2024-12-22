import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
    }

    const db = await getDb()
    let messages = []
    try {
      const result = await db.query(
        'SELECT * FROM messages WHERE user_id = $1 ORDER BY timestamp ASC',
        [userId]
      )
      messages = result.rows
    } catch (dbError) {
      console.warn('Failed to fetch messages from database:', dbError)
    }

    return NextResponse.json({ messages })
  } catch (error) {
    console.error('Error in GET /api/messages:', error)
    return NextResponse.json({
      error: 'Failed to fetch messages',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}
