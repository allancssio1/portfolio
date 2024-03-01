import Image from 'next/image'
import { TechBadge } from '../../../tech'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          alt="Thumbnail do projeto BooWise"
          src="/images/i-2.jpg"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src={'images/icons/project-title-icon.svg'}
          />
          BookWise
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error
          ipsam quaerat vero quidem voluptates expedita accusamus non magni
          adipisci pariatur aliquam aspernatur at, vel iste beatae! Culpa,
          ratione minima?
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Nodejs" />
          <TechBadge name="Nodejs" />
          <TechBadge name="Nodejs" />
          <TechBadge name="Nodejs" />
          <TechBadge name="Nodejs" />
        </div>
        <Link href={'/project/book-wise'}>
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
