import { UtilityMenu } from "./UtilityMenu";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/UtilityMenu",
    component: UtilityMenu,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof UtilityMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
