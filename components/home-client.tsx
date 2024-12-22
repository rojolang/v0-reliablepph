'use client'

import React, { Suspense } from 'react'
import { ParallaxProvider } from "react-scroll-parallax"
import dynamic from 'next/dynamic'
import { FixedHeader } from "@/components/fixed-header"
import { HeroSection } from "@/components/hero-section"
import { SportsbookPreview } from "@/components/sportsbook-preview"
import { StayAhead } from "@/components/stay-ahead"
import { FeaturesSection } from "@/components/features-section"
import { LastCall } from "@/components/last-call"
import { SiteFooter } from "@/components/site-footer"
import { StatsReveal } from "@/components/stats-reveal"

const DynamicLiveChat = dynamic(() => import('@/components/live-chat'), {
  ssr: false,
  loading: () => <p>Loading chat...</p>
})

export function HomeClient() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-black">
        <FixedHeader />
        <main className="snap-y snap-mandatory">
          <section id="hero" className="snap-start">
            <HeroSection />
          </section>
          <section id="sportsbook" className="snap-start">
            <SportsbookPreview />
          </section>
          <section id="stats" className="snap-start">
            <StatsReveal
              stats={[
                { value: "100K+", label: "Active Users" },
                { value: "$1M+", label: "Daily Bets" },
                { value: "24/7", label: "Customer Support" },
                { value: "99.9%", label: "Uptime" },
              ]}
            />
          </section>
          <section id="stay-ahead" className="snap-start">
            <StayAhead />
          </section>
          <section id="reasons" className="snap-start">
            <FeaturesSection />
          </section>
          <section id="last-call" className="snap-start">
            <LastCall />
          </section>
        </main>
        <SiteFooter />
        <Suspense fallback={<div>Loading chat...</div>}>
          <DynamicLiveChat />
        </Suspense>
      </div>
    </ParallaxProvider>
  )
}
