import { Story, Meta } from '@storybook/react/types-6-0'

import { Sidebar } from '.'

export default {
  title: 'Sidebar',
  component: Sidebar,
} as Meta

export const Basic: Story = () => <Sidebar />
