import { Option } from 'fp-ts/Option'

import { CompanyNormalized } from 'types'

export enum ActionTypes {
  getCompanyRequest = '@companies/GET_COMPANY_REQUEST',
  getCompanySuccess = '@companies/GET_COMPANY_SUCCESS',
  getCompanyFailure = '@companies/GET_COMPANY_FAILURE',
  addFavoriteCompany = '@companies/ADD_FAVORITE_COMPANY',
  removeFavoriteCompany = '@companies/REMOVE_FAVORITE_COMPANY',
}

export type CompaniesState = {
  loading: boolean
  company: Option<CompanyNormalized>
  storaged: CompanyNormalized[]
  favorites: string[]
}
