'use client'

import React, { useState, useEffect } from 'react'
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactModal } from "./contact-modal"
import { useSearchParams } from 'next/navigation'
import { handleUtmData } from "@/utils/utm"

export const StayAhead = React.memo(function StayAhead() {
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
    <section className="py-20 bg-black" ref={ref}>
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 30
            }}
            className="relative aspect-square w-full max-w-[400px] mx-auto"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-design-48-1024x1024-ydVqio4a1MeOxkLHrkMFfBTLRzUXrV.png"
              alt="PropKings Mobile Interface"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 30,
              delay: 0.2
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                delay: 0.3,
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
              className="text-sm text-[#54B837] mb-2"
            >
              Why ReliablePPH?
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                delay: 0.4,
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
              className="text-4xl font-bold text-white mb-4"
            >
              Stay{" "}
              <span className="text-[#54B837] relative">
                Ahead
                <span className="absolute -inset-1 animate-pulse rounded-lg bg-[#54B837]/20 blur-sm"></span>
              </span>
              {" "}of the Game
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
              className="text-gray-200 mb-6"
            >
              When you choose ReliablePPH, you're not just getting Pay Per Head software—you're gaining 
              the tools to grow your business and stay ahead in the sports betting industry. From advanced 
              features like real-time wagering and Prop Builder to seamless account management, we ensure 
              you're always one step ahead.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                delay: 0.6,
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
              className="text-gray-200 mb-8"
            >
              Experience the difference and dominate your market!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                delay: 0.7,
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
            >
              <Button 
                className="bg-[#54B837] hover:bg-[#54B837]/90 text-white"
                onClick={() => setIsModalOpen(true)}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
})

