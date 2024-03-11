type QueryProps = {
  query?: string
}

export const fetchHygraphQuery = async ({ query }: QueryProps) => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: query ? JSON.stringify({ query }) : '',
    next: {
      revalidate: 60 * 60 * 24, // 24 horas
    },
  })

  const data = response.json()
  return data
}
