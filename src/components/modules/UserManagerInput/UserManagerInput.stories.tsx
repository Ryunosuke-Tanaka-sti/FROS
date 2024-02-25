import { UserManagerInput } from "./UserManagerInput";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/UserManagerInput",
    component: UserManagerInput,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof UserManagerInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
