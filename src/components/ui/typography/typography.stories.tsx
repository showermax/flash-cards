import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './index.ts'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

const content = 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH'
export const Large: Story = {
  args: {
    variant: 'large',
    children: content,
  },
}
export const H1: Story = {
  args: {
    variant: 'h1',
    children: content,
  },
}
export const H2: Story = {
  args: {
    variant: 'h2',
    children: content,
  },
}
export const H3: Story = {
  args: {
    variant: 'h3',
    children: content,
  },
}
export const Body1: Story = {
  args: {
    variant: 'body1',
    children: content,
  },
}
export const Body2: Story = {
  args: {
    variant: 'body2',
    children: content,
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: content,
  },
}
export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: content,
  },
}

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: content,
  },
}
export const OverLine: Story = {
  args: {
    variant: 'overline',
    children: content,
  },
}
export const Link1: Story = {
  args: {
    variant: 'link1',
    children: content,
  },
}
export const Link2: Story = {
  args: {
    variant: 'link2',
    children: content,
  },
}
