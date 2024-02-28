'use client'
import { SectionTitle } from '@/app/components/section-title'
import { KnowTech } from './know-tech'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiNestjs } from 'react-icons/si'

const TECHS = [
  {
    icon: <FaNodeJs />,
    name: 'Node.Js',
    startDate: '2019-04-15',
    color: 'green',
  },
  {
    icon: <SiNestjs />,
    name: 'Nest.Js',
    startDate: '2023-08-01',
    color: 'red',
  },
  {
    icon: <FaReact />,
    name: 'React.Js',
    startDate: '2020-05-01',
    color: 'blue',
  },
  {
    icon: <TbBrandNextjs />,
    name: 'Next.Js',
    startDate: '2024-01-01',
    color: 'black',
  },
]

export const KnowTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Competencias" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {TECHS.map(({ icon, name, startDate, color }) => {
          return (
            <KnowTech
              tech={{
                icon: icon,
                name: name,
                startDate: startDate,
              }}
              color={color}
            />
          )
        })}
      </div>
    </section>
  )
}
