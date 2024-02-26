import { UserManager } from "./UserManager";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/UserManager",
    component: UserManager,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof UserManager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
