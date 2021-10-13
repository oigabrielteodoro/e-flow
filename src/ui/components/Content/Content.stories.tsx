import { Story, Meta } from '@storybook/react/types-6-0'

import { Content } from '.'

export default {
  title: 'Content',
  component: Content,
} as Meta

export const Basic: Story = () => <Content />
