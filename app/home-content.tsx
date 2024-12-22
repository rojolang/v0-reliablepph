'use client'

import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { HomeClient } from "@/components/home-client"
import { handleUtmData } from "@/utils/utm"

export default function HomeContent() {
  const searchParams = useSearchParams()

  useEffect(() => {
    handleUtmData(searchParams)
  }, [searchParams])

  return <HomeClient />
}

