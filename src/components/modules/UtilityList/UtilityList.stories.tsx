import { utilityData } from '@/constant/dummy/utilityData';

import { UtilityList } from './UtilityList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/UtilityList',
  component: UtilityList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UtilityList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    utilityData: utilityData,
  },
};
