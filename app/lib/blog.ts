import { promises as fs } from "fs"
import path from "path"

export type BlogPost = {
  slug: string
  title: string
  date: string
  description: string
  file: string
}

// Registry of blog posts. Add a new entry here when you drop a new `.md`
// file into the top-level `blogs/` directory.
export const blogPosts: BlogPost[] = [
  {
    slug: "first-interview-experience",
    title: "First Interview Experience",
    date: "2026-07-20",
    description:
      "How my first physical placement interview went — paper DSA, three rounds and why it turned out easier than expected.",
    file: "firstInterview.md",
  },
]

const blogsDir = path.join(process.cwd(), "blogs")

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export async function getBlogContent(post: BlogPost): Promise<string> {
  const raw = await fs.readFile(path.join(blogsDir, post.file), "utf-8")
  // Drop the first level-1 heading — the page renders the title itself.
  return raw.replace(/^\s*#\s+.*(\r?\n)+/, "")
}

export function formatBlogDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}
