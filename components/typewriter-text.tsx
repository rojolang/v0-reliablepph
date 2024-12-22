'use client'

import React, { useState, useEffect } from 'react'

interface TypewriterTextProps {
  text: string
  delay?: number
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return <span className="font-mono">{currentText}</span>
}

