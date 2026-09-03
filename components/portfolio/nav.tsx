'use client'

import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#about', label: 'ABOUT' },
  { href: '#resume', label: 'RESUME' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#contact', label: 'CONTACT' },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['about', 'resume', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-40 flex justify-center pt-4 px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
          scrolled
            ? 'border-border/80 bg-card/80 backdrop-blur-md shadow-lg shadow-black/20'
            : 'border-border/40 bg-card/40 backdrop-blur-sm'
        }`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace('#', '')
          return (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-1 text-xs font-mono tracking-wider uppercase transition-all duration-200 rounded-full ${
                isActive
                  ? 'text-primary bg-primary/10 font-semibold shadow-[0_0_8px_rgba(249,115,22,0.15)]'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          )
        })}
      </nav>
    </header>
  )
}
