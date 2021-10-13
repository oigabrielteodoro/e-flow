import React from 'react'
import { fireEvent, screen, waitFor } from '@testing-library/react'

import { rest } from 'msw'

import { API_URL } from 'client'
import { render } from '__helpers__'
import { server } from '__helpers__/server'
import { companyRawMocked } from '__mocks__'

import { Company } from './Company'

server.use(
  rest.get(`${API_URL}/quote`, (_, response, context) =>
    response(
      context.status(200),
      context.json(companyRawMocked('Microsoft Corporation', 'MSFT')),
    ),
  ),
)

describe('<Company />', () => {
  it('should render correctly', async () => {
    render(<Company symbol='MSFT' />)

    await waitFor(() => expect(screen.getByText(/msft/i)).toBeInTheDocument())
  })

  it('should not be able favorite when "disableFavorite" prop is enabled', () => {
    render(<Company symbol='AAPL' disableFavorite />)

    expect(screen.queryByAltText(/icon star outline/i)).not.toBeInTheDocument()
  })

  it('should be able favorite company', async () => {
    render(<Company symbol='MSFT' />)

    expect(screen.getByAltText(/icon star outline/i)).toBeInTheDocument()

    const button = screen.getByRole('button')

    fireEvent.click(button)

    await waitFor(() =>
      expect(screen.getByAltText(/icon star/i)).toBeInTheDocument(),
    )
  })

  it('should not be able favorite company when already is favorited', async () => {
    render(<Company symbol='MSFT' />)

    expect(screen.getByAltText(/icon star/i)).toBeInTheDocument()

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(screen.getByAltText(/icon star/i)).toBeInTheDocument()
    expect(screen.queryByAltText(/icon star outline/i)).not.toBeInTheDocument()
  })

  it('should render error when response data is invalid', async () => {
    server.use(
      rest.get(`${API_URL}/quote`, (_, response, context) =>
        response(context.status(200), context.json({})),
      ),
    )

    render(<Company symbol='MSFT' />)

    await waitFor(() =>
      expect(
        screen.getByText(
          /os dados recebidos estão inválidos! tente novamente mais tarde.../i,
        ),
      ).toBeInTheDocument(),
    )
  })
})
