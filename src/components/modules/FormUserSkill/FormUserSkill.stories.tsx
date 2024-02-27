import { selectSkill, utilityData } from '@/constant/dummy/utilityData';

import { FormUserSkill } from './FormUserSkill';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/FormUserSkill',
  component: FormUserSkill,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormUserSkill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    skill: selectSkill,
    utilitySkill: utilityData,
  },
};
