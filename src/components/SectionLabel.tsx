type Props = { children: React.ReactNode }

export default function SectionLabel({ children }: Props) {
  return (
    <span className="inline-block text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
      {children}
    </span>
  )
}
