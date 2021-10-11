import { pipe } from 'fp-ts/function'
import { fromEither } from 'fp-ts/TaskEither'

import { getErrorMessage, mapAll } from '__helpers__'

import { symbolCodec } from 'types'

describe('symbol', () => {
  it('should validate if string is symbol', async () => {
    return pipe(
      'APLE',
      symbolCodec.decode,
      fromEither,
      mapAll((result) => expect(result).toBe('APLE')),
    )()
  })

  it('should return error when number is negative', async () => {
    return pipe(
      'AAPPLE',
      symbolCodec.decode,
      fromEither,
      mapAll((errors) =>
        expect(getErrorMessage(errors)).toBe('Invalid symbol'),
      ),
    )()
  })
})
