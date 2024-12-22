'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-transparent" style={{ transform: 'none' }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          <span className="text-[#54B837]">Reliable</span>PPH
        </Link>

        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-[#54B837] hover:bg-[#54B837]/90 text-white">
          Get Started
        </button>
      </div>
      <motion.div
        className="h-1 bg-[#54B837]"
        style={{ scaleX, transformOrigin: "0%" }}
      />
    </header>
  )
}
