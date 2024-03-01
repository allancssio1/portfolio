import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 md:flex-row flex-col">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-400 mt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima omnis
          provident saepe ratione! Cum atque est, ipsa repellendus eos
          recusandae? Aliquid iure amet illum molestiae ad reiciendis earum
          officia nostrum.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  )
}
