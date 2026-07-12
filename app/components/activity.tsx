import { Github } from "lucide-react"
import { getGithubActivity, getLeetActivity } from "../lib/activity"
import { Heatmap, HeatmapLegend } from "./heatmap"
import { profile } from "../lib/site-data"

function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-xl border border-border bg-card p-5 sm:p-6 ${className}`}>{children}</div>
  )
}

export async function Activity() {
  const [gh, lc] = await Promise.all([getGithubActivity(), getLeetActivity()])

  return (
    <div className="space-y-5">
      {/* GitHub */}
      <Panel>
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Github className="h-4 w-4 text-primary" />
            <div>
              <div className="font-mono text-sm font-medium">GitHub</div>
              <a
                href={`https://github.com/${profile.githubUser}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-muted-foreground hover:text-primary"
              >
                @{profile.githubUser}
              </a>
            </div>
          </div>
          {gh.ok && (
            <div className="text-right">
              <div className="font-display text-2xl font-extrabold text-primary tabular-nums">
                {gh.total.toLocaleString()}
              </div>
              <div className="eyebrow">contributions / yr</div>
            </div>
          )}
        </div>
        {gh.ok ? (
          <>
            <Heatmap days={gh.days} scheme="github" />
            <div className="mt-3 flex justify-end">
              <HeatmapLegend scheme="github" />
            </div>
          </>
        ) : (
          <p className="font-mono text-xs text-muted-foreground">
            Contribution graph is offline right now —{" "}
            <a
              href={`https://github.com/${profile.githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              view on GitHub
            </a>
            .
          </p>
        )}
      </Panel>

      {/* LeetCode */}
      <Panel>
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-sm font-bold text-primary">{"</>"}</span>
            <div>
              <div className="font-mono text-sm font-medium">LeetCode</div>
              <a
                href={`https://leetcode.com/u/${profile.leetcodeUser}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-muted-foreground hover:text-primary"
              >
                @{profile.leetcodeUser}
              </a>
            </div>
          </div>
          {lc.ok && (
            <div className="text-right">
              <div className="font-display text-2xl font-extrabold text-primary tabular-nums">
                {lc.total.toLocaleString()}
              </div>
              <div className="eyebrow">problems solved</div>
            </div>
          )}
        </div>

        {lc.ok ? (
          <>
            <div className="mb-4 grid grid-cols-3 gap-2 font-mono text-xs">
              {[
                { k: "Easy", v: lc.easy },
                { k: "Medium", v: lc.medium },
                { k: "Hard", v: lc.hard },
              ].map((s) => (
                <div key={s.k} className="rounded-md border border-border bg-secondary/40 px-3 py-2">
                  <div className="text-muted-foreground">{s.k}</div>
                  <div className="text-foreground tabular-nums text-sm font-medium">{s.v}</div>
                </div>
              ))}
            </div>
            {lc.days.length > 0 && (
              <>
                <Heatmap days={lc.days} />
                <div className="mt-3 flex justify-end">
                  <HeatmapLegend />
                </div>
              </>
            )}
          </>
        ) : (
          <p className="font-mono text-xs text-muted-foreground">
            LeetCode stats are offline right now —{" "}
            <a
              href={`https://leetcode.com/u/${profile.leetcodeUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              view profile
            </a>
            .
          </p>
        )}
      </Panel>
    </div>
  )
}
