import { describe, it, expect } from 'vitest'
import { getProjectBySlug, getAdjacentProjects } from './projectUtils'

describe('getProjectBySlug', () => {
  it('returns the project with the matching slug', () => {
    const project = getProjectBySlug('example-project')
    expect(project?.title).toBe('Example Project')
  })

  it('returns undefined for an unknown slug', () => {
    expect(getProjectBySlug('does-not-exist')).toBeUndefined()
  })
})

describe('getAdjacentProjects', () => {
  it('returns no prev and has a next for the first project', () => {
    const { prev, next } = getAdjacentProjects('example-project')
    expect(prev).toBeUndefined()
    expect(next?.slug).toBe('second-project')
  })

  it('returns a prev and no next for the last project', () => {
    const { prev, next } = getAdjacentProjects('second-project')
    expect(prev?.slug).toBe('example-project')
    expect(next).toBeUndefined()
  })

  it('returns both undefined for an unknown slug', () => {
    const { prev, next } = getAdjacentProjects('unknown')
    expect(prev).toBeUndefined()
    expect(next).toBeUndefined()
  })
})
