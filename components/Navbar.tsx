import Link from 'next/link'
import { ArrowRight, Menu } from 'lucide-react'
import { cn } from '@/utils/cn'

// Define the navigation links
const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "Our Story" },
];

export function Navbar() {
  return (
    // Sticky header with blur effect and new refined color tokens
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur-sm transition-colors"
    )}>
      <div className="container mx-auto px-4 max-w-7xl h-16 flex items-center justify-between">
        
        {/* Logo/Brand Name (High-Contrast Text) */}
        <Link href="/" className="font-extrabold text-xl tracking-tighter text-text-primary transition-colors hover:text-primary">
          LMS SaaS
        </Link>
        
        {/* Navigation Links (Hidden on small screens, promoting desktop UI) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-text-secondary transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* CTA Button Group */}
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-sm font-medium text-text-secondary transition-colors hover:text-primary hidden sm:block">
            Login
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-white bg-primary px-5 py-2 rounded-full shadow-medium hover:bg-primary/80 transition-all duration-200 flex items-center group whitespace-nowrap"
          >
            Book Free Demo
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          {/* Mobile Menu Icon */}
          <button className="md:hidden p-1 text-text-secondary hover:text-primary transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
