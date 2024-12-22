import { verify } from 'jsonwebtoken'

export function verifyToken(token: string): boolean {
  try {
    verify(token, process.env.JWT_SECRET!)
    return true
  } catch (error) {
    return false
  }
}

