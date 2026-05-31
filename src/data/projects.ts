export type Project = {
  slug: string
  title: string
  tagline: string
  description: string[]
  highlights?: string[]
  tech: string[]
  image?: string
  links: {
    github?: string
    live?: string
  }
}

export const projects: Project[] = [
  {
    slug: 'example-project',
    title: 'Example Project',
    tagline: 'A placeholder project — replace with real content',
    description: [
      'This is a placeholder description. Add a few paragraphs here about what the project does and why you built it.',
      'Describe any interesting technical decisions, challenges you overcame, or things you learned.',
    ],
    highlights: [
      'Replace this with a real highlight',
      'Another thing worth calling out',
    ],
    tech: ['React', 'TypeScript'],
    links: {
      github: 'https://github.com/santiagocachoh',
    },
  },
  {
    slug: 'second-project',
    title: 'Second Project',
    tagline: 'Another placeholder — fill in your real projects',
    description: ['Description for the second project.'],
    tech: ['Python', 'FastAPI'],
    links: {},
  },
]
