import { selectUtility, utilityData } from '@/constant/dummy/utilityData';

import { FormUserManager } from './FormUserManager';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/FormUserManager',
  component: FormUserManager,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormUserManager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    manager: selectUtility,
    utilityManager: utilityData,
  },
};
