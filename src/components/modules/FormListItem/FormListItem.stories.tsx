import { FormListItem } from "./FormListItem";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/FormListItem",
    component: FormListItem,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof FormListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
