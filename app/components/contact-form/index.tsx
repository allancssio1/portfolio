import { HiArrowNarrowRight } from 'react-icons/hi'
import { Button } from '../button'
import { SectionTitle } from '../section-title'

export const ContactForm = () => {
  return (
    <section className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Entre em contato comigo"
          className="items-center text-center"
        />

        <form action="" className="mt-12 w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="nome"
            className="w-full h-14 bg-gray-800 rounded-xl placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-1 ring-emerald-600"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full h-14 bg-gray-800 rounded-xl placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-1 ring-emerald-600"
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none  w-full h-[138px] bg-gray-800 rounded-xl placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-1 ring-emerald-600"
          />

          <Button className="mt-6 w-max mx-auto shadow-button">
            Enviar mensagem <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  )
}
