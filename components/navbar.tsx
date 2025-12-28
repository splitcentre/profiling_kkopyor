"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
              D'S
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">D'SEMUTEN</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 uppercase text-sm tracking-widest font-medium">
              <Link href="/#history" className="hover:text-primary transition-colors">
                History
              </Link>
              <Link href="/#people" className="hover:text-primary transition-colors">
                People
              </Link>
              <Link href="/#achievements" className="hover:text-primary transition-colors">
                Achievements
              </Link>
              <Link href="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b animate-in fade-in slide-in-from-top-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center py-8">
            <Link href="/#history" className="block px-3 py-4 text-lg font-serif" onClick={() => setIsOpen(false)}>
              History
            </Link>
            <Link href="/#people" className="block px-3 py-4 text-lg font-serif" onClick={() => setIsOpen(false)}>
              People
            </Link>
            <Link href="/#achievements" className="block px-3 py-4 text-lg font-serif" onClick={() => setIsOpen(false)}>
              Achievements
            </Link>
            <Link href="/products" className="block px-3 py-4 text-lg font-serif" onClick={() => setIsOpen(false)}>
              Products
            </Link>
            <Link href="/#contact" className="block px-3 py-4 text-lg font-serif" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
