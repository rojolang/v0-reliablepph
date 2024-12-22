'use client';

import React, { Suspense } from 'react'
import { FeaturesSection } from "@/components/features-section"
import { StayAhead } from "@/components/stay-ahead"
import { SportsbookPreview } from "@/components/sportsbook-preview"
import { LastCall } from "@/components/last-call"

function BestSportsbookSoftwareContent() {
  return (
    <main className="min-h-screen bg-black">
      <FeaturesSection />
      <StayAhead />
      <SportsbookPreview />
      <LastCall />
    </main>
  )
}

export default function BestSportsbookSoftware() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BestSportsbookSoftwareContent />
    </Suspense>
  )
}
