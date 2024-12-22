"use client"

import React from 'react'
import { LucideIcon } from 'lucide-react'

export interface FlipCardProps {
  icon: LucideIcon
  title: string
  subtitle?: string
  description: string
  image?: string
}

export function FlipCard({ icon: Icon, title, subtitle, description, image }: FlipCardProps) {
  return (
    <div className="group relative h-[300px] perspective-1000">
      <div className="absolute inset-0 transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-black/90 p-6 rounded-xl border border-gray-800">
          <div className="flex flex-col items-center text-center">
            <Icon className="h-12 w-12 text-[#54B837] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            {subtitle && (
              <p className="text-sm text-gray-400 mb-2">{subtitle}</p>
            )}
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#54B837] p-6 rounded-xl">
          <div className="flex flex-col items-center text-center h-full justify-center">
            <p className="text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
