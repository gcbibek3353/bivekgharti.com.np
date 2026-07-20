import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarDays, Clock } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {
  blogPosts,
  getBlogPost,
  getBlogContent,
  formatBlogDate,
  readingTime,
} from "../../lib/blog"

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  return { title: post ? `${post.title} — Bivek Gharti` : "Blog — Bivek Gharti" }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const content = await getBlogContent(post)

  return (
    <article className="rise">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All posts
      </Link>

      <div className="eyebrow mt-6 mb-3">~/blog/{post.slug}</div>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1]">
        {post.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5" />
          {formatBlogDate(post.date)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {readingTime(content)} min read
        </span>
      </div>

      <div className="mt-8 blog-prose">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h2 className="mt-10 mb-4 font-display text-2xl font-bold tracking-tight">
                {children}
              </h2>
            ),
            h2: ({ children }) => (
              <h2 className="mt-10 mb-4 font-display text-2xl font-bold tracking-tight">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-8 mb-3 font-display text-xl font-bold tracking-tight">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="my-4 leading-relaxed text-foreground/90">{children}</p>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:no-underline"
              >
                {children}
              </a>
            ),
            ul: ({ children }) => (
              <ul className="my-4 space-y-2 pl-1">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="my-4 space-y-2 pl-1 [counter-reset:item]">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="flex gap-3 leading-relaxed text-foreground/90">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                <span className="min-w-0">{children}</span>
              </li>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-foreground">{children}</strong>
            ),
            blockquote: ({ children }) => (
              <blockquote className="my-5 border-l-2 border-primary/60 pl-4 italic text-muted-foreground">
                {children}
              </blockquote>
            ),
            code: ({ className, children }) => {
              const isBlock = /language-/.test(className || "")
              if (isBlock) {
                return <code className="font-mono text-sm">{children}</code>
              }
              return (
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
                  {children}
                </code>
              )
            },
            pre: ({ children }) => (
              <pre className="my-5 overflow-x-auto rounded-xl border border-border bg-card p-4 text-secondary-foreground">
                {children}
              </pre>
            ),
            hr: () => <hr className="my-8 border-border" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      <div className="mt-12 border-t border-border pt-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to all posts
        </Link>
      </div>
    </article>
  )
}
