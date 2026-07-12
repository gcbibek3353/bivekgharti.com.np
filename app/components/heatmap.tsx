import type { Day } from "../lib/activity"

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const WEEKDAYS = ["", "Mon", "", "Wed", "", "Fri", ""]

const CELL = 11
const GAP = 3
const LABEL_W = 26

type Scheme = "brand" | "github"

/**
 * Renders a GitHub-style contribution grid. `days` must start on a Sunday and
 * run continuously to today so the CSS column flow lays out clean weeks.
 * `scheme` picks the color ramp: brand marigold or GitHub's native green.
 */
export function Heatmap({ days, scheme = "brand" }: { days: Day[]; scheme?: Scheme }) {
  const prefix = scheme === "github" ? "gh" : "heat"
  const weekCount = Math.ceil(days.length / 7)

  // Month labels: mark the first week whose Sunday belongs to a new month.
  const monthMarks: { col: number; label: string }[] = []
  let lastMonth = -1
  for (let w = 0; w < weekCount; w++) {
    const first = days[w * 7]
    if (!first) continue
    const m = new Date(first.date).getUTCMonth()
    if (m !== lastMonth) {
      monthMarks.push({ col: w, label: MONTHS[m] })
      lastMonth = m
    }
  }

  return (
    <div className="overflow-x-auto pb-1">
      <div className="inline-block">
        {/* Month labels, offset to clear the weekday label column */}
        <div
          className="grid text-[9px] font-mono text-muted-foreground mb-1"
          style={{
            marginLeft: LABEL_W,
            gridTemplateColumns: `repeat(${weekCount}, ${CELL}px)`,
            gap: `${GAP}px`,
          }}
        >
          {Array.from({ length: weekCount }).map((_, w) => {
            const mark = monthMarks.find((mm) => mm.col === w)
            return (
              <div key={w} className="h-3 leading-3 whitespace-nowrap">
                {mark ? mark.label : ""}
              </div>
            )
          })}
        </div>

        <div className="flex" style={{ gap: `${GAP}px` }}>
          {/* Weekday labels (Mon / Wed / Fri), like GitHub */}
          <div
            className="grid text-[9px] font-mono text-muted-foreground"
            style={{ gridTemplateRows: `repeat(7, ${CELL}px)`, gap: `${GAP}px`, width: LABEL_W - GAP }}
          >
            {WEEKDAYS.map((d, i) => (
              <div key={i} className="flex items-center leading-none">
                {d}
              </div>
            ))}
          </div>

          {/* Contribution cells */}
          <div
            className="grid grid-flow-col"
            style={{ gridTemplateRows: `repeat(7, ${CELL}px)`, gap: `${GAP}px` }}
          >
            {days.map((d) => (
              <div
                key={d.date}
                title={`${d.count} ${d.count === 1 ? "contribution" : "contributions"} on ${d.date}`}
                className={`rounded-[2px] ${prefix}-lvl-${d.level}`}
                style={{ width: CELL, height: CELL }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeatmapLegend({ scheme = "brand" }: { scheme?: Scheme }) {
  const prefix = scheme === "github" ? "gh" : "heat"
  return (
    <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
      <span>Less</span>
      {[0, 1, 2, 3, 4].map((l) => (
        <span key={l} className={`h-[11px] w-[11px] rounded-[2px] ${prefix}-lvl-${l}`} />
      ))}
      <span>More</span>
    </div>
  )
}
