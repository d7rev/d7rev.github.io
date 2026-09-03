import { SmoothScrollProvider } from '@/components/portfolio/smooth-scroll'
import { CustomCursor } from '@/components/portfolio/custom-cursor'
import { ThemeToggle } from '@/components/portfolio/theme-toggle'
import { Preloader } from '@/components/portfolio/preloader'
import { Nav } from '@/components/portfolio/nav'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Resume } from '@/components/portfolio/resume'
import { Projects } from '@/components/portfolio/projects'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

export default function Page() {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {/* Ambient Glow & Subtle Minimal Grid */}
        <div className="ambient-glow" aria-hidden="true" />
        <div className="subtle-grid" aria-hidden="true" />

        {/* Minimal Controls */}
        <CustomCursor />
        <ThemeToggle />
        <Nav />

        {/* Main Portfolio Sections */}
        <main>
          <Hero />
          <About />
          <Resume />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}

