import { UtilitiesInput } from "./UtilitiesInput";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/UtilitiesInput",
    component: UtilitiesInput,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof UtilitiesInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
