import { GraduationCap } from "lucide-react"
import { PageHeader } from "../components/page-header"
import { education } from "../lib/site-data"

export const metadata = { title: "Education — Bivek Gharti" }

export default function EducationPage() {
  return (
    <div>
      <PageHeader
        path="~/education"
        title="Education"
        intro="From a 97.5% in Grade 10 to a 9.4 CGPA in engineering — consistent, top-of-class results."
      />

      <div className="space-y-4">
        {education.map((e, i) => (
          <article
            key={e.degree}
            className="rise rounded-xl border border-border bg-card p-6"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/50 text-primary">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div>
                  <div className="eyebrow mb-1">{e.kind}</div>
                  <h2 className="font-display text-lg font-bold tracking-tight leading-snug">
                    {e.degree}
                  </h2>
                  <p className="text-muted-foreground">{e.school}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{e.period}</p>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <div className="font-display text-2xl font-extrabold text-primary tabular-nums">
                  {e.result}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
