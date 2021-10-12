import { setupServer } from 'msw/node'
import { queryCache } from 'client'

export const server = setupServer()

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  queryCache.clear()
})
afterAll(() => server.close())
