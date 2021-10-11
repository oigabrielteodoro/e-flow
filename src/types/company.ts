import * as t from 'io-ts'
import { positiveCodec, symbolCodec } from './scalar'

export const companyRawCodec = t.type({
  latestPrice: positiveCodec,
  symbol: symbolCodec,
})

export type CompanyRaw = t.TypeOf<typeof companyRawCodec>
