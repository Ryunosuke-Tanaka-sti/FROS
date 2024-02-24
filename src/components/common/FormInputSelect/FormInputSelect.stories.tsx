import { FormInputSelect } from "./FormInputSelect";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "common/FormInputSelect",
    component: FormInputSelect,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof FormInputSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
