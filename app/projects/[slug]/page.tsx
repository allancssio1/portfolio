import { ProjectDetails } from '@/app/components/pages/project/project-details'
import { ProjectSections } from '@/app/components/pages/project/project-sections'
import {
  HighlightProjects,
  ProjectsPageStaticData,
} from '@/app/types/types-infos'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'
import { queryProjectDetails, queryProjectSlugs } from '@/app/utils/querys'
import { Metadata } from 'next'

type PorjectProps = {
  params: {
    slug: string
  }
}

export type ProjectPageData = {
  data: {
    project: HighlightProjects
  }
}

const getProjectDetailData = async (slug: string): Promise<ProjectPageData> => {
  const query = queryProjectDetails.replace('[slug]', slug)

  return await fetchHygraphQuery({ query, method: 'POST' })
}

export default async function Project({ params }: PorjectProps) {
  const { data } = await getProjectDetailData(params.slug)
  return (
    <>
      <ProjectDetails project={data.project} />
      <ProjectSections sections={data.project.sections} />
    </>
  )
}

export async function generateStaticParams() {
  const query = queryProjectSlugs

  const { data } = await fetchHygraphQuery<ProjectsPageStaticData>({
    query,
    method: 'POST',
  })

  return data.projects
}

export async function generateMetadata({
  params: { slug },
}: PorjectProps): Promise<Metadata> {
  const {
    data: { project },
  } = await getProjectDetailData(slug)

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}
