import { NextResponse } from 'next/server'
import { z } from 'zod'
import axios from 'axios'

const discordWebhook = process.env.WEBHOOK_URL!

type paramsMessage = {
  name: string
  email: string
  message: string
}

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
})

const sendDiscord = async ({ email, message, name }: paramsMessage) =>
  await axios.post(discordWebhook, {
    embeds: [
      {
        title: 'Mensagem de Contato',
        color: 0x4983f5,
        fields: [
          {
            name: 'Nome',
            value: name,
            inline: true,
          },
          {
            name: 'E-mail',
            value: email,
            inline: true,
          },
          {
            name: 'Mensagem',
            value: message,
          },
        ],
      },
    ],
  })

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, message, name } = bodySchema.parse(body)

    await sendDiscord({ email, message, name })

    return NextResponse.json({
      message: 'Obrigado, em breve entrarei em contato!',
    })
  } catch (error) {
    return NextResponse.error()
  }
}
