import { all, AllEffect } from 'redux-saga/effects'

import { companiesSagas } from '.'

export function* rootSaga(): Generator<AllEffect<unknown>> {
  return yield all([companiesSagas])
}
