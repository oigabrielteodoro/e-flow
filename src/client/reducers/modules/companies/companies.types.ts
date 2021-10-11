export enum ActionTypes {
  getCompanyRequest = '@companies/GET_COMPANY_REQUEST',
  getCompanySuccess = '@companies/GET_COMPANY_SUCCESS',
  getCompanyFailure = '@companies/GET_COMPANY_FAILURE',
}

export type CompaniesState = {
  isLoading?: boolean
  company?: unknown
}
