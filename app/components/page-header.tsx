export function PageHeader({
  path,
  title,
  intro,
}: {
  path: string
  title: string
  intro?: string
}) {
  return (
    <div className="rise mb-10">
      <div className="eyebrow mb-3">{path}</div>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">
        {title}
      </h1>
      {intro && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{intro}</p>
      )}
    </div>
  )
}
