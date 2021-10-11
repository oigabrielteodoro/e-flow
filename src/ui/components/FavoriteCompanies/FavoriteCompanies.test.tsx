import React from 'react'
import { render } from '@testing-library/react'

import { FavoriteCompanies } from '.'

describe('<FavoriteCompanies />', () => {
  it('should render correctly', async () => {
    const { container } = render(<FavoriteCompanies />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
