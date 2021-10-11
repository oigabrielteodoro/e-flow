import { all, AllEffect } from 'redux-saga/effects'

export function* rootSaga(): Generator<AllEffect<never>> {
  return yield all([])
}
