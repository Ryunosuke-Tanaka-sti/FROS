import { UserSkill } from "./UserSkill";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/UserSkill",
    component: UserSkill,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof UserSkill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
