'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiInstagram,
  FiArrowDown,
  FiFileText,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { profile } from '@/lib/portfolio-data'

const socialLinks = [
  {
    name: 'GitHub',
    href: profile.github,
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    href: profile.linkedin,
    icon: FiLinkedin,
  },
  {
    name: 'Instagram',
    href: profile.instagram,
    icon: FiInstagram,
  },
  {
    name: 'X (Twitter)',
    href: profile.twitter,
    icon: FiTwitter,
  },
  {
    name: 'WhatsApp',
    href: profile.whatsapp,
    icon: FaWhatsapp,
  },
  {
    name: 'Email',
    href: `mailto:${profile.email}`,
    icon: FiMail,
  },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 px-6 text-center"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/70 bg-card/60 text-xs font-mono text-muted-foreground mb-8 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Summer 2026 Internships</span>
        </motion.div>

        {/* Profile Avatar */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-6"
        >
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-border/80 bg-card shadow-xl">
            <Image
              src="/profile.png"
              alt={profile.name}
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Clean Header Name */}
        <motion.h1
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground"
        >
          {profile.name}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg sm:text-xl font-mono text-primary mt-2 font-medium"
        >
          {profile.role}
        </motion.p>

        {/* Short Bio Tagline */}
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed font-sans"
        >
          Computer Science student at{' '}
          <span className="text-foreground font-medium">VIT Bhopal University</span>.
          Building responsive full-stack applications, real-time Firestore systems, and applied AI workflows.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-8"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-all duration-150 active:scale-95"
          >
            <span>View Projects</span>
            <FiArrowDown className="text-xs" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-card hover:border-primary/50 transition-all duration-150 active:scale-95"
          >
            <span>About & Skills</span>
          </a>
        </motion.div>

        {/* Minimal Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mt-8 pt-4 border-t border-border/40"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                aria-label={social.name}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 text-lg hover:scale-110 active:scale-95"
              >
                <Icon />
              </a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
