import { Story, Meta } from '@storybook/react/types-6-0'

import { ShimmerEffect } from '.'

export default {
  title: 'ShimmerEffect',
  component: ShimmerEffect,
} as Meta

export const Basic: Story = () => (
  <div style={{ display: 'grid', gap: 10, padding: 10, background: '#fff' }}>
    <ShimmerEffect width='10rem' />
    <ShimmerEffect width='20rem' />
    <ShimmerEffect width='5rem' />
    <ShimmerEffect width='15rem' />
    <ShimmerEffect width='25rem' />
    <ShimmerEffect width='40rem' height='20rem' />
  </div>
)
