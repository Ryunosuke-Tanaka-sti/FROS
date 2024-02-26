import { Logo } from "./Logo";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "common/Logo",
    component: Logo,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
