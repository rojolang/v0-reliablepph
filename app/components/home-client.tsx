'use client'

import React from 'react'
import { Header } from './Header'
import { HeroSection } from '@/components/hero-section'
import { SportsbookPreview } from '@/components/sportsbook-preview'
import { StatsReveal } from '@/components/stats-reveal'
import { StayAhead } from '@/components/stay-ahead'
import { FeaturesSection } from '@/components/features-section'
import { LastCall } from '@/components/last-call'
import { SiteFooter } from '@/components/site-footer'

const stats = [
  { label: 'Active Users', value: '100K+' },
  { label: 'Daily Bets', value: '$1M+' },
  { label: 'Customer Support', value: '24/7' },
  { label: 'Uptime', value: '99.9%' }
]

export function HomeClient() {
  return (
    <>
      <Header />
      <main className="snap-y snap-mandatory scroll-smooth">
        <HeroSection />
        <SportsbookPreview />
        <StatsReveal stats={stats} />
        <StayAhead />
        <FeaturesSection />
        <LastCall />
      </main>
      <SiteFooter />
    </>
  )
}
