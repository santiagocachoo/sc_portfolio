import { projects } from '../data/projects'
import type { Project } from '../data/projects'

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export type AdjacentProjects = {
  prev: Project | undefined
  next: Project | undefined
}

export function getAdjacentProjects(slug: string): AdjacentProjects {
  const index = projects.findIndex(p => p.slug === slug)
  if (index === -1) return { prev: undefined, next: undefined }
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  }
}
