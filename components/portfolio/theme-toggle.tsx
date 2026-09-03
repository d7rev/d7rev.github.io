'use client'

import { useEffect, useState } from 'react'

const themes = [
  { id: 'orange', name: 'Neon Orange', emoji: '🟠', iconBg: '#f97316' },
  { id: 'dark', name: 'Cyber Cyan', emoji: '🔷', iconBg: '#00f0ff' },
  { id: 'emerald', name: 'Terminal Emerald', emoji: '🟢', iconBg: '#10b981' },
  { id: 'wood', name: 'Retro Amber', emoji: '🪵', iconBg: '#f59e0b' },
]

export function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState('orange')
  const [infoOpen, setInfoOpen] = useState(false)

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('theme') || 'orange'
      setCurrentTheme(saved)
      applyTheme(saved)
    } catch {
      // Ignore
    }
  }, [])

  const applyTheme = (themeId: string) => {
    const root = document.documentElement
    root.classList.remove('theme-orange', 'theme-dark', 'theme-emerald', 'theme-wood')
    root.classList.add(`theme-${themeId}`)
    try {
      sessionStorage.setItem('theme', themeId)
    } catch {
      // Ignore
    }
  }

  const cycleTheme = () => {
    const currentIndex = themes.findIndex((t) => t.id === currentTheme)
    const nextIndex = (currentIndex + 1) % themes.length
    const next = themes[nextIndex].id
    setCurrentTheme(next)
    applyTheme(next)
  }

  const activeThemeObj = themes.find((t) => t.id === currentTheme) || themes[0]

  return (
    <>
      {/* Top right floating buttons */}
      <div className="fixed top-5 right-6 z-50 flex items-center gap-2">
        {/* Theme Switcher Button */}
        <button
          onClick={cycleTheme}
          title={`Theme: ${activeThemeObj.name}. Click to switch.`}
          aria-label="Change Theme"
          className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card/80 backdrop-blur-md shadow-md transition-all hover:border-primary hover:scale-105 active:scale-95"
        >
          <span className="text-sm select-none">{activeThemeObj.emoji}</span>
          <span className="absolute -bottom-8 right-0 hidden whitespace-nowrap rounded bg-card px-2 py-0.5 font-mono text-[11px] text-primary border border-border group-hover:block shadow-lg">
            {activeThemeObj.name}
          </span>
        </button>

        {/* Info Button */}
        <button
          onClick={() => setInfoOpen(true)}
          aria-label="About this portfolio"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card/80 font-mono text-xs font-semibold text-muted-foreground backdrop-blur-md shadow-md transition-all hover:border-primary hover:text-foreground active:scale-95"
        >
          i
        </button>
      </div>

      {/* Info Modal */}
      {infoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setInfoOpen(false)}
        >
          <div
            className="w-full max-w-sm minimal-card p-6 relative border-border shadow-2xl bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <h3 className="font-mono text-sm font-semibold text-foreground tracking-wide uppercase">
                Portfolio Overview
              </h3>
              <button
                onClick={() => setInfoOpen(false)}
                className="font-mono text-xs text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 space-y-2.5 text-xs leading-relaxed text-muted-foreground font-mono">
              <p>
                Built with <span className="text-foreground font-medium">Next.js 16</span>,{' '}
                <span className="text-foreground font-medium">Tailwind CSS</span>, and{' '}
                <span className="text-foreground font-medium">Framer Motion</span>.
              </p>
              <p>
                Designed with a minimal, performance-focused layout and customizable accent themes.
              </p>
              <div className="pt-3 border-t border-border/60 flex justify-between items-center text-[11px] text-muted-foreground">
                <span>Location: Delhi / Bhopal</span>
                <span className="text-primary font-medium">● Available</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
