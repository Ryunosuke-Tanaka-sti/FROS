import { UserQualificationInput } from "./UserQualificationInput";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/UserQualificationInput",
    component: UserQualificationInput,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof UserQualificationInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
