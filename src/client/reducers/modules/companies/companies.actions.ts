import { CompanyRaw } from 'types'
import { ActionTypes } from '.'

export const getCompanyRequest = (inputValue: string) => ({
  type: ActionTypes.getCompanyRequest,
  payload: {
    inputValue,
  },
})

export const getCompanySuccess = (company: CompanyRaw) => ({
  type: ActionTypes.getCompanySuccess,
  payload: {
    company,
  },
})

export const getCompanyFailure = (error: string) => ({
  type: ActionTypes.getCompanyFailure,
  payload: {
    error,
  },
})
