import { useForm } from 'react-hook-form';

import { utilityData } from '@/constant/dummy/utilityData';

import { FormInputDropList } from './FormInputDropList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/FormInputDropList',
  component: FormInputDropList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormInputDropList>;

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
