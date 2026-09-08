import { useParams, Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { getProjectBySlug, getAdjacentProjects } from '../lib/projectUtils'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug ?? '')
  const { prev, next } = getAdjacentProjects(slug ?? '')

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Nav />
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">Project not found.</p>
          <Link
            to="/#projects"
            className="text-sm text-gray-900 dark:text-gray-100 underline underline-offset-4"
          >
            ← Back to projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-8">

        <Link
          to="/#projects"
          className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          ← All projects
        </Link>

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-xl mt-6 border border-gray-100 dark:border-gray-800"
          />
        ) : (
          <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-xl mt-6 flex items-center justify-center text-gray-400 text-sm">
            {project.title}
          </div>
        )}

        <div className="mt-8 pb-8 border-b border-gray-100 dark:border-gray-800">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">{project.tagline}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(t => (
              <span
                key={t}
                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
              >
                Live Demo ↗
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm px-4 py-2 rounded-md hover:border-gray-400 transition-colors"
              >
                GitHub ↗
              </a>
            )}
          </div>
          {project.demoNote && (
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 leading-relaxed">
              {project.demoNote}
            </p>
          )}
        </div>

        <div className="py-8">
          <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">About this project</h2>
          {project.description.map((para, i) => (
            <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
              {para}
            </p>
          ))}

          {project.highlights && project.highlights.length > 0 && (
            <>
              <h2 className="font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {h}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="flex justify-between py-6 border-t border-gray-100 dark:border-gray-800">
          {prev ? (
            <Link
              to={`/projects/${prev.slug}`}
              className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              ← {prev.title}
            </Link>
          ) : <span />}
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {next.title} →
            </Link>
          ) : <span />}
        </div>

      </main>
    </div>
  )
}
