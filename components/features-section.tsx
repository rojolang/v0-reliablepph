'use client'

import React from 'react'
import { motion, useInView } from "framer-motion"
import { BarChart3, Shield, Smartphone, Users, Zap, TrendingUp } from 'lucide-react'
import { FlipCard } from "./flip-card"

const features = [
  {
    icon: Smartphone,
    title: "Intuitive Design",
    subtitle: "Dynamic Live",
    description: "ReliablePPH is the only Pay Per Head platform featuring the Prop Kings Smart Menu for effortless navigation and a seamless user experience—easy for you, easy for your players.",
  },
  {
    icon: Zap,
    title: "Prop Builder",
    description: "Give your players the ability to create custom bets with up to 1,500 unique prop options per game to enhance the player experience and keep players engaged.",
  },
  {
    icon: BarChart3,
    title: "Streaming",
    subtitle: "Dynamic Live",
    description: "Players can stream games live directly in the platform while placing bets in real time for an unmatched betting experience.",
  },
  {
    icon: Users,
    title: "Advanced Player",
    subtitle: "Management Tools",
    description: "ReliablePPH's best-equipped reports to manage player limits, and track profits. ReliablePPH's most advanced reports to streamline your sportsbook management.",
  },
  {
    icon: Shield,
    title: "Unmatched Security",
    subtitle: "for you and your customers",
    description: "Deposits and withdrawals provide your transactions and data are protected by industry-leading security protocols, ensuring safe and secure operations.",
  },
  {
    icon: TrendingUp,
    title: "Built with your Growth",
    subtitle: "and Success in mind",
    description: "ReliablePPH combines cutting-edge technology, exclusive features, and a design tailored to help bookmakers grow their businesses with ease.",
  }
]

export function FeaturesSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px",
    amount: 0.3
  })

  return (
    <section className="py-20 bg-black/80 backdrop-blur-sm rounded-2xl">
      <div className="container px-4 mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            type: "spring",
            stiffness: 400,
            damping: 30
          }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              delay: 0.2,
              type: "spring",
              stiffness: 400,
              damping: 30
            }}
          >
            6 Reasons to Choose{" "}
            <span className="text-[#54B837] relative">
              Reliable
              <span className="absolute -inset-1 animate-pulse rounded-lg bg-[#54B837]/20 blur-sm"></span>
            </span>
            PPH
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              delay: 0.3,
              type: "spring",
              stiffness: 400,
              damping: 30
            }}
          >
            Discover why our sportsbook software stands out from the competition
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
            >
              <FlipCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

