"use client"

import React from "react"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      router.push("/")
    }
  }

  const handleSectionScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    
    const scrollToSection = () => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      } else {
        console.log("[v0] Section not found:", sectionId)
      }
    }

    if (pathname === "/") {
      scrollToSection()
    } else {
      router.push("/")
      setTimeout(scrollToSection, 500)
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link href="/" onClick={handleLogoClick} className="hover:opacity-80 transition-opacity">
              <img src="Logo/logo+tulisan.png" alt="D'Semuten Logo" className="h-12 w-auto object-contain" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 uppercase text-sm tracking-widest font-medium">
              <a href="#history" onClick={(e) => handleSectionScroll(e, "history")} className="hover:text-primary transition-colors cursor-pointer">
                Tentang Kampung Kopyor
              </a>
              <a href="#people" onClick={(e) => handleSectionScroll(e, "people")} className="hover:text-primary transition-colors cursor-pointer">
                Pengurus
              </a>
              <a href="#achievements" onClick={(e) => handleSectionScroll(e, "achievements")} className="hover:text-primary transition-colors cursor-pointer">
                Prestasi
              </a>
              <Link href="/products" className="hover:text-primary transition-colors">
                Produk
              </Link>
              <a href="#contact" onClick={(e) => handleSectionScroll(e, "contact")} className="hover:text-primary transition-colors cursor-pointer">
                Find Us
              </a>
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
            <a href="#history" onClick={(e) => { handleSectionScroll(e, "history"); setIsOpen(false) }} className="block px-3 py-4 text-lg font-serif cursor-pointer">
              Tentang Kampung Kopyor
            </a>
            <a href="#people" onClick={(e) => { handleSectionScroll(e, "people"); setIsOpen(false) }} className="block px-3 py-4 text-lg font-serif cursor-pointer">
              Pengurus
            </a>
            <a href="#achievements" onClick={(e) => { handleSectionScroll(e, "achievements"); setIsOpen(false) }} className="block px-3 py-4 text-lg font-serif cursor-pointer">
              Prestasi
            </a>
            <Link href="/products" className="block px-3 py-4 text-lg font-serif" onClick={() => setIsOpen(false)}>
              Produk
            </Link>
            <a href="#contact" onClick={(e) => { handleSectionScroll(e, "contact"); setIsOpen(false) }} className="block px-3 py-4 text-lg font-serif cursor-pointer">
              Find Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
