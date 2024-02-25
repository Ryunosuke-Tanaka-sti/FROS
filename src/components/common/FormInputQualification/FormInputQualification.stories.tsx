import { FormInputQualification } from "./FormInputQualification";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "common/FormInputQualification",
    component: FormInputQualification,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof FormInputQualification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
