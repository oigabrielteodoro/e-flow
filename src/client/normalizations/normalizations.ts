import * as R from 'ramda'
import { pipe } from 'fp-ts/function'

import { CompanyRaw } from 'types'
import { decimalFromInt, percentFromInt } from 'lib'

export const normalizeCompany = (raw: CompanyRaw) =>
  pipe(
    raw,
    R.omit(['latestPrice', 'change', 'changePercent']),
    R.mergeRight({
      latestPrice: decimalFromInt(raw.latestPrice),
      changePercent: percentFromInt(raw.changePercent),
      change: decimalFromInt(raw.change),
    }),
  )
