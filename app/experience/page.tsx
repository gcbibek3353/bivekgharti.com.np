import { ArrowUpRight, ExternalLink } from "lucide-react"
import { PageHeader } from "../components/page-header"
import { experience, experienceNotionUrl } from "../lib/site-data"

export const metadata = { title: "Experience — Bivek Gharti" }

export default function ExperiencePage() {
  return (
    <div>
      <PageHeader
        path="~/experience"
        title="Professional experience"
        intro="Currently at Hyperce and leading tech for GDG FET JU — after a run of internships spanning backend, frontend and DevOps."
      />

      <ol className="relative border-l border-border rise" style={{ animationDelay: "80ms" }}>
        {experience.map((job, i) => (
          <li key={i} className="relative pl-8 pb-9 last:pb-0">
            <span
              className={`absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-primary ${
                job.current ? "bg-primary" : "bg-background"
              }`}
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="font-display text-lg font-bold tracking-tight">
                {job.title}
                <span className="text-muted-foreground font-normal"> · </span>
                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline underline-offset-4"
                  >
                    {job.company}
                  </a>
                ) : (
                  <span className="text-primary">{job.company}</span>
                )}
              </h2>
              <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground whitespace-nowrap">
                {job.current && (
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-primary">
                    Current
                  </span>
                )}
                {job.duration}
              </span>
            </div>

            <ul className="mt-2 space-y-1.5 text-muted-foreground leading-relaxed">
              {job.responsibilities.map((r, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            {job.tech && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {job.links && (
              <div className="mt-3 flex flex-wrap gap-2">
                {job.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {l.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>

      <a
        href={experienceNotionUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-4 flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary rise"
        style={{ animationDelay: "160ms" }}
      >
        <div>
          <div className="flex items-center gap-2 font-display font-bold tracking-tight">
            Full write-up: internship &amp; production work
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
          <div className="font-mono text-xs text-muted-foreground">Detailed case notes on Notion</div>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
      </a>
    </div>
  )
}
