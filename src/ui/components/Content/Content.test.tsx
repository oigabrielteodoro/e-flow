import React from 'react'
import { render, screen } from '@testing-library/react'

import { Content } from '.'

describe('<Content />', () => {
  it('should render correctly', () => {
    const { container } = render(<Content />)

    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
