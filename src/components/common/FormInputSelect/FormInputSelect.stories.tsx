import { useForm } from 'react-hook-form';

import { utilityData } from '@/constant/dummy/utilityData';

import { FormInputSelect } from './FormInputSelect';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/FormInputSelect',
  component: FormInputSelect,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormInputSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'data',
    utilityData: utilityData,
  },
  render: function Comp({ ...args }) {
    const { control } = useForm<{ data: string[] }>({
      defaultValues: {
        data: [],
      },
    });
    return <meta.component {...args} control={control} name={'data'} rules={{}} />;
  },
};
