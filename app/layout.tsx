import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans-site",
})

const siteUrl = "https://miguelliebana.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Miguel Liébana — Orientación digital e IA práctica",
  description:
    "Orientación digital, IA práctica y comunicación clara. Barcelona.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logomiguel-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/logomiguel-192.png",
    apple: "/logomiguel.png",
  },
  openGraph: {
    type: "website",
    title: "Miguel Liébana — Orientación digital e IA práctica",
    description: "Orientación digital, IA práctica y comunicación clara. Barcelona.",
    url: siteUrl,
    images: [{ url: "/social-card.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/social-card.jpg"],
  },
}

export const viewport = {
  themeColor: "#0c0c0a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn("dark antialiased", sans.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
