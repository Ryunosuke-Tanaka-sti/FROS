import { UserPersonalInput } from "./UserPersonalInput";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/UserPersonalInput",
    component: UserPersonalInput,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof UserPersonalInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
