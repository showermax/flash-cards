import { Card } from './card.tsx'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const DarkCard: Story = {
  args: { children: 'Some text here', className: 'dark' },
}

export const LightCard: Story = {
  args: { children: 'Some text here', className: 'light' },
}
