import React, { FC, ReactElement } from 'react'
import { render as renderComponent } from '@testing-library/react'

import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { QueryClientProvider } from 'react-query'

import { pipe } from 'fp-ts/function'
import { map, mapLeft, TaskEither } from 'fp-ts/TaskEither'

import { queryClient, store } from 'client'

export function unsafe<T>(value: unknown): T {
  return value as T
}

type Callback = (result: unknown) => unknown

type MapAll = (
  fn: Callback,
) => (data: TaskEither<unknown, unknown>) => TaskEither<unknown, unknown>

export const mapAll: MapAll = (fn) => (data) => {
  return pipe(data, map(fn), mapLeft(fn))
}

export function getErrorMessage(errors: unknown): string {
  return Array.isArray(errors) ? errors[0].message : ''
}

export const AppWrapper: FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>{children}</Provider>

    <ToastContainer />
  </QueryClientProvider>
)

export const render = (children: ReactElement) => {
  return renderComponent(children, {
    wrapper: AppWrapper,
  })
}
