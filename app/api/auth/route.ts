import { NextResponse } from 'next/server'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { sql } from '@vercel/postgres'

export async function POST(request: Request) {
  const { username, password } = await request.json()

  try {
    const result = await sql`
      SELECT * FROM admins WHERE username = ${username}
    `

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const user = result.rows[0]
    const passwordMatch = await compare(password, user.password_hash)

    if (!passwordMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const token = sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' })

    return NextResponse.json({ token })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

