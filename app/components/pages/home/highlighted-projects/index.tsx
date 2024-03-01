import Link from 'next/link'
import { HorizontalDivider } from '../../../divider/horizontal'
import { SectionTitle } from '../../../section-title'
import { ProjectCard } from './project-card'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const HighlightedProjects = () => {
  return (
    <section className="container">
      <SectionTitle subtitle="destaques" title="Projetos em destaques" />
      <HorizontalDivider className="mb-16" />
      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />

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
