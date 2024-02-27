import { MenuItem } from './MenuItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    text: 'Menu Item',
    active: true,
  },
};

export const NonActive: Story = {
  args: {
    text: 'Menu Item',
    active: false,
  },
};
