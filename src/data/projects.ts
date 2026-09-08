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
  demoNote?: string
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
    image: '/images/croak_logo.png',
    links: {
      github: 'https://github.com/santiagocachoo/croak_webpage',
      live: 'https://santiagocachoo.github.io/croak_webpage/'
    },
  },
  {
    slug: 'clas-platform',
    title: 'CLAS Platform',
    tagline: 'Full-stack company directory and membership platform for an automotive industry cluster',
    description: [
      'CLAS was built as a team project for a real automotive industry cluster in Sonora, Mexico. Two student teams each developed a full competing proposal for the client; the client selected the other team\'s proposal, and neither was ultimately put into production.',
      'The platform is a full-stack company directory and membership system: a public directory with search, filtering, sorting, and pagination, JWT authentication across three roles (cluster admin, company admin, company user), and admin tools for managing companies, contacts, and products. I worked primarily on the frontend, focused on the public directory, role-aware views, and the design system behind the browsing experience.',
      'After the course ended, I sanitized the project on my own and deployed it as a public demo: replaced all real client data (company names, tax IDs, contacts, and trademarked logos) with fictional equivalents, moved hardcoded configuration to environment variables, added SSL support for the hosted Postgres database, and shipped it to Vercel, Render, and Neon.',
    ],
    highlights: [
      'Public company directory with search, filtering, sorting, and pagination',
      'JWT authentication with three role levels: cluster admin, company admin, company user',
      'Company, contact, and product management with an admin panel',
      'Independently sanitized real client data and redeployed the project as a public-safe demo (fictional data, environment variables, SSL)',
    ],
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Express',
      'Sequelize',
      'PostgreSQL',
      'JWT',
      'Render',
      'Vercel'
    ],
    image: '/images/clas.jpeg',
    links: {
      github: 'https://github.com/santiagocachoo/CLAS/tree/public-demo',
      live: 'https://company-directory-demo.vercel.app'
    },
    demoNote: "The backend runs on Render's free tier, so the first request after a period of inactivity can take up to a minute. Demo credentials for both company roles are pre-filled on the login page.",
  }
]
