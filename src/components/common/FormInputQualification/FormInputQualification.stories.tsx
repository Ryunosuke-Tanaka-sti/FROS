import { useFieldArray, useForm } from 'react-hook-form';

import { FormInputQualification } from './FormInputQualification';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/FormInputQualification',
  component: FormInputQualification,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormInputQualification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: function Comp({ ...args }) {
    type FormQualification = {
      qualification: { uid: string; expiryDate?: Date }[];
    };
    const { control, handleSubmit } = useForm<FormQualification>({
      defaultValues: {
        qualification: [],
      },
    });
    const { fields, append, remove } = useFieldArray({ name: 'qualification', control });

    return <meta.component {...args} control={control} name={'data'} rules={{}} />;
  },
};
