import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Made with App Studio",
  description:
    "TeosPump - The official Solana-based launchpad of the TEOS Egypt ecosystem. Create, launch, and scale meme tokens, cultural tokens, and community projects. Pay with Pi, SOL, or $TEOS. From Egypt to the world.",
  keywords: [
    "TeosPump",
    "TEOS Egypt",
    "Pi Network",
    "Solana launchpad",
    "token creation",
    "meme tokens",
    "cultural tokens",
    "Egyptian blockchain",
    "crypto launchpad",
    "DeFi",
  ],
  authors: [{ name: "TEOS Egypt", url: "https://teosegypt.com" }],
  creator: "TEOS Egypt",
  publisher: "TEOS Egypt",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pump.teosegypt.com",
    siteName: "TeosPump",
    title: "TeosPump - Pi Ecosystem Launchpad",
    description:
      "Launch tokens instantly on Solana. Pay with Pi. The fastest, most secure launchpad for Egyptian and global creators.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TeosPump - Pi Ecosystem Launchpad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TeosPump - Pi Ecosystem Launchpad",
    description: "Launch tokens instantly on Solana. Pay with Pi. From Egypt to the world.",
    images: ["/twitter-image.png"],
    creator: "@teosegypt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a8a" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a8a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
