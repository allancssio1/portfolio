import Image from 'next/image'

const sections = [
  {
    title: 'login',
    image: 'https://media.graphassets.com/ZsK2GK0HTru6pi0WwEpc',
  },
  {
    title: 'home',
    image: 'https://media.graphassets.com/7Kic5YHkQcmGrN57MSXw',
  },
]

export const ProjectSections = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map(({ title, image }) => (
        <div key={title} className="flex flex-col items-center gap-6 md:gap-12">
          <h2>{title}</h2>
          <Image
            src={image}
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
