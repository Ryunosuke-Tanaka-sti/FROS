import { userData } from '@/constant/dummy/userData';

import { UserPersonalInfo } from './UserPersonalInfo';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/UserPersonalInfo',
  component: UserPersonalInfo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserPersonalInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    personalInfo: userData.personalInfo,
  },
};
