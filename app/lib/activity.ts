import { profile } from "./site-data"

export type Day = { date: string; count: number; level: number }

export type GithubActivity = {
  ok: boolean
  total: number
  days: Day[]
}

export type LeetActivity = {
  ok: boolean
  total: number
  easy: number
  medium: number
  hard: number
  days: Day[]
}

const YEAR_MS = 364 * 24 * 60 * 60 * 1000

/** Build a continuous list of days for the trailing year, padded to a full grid. */
function buildYear(counts: Map<string, number>): Day[] {
  const today = new Date()
  today.setUTCHours(0, 0, 0, 0)
  const start = new Date(today.getTime() - YEAR_MS)
  // Back up to the preceding Sunday so weeks align in the grid.
  start.setUTCDate(start.getUTCDate() - start.getUTCDay())

  const days: Day[] = []
  for (let t = start.getTime(); t <= today.getTime(); t += 86400000) {
    const d = new Date(t)
    const key = d.toISOString().slice(0, 10)
    const count = counts.get(key) ?? 0
    days.push({ date: key, count, level: leetLevel(count) })
  }
  return days
}

/** Threshold ramp shared by the LeetCode heatmap (GitHub ships its own levels). */
function leetLevel(count: number): number {
  if (count <= 0) return 0
  if (count <= 2) return 1
  if (count <= 4) return 2
  if (count <= 7) return 3
  return 4
}

export async function getGithubActivity(): Promise<GithubActivity> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${profile.githubUser}?y=last`,
      { next: { revalidate: 3600 } },
    )
    if (!res.ok) throw new Error(`status ${res.status}`)
    const data = await res.json()
    const all: Day[] = (data.contributions ?? []).map((c: any) => ({
      date: c.date,
      count: c.count,
      level: c.level,
    }))
    const cutoff = new Date(Date.now() - YEAR_MS)
    cutoff.setUTCDate(cutoff.getUTCDate() - cutoff.getUTCDay())
    const cutoffKey = cutoff.toISOString().slice(0, 10)
    const days = all.filter((d) => d.date >= cutoffKey)
    return {
      ok: true,
      total: data.total?.lastYear ?? days.reduce((s, d) => s + d.count, 0),
      days,
    }
  } catch {
    return { ok: false, total: 0, days: [] }
  }
}

export async function getLeetActivity(): Promise<LeetActivity> {
  const base = `https://alfa-leetcode-api.onrender.com/${profile.leetcodeUser}`
  try {
    const [solvedRes, calRes] = await Promise.all([
      fetch(`${base}/solved`, { next: { revalidate: 3600 } }),
      fetch(`${base}/calendar`, { next: { revalidate: 3600 } }),
    ])
    if (!solvedRes.ok) throw new Error(`solved ${solvedRes.status}`)
    const solved = await solvedRes.json()

    const counts = new Map<string, number>()
    if (calRes.ok) {
      const cal = await calRes.json()
      const raw = cal.submissionCalendar
      const parsed = typeof raw === "string" ? JSON.parse(raw) : raw ?? {}
      for (const [secs, n] of Object.entries(parsed)) {
        const key = new Date(Number(secs) * 1000).toISOString().slice(0, 10)
        counts.set(key, (counts.get(key) ?? 0) + Number(n))
      }
    }

    return {
      ok: true,
      total: solved.solvedProblem ?? solved.totalSolved ?? 0,
      easy: solved.easySolved ?? 0,
      medium: solved.mediumSolved ?? 0,
      hard: solved.hardSolved ?? 0,
      days: buildYear(counts),
    }
  } catch {
    return { ok: false, total: 0, easy: 0, medium: 0, hard: 0, days: [] }
  }
}
