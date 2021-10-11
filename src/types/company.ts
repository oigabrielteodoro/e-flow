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
  latestPrice: t.string,
  symbol: symbolCodec,
  companyName: t.string,
  change: t.string,
  changePercent: t.number,
})

export type CompanyNormalized = t.TypeOf<typeof companyNormalizedCodec>
