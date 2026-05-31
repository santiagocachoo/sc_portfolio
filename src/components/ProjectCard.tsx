import { useNavigate } from 'react-router-dom'
import type { Project } from '../data/projects'

type Props = { project: Project }

export default function ProjectCard({ project }: Props) {
  const navigate = useNavigate()

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/projects/${project.slug}`)}
      onKeyDown={e => e.key === 'Enter' && navigate(`/projects/${project.slug}`)}
      className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden cursor-pointer hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover"
        />
      ) : (
        <div className="w-full h-40 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs text-gray-400 dark:text-gray-600">
          {project.title}
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
