'use client'

import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { handleUtmData } from "@/utils/utm"

export default function BestSportsbookSoftwareContent() {
  const searchParams = useSearchParams()

  useEffect(() => {
    handleUtmData(searchParams)
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Best Sportsbook Software</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience the Best Sportsbook Software with ReliablePPH</h2>
            <p className="text-lg text-gray-700 mb-6">ReliablePPH offers cutting-edge sportsbook software designed to elevate your betting business. Our platform provides unparalleled features, including live betting, prop builder, and comprehensive management tools.</p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Real-time odds updates</li>
              <li>Customizable betting options</li>
              <li>Advanced risk management</li>
              <li>24/7 customer support</li>
            </ul>
            <Button className="bg-[#54B837] hover:bg-[#54B837]/90 text-white text-lg py-3 px-6">
              Start Your Free Trial
            </Button>
          </div>
          <div className="relative aspect-video w-full">
            <Image
              src="/images/sportsbook-dashboard.jpg"
              alt="ReliablePPH Sportsbook Dashboard"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

