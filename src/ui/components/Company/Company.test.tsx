import React from 'react'
import { render } from '__helpers__'

import { Company } from './Company'

describe('<Company />', () => {
  it('should render correctly', () => {
    const { container } = render(<Company symbol='MSFT' />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
