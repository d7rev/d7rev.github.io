'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiLayers } from 'react-icons/fi'
import { ProjectCarousel } from '@/components/portfolio/project-carousel'
import { projectsData, type ProjectCategory } from '@/lib/portfolio-data'

const filterCategories: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'cv', label: 'Computer Vision' },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-tag">Featured Work</span>
            <h2 className="section-title">Selected Projects</h2>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg border border-border/70 bg-card/60">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                  activeFilter === cat.id
                    ? 'text-primary bg-primary/10 font-semibold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Stacked Projects List */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="minimal-card rounded-2xl overflow-hidden p-6 sm:p-8 space-y-6 hover:border-primary/40 transition-all duration-300"
              >
                {/* 1. PROJECT IMAGE ON TOP */}
                <div className="w-full">
                  <ProjectCarousel
                    title={project.title}
                    defaultImage={project.image}
                    images={project.images}
                  />
                </div>

                {/* 2. DESCRIPTION & DETAILS BELOW */}
                <div className="space-y-5 pt-2">
                  {/* Title & Metadata */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium">
                          {project.badge}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm font-mono text-primary font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                    {project.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags & Actions */}
                  <div className="pt-4 border-t border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border/70 bg-background/60 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 shrink-0">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-mono font-medium text-primary-foreground hover:opacity-90 transition-all active:scale-95"
                        >
                          <span>Live Demo</span>
                          <FiExternalLink className="text-xs" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-xs font-mono font-medium text-foreground hover:border-primary/50 hover:text-primary transition-all active:scale-95"
                      >
                        <FiGithub className="text-xs" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
