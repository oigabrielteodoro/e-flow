import axios from 'axios'

import { pipe } from 'fp-ts/function'
import { toError } from 'fp-ts/Either'
import { tryCatch, map } from 'fp-ts/TaskEither'

const TOKEN = 'sk_894a767cfbde4e4cbfd94fd20094a042'

export const api = axios.create({
  baseURL: 'https://cloud.iexapis.com/stable',
  params: {
    token: TOKEN,
  },
})

export const get = async <T>(url: string) => {
  return pipe(
    tryCatch(() => axios.get<T>(url), toError),
    map((response) => response.data),
  )
}
