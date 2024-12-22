'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { trackEvent } from '@/utils/analytics'

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Sportsbook', href: '#sportsbook' },
  { name: 'Stats', href: '#stats' },
  { name: 'Stay Ahead', href: '#stay-ahead' },
  { name: 'Reasons', href: '#reasons' },
  { name: 'Last Call', href: '#last-call' },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavItemClick = (itemName: string, href: string) => {
    setIsOpen(false)
    trackEvent({
      action: 'navigation',
      category: 'User Interaction',
      label: `Mobile Nav - ${itemName}`
    })
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="lg:hidden">
      <Button 
        variant="ghost" 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Toggle menu"
        className="relative z-50 text-white"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 top-16 bg-black/95 backdrop-blur-sm z-40"
          >
            <nav className="container mx-auto px-4 py-8">
              <motion.div 
                className="flex flex-col space-y-6"
                variants={{
                  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-xl font-medium transition-colors ${
                        activeSection === item.href.slice(1)
                          ? "text-[#54B837]"
                          : "text-white hover:text-[#54B837]"
                      }`}
                      onClick={() => handleNavItemClick(item.name, item.href)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                >
                  <Button 
                    className="bg-[#54B837] hover:bg-[#54B837]/90 text-white w-full py-6 text-lg mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

