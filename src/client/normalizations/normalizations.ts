import * as R from 'ramda'
import { pipe } from 'fp-ts/function'

import { unsafe } from '__helpers__'

import { CompanyNormalized, CompanyRaw } from 'types'
import { decimalFromInt, percentFromInt } from 'lib'

export const normalizeCompany = (raw: CompanyRaw): CompanyNormalized =>
  pipe(
    raw,
    R.omit(['companyName', 'latestPrice', 'change', 'changePercent']),
    R.mergeRight({
      company_name: raw.companyName,
      latest_price: decimalFromInt(raw.latestPrice),
      change_percent: percentFromInt(raw.changePercent),
      change: decimalFromInt(raw.change),
      price_direction: unsafe<'up' | 'down'>(
        raw.changePercent > 0 ? 'up' : 'down',
      ),
    }),
  )
