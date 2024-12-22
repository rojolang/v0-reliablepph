import React from 'react'
import Link from "next/link"
import { Phone, Mail } from 'lucide-react'
import { contactConfig } from "@/config/contact"

export function SiteFooter() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Logo and description */}
        <div className="mb-12">
          <Link href="/" className="inline-block mb-4">
            <span className="text-2xl font-bold">
              <span className="text-[#54B837]">Reliable</span>PPH
            </span>
          </Link>
        </div>

        {/* Three column grid - Always three columns */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Features Column */}
          <div>
            <h3 className="text-white font-bold mb-6">Features</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">Prop Builder</li>
              <li className="text-gray-400">Dynamic Live</li>
              <li className="text-gray-400">Virtual Casino</li>
              <li className="text-gray-400">Online Racebook</li>
              <li className="text-gray-400">And much more</li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">Horse & Dog Racing</li>
              <li className="text-gray-400">Mobile Betting</li>
              <li className="text-gray-400">Virtual Sports</li>
              <li className="text-gray-400">Prop Builder</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold mb-6">Get in touch</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${contactConfig.phoneNumber}`} className="text-gray-400 flex items-center hover:text-[#54B837] transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  {contactConfig.phoneNumber}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactConfig.email}`} className="text-gray-400 flex items-center hover:text-[#54B837] transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  {contactConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              ReliablePPH.com © {new Date().getFullYear()}. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-[#54B837] transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-[#54B837] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

