import type { Metadata } from "next"
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "./components/theme-provider"
import { Shell } from "./components/shell"
import { JsonLd } from "./components/json-ld"
import { personJsonLd, siteDescription, siteUrl, websiteJsonLd } from "./lib/seo"
import { profile } from "./lib/site-data"
import type React from "react"
import "./globals.css"

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})
const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bivek Gharti — Full Stack Developer",
    template: "%s — Bivek Gharti",
  },
  description: siteDescription,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [
    "Bivek Gharti",
    "Bivek Gharti developer",
    "Bivek Gharti portfolio",
    "Bivek Gharti full stack developer",
    "full stack developer Bengaluru",
    "Next.js developer",
    "TypeScript developer",
    "gcbibek3353",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: profile.name,
    title: "Bivek Gharti — Full Stack Developer",
    description: siteDescription,
    locale: "en_US",
    firstName: "Bivek",
    lastName: "Gharti",
    username: profile.githubUser,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bivek Gharti — Full Stack Developer",
    description: siteDescription,
    creator: "@BibekGC95011669",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider>
          <Shell>{children}</Shell>
        </ThemeProvider>
      </body>
    </html>
  )
}
