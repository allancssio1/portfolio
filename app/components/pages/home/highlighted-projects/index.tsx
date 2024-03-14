import Link from 'next/link'
import { HorizontalDivider } from '../../../divider/horizontal'
import { SectionTitle } from '../../../section-title'
import { ProjectCard } from './project-card'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { HighlightProjects } from '@/app/types/types-infos'

type IProjects = {
  projects: HighlightProjects[]
}

export const HighlightedProjects = ({ projects }: IProjects) => {
  return (
    <section className="container">
      <SectionTitle subtitle="destaques" title="Projetos em destaques" />
      <HorizontalDivider className="mb-16" />
      <div>
        {projects.map((project) => {
          return (
            <div key={project.slug}>
              <ProjectCard project={project} />
              <HorizontalDivider className="my-16" />
            </div>
          )
        })}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link className="inline-flex items-center" href="/projects">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
