import React from 'react'
import { screen, fireEvent, waitFor } from '@testing-library/react'

import { rest } from 'msw'

import { API_URL } from 'client'
import { render } from '__helpers__'
import { server } from '__helpers__/server'
import { companyPriceHistoryRawMocked, companyRawMocked } from '__mocks__'

import { Content } from '.'

describe('<Content />', () => {
  beforeEach(() => {
    server.use(
      rest.get(`${API_URL}/quote`, (request, response, context) => {
        const symbol = request.url.searchParams.get('symbol')

        const data =
          symbol === 'MSFT'
            ? companyRawMocked('Microsoft Corporation', 'MSFT')
            : companyRawMocked('Apple Inc', 'AAPL')

        return response(context.json(data))
      }),
      rest.get(`${API_URL}/chart`, (_, response, context) =>
        response(context.json(companyPriceHistoryRawMocked)),
      ),
      rest.get(`${API_URL}/chart`, (_, response, context) =>
        response(context.json(companyPriceHistoryRawMocked)),
      ),
    )
  })

  it('should render correctly', () => {
    const { container } = render(<Content />)

    expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be able search new company', async () => {
    render(<Content />)

    const input = screen.getByPlaceholderText(/buscar empresa/i)
    const button = screen.getByLabelText('search button')

    fireEvent.change(input, { target: { value: 'MSFT' } })

    fireEvent.submit(button)

    await waitFor(() =>
      expect(screen.getByText(/microsoft corporation/i)).toBeInTheDocument(),
    )
  })

  it('should be able inspect storaged company', async () => {
    render(<Content />)

    const input = screen.getByPlaceholderText(/buscar empresa/i)
    const button = screen.getByLabelText('search button')

    fireEvent.change(input, { target: { value: 'AAPL' } })
    fireEvent.submit(button)

    await waitFor(() =>
      expect(screen.getByText(/apple inc/i)).toBeInTheDocument(),
    )

    const logo = screen.getByAltText('MSFT')

    fireEvent.click(logo)

    await waitFor(() =>
      expect(screen.getByText(/microsoft corporation/i)).toBeInTheDocument(),
    )
  })

  it('should be able favorite actual company', async () => {
    render(<Content />)

    expect(screen.getByLabelText(/icon star outline/i)).toBeInTheDocument()

    const button = screen.getByLabelText(/favorite button/i)

    fireEvent.click(button)

    await waitFor(() =>
      expect(screen.getByLabelText(/icon star/i)).toBeInTheDocument(),
    )
  })
})
