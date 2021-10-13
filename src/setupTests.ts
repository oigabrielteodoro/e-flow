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
