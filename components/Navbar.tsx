import Link from 'next/link'
import { cn } from '@/utils/cn'
import { ArrowRight } from 'lucide-react'

// Define the navigation links
const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    // Sticky header with blur effect (Apple style)
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-gray-100/50 bg-white/90 backdrop-blur-sm transition-colors"
    )}>
      <div className="container mx-auto px-4 max-w-7xl h-16 flex items-center justify-between">
        
        {/* Logo/Brand Name */}
        <Link href="/" className="font-bold text-lg md:text-xl tracking-tight text-gray-900 transition-colors hover:text-primary">
          LMS SaaS
        </Link>
        
        {/* Navigation Links (Hidden on small screens) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-700 transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-sm font-medium text-gray-700 transition-colors hover:text-primary hidden sm:block">
            Login
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-white bg-primary px-5 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-200 flex items-center group"
          >
            Request Demo 
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </header>
  )
}
