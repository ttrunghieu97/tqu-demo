'use client'

import Header from '@/components/Header'
import Footer from "@/components/Footer"
import AutoBreadcrumbs from '@/components/AutoBreadcrumb'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header department='Home' />
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <AutoBreadcrumbs />
        </nav>
      </div>

      <Footer />
    </div>
  )
}