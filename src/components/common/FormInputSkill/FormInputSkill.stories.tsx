import { useForm } from 'react-hook-form';

import { FormInputSkill } from './FormInputSkill';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/FormInputSkill',
  component: FormInputSkill,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormInputSkill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'data',
  },
  render: function Comp({ ...args }) {
    const { control } = useForm<{ data: number }>({
      defaultValues: {
        data: 0,
      },
    });
    return <meta.component {...args} control={control} name={'data'} rules={{}} />;
  },
};
