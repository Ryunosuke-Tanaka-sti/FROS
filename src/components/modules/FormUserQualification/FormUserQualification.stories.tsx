import { selectQualification, utilityData } from '@/constant/dummy/utilityData';

import { FormQualification } from './FormUserQualification';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/FormQualification',
  component: FormQualification,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormQualification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    qualification: selectQualification,
    utilityQualification: utilityData,
  },
};
