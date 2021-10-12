import { toast } from 'react-toastify'
import { DefaultOptions, QueryCache, QueryClient } from 'react-query'

import { pipe } from 'fp-ts/function'
import { fromNullable, fold } from 'fp-ts/Option'

const getErrorMessage = (error?: Error) => {
  return pipe(
    fromNullable(error),
    fold(
      () => 'Infelizmente ocorreu um erro! Tente novamente mais tarde 😢',
      ({ message }) => {
        return message
      },
    ),
  )
}

const onError = (error: unknown) => {
  if (error instanceof Error) {
    const errorMessage = getErrorMessage(error)

    toast.error(errorMessage)
  }
}

const queryCache = new QueryCache()

export const queryClientOptions: DefaultOptions = {
  queries: {
    onError,
  },
  mutations: {
    onError,
  },
}

export const queryClient = new QueryClient({
  defaultOptions: queryClientOptions,
  queryCache,
})
