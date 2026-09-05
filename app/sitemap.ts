import type { MetadataRoute } from "next"
import { blogPosts } from "./lib/blog"
import { siteUrl } from "./lib/seo"

const pages: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/projects", priority: 0.9 },
  { path: "/experience", priority: 0.9 },
  { path: "/blog", priority: 0.8 },
  { path: "/skills", priority: 0.7 },
  { path: "/education", priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const built = new Date()

  return [
    ...pages.map((p) => ({
      // Root is emitted without a trailing slash so it matches its canonical tag.
      url: p.path === "/" ? siteUrl : `${siteUrl}${p.path}`,
      lastModified: built,
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
    ...blogPosts.map((p) => ({
      url: `${siteUrl}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
