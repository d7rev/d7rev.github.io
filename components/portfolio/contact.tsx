'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiSend,
  FiMapPin,
  FiCheck,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { profile } from '@/lib/portfolio-data'

const contactChannels = [
  {
    name: 'Email',
    href: `mailto:${profile.email}`,
    icon: FiMail,
    label: profile.email,
  },
  {
    name: 'GitHub',
    href: profile.github,
    icon: FiGithub,
    label: 'github.com/d7rev',
  },
  {
    name: 'LinkedIn',
    href: profile.linkedin,
    icon: FiLinkedin,
    label: 'syed-saad-haider-03973130a',
  },
  {
    name: 'WhatsApp',
    href: profile.whatsapp,
    icon: FaWhatsapp,
    label: profile.phone,
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 border-t border-border/50 bg-card/20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let&apos;s build something together.</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
              I am currently open to internships, software engineering roles, and collaborative projects. Feel free to reach out directly through any of these channels.
            </p>

            <div className="space-y-3 pt-2">
              {contactChannels.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="minimal-card p-3.5 flex items-center gap-3.5 hover:border-primary/50 transition-colors group"
                  >
                    <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                      <Icon className="text-base" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-semibold text-foreground">
                        {item.name}
                      </div>
                      <div className="text-[11px] font-mono text-muted-foreground truncate">
                        {item.label}
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right Column: Clean Message Form */}
          <div className="lg:col-span-7 minimal-card p-6 sm:p-8">
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-foreground mb-6">
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Saad"
                    className="w-full rounded-lg border border-border/80 bg-background/80 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@domain.com"
                    className="w-full rounded-lg border border-border/80 bg-background/80 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="w-full resize-none rounded-lg border border-border/80 bg-background/80 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-xs font-mono font-semibold text-primary-foreground hover:opacity-90 transition-all active:scale-95"
              >
                {sent ? (
                  <>
                    <FiCheck className="text-sm" />
                    <span>Message Received</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="text-xs" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
