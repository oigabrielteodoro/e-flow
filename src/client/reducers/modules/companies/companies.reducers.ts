import { Reducer } from 'redux'
import { toast } from 'react-toastify'

import produce from 'immer'
import { none, some } from 'fp-ts/Option'

import { normalizeCompany } from 'client'

import { ActionTypes, CompaniesState } from './companies.types'

const INITIAL_STATE: CompaniesState = {
  loading: false,
  company: none,
  storaged: [],
  favorites: [],
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

        const foundedCompany = draft.storaged.find(
          ({ symbol }) => symbol === company.symbol,
        )

        if (foundedCompany) {
          draft.storaged = draft.storaged.filter(
            ({ symbol }) => symbol !== company.symbol,
          )
        }

        draft.storaged = [company, ...draft.storaged]

        break
      }
      case ActionTypes.getCompanyFailure: {
        const { error } = action.payload

        draft.loading = false
        toast.error(error)

        break
      }
      case ActionTypes.addFavoriteCompany: {
        const { symbol } = action.payload

        draft.favorites = [symbol, ...draft.favorites]

        break
      }
      case ActionTypes.removeFavoriteCompany: {
        const { symbol } = action.payload

        draft.favorites = draft.favorites.filter(
          (symbolFavorited) => symbolFavorited !== symbol,
        )

        break
      }
      default:
        break
    }
  })
}

export default reducer
