'use client'
import { SectionTitle } from '@/app/components/section-title'
import { KnowTech } from './know-tech'
import { KnownTech as ITechs } from '@/app/types/types-infos'
import { CMSIcon } from '@/app/components/cms-icon'

type ITechProps = {
  techs: ITechs[]
}

export const KnowTechs = ({ techs }: ITechProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Competencias" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs.map(({ iconSvg, name, startDate, color }) => {
          return (
            <KnowTech
              tech={{
                icon: CMSIcon({ icon: iconSvg }),
                name,
                startDate,
                color,
              }}
              key={`${name}`}
            />
          )
        })}
      </div>
    </section>
  )
}
