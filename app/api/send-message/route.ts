import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { sql } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { userId, message } = await request.json()

    if (!userId || !message) {
      return NextResponse.json({ success: false, error: 'User ID and message are required' }, { status: 400 })
    }

    const messageId = uuidv4()
    const timestamp = Date.now()

    try {
      await sql`
        INSERT INTO messages (id, user_id, text, is_user, timestamp)
        VALUES (${messageId}, ${userId}, ${message}, ${true}, ${timestamp})
      `
    } catch (dbError) {
      console.warn('Failed to insert message into database:', dbError)
      // Continue without database insertion
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in POST /api/send-message:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to send message',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

