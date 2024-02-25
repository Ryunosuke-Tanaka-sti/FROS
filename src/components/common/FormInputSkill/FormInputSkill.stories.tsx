import { FormInputSkill } from "./FormInputSkill";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "common/FormInputSkill",
    component: FormInputSkill,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof FormInputSkill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
