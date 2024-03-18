'use client'

import Image from 'next/image'
import { TechBadge } from '../../../tech'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { HighlightProjects } from '@/app/types/types-infos'
import { myLoader } from '@/app/utils/myLoaderSVG'
import { Overlay } from '@/app/components/overlay'

type IProjectCard = {
  project: HighlightProjects
}

export const ProjectCard = ({
  project: { thumbnail, logo, title, slug, shortDescription, technologies },
}: IProjectCard) => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row ">
      <div className="w-full  h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full relative">
        <Overlay companyName={title} />
        <Image
          width={420}
          height={304}
          loader={myLoader}
          alt={`Thumbnail do projeto ${title}`}
          src={(thumbnail && thumbnail.url) ?? ''}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 lg:py-[18px]">
        <h3 className="flex items-center  gap-6 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt={`logo ${title}`}
            src={logo.url}
            loader={myLoader}
          />
          {title}
        </h3>

        <p className="text-gray-400 my-6">{shortDescription}</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {technologies.map((tec) => {
            return (
              <TechBadge
                name={`${tec.name}`}
                key={`${title}-tech-${tec.name}`}
              />
            )
          })}
        </div>
        <Link href={`/projects/${slug}`}>
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
