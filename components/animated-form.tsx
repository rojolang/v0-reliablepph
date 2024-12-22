'use client'

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface AnimatedFormProps extends HTMLMotionProps<'form'> {
  children: React.ReactNode
}

const formVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export function AnimatedForm({ children, ...props }: AnimatedFormProps) {
  return (
    <motion.form
      variants={formVariants}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.form>
  )
}
