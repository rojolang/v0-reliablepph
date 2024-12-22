"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Phone, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      } transition-colors duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">
              <span className="text-[#54B837]">Reliable</span>PPH
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-1">
              <Phone className="h-4 w-4 text-[#54B837]" />
              <span className="text-white">800 888 8888</span>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <Link className="text-white hover:text-[#54B837] transition-colors" href="/services">
                Services
              </Link>
              <Link className="text-white hover:text-[#54B837] transition-colors" href="/contact">
                Contact
              </Link>
              <Button variant="outline" className="text-[#54B837] border-[#54B837] hover:bg-[#54B837] hover:text-white">
                Book Demo
              </Button>
            </nav>
            <Button variant="ghost" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

