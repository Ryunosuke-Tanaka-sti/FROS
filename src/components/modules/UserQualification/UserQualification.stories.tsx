import { userData } from '@/constant/dummy/userData';

import { UserQualification } from './UserQualification';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/UserQualification',
  component: UserQualification,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserQualification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    qualification: userData.qualification,
  },
};
