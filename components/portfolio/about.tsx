'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiEye, FiServer, FiFileText, FiArrowRight } from 'react-icons/fi'
import { profile, services } from '@/lib/portfolio-data'
import { ResumeModal } from '@/components/portfolio/resume-modal'

const serviceIcons: Record<string, typeof FiCode> = {
  code: FiCode,
  cpu: FiCpu,
  eye: FiEye,
  server: FiServer,
}

export function About() {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <>
      <section id="about" className="py-24 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-14">
            <span className="section-tag">About Me</span>
            <h2 className="section-title">
              Crafting scalable web apps & intelligent systems.
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Narrative Bio */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed font-sans"
            >
              <p>
                Hello, I am <strong className="text-foreground font-semibold">{profile.name}</strong>, a Computer Science Engineering student at{' '}
                <span className="text-primary font-medium">{profile.institution}</span> ({profile.term}).
              </p>
              <p>
                I specialize in building responsive full-stack web applications, real-time Firestore synchronization systems, and offline AI inference pipelines.
              </p>
              <p>
                Whether developing campus-scale pre-order PWAs or localized privacy-first legal NLP assistants, I focus on performance, clean architectural design, and reliable user experiences.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setResumeOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-mono font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
                >
                  <FiFileText />
                  <span>View Curriculum Vitae</span>
                  <FiArrowRight className="text-xs" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: 4 Minimal Capability Cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {services.map((srv, index) => {
                const IconComponent = serviceIcons[srv.icon] || FiCode
                return (
                  <motion.div
                    key={srv.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="minimal-card p-5 flex flex-col justify-between hover:border-primary/40 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                          <IconComponent className="text-base" />
                        </div>
                        <span className="font-mono text-xs text-muted-foreground/60">
                          {srv.id}
                        </span>
                      </div>
                      <h3 className="font-sans text-sm font-semibold text-foreground">
                        {srv.title}
                      </h3>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {srv.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  )
}
