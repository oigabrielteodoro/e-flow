import { Story, Meta } from '@storybook/react/types-6-0'

import { ICON_STAR_OUTLINE } from 'assets'
import { Tooltip } from '.'

export default {
  title: 'Tooltip',
  component: Tooltip,
} as Meta

export const Basic: Story = () => {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <button
        style={{
          background: '#fff',
          borderRadius: 5,
          padding: 8,
          border: 0,
        }}
      >
        <Tooltip title='Adicionar aos favoritos'>
          <img src={ICON_STAR_OUTLINE} alt='Icon Star Outline' />
        </Tooltip>
      </button>
    </div>
  )
}
