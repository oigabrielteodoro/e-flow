import '@testing-library/jest-dom'
import 'jest-styled-components'
import { setLogger } from 'react-query'

beforeAll(() =>
  setLogger({
    log: () => {},
    warn: () => {},
    error: () => {},
  }),
)

afterAll(() => setLogger(window.console))

process.env = Object.assign(process.env, {
  NEXT_PUBLIC_API_URL: 'http://localhost:3000/api',
  NEXT_PUBLIC_CLOUD_API_URL: 'https://cloud.iexapis.com/stable',
})
