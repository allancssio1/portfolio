import { PageIntroduction } from '../components/pages/projects/page-introduction'
import { ProjectsList } from '../components/pages/projects/project-list'
import { ProjectPageData } from '../types/types-infos'
import { fetchHygraphQuery } from '../utils/fetch-hygraph-query'
import { queryProjects } from '../utils/querys'

const getPageData = async (): Promise<ProjectPageData> => {
  return await fetchHygraphQuery({ query: queryProjects, method: 'POST' })
}

export default async function Projects() {
  const { data } = await getPageData()

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={data.projects} />
    </>
  )
}
