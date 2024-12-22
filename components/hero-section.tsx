'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ContactModal } from "./contact-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#54B837]/5 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80" />
      </div>

      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transform Your{" "}
            <span className="text-[#54B837] relative inline-block">
              Sportsbook
              <span className="absolute -inset-1 animate-pulse rounded-lg bg-[#54B837]/10 blur-lg"></span>
            </span>
            {" "}Business
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the future of sports betting with our cutting-edge Pay Per Head platform.
            Elevate your operation with advanced features and unmatched reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <Button
              className="bg-[#54B837] hover:bg-[#54B837]/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
