import { Reducer } from 'redux'
import produce from 'immer'

import { toast } from 'react-toastify'
import { none, some } from 'fp-ts/Option'

import { normalizeCompany } from 'client'
import { ActionTypes, CompaniesState } from './companies.types'

const INITIAL_STATE: CompaniesState = {
  loading: true,
  company: none,
}

const reducer: Reducer<CompaniesState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.getCompanyRequest: {
        draft.loading = true
        break
      }
      case ActionTypes.getCompanySuccess: {
        const { company } = action.payload

        draft.loading = false
        draft.company = some(normalizeCompany(company))

        break
      }
      case ActionTypes.getCompanyFailure: {
        const { error } = action.payload

        toast.error(error)
        draft.loading = false

        break
      }
      default:
        break
    }
  })
}

export default reducer
