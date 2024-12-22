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
        <main className="snap-y snap-mandatory scroll-smooth">
          <section id="hero" className="min-h-screen snap-start snap-always flex items-center">
            <div className="container mx-auto px-4 py-20">
              <HeroSection />
            </div>
          </section>
          <section id="sportsbook" className="min-h-screen snap-start snap-always flex items-center">
            <div className="container mx-auto px-4 py-20">
              <SportsbookPreview />
            </div>
          </section>
          <section id="stats" className="min-h-screen snap-start snap-always flex items-center">
            <div className="container mx-auto px-4 py-20">
              <StatsReveal
                stats={[
                  { value: "100K+", label: "Active Users" },
                  { value: "$1M+", label: "Daily Bets" },
                  { value: "24/7", label: "Customer Support" },
                  { value: "99.9%", label: "Uptime" },
                ]}
              />
            </div>
          </section>
          <section id="stay-ahead" className="min-h-screen snap-start snap-always flex items-center">
            <div className="container mx-auto px-4 py-20">
              <StayAhead />
            </div>
          </section>
          <section id="reasons" className="min-h-screen snap-start snap-always flex items-center">
            <div className="container mx-auto px-4 py-20">
              <FeaturesSection />
            </div>
          </section>
          <section id="last-call" className="min-h-screen snap-start snap-always flex items-center">
            <div className="container mx-auto px-4 py-20">
              <LastCall />
            </div>
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

