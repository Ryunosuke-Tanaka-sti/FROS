import { FormPersonalInfo } from "./FormPersonalInfo";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/FormPersonalInfo",
    component: FormPersonalInfo,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof FormPersonalInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
