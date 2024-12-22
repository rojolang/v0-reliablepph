'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ContactModal } from "./contact-modal"

export function FixedHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-white font-bold text-xl"
            whileHover={{ scale: 1.05 }}
          >
            ReliablePPH
          </motion.div>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#54B837] hover:bg-[#54B837]/90 text-white"
          >
            Get Started
          </Button>
        </div>
        <motion.div
          className="h-1 bg-[#54B837]"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.header>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
