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
