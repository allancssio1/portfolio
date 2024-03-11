type QueryProps = {
  query?: string
  method: 'POST' | 'GET' | 'PATCH' | 'PUT' | 'DELETE'
}

export const fetchHygraphQuery = async ({ query, method }: QueryProps) => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method,
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

  const data = await response.json()
  console.log('🚀 ~ fetchHygraphQuery ~ data:', data)
  return data
}
