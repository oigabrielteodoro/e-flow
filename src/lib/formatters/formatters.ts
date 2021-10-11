import { pipe } from 'fp-ts/function'
import { fold, fromNullable } from 'fp-ts/Option'

export const decimalFromInt = (value?: number | null) =>
  pipe(
    value,
    fromNullable,
    fold(
      () => '-',
      (value) =>
        new Intl.NumberFormat('en-US', {
          currency: 'USD',
          style: 'currency',
        }).format(value),
    ),
  )
