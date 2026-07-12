import { Github, Globe, Smartphone, Lock, ArrowUpRight, ExternalLink } from "lucide-react"
import { PageHeader } from "../components/page-header"
import { projects, projectsNotionUrl } from "../lib/site-data"

export const metadata = { title: "Projects — Bivek Gharti" }

function LinkButton({
  href,
  icon: Icon,
  label,
}: {
  href: string
  icon: typeof Github
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </a>
  )
}

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        path="~/projects"
        title="Projects"
        intro="Products I've designed and shipped end to end — most are live, one has 200+ real listings in production."
      />

      <div className="space-y-4">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`rise rounded-xl border bg-card p-6 transition-colors hover:border-primary/60 ${
              p.featured ? "border-primary/40" : "border-border"
            }`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground/60 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-xl font-bold tracking-tight">{p.title}</h2>
              </div>
              {p.featured && (
                <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                  Featured
                </span>
              )}
            </div>

            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{p.blurb}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {p.liveUrl && <LinkButton href={p.liveUrl} icon={Globe} label="Live" />}
              {p.mobileUrl && <LinkButton href={p.mobileUrl} icon={Smartphone} label="Mobile app" />}
              {p.githubUrl && <LinkButton href={p.githubUrl} icon={Github} label="Code" />}
              {p.note && (
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <Lock className="h-3.5 w-3.5" />
                  {p.note}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      <a
        href={projectsNotionUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-4 flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary rise"
        style={{ animationDelay: `${projects.length * 60}ms` }}
      >
        <div>
          <div className="flex items-center gap-2 font-display font-bold tracking-tight">
            Every project, in detail
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            Full breakdowns and write-ups on Notion
          </div>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
      </a>
    </div>
  )
}
