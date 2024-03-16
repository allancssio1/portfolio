import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type workingDatesProps = {
  startDate: string | Date
  endDate?: string | Date
}

export const workingDates = ({ startDate, endDate }: workingDatesProps) => {
  const start_date = new Date(startDate)
  const end_date = endDate ? new Date(endDate) : new Date()

  const start_date_formated = format(start_date, 'MMM yyyy', {
    locale: ptBR,
  })
  const end_date_formated = endDate
    ? format(end_date, 'MMM yyyy', { locale: ptBR })
    : 'o momento'

  const months = differenceInMonths(end_date, start_date)
  const years = differenceInYears(end_date, start_date)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`

  return {
    start_date,
    end_date,
    start_date_formated,
    end_date_formated,
    months,
    years,
    monthsRemaining,
    formattedDuration,
  }
}
