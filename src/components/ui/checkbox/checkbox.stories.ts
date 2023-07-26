import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './checkbox.tsx'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: false,
  },
}
export const Checked: Story = {
  args: {
    checked: true,
  },
}
