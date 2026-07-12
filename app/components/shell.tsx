"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { navLinks, socialLinks, profile } from "../lib/site-data"
import { ThemeToggle } from "./theme-toggle"

function StatusPill() {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
      <span className="relative flex h-2 w-2">
        <span className="status-dot absolute inline-flex h-2 w-2 rounded-full bg-primary" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
      </span>
      Available for work
    </div>
  )
}

function ConnectRow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "flex flex-wrap gap-2" : "flex flex-wrap gap-2"}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  )
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  return (
    <nav className="flex flex-col gap-0.5">
      {navLinks.map((link, i) => {
        const active = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`group flex items-center gap-3 rounded-md px-3 py-2 font-mono text-sm transition-colors ${
              active
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
            }`}
          >
            <span
              className={`text-xs tabular-nums ${active ? "text-primary" : "text-muted-foreground/60"}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="tracking-tight">{link.label}</span>
            <span
              className={`ml-auto h-1.5 w-1.5 rounded-full bg-primary transition-opacity ${
                active ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>
        )
      })}
    </nav>
  )
}

export function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:flex">
      {/* Desktop rail */}
      <aside className="hidden lg:flex lg:h-screen lg:w-[280px] lg:flex-col lg:justify-between lg:fixed lg:inset-y-0 lg:left-0 border-r border-border bg-card/60 backdrop-blur px-6 py-8">
        <div className="space-y-8">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/40"
            />
            <div className="leading-tight">
              <div className="font-display text-base font-bold tracking-tight">{profile.name}</div>
              <div className="font-mono text-[11px] text-muted-foreground">{profile.role}</div>
            </div>
          </Link>
          <NavList />
        </div>

        <div className="space-y-4">
          <div className="eyebrow">Connect</div>
          <ConnectRow />
          <div className="flex items-center justify-between pt-2">
            <StatusPill />
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden sticky top-0 z-40 flex items-center justify-between border-b border-border bg-card/80 backdrop-blur px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-8 w-8 rounded-full object-cover ring-2 ring-primary/40"
          />
          <span className="font-display text-sm font-bold tracking-tight">{profile.name}</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden sticky top-[57px] z-30 border-b border-border bg-card px-4 py-5 space-y-5">
          <NavList onNavigate={() => setOpen(false)} />
          <div className="space-y-3 border-t border-border pt-4">
            <div className="eyebrow">Connect</div>
            <ConnectRow compact />
            <StatusPill />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="lg:ml-[280px] flex-1 min-w-0">
        <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8 lg:px-14 lg:py-16">{children}</main>
        <footer className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-14 pb-10">
          <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs text-muted-foreground">
              © {profile.name.split(" ")[0]} — built with Next.js
            </p>
            <ConnectRow compact />
          </div>
        </footer>
      </div>
    </div>
  )
}
