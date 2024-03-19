'use client'

import Image from 'next/image'
import { TechBadge } from '../../../tech'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { HighlightProjects } from '@/app/types/types-infos'
import { myLoader } from '@/app/utils/myLoaderSVG'
import { Overlay } from '@/app/components/overlay'
import { motion } from 'framer-motion'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/utils'

type IProjectCard = {
  project: HighlightProjects
}

export const ProjectCard = ({
  project: { thumbnail, logo, title, slug, shortDescription, technologies },
}: IProjectCard) => {
  return (
    <motion.div
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row "
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full  h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full relative"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Overlay companyName={title} />
        <Image
          width={420}
          height={304}
          loader={myLoader}
          alt={`Thumbnail do projeto ${title}`}
          src={(thumbnail && thumbnail.url) ?? ''}
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
      <div className="flex-1 lg:py-[18px]">
        <motion.h3
          className="flex items-center  gap-6 font-medium text-lg text-gray-50"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          <Image
            width={20}
            height={20}
            alt={`logo ${title}`}
            src={logo.url}
            loader={myLoader}
          />
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-400 my-6"
          {...fadeUpAnimation}
          transition={{ duration: 0.3 }}
        >
          {shortDescription}
        </motion.p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {technologies.map((tec, i) => {
            return (
              <TechBadge
                name={`${tec.name}`}
                key={`${title}-tech-${tec.name}`}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: 0.3 + i * 0.1 }}
              />
            )
          })}
        </div>
        <Link href={`/projects/${slug}`}>
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}
