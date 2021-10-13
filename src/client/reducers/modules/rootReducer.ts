import { combineReducers } from 'redux'

import companiesReducer from './companies/companies.reducers'

export const rootReducer = combineReducers({
  companies: companiesReducer,
})
