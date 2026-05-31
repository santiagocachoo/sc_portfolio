type Props = { skill: string }

export default function SkillPill({ skill }: Props) {
  return (
    <span className="text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1">
      {skill}
    </span>
  )
}
