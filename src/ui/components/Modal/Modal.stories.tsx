import { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { theme } from 'ui/styles'

import { Modal } from '.'

export default {
  title: 'Modal',
  component: Modal,
} as Meta

export const Basic: Story = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        style={{
          color: '#fff',
          fontWeight: 500,
          background: theme.colors.blue[500],
          borderRadius: 5,
          border: 0,
          padding: 16,
          width: 300,
        }}
        onClick={() => setIsOpen(true)}
      >
        Open modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Conteúdo do modal</h1>
      </Modal>
    </div>
  )
}
