import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/auth'
import { siteConfig } from '@/config/site'

export function middleware(request: NextRequest) {
  // Only run on admin routes
  if (!request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next()
  }

  // Skip the login page
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next()
  }

  const token = request.cookies.get('adminToken')?.value

  if (!token || !verifyToken(token)) {
    // Redirect to login page with new domain
    return NextResponse.redirect(new URL('/admin/login', siteConfig.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}

