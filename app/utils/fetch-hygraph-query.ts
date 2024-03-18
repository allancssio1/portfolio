type QueryProps = {
  query?: string
  method: 'POST' | 'GET' | 'PATCH' | 'PUT' | 'DELETE'
}

export const fetchHygraphQuery = async <T>({
  query,
  method,
}: QueryProps): Promise<T> => {
  // const response = {}
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
      // revalidate: 60 * 10, // 10 min
    },
  })

  const data = await response.json()
  return data
}
