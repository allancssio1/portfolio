import Link from 'next/link'
import { ProjectCard } from './project-card'
import { HighlightProjects } from '@/app/types/types-infos'

type ProjectsListProps = {
  projects: HighlightProjects[]
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          key={`/projects/book-wise${project.slug}`}
        >
          <ProjectCard project={project} />
        </Link>
      ))}
    </section>
  )
}
