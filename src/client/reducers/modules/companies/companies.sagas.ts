import { all, call, put, takeLatest } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import { fold } from 'fp-ts/Either'
import { constFalse, constTrue, pipe } from 'fp-ts/function'

import { api } from 'client'
import { CompanyRaw, companyRawCodec } from 'types'

import {
  ActionTypes,
  getCompanyRequest,
  getCompanyFailure,
  getCompanySuccess,
} from '.'

function isValid(data: unknown) {
  return pipe(data, companyRawCodec.decode, fold(constFalse, constTrue))
}

function* getCompany({ payload }: ReturnType<typeof getCompanyRequest>) {
  const { inputValue } = payload

  try {
    const response: AxiosResponse<CompanyRaw> = yield call(
      api.get,
      `/stock/${inputValue}/quote`,
    )

    if (isValid(response.data)) {
      yield put(getCompanySuccess(response.data))
    } else {
      yield put(
        getCompanyFailure('Os dados devoldidos da api estão inválidos!'),
      )
    }
  } catch (error) {
    yield put(getCompanyFailure('Não encontramos um ativo com esse nome!'))
  }
}

export const companiesSagas = all([
  takeLatest(ActionTypes.getCompanyRequest, getCompany),
])
