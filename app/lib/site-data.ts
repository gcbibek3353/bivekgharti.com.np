import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export const profile = {
  name: "Bivek Gharti",
  role: "Full Stack Developer",
  location: "Bengaluru, India",
  email: "gcbibek3353@gmail.com",
  phone: "+91 97411 72571",
  phoneHref: "tel:+919741172571",
  avatar: "/profile.jpeg",
  githubUser: "gcbibek3353",
  leetcodeUser: "gcbibek32",
  available: true,
  tagline: "I ship real products end to end.",
}

export const navLinks: { label: string; href: string; path: string }[] = [
  { label: "Home", href: "/", path: "~/home" },
  { label: "Experience", href: "/experience", path: "~/experience" },
  { label: "Projects", href: "/projects", path: "~/projects" },
  { label: "Blog", href: "/blog", path: "~/blog" },
  { label: "Tech Skills", href: "/skills", path: "~/skills" },
  { label: "Education", href: "/education", path: "~/education" },
]

export const socialLinks: {
  label: string
  href: string
  icon: LucideIcon
  handle: string
}[] = [
  { label: "GitHub", href: "https://github.com/gcbibek3353", icon: Github, handle: "gcbibek3353" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gcbibek3353", icon: Linkedin, handle: "gcbibek3353" },
  { label: "Twitter", href: "https://x.com/BibekGC95011669", icon: Twitter, handle: "@BibekGC" },
  { label: "Email", href: "mailto:gcbibek3353@gmail.com", icon: Mail, handle: "gcbibek3353@gmail.com" },
  { label: "Phone", href: "tel:+919741172571", icon: Phone, handle: "+91 97411 72571" },
]

export type ExperienceItem = {
  title: string
  company: string
  companyUrl: string | null
  duration: string
  current?: boolean
  responsibilities: string[]
  tech?: string[]
  links?: { label: string; href: string }[]
}

export const experience: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "NRI Infratech",
    companyUrl: null,
    duration: "Apr 2026 — Jun 2026",
    responsibilities: [
      "Built the backend powering 4 web portals and 2 mobile apps for themela.in, with work spanning backend, frontend and DevOps.",
      "Owned the REST APIs (documented with Swagger) used by the user, vendor, admin and rider portals; the mobile apps run on the same backend.",
    ],
    tech: [
      "Nest.js",
      "Next.js",
      "Postgres",
      "Prisma",
      "Docker",
      "Hostinger",
      "Resend",
      "Expo",
      "OneSignal",
      "TanStack Query",
      "Redis",
      "EaseBuzz",
    ],
    links: [
      { label: "API docs", href: "https://api.themela.in/api" },
      { label: "User portal", href: "https://themela.in/" },
      { label: "Vendor portal", href: "https://vendor.themela.in/" },
      { label: "Admin portal", href: "https://admin.themela.in/" },
      { label: "Rider portal", href: "https://rider.themela.in/login" },
    ],
  },
  {
    title: "Head of Technology",
    company: "Google Developer Groups on Campus — FET JU",
    companyUrl: "https://www.gdgfet.space/",
    duration: "Oct 2025 — Present",
    current: true,
    responsibilities: [
      "Designed and built the GDG FET JU website with Next.js and Tailwind CSS.",
      "Collaborate with GDG chapters globally to bring resources to local members.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Hyperce",
    companyUrl: "https://www.hyperce.io/",
    duration: "Sep 2025 — Present",
    current: true,
    responsibilities: [
      "Building multiple client projects on Vendure, GraphQL and Remix.",
    ],
  },
  {
    title: "SDE Intern",
    company: "LookAround.in",
    companyUrl: "https://www.lookaround.in/",
    duration: "Apr 2025 — Dec 2025",
    responsibilities: [
      "Built 360° virtual tours with the pannellum.js library.",
      "Shipped the core LookAround software plus host and admin dashboards.",
    ],
  },
  {
    title: "Frontend Facilitator",
    company: "Enigma Technical Team",
    companyUrl: null,
    duration: "Mar 2025 — Mar 2026",
    responsibilities: [
      "Built a custom platform to manage events, workshops and registrations.",
      "Ran a two-hour hands-on workshop on Git and GitHub for college students.",
    ],
  },
]

export const experienceNotionUrl =
  "https://sparkly-hockey-614.notion.site/Internship-and-Production-Works-39912fb14b7b8032a886d0f15d0d1c40"

export type Project = {
  title: string
  blurb: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  mobileUrl?: string
  note?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "ACEPTE",
    blurb:
      "An end-to-end PTE test practice platform — full mock tests, scoring and progress tracking on web and mobile.",
    tech: ["Next.js", "TypeScript", "Expo", "Postgres", "Prisma", "Gemini API", "TanStack Query"],
    liveUrl: "https://acepte.vercel.app/",
    githubUrl: "https://github.com/gcbibek3353/acepte",
    mobileUrl:
      "https://expo.dev/accounts/bibek3353/projects/mobile/builds/763a6a8b-1067-48a3-b345-bf2ad10be66d",
    featured: true,
  },
  {
    title: "LookAroundPG",
    blurb:
      "A PG discovery platform for Bengaluru with 200+ real listings. Owners verify and upload PGs; admins manage vendors and users.",
    tech: ["Next.js", "TypeScript", "Postgres", "Prisma", "Resend"],
    liveUrl: "https://www.lookaroundpg.com/",
    note: "Source private",
    featured: true,
  },
  {
    title: "YesSir Vehicle Rentals",
    blurb:
      "Book vehicles for events and manage the full fleet — servicing, repairs and bookings — from one dashboard.",
    tech: ["Next.js", "TypeScript", "Postgres", "Prisma", "Resend"],
    liveUrl: "https://yes-sir-rentals.vercel.app/",
    githubUrl: "https://github.com/gcbibek3353/Yes_Sir_Rentals",
  },
  {
    title: "InterviewGPT",
    blurb: "A platform to practice for interviews with AI-driven mock sessions.",
    tech: ["Next.js", "Firebase"],
    liveUrl: "https://interview-gpt-ten.vercel.app/",
    githubUrl: "https://github.com/gcbibek3353/interviewGPT",
  },
  {
    title: "AlumUnity",
    blurb: "A platform that connects students with alumni.",
    tech: ["Next.js", "Firebase"],
    liveUrl: "https://alum-unity.vercel.app/",
    githubUrl: "https://github.com/gcbibek3353/AlumUnity",
  },
]

export const projectsNotionUrl =
  "https://sparkly-hockey-614.notion.site/All-The-Projects-That-I-have-done-39912fb14b7b8037bb9ae7ddf4d27ee6"

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Frameworks, Libraries & Databases",
    items: [
      "React.js",
      "Next.js",
      "Express.js",
      "Firebase",
      "React Query",
      "PostgreSQL",
      "WebSockets",
      "Redis",
      "Prisma",
    ],
  },
  { category: "Tools", items: ["Docker", "Git", "GitHub", "Vercel", "TurboRepo"] },
  { category: "Languages", items: ["TypeScript", "JavaScript"] },
]

export const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "Jain University",
    period: "Sep 2023 — Apr 2027",
    result: "CGPA 9.4",
    kind: "Undergraduate",
  },
  {
    degree: "Higher Secondary (12th, Science)",
    school: "Sainik Awasiya Mahavidyalaya",
    period: "Completed",
    result: "94.25%",
    kind: "+2 / Grade 12",
  },
  {
    degree: "Secondary Education (10th)",
    school: "Future Brighter Secondary School",
    period: "Completed",
    result: "97.5%",
    kind: "SEE / Grade 10",
  },
]
