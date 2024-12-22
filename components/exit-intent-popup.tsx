'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { trackEvent } from '@/utils/analytics'

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true)
        trackEvent({
          action: 'exit_intent',
          category: 'User Behavior',
          label: 'Exit Intent Popup Triggered'
        })
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    trackEvent({
      action: 'close_popup',
      category: 'User Behavior',
      label: 'Exit Intent Popup Closed'
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ... form submission logic

    trackEvent({
      action: 'form_submission',
      category: 'Lead',
      label: 'Exit Intent Popup'
    })

    // ... rest of the submission logic
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-md relative"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            >
              <X size={24} />
            </Button>
            <h2 className="text-2xl font-bold mb-4">Don't miss out!</h2>
            <p className="mb-4">Sign up now to get a free demo of our sportsbook software.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="email" placeholder="Enter your email" required />
              <Button type="submit" className="w-full bg-[#54B837] hover:bg-[#54B837]/90 text-white">
                Get Free Demo
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

