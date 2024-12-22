'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  value: string
  label: string
}

interface StatsRevealProps {
  stats: Stat[]
}

const StatItem = React.memo(function StatItem({ value, label }: Stat) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px",
    amount: 0.3
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 30
      }}
      className="text-center relative group"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ 
          type: 'spring',
          stiffness: 400,
          damping: 30,
          delay: 0.2 
        }}
        className="text-4xl font-bold text-[#54B837] mb-2 relative"
      >
        <span className="relative z-10">{value}</span>
        <div className="absolute -inset-2 bg-[#54B837]/5 rounded-lg blur-md group-hover:bg-[#54B837]/10 transition-all duration-300" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ 
          delay: 0.3,
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
        className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
      >
        {label}
      </motion.div>
    </motion.div>
  )
})

export const StatsReveal = React.memo(function StatsReveal({ stats }: StatsRevealProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 bg-black/40 backdrop-blur-sm rounded-2xl p-8">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </div>
  )
})

