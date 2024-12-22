'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView } from "framer-motion"
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useSearchParams } from 'next/navigation'
import { handleUtmData } from "@/utils/utm"
import { ContactModal } from "./contact-modal"

const features = [
  "No Credit Card",
  "Free Updates",
  "Premium 24/7 Support",
  "Premium Horse & Dog Racing",
  "Live Dealer Casino",
  "Prop Virtual Sports",
  "Anonymous Payment"
]

const callouts = [
  {
    text: "Vegas Style Sportsbook and Dynamic Live Betting",
    position: { top: "20%", left: "-240px" }
  },
  {
    text: "Up to 15,000 prop options per event",
    position: { top: "35%", right: "-240px" }
  },
  {
    text: "Oversized icons make betting easy",
    position: { top: "50%", left: "-240px" }
  },
  {
    text: "User-friendly Search feature",
    position: { bottom: "35%", right: "-240px" }
  },
  {
    text: "Virtual Casino and Racebook",
    position: { bottom: "20%", left: "-240px" }
  }
]

export function LastCall() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const searchParams = useSearchParams()
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px",
    amount: 0.3
  })

  useEffect(() => {
    handleUtmData(searchParams)
  }, [searchParams])

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#54B837]/10 via-transparent to-transparent opacity-50" />
      
      <div className="container px-4 mx-auto relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: 0.6 
              }}
              className="relative z-10"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1 bg-[#1a365d] text-white rounded-md mb-6"
              >
                Last Call
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Ready to{" "}
                <span className="text-[#54B837] relative">
                  Transform
                  <span className="absolute -inset-1 animate-pulse rounded-lg bg-[#54B837]/20 blur-sm"></span>
                </span>
                {" "}your
                <br className="hidden sm:block" />
                <span className="text-[#ff6400]">Bookmaking Business</span>?
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 mb-8 max-w-xl text-base sm:text-lg leading-relaxed"
              >
                Unlock the full potential of your sportsbook with ReliablePPH's all-in-one Pay Per Head solution.
                From intuitive tools to advanced features, we provide everything you need to elevate your
                business and stay ahead of the competition.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  className="bg-[#54B837] hover:bg-[#54B837]/90 text-white text-lg px-8 py-6 mb-8"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Started
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      delay: 0.7 + index * 0.1,
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full bg-[#54B837]/20 blur-sm group-hover:bg-[#54B837]/30 transition-colors duration-300" />
                      <Check className="h-5 w-5 text-[#54B837] relative z-10" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Phone Mockup */}
            <div className="relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  duration: 0.8 
                }}
                className="relative z-10"
              >
                <div className="relative mx-auto max-w-[300px]">
                  {/* Phone Image */}
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-design-48-1024x1024-ydVqio4a1MeOxkLHrkMFfBTLRzUXrV.png"
                    alt="PropKings Mobile Interface"
                    width={300}
                    height={600}
                    className="relative z-10"
                  />

                  {/* Feature Callouts */}
                  {callouts.map((callout, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: callout.position.left ? -20 : 20 }}
                      animate={isInView ? 
                        { opacity: 1, x: 0 } : 
                        { opacity: 0, x: callout.position.left ? -20 : 20 }
                      }
                      transition={{ 
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                      }}
                      className="absolute hidden lg:block whitespace-nowrap text-sm text-white"
                      style={callout.position}
                    >
                      <div className="flex items-center">
                        {callout.position.left ? (
                          <>
                            <span className="mr-4">{callout.text}</span>
                            <div className="w-16 h-[1px] bg-[#54B837]" />
                          </>
                        ) : (
                          <>
                            <div className="w-16 h-[1px] bg-[#54B837]" />
                            <span className="ml-4">{callout.text}</span>
                          </>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {/* Circular patterns */}
                  <div className="absolute inset-0 -z-10">
                    <svg viewBox="0 0 200 200" className="absolute w-full h-full transform scale-150">
                      {[...Array(8)].map((_, i) => (
                        <circle
                          key={i}
                          cx="100"
                          cy="100"
                          r={40 + i * 20}
                          fill="none"
                          stroke="#54B837"
                          strokeWidth="0.5"
                          strokeOpacity={0.1}
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile Phone View */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: 0.6 
              }}
              className="lg:hidden"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-design-48-1024x1024-ydVqio4a1MeOxkLHrkMFfBTLRzUXrV.png"
                alt="PropKings Mobile Interface"
                width={300}
                height={600}
                className="mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

