import { Suspense } from 'react'
import { HomeContentWrapper } from '@/components/home-content-wrapper'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContentWrapper />
    </Suspense>
  )
}
