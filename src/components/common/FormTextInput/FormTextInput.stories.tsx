import { FormTextInput } from "./FormTextInput";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "common/FormTextInput",
    component: FormTextInput,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof FormTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
