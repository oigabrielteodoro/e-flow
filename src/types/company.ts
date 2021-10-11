import * as t from 'io-ts'

export const companyRawCodec = t.type({
  latestPrice: t.number,
  symbol: t.string,
})

export type CompanyRaw = t.TypeOf<typeof companyRawCodec>
