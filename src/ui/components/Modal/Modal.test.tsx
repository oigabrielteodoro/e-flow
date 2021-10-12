import { render, screen, waitFor, fireEvent } from '@testing-library/react'

import { Modal } from '.'

const MockedComponent = () => <p>Modal</p>

describe('<Modal />', () => {
  const mockedOnClose = jest.fn()

  beforeEach(() => {
    render(
      <Modal isOpen={true} onClose={mockedOnClose}>
        <MockedComponent />
      </Modal>,
    )
  })
  afterEach(() => mockedOnClose.mockClear())

  it('should render correctly', () => {
    expect(screen.getByText(/Modal/i)).toBeInTheDocument()
  })

  it('should close Modal when close button is clicked', async () => {
    const closeBtn = screen.getByLabelText('close button')

    await waitFor(() => {
      expect(mockedOnClose).not.toHaveBeenCalled()
    })

    fireEvent.click(closeBtn)

    await waitFor(() => {
      expect(mockedOnClose).toHaveBeenCalledTimes(1)
    })
  })
})
