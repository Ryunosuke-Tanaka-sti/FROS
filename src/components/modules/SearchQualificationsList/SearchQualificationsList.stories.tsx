import { searchQualification } from '@/constant/dummy/searchData';

import { SearchQualificationsList } from './SearchQualificationsList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/SearchQualificationsList',
  component: SearchQualificationsList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SearchQualificationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    qualifications: searchQualification.qualifications,
  },
};
