import { SearchSkillsTable } from "./SearchSkillsTable";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/SearchSkillsTable",
    component: SearchSkillsTable,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof SearchSkillsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    args : {
        
    },
};
