import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'LMS SaaS | AI-Powered Campus Management',
  description: 'The premium, AI-powered multi-tenant LMS system for modern schools and colleges, designed with a clean, Apple-inspired UI/UX.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children
}: RootLayoutProps) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="antialiased text-gray-900 bg-white min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
