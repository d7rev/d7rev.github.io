'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/lib/portfolio-data'
import { Reveal, SectionTag } from './reveal'

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionTag index="01">Technical Stack</SectionTag>
        </Reveal>
        <Reveal>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Capabilities
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((group, i) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative bg-background p-6 transition-colors hover:bg-card"
              >
                <div className="flex items-start justify-between">
                  <Icon className="text-xl text-signal" />
                  <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
                    {group.index}
                  </span>
                </div>
                <h3 className="mt-5 font-semibold tracking-tight text-foreground">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-mono text-xs text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
