import React from 'react'
import { screen } from '@testing-library/react'

import { render } from '__helpers__'

import { Content } from '.'

describe('<Content />', () => {
  it('should render correctly', () => {
    const { container } = render(<Content />)

    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
