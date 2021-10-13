import React from 'react'
import { mocked } from 'ts-jest/utils'
import { useSelector } from 'react-redux'
import { fireEvent, screen, waitFor } from '@testing-library/dom'

import { rest } from 'msw'

import { API_URL } from 'client'
import { render } from '__helpers__'
import { server } from '__helpers__/server'
import { companyRawMocked } from '__mocks__'

import { FavoriteCompanies } from '.'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}))

describe('<FavoriteCompanies />', () => {
  const useSelectorMocked = mocked(useSelector)

  beforeEach(() => {
    useSelectorMocked.mockReturnValue(['MSFT'])

    server.use(
      rest.get(`${API_URL}/quote`, (_, response, context) =>
        response(
          context.json(companyRawMocked('Microsoft Corporation', 'MSFT')),
        ),
      ),
    )
  })

  it('should render correctly', async () => {
    const { container } = render(<FavoriteCompanies />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be able delete company from favorite list', async () => {
    render(<FavoriteCompanies />)

    await waitFor(() => expect(screen.getByText(/msft/i)).toBeInTheDocument())

    const button = screen.getByLabelText(/delete button/i)

    fireEvent.click(button)

    await waitFor(() =>
      expect(
        screen.getByText(/tem certeza que deseja excluir essa empresa?/i),
      ).toBeInTheDocument(),
    )

    const deleteButton = screen.getByRole('button', {
      name: /sim, excluir!/i,
    })

    fireEvent.click(deleteButton)

    await waitFor(() =>
      expect(
        screen.getByText(/empresa removida dos favoritos!/i),
      ).toBeInTheDocument(),
    )
  })
})
