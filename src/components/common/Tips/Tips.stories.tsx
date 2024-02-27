import { Tips } from './Tips';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/Tips',
  component: Tips,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Tips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Tips',
  },
};
