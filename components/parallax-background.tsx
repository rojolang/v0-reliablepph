'use client'

import React from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'

export const ParallaxBackground = React.memo(function ParallaxBackground() {
  const { scrollYProgress } = useScroll()
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: false })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.3, 0.2])
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  return (
    <motion.div 
      ref={ref}
      className="fixed inset-0 z-[-1] overflow-hidden"
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ y, opacity, scale }}
        animate={isInView ? { scale: 1 } : { scale: 1.1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
          alt="Sports Background"
          fill
          className="object-cover filter brightness-50"
          quality={100}
          priority
        />
      </motion.div>
    </motion.div>
  )
})

