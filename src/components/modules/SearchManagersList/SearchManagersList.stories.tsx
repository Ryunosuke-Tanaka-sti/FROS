import { SearchManagersList } from "./SearchManagersList";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/SearchManagersList",
    component: SearchManagersList,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof SearchManagersList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
