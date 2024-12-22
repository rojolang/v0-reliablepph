'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactConfig } from "@/config/contact"
import { trackEvent } from '@/utils/analytics'
import { useSearchParams } from 'next/navigation'
import { handleUtmData } from "@/utils/utm"
import { AnimatedForm } from "./animated-form"

// ... rest of the ContactModal component code remains the same ...

