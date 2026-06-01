import Nav from '../components/Nav'
import SectionLabel from '../components/SectionLabel'
import SkillPill from '../components/SkillPill'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { skills } from '../data/skills'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Nav />
      <main className="max-w-4xl mx-auto px-6">

        {/* About */}
        <section id="about" className="py-20 border-b border-gray-100 dark:border-gray-800">
          <SectionLabel>About</SectionLabel>
          <h1 className="text-4xl font-bold mt-4 mb-2">Santiago Cacho</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
            Software Engineer · Runner · Explorer
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8">
            I am a 21 year old from Mexico who loves to learn and create.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              View Projects ↓
            </a>
            <a
              href="https://github.com/santiagocachoo"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm px-4 py-2 rounded-md hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 border-b border-gray-100 dark:border-gray-800">
          <SectionLabel>Projects</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {projects.map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 border-b border-gray-100 dark:border-gray-800">
          <SectionLabel>Skills</SectionLabel>
          <div className="flex flex-wrap gap-2 mt-8">
            {skills.map(skill => (
              <SkillPill key={skill} skill={skill} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <SectionLabel>Contact</SectionLabel>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mt-4 mb-6 text-sm">
            Feel free to reach out about projects, collaboration, or just to say hi.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:santiagocachoh@gmail.com"
              className="border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm px-4 py-2 rounded-md hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              ✉ Email
            </a>
            <a
              href="https://github.com/santiagocachoh"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm px-4 py-2 rounded-md hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/santiagocachoh"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm px-4 py-2 rounded-md hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>

      </main>
    </div>
  )
}
