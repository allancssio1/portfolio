'use client'
import { SectionTitle } from '@/app/components/section-title'
import { KnowTech } from './know-tech'
import { KnownTech as ITechs } from '@/app/types/types-infos'
import { CMSIcon } from '@/app/components/cms-icon'
import { motion } from 'framer-motion'

type ITechProps = {
  techs: ITechs[]
}

export const KnowTechs = ({ techs }: ITechProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Competencias" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs.map(({ iconSvg, name, startDate, color }, i) => {
          return (
            <motion.div
              key={`${name}`}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.2, delay: i * 0.2 }}
            >
              <KnowTech
                tech={{
                  icon: CMSIcon({ icon: iconSvg }),
                  name,
                  startDate,
                  color,
                }}
              />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
