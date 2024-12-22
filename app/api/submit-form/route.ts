import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { contactConfig } from '@/config/contact'
import { sendTelegramMessage } from '@/lib/telegram'

export async function POST(request: Request) {
  try {
    const { name, phone, email, accounts } = await request.json()

    try {
      // Insert into database
      await sql`
        INSERT INTO hero_form_submissions (name, phone, email, accounts)
        VALUES (${name}, ${phone}, ${email}, ${accounts})
      `
    } catch (dbError) {
      console.warn('Failed to insert form submission into database:', dbError)
      // Continue without database insertion
    }

    // Send email (you would implement this part)
    // sendEmail(contactConfig.formSubmissionEmail, 'New Hero Form Submission', { name, phone, email, accounts })

    // Send Telegram message
    const message = `New hero form submission:
Name: ${name}
Phone: ${phone}
Email: ${email}
Accounts: ${accounts}`

    await sendTelegramMessage(message)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in POST /api/submit-form:', error)
    return NextResponse.json({ 
      error: 'Failed to submit form',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

