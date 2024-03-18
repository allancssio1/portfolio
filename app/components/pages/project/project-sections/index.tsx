import { ProjectSection } from '@/app/types/types-infos'
import Image from 'next/image'

type ProjectSectionsProps = {
  sections: ProjectSection[]
}

export const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map(({ title, image }) => (
        <div key={title} className="flex flex-col items-center gap-6 md:gap-12">
          <h2 className="text-2xl">{title}</h2>
          <Image
            src={image.url}
            alt={title}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}
