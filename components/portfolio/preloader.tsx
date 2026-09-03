'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const STATUS_MESSAGES = [
  'INITIALIZING ENVIRONMENT',
  'OPTIMIZING ASSETS',
  'CONFIGURING INTERACTION SHADERS',
  'EXPERIENCE READY',
]

export function Preloader() {
  const [done, setDone] = useState(false)
  const [statusText, setStatusText] = useState(STATUS_MESSAGES[0])
  const rootRef = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Lock scroll on body and Lenis while loading animation plays
    document.body.style.overflow = 'hidden'
    document.documentElement.classList.add('lenis-stopped')

    const ctx = gsap.context(() => {
      const counter = { val: 0 }
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          document.body.style.overflow = ''
          document.documentElement.classList.remove('lenis-stopped')
          setDone(true)
        },
      })

      // Initial state entrance
      tl.fromTo(
        '.pl-center-content',
        { opacity: 0, scale: 0.92, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
        .fromTo(
          '.pl-glow',
          { opacity: 0, scale: 0.5 },
          { opacity: 0.7, scale: 1.1, duration: 0.8, ease: 'power2.out' },
          '<0.1'
        )
        // Counter & Progress Bar
        .to(
          counter,
          {
            val: 100,
            duration: 1.7,
            ease: 'power2.inOut',
            onUpdate: () => {
              const current = Math.round(counter.val)
              if (countRef.current) {
                countRef.current.textContent = String(current).padStart(3, '0')
              }
              // Dynamically update status messages as progress climbs
              if (current < 30) {
                setStatusText(STATUS_MESSAGES[0])
              } else if (current < 65) {
                setStatusText(STATUS_MESSAGES[1])
              } else if (current < 90) {
                setStatusText(STATUS_MESSAGES[2])
              } else {
                setStatusText(STATUS_MESSAGES[3])
              }
            },
          },
          '-=0.2'
        )
        .to('.pl-bar-fill', { scaleX: 1, duration: 1.7, ease: 'power2.inOut' }, '<')
        // Exit elements
        .to(
          '.pl-center-content',
          {
            opacity: 0,
            y: -25,
            scale: 0.96,
            duration: 0.45,
            ease: 'power3.in',
          },
          '+=0.1'
        )
        // Staggered cinematic curtain panels sliding up
        .to(
          '.pl-panel',
          {
            yPercent: -100,
            duration: 0.85,
            ease: 'power4.inOut',
            stagger: 0.09,
          },
          '-=0.15'
        )
    }, rootRef)

    return () => {
      ctx.revert()
      document.body.style.overflow = ''
      document.documentElement.classList.remove('lenis-stopped')
    }
  }, [])

  if (done) return null

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] select-none pointer-events-auto"
      aria-label="Loading animation"
    >
      {/* Multi-layered curtain panels for cinematic curtain lift */}
      <div className="pl-panel absolute inset-0 bg-[#050608]" />
      <div className="pl-panel absolute inset-0 bg-[#0c0d12]" />
      <div className="pl-panel absolute inset-0 bg-background border-b border-primary/20" />

      {/* Grid Pattern in Preloader */}
      <div className="pl-panel absolute inset-0 subtle-grid opacity-30 pointer-events-none" />

      {/* Center Hero Logo & Progress */}
      <div className="pl-center-content absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        {/* Glowing Monogram */}
        <div className="relative mb-6">
          <div
            className="pl-glow absolute -inset-8 rounded-full blur-2xl opacity-60 transition-all duration-300 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
            }}
          />
          <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border border-white/10 bg-card/80 backdrop-blur-xl shadow-2xl">
            <span className="font-mono text-4xl sm:text-5xl font-black tracking-tight text-foreground">
              SS<span className="text-primary">H</span>
            </span>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-base sm:text-lg font-semibold tracking-wider text-foreground font-sans uppercase">
          Syed Saad Haider
        </h2>
        <p className="text-xs font-mono text-primary/90 mt-1 uppercase tracking-widest">
          Portfolio Experience
        </p>

        {/* Loading Progress Box */}
        <div className="mt-8 w-64 sm:w-72">
          {/* Header with counter */}
          <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-2">
            <span className="flex items-center gap-1.5 text-foreground/80">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {statusText}
            </span>
            <span className="text-foreground font-bold font-mono">
              <span ref={countRef}>000</span>%
            </span>
          </div>

          {/* Progress track & dynamic glowing bar */}
          <div className="h-1.5 w-full rounded-full bg-secondary/80 border border-white/5 overflow-hidden p-[1px]">
            <div
              className="pl-bar-fill h-full w-full origin-left scale-x-0 rounded-full transition-all"
              style={{
                background: 'linear-gradient(90deg, var(--primary) 0%, #ffffff 100%)',
                boxShadow: '0 0 12px var(--primary)',
              }}
            />
          </div>

          {/* Subtle bottom indicator */}
          <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[10px] text-muted-foreground/60 tracking-wider">
            <span>FULL STACK</span>
            <span>•</span>
            <span>APPLIED AI</span>
            <span>•</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </div>
  )
}
