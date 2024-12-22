'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ContactModal } from "./contact-modal"
import { Phone, Menu } from "lucide-react"
import Link from "next/link"

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
          isScrolled ? 'bg-black/90 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container">
          <div className="flex h-20 items-center justify-between">
            <motion.div
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[#54B837]">Reliable</span>PPH
            </motion.div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-1">
                <Phone className="h-4 w-4 text-[#54B837]" />
                <span className="text-white">800 888 8888</span>
              </div>
              <nav className="hidden md:flex items-center space-x-4">
                <Link href="/services" className="text-white hover:text-[#54B837] transition-colors">
                  Services
                </Link>
                <Link href="/contact" className="text-white hover:text-[#54B837] transition-colors">
                  Contact
                </Link>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#54B837] hover:bg-[#54B837]/90 text-white"
                >
                  Get Started
                </Button>
              </nav>
              <Button variant="ghost" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        <motion.div
          className="h-0.5 bg-[#54B837]/20"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.header>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
