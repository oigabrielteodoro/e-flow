import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'

type SymbolBrand = {
  readonly Symbol: unique symbol
}

export const symbolCodec = withMessage(
  t.brand(
    t.string,
    (value): value is t.Branded<string, SymbolBrand> => value.length <= 4,
    'Symbol',
  ),
  () => 'Invalid symbol',
)

export type Symbol = t.TypeOf<typeof symbolCodec>
