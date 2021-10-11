import { Reducer } from 'redux'
import produce from 'immer'
import { toast } from 'react-toastify'
import { ActionTypes, CompaniesState } from './companies.types'

const INITIAL_STATE: CompaniesState = {
  isLoading: true,
}

const reducer: Reducer<CompaniesState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.getCompanyRequest: {
        draft.isLoading = true
        break
      }
      case ActionTypes.getCompanySuccess: {
        draft.isLoading = false
        break
      }
      case ActionTypes.getCompanyFailure: {
        const { error } = action.payload

        toast.error(error)
        draft.isLoading = false

        break
      }
      default:
        break
    }
  })
}

export default reducer
