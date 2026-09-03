'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPrinter, FiFileText, FiCalendar, FiMapPin } from 'react-icons/fi'
import { educationData, technicalSkills } from '@/lib/portfolio-data'
import { ResumeModal } from '@/components/portfolio/resume-modal'

export function Resume() {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <>
      <section id="resume" className="py-24 px-6 border-t border-border/50 bg-card/20">
        <div className="max-w-5xl mx-auto">
          {/* Header with Action */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-tag">Resume</span>
              <h2 className="section-title">Education & Technical Skills</h2>
            </div>
            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-2 self-start sm:self-auto rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-mono font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all active:scale-95 shrink-0"
            >
              <FiPrinter className="text-xs" />
              <span>View Formatted CV / Print</span>
            </button>
          </div>

          {/* 2-Column Split */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Education */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                Academic Background
              </h3>

              <div className="space-y-4">
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="minimal-card p-5 space-y-2 relative"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary font-medium">
                        <FiCalendar className="text-[10px]" />
                        <span>{item.period}</span>
                      </span>
                      {item.current && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30">
                          Current
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-semibold text-foreground">
                      {item.institution}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.degree}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Technical Stack */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                Technical Stack & Tools
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {technicalSkills.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className="minimal-card p-4 space-y-1.5"
                  >
                    <div className="text-xs font-mono font-semibold text-primary">
                      {item.category}
                    </div>
                    <p className="text-xs text-foreground/80 leading-relaxed font-mono">
                      {item.skills}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  )
}
