import { Header } from "./components/header"
import { About } from "./components/about"
import { Experience } from "./components/experience"
import { Projects } from "./components/projects"
import { Skills } from "./components/skills"
import { Education } from "./components/education"
import { Footer } from "./components/footer"
import { ThemeToggle } from "./components/theme-toggle"

export default function Resume() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8 lg:p-12 max-w-4xl mx-auto transition-colors duration-200">
      <ThemeToggle />
      <div className="space-y-8 bg-card p-6 rounded-lg shadow-lg">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </div>
    </main>
  )
}

