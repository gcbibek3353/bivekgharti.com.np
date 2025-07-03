export function Experience() {
  return (
    <section>
      <h2 className="text-lg font-bold border-b border-border pb-1 mb-3">PROFESSIONAL EXPERIENCE</h2>
      <div className="space-y-6">
        <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-primary">SDE Intern,<a href="https://www.lookaround.in/">LookAround.in</a></h3>
            <span className="text-sm text-muted-foreground">April 2025 - Present</span>
          </div>
          <ul className="list-disc list-inside text-secondary-foreground space-y-1">
            <li>Worked on creating 360 degree virtual tours using pannellum.js library.</li>
            <li>Building official lookAround Software and Host and Admin Dashboards.</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-primary">Frontend Facilitator, Enigma Technical Team</h3>
            <span className="text-sm text-muted-foreground">Mar 2025 - Present</span>
          </div>
          <ul className="list-disc list-inside text-secondary-foreground space-y-1">
            <li>
              Worked on the group project "Enigma" as a frontend developer, focusing on React and Next.js.
            </li>
            <li>Led a two-day online workshop on Firebase with hands-on practical examples.</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-primary">Web Developer Intern,<a href="https://sonisoftit.com/">SoniSoftIt</a></h3>
            <span className="text-sm text-muted-foreground">Jan 2025 - Mar 2025</span>
          </div>
          <ul className="list-disc list-inside text-secondary-foreground space-y-1">
            <li>
              Contributed to improving the official website of SoniSoftIt.
            </li>
            <li>Worked on OCR integration on an internal project of SoniSoftIt.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

