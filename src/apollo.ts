import { setContext } from '@apollo/client/link/context'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { fromPromise } from '@apollo/client/link/utils/fromPromise'
import { ErrorResponse, onError } from '@apollo/client/link/error'
import { from } from '@apollo/client'

import config from './config'
import { getAuthToken, cleanUpSession } from './auth'

const authLink = setContext(async (_, { headers = {} }) => {
  const authorization = await getAuthToken()
  return {
    headers: { ...headers, authorization },
  }
})

const errorLink = onError(({ networkError, operation, forward }: ErrorResponse) => {
  if (networkError && 'statusCode' in networkError) {
    const statusCode = networkError.statusCode
    if (statusCode === 401 || statusCode === 403) {
      const { headers } = operation.getContext()
      // eslint-disable-next-line no-console
      console.warn(
        'Unauthorized or forbidden connection to commercetools, cleaning up session...',
        networkError
      )
      cleanUpSession()
      //@ts-ignore
      return fromPromise(getAuthToken).flatMap(authorization => {
        operation.setContext({ headers: { ...headers, authorization } })
        return forward(operation)
      })
    }
  }
  return null
})

const httpLink = createHttpLink({
  uri:
    process.env.VUE_APP_GRAPHQL_HTTP ||
    `${config.ct.api}/${config.ct.auth.projectKey}/graphql`,
})

const defaultOptions = {
  query: {
    errorPolicy: 'all' as any,
  },
  mutate: {
    errorPolicy: 'all' as any,
  },
}

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, authLink, httpLink]),
  defaultOptions,
})

export default apolloClient
