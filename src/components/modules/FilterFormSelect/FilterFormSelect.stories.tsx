import { FilterFormSelect } from "./FilterFormSelect";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/FilterFormSelect",
    component: FilterFormSelect,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof FilterFormSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
