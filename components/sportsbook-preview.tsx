'use client'

import React, { useState, useEffect } from 'react'
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactModal } from "./contact-modal"
import { useSearchParams } from 'next/navigation'
import { handleUtmData } from "@/utils/utm"

export const SportsbookPreview = React.memo(function SportsbookPreview() {
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
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 30
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                delay: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
              className="text-sm text-[#54B837] mb-2"
            >
              Get Started!
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                delay: 0.3,
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
              className="text-4xl font-bold text-white mb-4"
            >
              Your Own{" "}
              <span className="text-[#54B837] relative">
                Sportsbook
                <span className="absolute -inset-1 animate-pulse rounded-lg bg-[#54B837]/20 blur-sm"></span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                delay: 0.4,
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
              className="text-gray-200 mb-6"
            >
              Get started with ReliablePPH and take advantage of our fully customizable Pay Per Head software. 
              From managing accounts to offering real-time wagers and live streaming, our platform gives you 
              everything you need to build a professional sportsbook effortlessly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
            >
              <Button 
                className="bg-[#54B837] hover:bg-[#54B837]/90 text-white"
                onClick={() => setIsModalOpen(true)}
              >
                Take the first step forward — get started today!
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 30,
              delay: 0.3
            }}
            className="relative aspect-[1024/759] w-full"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-design-47-1024x759-Pxxi5FlinLLSQmgDQlq410ROJtQMNB.png"
              alt="Sportsbook Desktop Interface"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
})

