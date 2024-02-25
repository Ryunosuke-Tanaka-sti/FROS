import { UserSkillInput } from "./UserSkillInput";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/UserSkillInput",
    component: UserSkillInput,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof UserSkillInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
