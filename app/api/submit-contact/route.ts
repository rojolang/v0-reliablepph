import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { contactConfig } from '@/config/contact'

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, source, medium, campaign } = await request.json()

    // Insert into database
    await sql`
      INSERT INTO contact_submissions (name, email, phone, message, utm_source, utm_medium, utm_campaign)
      VALUES (${name}, ${email}, ${phone}, ${message}, ${source}, ${medium}, ${campaign})
    `

    // Send email (you would implement this part)
    // sendEmail(contactConfig.formSubmissionEmail, 'New Contact Submission', { name, email, phone, message })

    // Send Telegram message (you would implement this part)
    // sendTelegramMessage(contactConfig.telegramBotToken, contactConfig.telegramChatId, `New contact submission from ${name}`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in POST /api/submit-contact:', error)
    return NextResponse.json({ 
      error: 'Failed to submit contact form',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

