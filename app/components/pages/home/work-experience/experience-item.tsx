'use client'

import Image from 'next/image'
import { TechBadge } from '../../tech'
import { IWorkExperiences } from '@/app/types/types-infos'
import { myLoader } from '@/app/utils/myLoaderSVG'
import { RichText } from '@/app/components/rich-text'
import { workingDates } from '@/app/utils/workingDates'
import { motion } from 'framer-motion'
import { techBadgeAnimation } from '@/app/lib/utils'

type WorkExperiencesProps = {
  experience: IWorkExperiences
}

export const ExperienceItem = ({
  experience: {
    companyLogo,
    companyName,
    description,
    endDate,
    role,
    startDate,
    technologies,
  },
}: WorkExperiencesProps) => {
  const { end_date_formated, formattedDuration, start_date_formated } =
    workingDates({ startDate, endDate })

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            width={40}
            height={40}
            loader={myLoader}
            src={(companyLogo && companyLogo.url) ?? ''}
            alt="company logo"
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800 " />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base ">
          <a
            href="/"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors "
          >
            {companyName}
          </a>

          <h4 className="text-gray-300">{role}</h4>

          <span className="text-green-500">
            {start_date_formated} • {end_date_formated} • {formattedDuration}
          </span>
          <p className="text-gray-400">
            <RichText content={description.raw} />
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px mb-8] ">
          {technologies.map((tec, i) => (
            <TechBadge
              name={`${tec.name}`}
              key={tec.name}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
