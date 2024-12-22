'use client'

import dynamic from 'next/dynamic'

const HomeContent = dynamic(() => import('@/app/home-content'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

export function HomeContentWrapper() {
  return <HomeContent />
}
