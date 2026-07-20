import Link from "next/link"
import { ArrowUpRight, CalendarDays } from "lucide-react"
import { PageHeader } from "../components/page-header"
import { blogPosts, formatBlogDate } from "../lib/blog"

export const metadata = { title: "Blog — Bivek Gharti" }

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div>
      <PageHeader
        path="~/blog"
        title="Blog"
        intro="Notes, experiences and things I learn along the way."
      />

      <div className="space-y-4">
        {posts.map((p, i) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rise block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <CalendarDays className="h-3.5 w-3.5" />
              {formatBlogDate(p.date)}
            </div>

            <h2 className="mt-3 flex items-start justify-between gap-3 font-display text-xl font-bold tracking-tight">
              <span>{p.title}</span>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </h2>

            <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{p.description}</p>

            <span className="mt-4 inline-block font-mono text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Read post →
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
