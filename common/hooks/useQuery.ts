import { useQuery } from '@apollo/client'
import { DocumentNode } from 'graphql'

interface Props {
  query?: DocumentNode
  variables: { [key: string]: any }
  onSuccess?: (data: any) => void
  onError?: (e: any) => void
}

const makeRequest = async <T>({
  query,
  variables,
  onError,
  onSuccess,
}: Props) => {
  const options = variables ? { variables } : null

  try {
    const { data } = useQuery<T>(query, options)
    onSuccess && onSuccess(data)
    return [data]
  } catch (e) {
    onError && onError(e.response && e.response.data)
    return [null, e.response]
  }
}

export default makeRequest
