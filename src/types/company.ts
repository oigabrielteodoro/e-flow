import * as t from 'io-ts'
import { positiveCodec, symbolCodec } from './scalar'

export const companyRawCodec = t.type({
  latestPrice: positiveCodec,
  symbol: symbolCodec,
  companyName: t.string,
  change: t.number,
  changePercent: t.number,
})

export type CompanyRaw = t.TypeOf<typeof companyRawCodec>

export const companyNormalizedCodec = t.type({
  latest_price: t.string,
  symbol: symbolCodec,
  company_name: t.string,
  change: t.string,
  change_percent: t.string,
  price_direction: t.union([t.literal('up'), t.literal('down')]),
})

export type CompanyNormalized = t.TypeOf<typeof companyNormalizedCodec>
