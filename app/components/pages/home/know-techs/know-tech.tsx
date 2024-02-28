import { getRelativeTimeString } from '@/app/utils/get-time'
import { ReactNode } from 'react'

interface KnowTechProps {
  tech: {
    icon: ReactNode
    name: string
    startDate: string
  }
  color: string
}

export const KnowTech = ({ tech, color }: KnowTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR',
  ).replace('há ', '')
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <span>{tech.icon}</span>
      </div>
      <span>{relativeTime} de experiência</span>
    </div>
  )
}
