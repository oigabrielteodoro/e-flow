import { NextApiRequest, NextApiResponse } from 'next'

import { pipe } from 'fp-ts/function'
import { toError } from 'fp-ts/Either'
import { tryCatch, map, mapLeft } from 'fp-ts/TaskEither'

import nextConnect from 'next-connect'

import { cloudApi } from 'client'

const router = nextConnect({
  onNoMatch: (request: NextApiRequest, response: NextApiResponse) => {
    return response.status(404).send(`Method '${request.method}' Not Allowed`)
  },
})

router.get(async (request: NextApiRequest, response: NextApiResponse) => {
  const { symbol } = request.query

  return pipe(
    tryCatch(() => cloudApi.get(`/stock/${symbol}/quote`), toError),
    map(({ data }) => response.json(data)),
    mapLeft(({ message }) => response.status(404).send(message)),
  )()
})

export default router
