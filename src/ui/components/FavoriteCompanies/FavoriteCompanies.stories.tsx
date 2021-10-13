import { Story, Meta } from '@storybook/react/types-6-0'

import { FavoriteCompanies } from '.'

export default {
  title: 'FavoriteCompanies',
  component: FavoriteCompanies,
} as Meta

export const Basic: Story = () => (
  <div style={{ width: 400, background: '#fff' }}>
    <FavoriteCompanies />
  </div>
)
