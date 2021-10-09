import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import { Tooltip } from '.'

describe('<Tooltip />', () => {
  it('should render correctly', () => {
    const { container } = render(<Tooltip title='Example'>Hover me</Tooltip>)

    expect(screen.getByText('Example')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render tooltip on hover', async () => {
    render(<Tooltip title='Example'>Hover me</Tooltip>)

    const elementToHover = screen.getByText('Hover me')

    fireEvent.mouseEnter(elementToHover)

    await waitFor(() => expect(screen.getByText('Example')).toBeInTheDocument())
  })

  it('should render with variant chart', async () => {
    render(<Tooltip title='Example'>Hover me</Tooltip>)

    expect(screen.getByText('Example')).toBeInTheDocument()
  })
})
