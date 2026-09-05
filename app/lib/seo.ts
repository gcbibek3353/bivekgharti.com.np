import type { Metadata } from "next"
import { education, experience, profile, skills, socialLinks } from "./site-data"

/** The apex domain 307-redirects to www, so www is the canonical origin. */
export const siteUrl = "https://www.bivekgharti.com.np"

export const siteDescription =
  "Bivek Gharti is a full stack developer in Bengaluru who ships real products end to end — a PTE test platform, a fleet-management tool and a PG marketplace with 200+ live listings."

/** Absolute URL for a site-relative path. */
export function abs(path: string): string {
  return new URL(path, siteUrl).toString()
}

/** Canonical URL plus matching Open Graph / Twitter tags for a sub-page. */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = abs(path)
  const full = `${title} — ${profile.name}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: full, description, url, type: "website" },
    twitter: { title: full, description },
  }
}

/** Public profiles Google can use to reconcile the "Bivek Gharti" entity. */
export const sameAs = [
  ...socialLinks.map((s) => s.href).filter((h) => h.startsWith("http")),
  `https://leetcode.com/u/${profile.leetcodeUser}/`,
]

/**
 * Person schema. This is the main lever for a name query — it tells Google that
 * "Bivek Gharti" is an entity, and `sameAs` ties this site to the GitHub,
 * LinkedIn and X profiles that already rank for the name.
 */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: profile.name,
  givenName: "Bivek",
  familyName: "Gharti",
  url: siteUrl,
  image: abs(profile.avatar),
  jobTitle: profile.role,
  description: siteDescription,
  email: `mailto:${profile.email}`,
  telephone: profile.phoneHref.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  worksFor: experience
    .filter((e) => e.current)
    .map((e) => ({
      "@type": "Organization",
      name: e.company,
      ...(e.companyUrl ? { url: e.companyUrl } : {}),
    })),
  alumniOf: education.map((e) => ({
    "@type": "EducationalOrganization",
    name: e.school,
  })),
  knowsAbout: skills.flatMap((g) => g.items),
  sameAs,
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: `${profile.name} — ${profile.role}`,
  description: siteDescription,
  inLanguage: "en",
  publisher: { "@id": `${siteUrl}/#person` },
  about: { "@id": `${siteUrl}/#person` },
}
