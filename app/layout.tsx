import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Syed Saad Haider — Portfolio',
  description:
    'Portfolio of Syed Saad Haider — Full Stack & Applied AI Developer based in India. Crafting resilient digital experiences, one functional line of code at a time.',
  icons: {
    icon: [
      {
        url: '/icon-dark-32x32.png',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} theme-orange`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = sessionStorage.getItem('theme') || 'orange';
                  document.documentElement.classList.remove('theme-orange', 'theme-dark', 'theme-emerald', 'theme-wood');
                  document.documentElement.classList.add('theme-' + savedTheme);
                } catch (e) {
                  document.documentElement.classList.add('theme-orange');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
