'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/lib/portfolio-data'

export function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="border-t border-border/50 bg-card/40 py-10 px-6 font-mono text-xs text-muted-foreground">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <div className="text-sm font-sans font-semibold text-foreground">
            © {new Date().getFullYear()} {profile.name}
          </div>
          <div className="text-[11px] text-muted-foreground/80">
            Next.js · Tailwind CSS · Minimalist Portfolio
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-foreground/80 font-medium">Available for work</span>
          </div>
          {time && (
            <div className="border-l border-border/70 pl-4 text-muted-foreground">
              IST: {time}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
