import React from 'react'
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ReliablePPH - Best Sportsbook Software",
  description: "Experience the best sportsbook software with ReliablePPH. Live betting, prop builder, and more!",
  keywords: "sportsbook software, pay per head, live betting, prop builder, sports betting",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.reliablepph.com/',
    siteName: 'ReliablePPH',
    title: 'ReliablePPH - Best Sportsbook Software',
    description: 'Experience the best sportsbook software with ReliablePPH. Live betting, prop builder, and more!',
    images: [
      {
        url: 'https://www.reliablepph.com/og-image.jpg',
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
    images: ['https://www.reliablepph.com/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body className="flex flex-col min-h-screen bg-black">
        {children}
      </body>
    </html>
  )
}
