import React from 'react'
import { render } from '@testing-library/react'
import { Company } from './Company'

describe('<Company />', () => {
  it('should render correctly', () => {
    const { container } = render(<Company />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
