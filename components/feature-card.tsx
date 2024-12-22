import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: React.ElementType
  title: string
  subtitle?: string
  description: string
}

export function FeatureCard({ icon: Icon, title, subtitle, description }: FeatureCardProps) {
  return (
    <Card className="bg-black/40 border-gray-800 h-full backdrop-blur-sm hover:bg-black/60 transition-all duration-300">
      <CardContent className="p-6">
        <motion.div 
          className="w-16 h-16 bg-black/60 flex items-center justify-center mb-4 border border-[#54B837]/20 rounded-xl relative group"
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 bg-[#54B837]/5 rounded-xl blur-sm group-hover:bg-[#54B837]/10 transition-all duration-300" />
          <Icon className="h-8 w-8 text-[#54B837] relative z-10" />
        </motion.div>
        <div className="space-y-2 mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-[#54B837] transition-colors duration-300">
            {title}
          </h3>
          {subtitle && (
            <p className="text-[#ff6400] font-medium">
              {subtitle}
            </p>
          )}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

