import * as R from 'ramda'
import { pipe } from 'fp-ts/function'

import { CompanyRaw } from 'types'
import { decimalFromInt } from 'lib'

export const normalizeCompany = (raw: CompanyRaw) =>
  pipe(
    raw,
    R.omit(['latestPrice', 'change']),
    R.mergeRight({
      latestPrice: decimalFromInt(raw.latestPrice),
      change: decimalFromInt(raw.change),
    }),
  )
