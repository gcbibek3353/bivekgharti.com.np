import { Suspense } from "react"
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react"
import { profile } from "./lib/site-data"
import { Activity } from "./components/activity"

export const revalidate = 3600

function ActivitySkeleton() {
  return (
    <div className="space-y-5">
      {[0, 1].map((i) => (
        <div key={i} className="h-52 rounded-xl border border-border bg-card animate-pulse" />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="rise">
        <div className="eyebrow mb-4">~/home</div>
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-lg">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.03] tracking-tight">
              Bivek Gharti
            </h1>
            <p className="mt-2 font-mono text-sm text-primary">Full Stack Developer</p>
            <p className="mt-5 text-lg leading-relaxed text-foreground/90">
              I ship real products end to end — a PTE test platform, a fleet-management tool, and a
              PG marketplace with 200+ live listings. Currently going deeper on AI and DSA.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Got an interesting idea? Let&apos;s build something together.
            </p>
          </div>
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-28 w-28 shrink-0 rounded-2xl object-cover ring-2 ring-primary/40 sm:h-32 sm:w-32"
          />
        </div>

        {/* Contact strip */}
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 hover:text-primary"
          >
            <Mail className="h-3.5 w-3.5" /> {profile.email}
          </a>
          <a
            href={profile.phoneHref}
            className="inline-flex items-center gap-1.5 hover:text-primary"
          >
            <Phone className="h-3.5 w-3.5" /> {profile.phone}
          </a>
        </div>
      </section>

      {/* Proof of work */}
      <section className="rise" style={{ animationDelay: "80ms" }}>
        <div className="mb-5 flex items-baseline justify-between">
          <h2 className="font-display text-xl font-bold tracking-tight">Proof of work</h2>
          <span className="eyebrow">live activity</span>
        </div>
        <Suspense fallback={<ActivitySkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <Activity />
        </Suspense>
      </section>

      {/* Quick links */}
      <section className="rise" style={{ animationDelay: "160ms" }}>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { label: "See what I've built", href: "/projects", sub: "5 shipped products" },
            { label: "Where I've worked", href: "/experience", sub: "5 roles · 2 current" },
          ].map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
            >
              <div>
                <div className="font-display font-bold tracking-tight">{c.label}</div>
                <div className="font-mono text-xs text-muted-foreground">{c.sub}</div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
