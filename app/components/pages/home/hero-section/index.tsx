'use client'

import Image from 'next/image'
import { TechBadge } from '../../tech'
import { Button } from '@/app/components/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { HomePageInfo } from '@/app/types/types-infos'
import { RichText } from '@/app/components/rich-text'
import { CMSIcon } from '@/app/components/cms-icon'
import { myLoader } from '@/app/utils/myLoaderSVG'
import { motion } from 'framer-motion'
import { techBadgeAnimation } from '@/app/lib/utils'

export const HeroSection = ({
  data: {
    page: { introTechnologies, introduction, profilePicture, socials },
  },
}: HomePageInfo) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')

    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:max-w-[530px]"
        >
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Allan Freitas</h2>
          <div className="text-gray-400 my-6 font-medium mt-2">
            <RichText content={introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {introTechnologies &&
              introTechnologies.map(({ name }, i) => (
                <TechBadge
                  name={name}
                  key={`${name}`}
                  {...techBadgeAnimation}
                  transition={{ duration: 0.2, delay: i * 0.2 }}
                />
              ))}
          </div>
          <div className="mt-6 lg:mt-10 flex items-center sm:gap-5  flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {socials.map(({ iconSvg, url }, i) => (
                <a
                  className="hover:text-gray-100 transition-colors"
                  href={url}
                  key={`contact-${i}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {CMSIcon({ icon: iconSvg })}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            className="shadow-button w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0  rounded-lg object-cover "
            width={420}
            height={404}
            loader={myLoader}
            src={profilePicture.url}
            alt="Foto de pergil Allan Freitas"
          />
        </motion.div>
      </div>
    </section>
  )
}
