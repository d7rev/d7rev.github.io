'use client'

import { useEffect } from 'react'
import { FiX, FiPrinter, FiDownload, FiExternalLink } from 'react-icons/fi'
import { profile, technicalSkills, projectsData, educationData } from '@/lib/portfolio-data'

export function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-md overflow-y-auto overscroll-contain py-6 sm:py-10"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-auto rounded-lg border border-border bg-card shadow-2xl p-6 sm:p-10 font-mono text-foreground text-sm overflow-hidden print:p-0 print:border-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls (Hidden in Print) */}
        <div className="flex items-center justify-between border-b border-border/70 pb-4 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-mono text-sm font-semibold text-foreground tracking-wide uppercase">
              Curriculum Vitae / Resume
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <FiPrinter /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-white/10 text-muted-foreground hover:text-foreground text-lg"
            >
              <FiX />
            </button>
          </div>
        </div>

        {/* Resume Content Paper Layout */}
        <div className="space-y-6 text-xs sm:text-sm font-sans">
          {/* Header */}
          <div className="text-center border-b border-border/70 pb-4">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase">
              {profile.name}
            </h1>
            <p className="text-primary font-mono text-xs font-semibold mt-1">
              {profile.headline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground mt-2 font-mono">
              <span>{profile.location}</span>
              <span>•</span>
              <a href={`mailto:${profile.email}`} className="hover:text-primary underline underline-offset-2">
                {profile.email}
              </a>
              <span>•</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary underline underline-offset-2">
                LinkedIn
              </a>
              <span>•</span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-primary underline underline-offset-2">
                GitHub ({profile.github.replace('https://github.com/', '')})
              </a>
              <span>•</span>
              <span>{profile.phone}</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="font-mono text-xs font-bold text-primary uppercase tracking-wider mb-2 border-b border-border/40 pb-1">
              SUMMARY
            </h2>
            <p className="text-muted-foreground leading-relaxed text-xs">
              {profile.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-mono text-xs font-bold text-primary uppercase tracking-wider mb-2 border-b border-border/40 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-mono">
              {technicalSkills.map((item) => (
                <div key={item.category} className="flex gap-2">
                  <span className="font-semibold text-foreground w-28 shrink-0">
                    {item.category}:
                  </span>
                  <span className="text-muted-foreground">{item.skills}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="font-mono text-xs font-bold text-primary uppercase tracking-wider mb-3 border-b border-border/40 pb-1">
              PROJECTS
            </h2>
            <div className="space-y-4">
              {projectsData.map((prj) => (
                <div key={prj.id} className="space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-semibold text-foreground text-xs flex items-center gap-2">
                      <span>{prj.title}</span>
                    </h3>
                    <div className="flex items-center gap-2.5 shrink-0">
                      {prj.demos && prj.demos.length > 0 ? (
                        prj.demos.map((d) => (
                          <a
                            key={d.url}
                            href={d.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary hover:underline text-[11px] font-mono flex items-center gap-1"
                          >
                            <span>{d.label}</span>
                            <FiExternalLink />
                          </a>
                        ))
                      ) : prj.demo ? (
                        <a
                          href={prj.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary hover:underline text-[11px] font-mono flex items-center gap-1"
                        >
                          <span>Demo</span>
                          <FiExternalLink />
                        </a>
                      ) : null}
                      <a
                        href={prj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline text-[11px] font-mono flex items-center gap-1"
                      >
                        <span>GitHub</span>
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs leading-relaxed pl-1">
                    {prj.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-primary/90 font-mono">
                    <strong>Tech:</strong> {prj.tech.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-mono text-xs font-bold text-primary uppercase tracking-wider mb-2 border-b border-border/40 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs">
                  <div>
                    <h3 className="font-semibold text-foreground">{edu.institution}</h3>
                    <p className="text-muted-foreground text-xs">{edu.degree}</p>
                  </div>
                  <span className="font-mono text-xs text-primary font-medium">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
