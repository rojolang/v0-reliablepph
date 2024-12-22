import React from 'react'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import '@/app/globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: "ReliablePPH - Best Sportsbook Software",
  description: "Experience the best sportsbook software with ReliablePPH. Live betting, prop builder, and more!",
  keywords: "sportsbook software, pay per head, live betting, prop builder, sports betting",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'mask-icon',
      url: '/favicon.svg',
      color: '#54B837'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteConfig.url}`,
    siteName: 'ReliablePPH',
    title: 'ReliablePPH - Best Sportsbook Software',
    description: 'Experience the best sportsbook software with ReliablePPH. Live betting, prop builder, and more!',
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ReliablePPH Sportsbook Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@reliablepph',
    title: 'ReliablePPH - Best Sportsbook Software',
    description: 'Experience the best sportsbook software with ReliablePPH. Live betting, prop builder, and more!',
    images: [`${siteConfig.url}/twitter-image.jpg`],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

