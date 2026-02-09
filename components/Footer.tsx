import Link from 'next/link'
import { cn } from '@/utils/cn'

const footerLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/support", label: "Support" },
  { href: "/careers", label: "Careers" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100/50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          
          {/* Copyright and Brand */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-bold text-lg text-gray-900 mb-2 block">
              LMS SaaS
            </Link>
            <p className="text-sm text-gray-500">© 2026 LMS SaaS, Inc. All rights reserved.</p>
          </div>
          
          {/* Footer Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>

        </div>
      </div>
    </footer>
  )
}
