import { ActionTypes } from '.'

export const getCompanyRequest = (inputValue: string) => ({
  type: ActionTypes.getCompanyRequest,
  payload: {
    inputValue,
  },
})

export const getCompanySuccess = () => ({
  type: ActionTypes.getCompanySuccess,
  payload: {},
})

export const getCompanyFailure = (error: string) => ({
  type: ActionTypes.getCompanyFailure,
  payload: {
    error,
  },
})
