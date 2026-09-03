'use client'

import { educationData } from '@/lib/portfolio-data'
import { Reveal, SectionTag } from './reveal'

export function Education() {
  return (
    <section id="education" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionTag index="03">Background</SectionTag>
        </Reveal>
        <Reveal>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Education
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-border">
          {educationData.map((edu) => (
            <Reveal key={edu.id}>
              <div className="grid grid-cols-1 gap-4 border-b border-border py-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8">
                <span className="font-mono text-xs tracking-[0.15em] text-muted-foreground">
                  {edu.id}
                </span>
                <div>
                  <h3 className="flex items-center gap-3 text-lg font-bold tracking-tight text-foreground">
                    {edu.institution}
                    {edu.current && (
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {edu.detail}
                  </p>
                </div>
                <span className="font-mono text-xs tracking-[0.12em] text-foreground">
                  {edu.period}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
