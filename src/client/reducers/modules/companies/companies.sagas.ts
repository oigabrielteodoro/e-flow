import { all, call, put, takeLatest } from 'redux-saga/effects'

import { toError } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { tryCatch, map, mapLeft } from 'fp-ts/IOEither'

import { api } from 'client/fetcher'

import {
  ActionTypes,
  getCompanyRequest,
  getCompanyFailure,
  getCompanySuccess,
} from '.'
function* getCompany({ payload }: ReturnType<typeof getCompanyRequest>) {
  const { inputValue } = payload

  yield pipe(
    tryCatch(() => call(api.get, `/stock/${inputValue}/company`), toError),
    map(() => {
      put(getCompanySuccess())
    }),
    mapLeft(({ message }) => put(getCompanyFailure(message))),
  )()
}

export const companiesSagas = all([
  takeLatest(ActionTypes.getCompanyRequest, getCompany),
])
