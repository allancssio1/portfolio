'use client'

import Link from 'next/link'
import { ProjectCard } from './project-card'
import { HighlightProjects } from '@/app/types/types-infos'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/app/lib/utils'

type ProjectsListProps = {
  projects: HighlightProjects[]
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project, i) => (
        <motion.div
          key={`/projects/book-wise${project.slug}`}
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <Link href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        </motion.div>
      ))}
    </section>
  )
}
