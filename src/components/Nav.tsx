import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  function sectionHref(id: string) {
    return isHome ? `#${id}` : `/#${id}`
  }

  return (
    <nav className="sticky top-0 z-10 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-sm tracking-widest text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity"
        >
          SC
        </Link>
        <div className="flex items-center gap-6">
          {(['about', 'projects', 'skills', 'contact'] as const).map(id => (
            <a
              key={id}
              href={sectionHref(id)}
              className="text-sm capitalize text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              {id}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
