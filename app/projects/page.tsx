import { PageIntroduction } from '../components/pages/projects/page-introduction'
import { ProjectsList } from '../components/pages/projects/project-list'

export default async function Projects() {
  return (
    <>
      <PageIntroduction />
      <ProjectsList />
    </>
  )
}
