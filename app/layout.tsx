import type { Metadata } from "next"
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "./components/theme-provider"
import { Shell } from "./components/shell"
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
  title: "Bivek Gharti — Full Stack Developer",
  description:
    "Bivek Gharti is a full stack developer who ships real products end to end — from PTE test platforms to PG discovery tools.",
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
