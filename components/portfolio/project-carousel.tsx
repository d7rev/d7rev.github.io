'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiX } from 'react-icons/fi'
import type { ProjectImage } from '@/lib/portfolio-data'

export function ProjectCarousel({
  title,
  defaultImage,
  images,
}: {
  title: string
  defaultImage: string
  images?: ProjectImage[]
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const imageList: ProjectImage[] =
    images && images.length > 0
      ? images
      : [{ url: defaultImage, label: title }]

  const hasMultiple = imageList.length > 1

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % imageList.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length)
  }

  // Automatic Rotation (Advances every 3.5s, pauses on hover)
  useEffect(() => {
    if (!hasMultiple || isPaused || lightboxOpen) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % imageList.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [hasMultiple, isPaused, lightboxOpen, imageList.length])

  const currentItem = imageList[currentIndex]

  return (
    <>
      <div
        className="relative flex flex-col justify-center select-none group/carousel w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Large Frame Container */}
        <div className="relative aspect-[16/9] min-h-[260px] sm:min-h-[340px] md:min-h-[400px] w-full overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          {/* Automatic Progress Bar Indicator */}
          {hasMultiple && !isPaused && (
            <div className="absolute top-0 inset-x-0 h-1 bg-black/40 z-20">
              <motion.div
                key={currentIndex}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3.5, ease: 'linear' }}
                className="h-full bg-primary"
              />
            </div>
          )}

          {/* Animated Image Slide */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            >
              <Image
                src={currentItem.url}
                alt={currentItem.label || title}
                fill
                priority={currentIndex === 0}
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              {/* Subtle Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Top Right Expand Button */}
          <button
            onClick={() => setLightboxOpen(true)}
            title="Expand to Fullscreen View"
            aria-label="Expand image"
            className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-md bg-black/70 border border-white/15 text-foreground backdrop-blur-sm transition-all hover:scale-110 hover:border-primary hover:text-primary active:scale-95"
          >
            <FiMaximize2 className="text-sm" />
          </button>

          {/* Caption Overlay (Bottom) */}
          {currentItem.label && (
            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 flex items-center justify-between text-xs font-mono text-foreground backdrop-blur-md bg-black/60 border-t border-white/10 z-10">
              <span className="truncate pr-3 text-xs sm:text-sm font-sans text-white/90 font-medium">
                {currentItem.label}
              </span>
              {hasMultiple && (
                <div className="flex items-center gap-2 shrink-0">
                  {isPaused && (
                    <span className="hidden sm:inline text-[10px] text-muted-foreground uppercase font-mono">
                      [Paused]
                    </span>
                  )}
                  <span className="font-mono text-xs text-primary font-medium tracking-wider">
                    {currentIndex + 1} / {imageList.length}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Previous / Next Buttons (Visible if multiple images) */}
          {hasMultiple && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevSlide()
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 border border-white/15 text-white backdrop-blur-sm transition-all hover:scale-110 hover:border-primary hover:text-primary active:scale-95 shadow-md"
              >
                <FiChevronLeft className="text-xl" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextSlide()
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 border border-white/15 text-white backdrop-blur-sm transition-all hover:scale-110 hover:border-primary hover:text-primary active:scale-95 shadow-md"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </>
          )}
        </div>

        {/* Pagination Dot Indicators (Below frame) */}
        {hasMultiple && (
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {imageList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1)
                  setCurrentIndex(idx)
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-6 bg-primary'
                    : 'w-1.5 bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-lg"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-10 right-0 flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Close</span>
              <FiX className="text-base" />
            </button>

            {/* Lightbox Image Container */}
            <div className="relative w-full aspect-[16/9] max-h-[80vh] overflow-hidden rounded-xl border border-border/80 bg-card shadow-2xl">
              <Image
                src={currentItem.url}
                alt={currentItem.label || title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {/* Lightbox Caption & Controls */}
            <div className="mt-4 flex items-center justify-between w-full font-mono text-xs px-2 text-foreground">
              <span className="text-foreground font-medium font-sans">
                {currentItem.label}
              </span>
              <div className="flex items-center gap-3">
                {hasMultiple && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="px-2.5 py-1 rounded border border-border bg-card hover:border-primary text-foreground text-xs"
                    >
                      Prev
                    </button>
                    <span className="text-primary font-medium">
                      {currentIndex + 1} / {imageList.length}
                    </span>
                    <button
                      onClick={nextSlide}
                      className="px-2.5 py-1 rounded border border-border bg-card hover:border-primary text-foreground text-xs"
                    >
                      Next
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
