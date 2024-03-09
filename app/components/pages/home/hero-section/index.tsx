import Image from 'next/image'
import { TechBadge } from '../../tech'
import { Button } from '@/app/components/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandGmail,
  TbBrandWhatsapp,
} from 'react-icons/tb'

const MOCK_CONTACTS = [
  {
    title: 'Gmail',
    url: 'Gmail',
    icon: <TbBrandGmail />,
  },
  {
    title: 'LinkedIn',
    url: 'LinkedIn',
    icon: <TbBrandLinkedin />,
  },
  {
    title: 'Whatsapp',
    url: 'Whatsapp',
    icon: <TbBrandWhatsapp />,
  },
  {
    title: 'Github',
    url: 'Github',
    icon: <TbBrandGithub />,
  },
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row ">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Allan Freitas</h2>
          <p className="text-gray-400 my-6 font-medium mt-2">
            Sou desenvolvedor back-end. Com mais de 2 anos de experiência no
            desenvolvimento web utilizando do que há de mais atual no mercado
            para agregar valor aos clientes.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="Nodejs" key={`${index}`} />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex items-center sm:gap-5  flex-col sm:flex-row">
            <Button className="w-max shadow-button">
              Entre em contato <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map(({ icon, url, title }) => (
                <a
                  className="hover:text-gray-100 transition-colors"
                  href={url}
                  key={`contact-${title}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          className="shadow-button w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0  rounded-lg object-cover "
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de pergil Allan Freitas"
        />
      </div>
    </section>
  )
}
