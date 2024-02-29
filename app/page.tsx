import { HighlightedProjects } from './components/pages/highlighted-projects'
import { HeroSection } from './components/pages/home/hero-secrtion'
import { KnowTechs } from './components/pages/home/know-techs'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
      <HighlightedProjects />
    </>
  )
}
