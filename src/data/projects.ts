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
    slug: 'croak',
    title: 'Croak',
    tagline: 'Smart water quality monitoring device for the home',
    description: [
      'Croak is a smart water-quality monitoring product that helps households understand the state of their water through clear, readable signals instead of raw technical data.',
      'The landing page presents the product, hardware prototype, app preview, and core monitoring flow: sensors read pH, turbidity, and TDS, then translate changes into useful context and alerts.',
      'I built the site as a polished product showcase with responsive sections, real prototype assets, animated UI details, and GitHub Pages deployment.',
    ],
    highlights: [
      'Designed and built a responsive product landing page with React, TypeScript, Vite, and Tailwind CSS',
      'Showcased real prototype assets, app preview screens, and a clear sensor-to-app product flow',
      'Added motion details including scroll reveals, staggered sections and animated metrics',
      'Configured static deployment through GitHub Pages',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Lucide React', 'Github Pages'],
    links: {
      github: 'https://github.com/santiagocachoo/croak_webpage',
      live: 'https://santiagocachoo.github.io/croak_webpage/'
    },
  },
  {
    slug: 'clas-platform',
    title: 'CLAS Platform',
    tagline: 'A full-stack web platform for the Automotive Cluster of Sonora',
    description: [
      'CLAS is a team-built web platform created for the Automotive Cluster of Sonora to centralize member companies, industry information, and administrative workflows.',
      'I contributed mainly to the frontend, with a focus on the public company directory, company detail pages, role-aware views, and the visual direction of the directory experience.',
      'I also helped shape the design system and UI style for the directory page, making the member browsing experience feel more polished, organized, and consistent.',
      'Through the project, I worked closely with the backend API structure and learned how the frontend connects with Express routes, PostgreSQL data models, authentication, and protected business workflows.'
    ],
    highlights: [
      'Built key frontend views for the company directory and company detail experience',
      'Helped define the design system, visual direction, and UI style of the directory page',
      'Implemented search, filtering, sorting, pagination, and reusable UI components for browsing member companies',
      'Worked on role-based frontend flows for public users, company users, company admins, and cluster admins',
      'Integrated frontend pages with REST API endpoints for companies, catalogs, memberships, contacts, and related business data',
      'Collaborated in a team of 8 developers, contributing primarily to React, TypeScript, routing, state handling, and UI behavior'
    ],
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'TailwindCSS',
      'React Router',
      'Axios',
      'Node.js',
      'Express',
      'PostgreSQL',
      'JWT'
    ],
    links: {
      github: 'https://github.com/turtlevlz/CLAS'
    },
  }
]
