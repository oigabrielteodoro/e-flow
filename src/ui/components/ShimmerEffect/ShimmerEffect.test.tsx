import React from 'react'
import { render, screen } from '@testing-library/react'

import { ShimmerEffect } from './ShimmerEffect'

describe('<ShimmerEffect />', () => {
  it('should render correctly', () => {
    const { container } = render(<ShimmerEffect isLoading />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render when isLoading is false', () => {
    render(<ShimmerEffect isLoading={false}>Example</ShimmerEffect>)

    expect(screen.getByText(/example/i)).toBeInTheDocument()
  })
})
