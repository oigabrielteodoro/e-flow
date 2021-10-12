import React from 'react'
import { screen, fireEvent, waitFor } from '@testing-library/react'

import { rest } from 'msw'

import { API_URL } from 'client'
import { render } from '__helpers__'
import { server } from '__helpers__/server'
import { companyRawMocked } from '__mocks__'

import { Content } from '.'

server.use(
  rest.get(`${API_URL}/stock/MSFT/quote`, (_, response, context) =>
    response(context.json(companyRawMocked)),
  ),
  rest.get(`${API_URL}/stock/MSFT/chart`, (_, response, context) =>
    response(context.json(companyRawMocked)),
  ),
)

describe('<Content />', () => {
  it('should be able search new company', async () => {
    render(<Content />)

    const input = screen.getByPlaceholderText(/buscar empresa/i)
    const button = screen.getByLabelText('search button')

    fireEvent.change(input, { target: { value: 'MSFT' } })

    fireEvent.submit(button)

    await waitFor(() =>
      expect(screen.getByText('Microsoft Corporation')).toBeInTheDocument(),
    )
  })

  it('should render correctly', () => {
    const { container } = render(<Content />)

    expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
