import { useForm } from 'react-hook-form';

import { FormTextInput } from './FormTextInput';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/FormTextInput',
  component: FormTextInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'data',
  },
  render: function Comp({ ...args }) {
    const { control } = useForm<{ data: string }>({
      defaultValues: {
        data: '',
      },
    });
    return <meta.component {...args} control={control} name={'data'} rules={{}} />;
  },
};
