export function Header() {
  return (
    <header className="flex flex-col items-center space-y-2">
      <img
        src="/profile.jpeg"
        alt="Bivek Gharti"
        className="w-32 h-32 rounded-full object-cover border-2 border-primary shadow-md mb-2"
      />
      <h1 className="text-3xl font-bold tracking-tight text-center">Bivek Gharti</h1>
      <h2 className="text-xl font-semibold text-muted-foreground text-center">FULL STACK DEVELOPER</h2>
      <p className="text-sm text-muted-foreground text-center">
        Jakkashandra, Kanakapura |
        <a
          href="tel:9741172571"
          className="text-primary hover:underline hover:underline-offset-4 transition-all duration-200 mx-1"
        >
          9741172571
        </a>
        |
        <a
          href="mailto:gcbibek3353@gmail.com"
          className="text-primary hover:underline hover:underline-offset-4 transition-all duration-200 ml-1"
        >
          gcbibek3353@gmail.com
        </a>
      </p>
    </header>
  )
}

