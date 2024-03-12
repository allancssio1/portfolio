import { HighlightedProjects } from './components/pages/home/highlighted-projects'
import { HeroSection } from './components/pages/home/hero-section'
import { KnowTechs } from './components/pages/home/know-techs'
import { WorkExperience } from './components/pages/home/work-experience'
import { queryHome } from './utils/querys'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'
import { HomePageInfo } from './types/types-infos'

const getPageData = async (): Promise<HomePageInfo> => {
  return await fetchHygraphQuery({ query: queryHome, method: 'POST' })
}

export default async function Home() {
  const { data } = await getPageData()

  return (
    <>
      <HeroSection data={data} />
      <KnowTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
