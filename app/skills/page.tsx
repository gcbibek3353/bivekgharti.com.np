import { PageHeader } from "../components/page-header"
import { skills } from "../lib/site-data"

export const metadata = { title: "Tech Skills — Bivek Gharti" }

export default function SkillsPage() {
  return (
    <div>
      <PageHeader
        path="~/skills"
        title="Tech skills"
        intro="The stack I reach for — TypeScript end to end, with a bias toward shipping full products."
      />

      <div className="space-y-4">
        {skills.map((group, i) => (
          <section
            key={group.category}
            className="rise rounded-xl border border-border bg-card p-6"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="font-display text-base font-bold tracking-tight">{group.category}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 font-mono text-sm text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
