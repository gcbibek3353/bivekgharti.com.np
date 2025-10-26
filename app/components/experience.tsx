const experienceData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Hyperce",
    companyUrl: "https://www.hyperce.io/",
    duration: "September 2025 - Present",
    responsibilities: [
      "Working on multiple client projects using Vendure , GraphQl and Remix.",
    ]
  },
  {
    id: 2,
    title: "SDE Intern",
    company: "LookAround.in",
    companyUrl: "https://www.lookaround.in/",
    duration: "April 2025 - Present",
    responsibilities: [
      "Worked on creating 360 degree virtual tours using pannellum.js library.",
      "Building official lookAround Software and Host and Admin Dashboards."
    ]
  },
  {
    id: 3,
    title: "Head of Technology",
    company: "Google Developer Groups on Campus - FET JU",
    companyUrl: "https://www.gdgfet.space/",
    duration: "October 2025 - Present",
    responsibilities: [
      "Created a brand new website for GDG FET JU using Next.js and Tailwind CSS.",
      "Collaborating with Google Developer Groups globally to bring resources and opportunities to local members."
    ]
  },
  {
    id: 4,
    title: "Frontend Facilitator",
    company: "Enigma Technical Team",
    companyUrl: null,
    duration: "Mar 2025 - Present",
    responsibilities: [
      "Creating a custom plattform for managing events, workshops and registrations for Enigma Technical Team.",
      "Conducted a two hours workshop on 'Git and Github' for college students."
    ]
  },
];

export function Experience() {
  return (
    <section>
      <h2 className="text-lg font-bold border-b border-border pb-1 mb-3">PROFESSIONAL EXPERIENCE</h2>
      <div className="space-y-6">
        {experienceData.map((experience) => (
          <div key={experience.id} className="bg-white dark:bg-secondary rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-primary">
                {experience.title},
                {experience.companyUrl ? (
                  <a href={experience.companyUrl}>{experience.company}</a>
                ) : (
                  experience.company
                )}
              </h3>
              <span className="text-sm text-muted-foreground">{experience.duration}</span>
            </div>
            <ul className="list-disc list-inside text-secondary-foreground space-y-1">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}