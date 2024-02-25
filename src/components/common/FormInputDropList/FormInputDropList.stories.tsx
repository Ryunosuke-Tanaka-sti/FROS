import { FormInputDropList } from "./FormInputDropList";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "common/FormInputDropList",
    component: FormInputDropList,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof FormInputDropList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
