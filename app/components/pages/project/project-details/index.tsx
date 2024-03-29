'use client'
import { motion } from 'framer-motion'

import { SectionTitle } from '@/app/components/section-title'
import { TechBadge } from '../../tech'
import { Button } from '@/app/components/button'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { Link } from '@/app/components/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { HighlightProjects } from '@/app/types/types-infos'
import { RichText } from '@/app/components/rich-text'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/utils'

type ProjectDetailsProps = {
  project: HighlightProjects
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden ">
      <motion.div
        className=" absolute inset-0 z-[-1] "
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`,
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <SectionTitle
        subtitle="projetos"
        title={project.title}
        className="text-center items-center sm:[&>h3]:text4xl"
      />
      <motion.div
        {...fadeUpAnimation}
        className=" text-gray-400 text-center max-w-[640px] my-4 sm:mt-6 text-sm sm:text-base"
      >
        <RichText content={project.description.raw} />
      </motion.div>

      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {project.technologies.map((tech, i) => (
          <TechBadge
            name={tech.name}
            key={`${project.title}-${tech.name}`}
            {...techBadgeAnimation}
            transition={{ duration: 0.2, delay: i * 0.1 }}
          />
        ))}
      </div>

      <motion.div
        {...fadeUpAnimation}
        className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
      >
        {project.repository ? (
          <a href={project.repository} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              Repositório
            </Button>
          </a>
        ) : null}
        {project.liveProject ? (
          <a href={project.liveProject} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <FiGlobe size={20} />
              Projeto Online
            </Button>
          </a>
        ) : null}
      </motion.div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
      </Link>
    </section>
  )
}
