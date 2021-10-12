import {
  CompanyPriceHistoryNormalized,
  CompanyPriceHistoryRaw,
  CompanyRaw,
} from 'types'
import { unsafe } from '__helpers__'
import { normalizeCompany, normalizeCompanyPrice } from 'client'

export const companyRawMocked = (name: string, symbol: string): CompanyRaw => ({
  latestPrice: unsafe(294.23),
  companyName: name,
  symbol: unsafe(symbol),
  change: -0.0062,
  changePercent: -0.00021,
})

export const companyNormalizedMocked = (name: string, symbol: string) =>
  normalizeCompany(companyRawMocked(name, symbol))

export const companyPriceHistoryRawMocked: CompanyPriceHistoryRaw = [
  {
    close: 321,
    updated: new Date().getTime(),
  },
]

export const companyPriceHistoryNormalizedMocked: CompanyPriceHistoryNormalized =
  companyPriceHistoryRawMocked.map(normalizeCompanyPrice)
