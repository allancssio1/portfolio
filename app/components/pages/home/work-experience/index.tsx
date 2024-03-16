import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'
import { IWorkExperiences } from '@/app/types/types-infos'

type WorkExperiencesProps = {
  experiences: IWorkExperiences[]
}

export const WorkExperience = ({ experiences }: WorkExperiencesProps) => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 md:flex-row flex-col">
      <div className=" md:min-w-[300px] lg:min-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-400 mt-8">
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incriveis para sua empresa.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <ExperienceItem
            experience={experience}
            key={experience.companyName}
          />
        ))}
      </div>
    </section>
  )
}
