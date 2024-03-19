interface EmailTemplateProps {
  name: string
  message: string
}

export const contact = ({ message, name }: EmailTemplateProps) => (
  <div>
    <div>Olá me chamo {name}</div>
    <span>{message}</span>
  </div>
)
