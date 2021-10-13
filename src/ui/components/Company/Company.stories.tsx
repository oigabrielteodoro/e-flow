import { Story, Meta } from '@storybook/react/types-6-0'

import { Company, Props } from '.'

export default {
  title: 'Company',
  component: Company,
  args: {
    symbol: 'MSFT',
  },
  argTypes: {
    symbol: {
      type: 'string',
    },
    disableFavorite: {
      type: 'boolean',
    },
    as: {
      control: {
        type: 'select',
        options: ['li', 'div'],
      },
      defaultValue: 'div',
    },
  },
} as Meta

export const Basic: Story<Props> = (args) => (
  <div style={{ padding: 10, width: 302 }}>
    <Company {...args} />
  </div>
)
