import Image from 'next/image'
import { TechBadge } from '../../tech'

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10 ">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            width={40}
            height={40}
            src={'/images/logo.svg'}
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800 " />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base ">
          <a
            href="/"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors "
          >
            @ empresa
          </a>

          <h4 className="text-gray-300">Dev Back-end</h4>

          <span className="text-green-500">jun 2021 - jun 2023 - (2 anos)</span>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis
            aut nam dolore atque culpa saepe. Ratione, harum? Unde assumenda
            eveniet ducimus nesciunt, et aliquam aut quam, facere similique
            obcaecati at. Perspiciatis, quos! Alias molestias, voluptas quod
            aliquam magni excepturi.
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px mb-8] ">
          <TechBadge name="NodeJs" />
          <TechBadge name="NodeJs" />
          <TechBadge name="NodeJs" />
          <TechBadge name="NodeJs" />
          <TechBadge name="NodeJs" />
        </div>
      </div>
    </div>
  )
}
