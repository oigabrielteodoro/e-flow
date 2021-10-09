import React from 'react'
import { render, screen } from '@testing-library/react'

import { Sidebar } from '.'

describe('<Sidebar />', () => {
  it('should render correctly', () => {
    const { container } = render(<Sidebar />)

    expect(screen.getByAltText('Monetus Logo')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
