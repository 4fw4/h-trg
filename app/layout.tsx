import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Evade.ai - Advanced AI Chat',
    template: '%s | Evade.ai'
  },
  description: 'Experience the future of AI conversation with Evade.ai - powered by advanced language models.',
  keywords: ['AI', 'chat', 'artificial intelligence', 'conversation', 'evade'],
  authors: [{ name: 'Evade.ai Team' }],
  creator: 'Evade.ai',
  publisher: 'Evade.ai',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://evade.ai',
    siteName: 'Evade.ai',
    title: 'Evade.ai - Advanced AI Chat',
    description: 'Experience the future of AI conversation with Evade.ai',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Evade.ai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evade.ai - Advanced AI Chat',
    description: 'Experience the future of AI conversation with Evade.ai',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}