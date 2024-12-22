import React from 'react'
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300">
              By accessing or using ReliablePPH's services, you agree to be bound by these Terms and Conditions. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p className="text-gray-300">
              Permission is granted to temporarily use our software and services for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a 
              transfer of title.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Service Terms</h2>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Users must be 18 years or older</li>
              <li>Users must comply with all applicable laws and regulations</li>
              <li>Account sharing is prohibited</li>
              <li>Users are responsible for maintaining account security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Disclaimer</h2>
            <p className="text-gray-300">
              Our services are provided "as is". We make no warranties, expressed or implied, 
              and hereby disclaim and negate all other warranties including, without limitation, 
              implied warranties or conditions of merchantability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitations</h2>
            <p className="text-gray-300">
              In no event shall ReliablePPH or its suppliers be liable for any damages 
              arising out of the use or inability to use our services, even if we have been 
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

