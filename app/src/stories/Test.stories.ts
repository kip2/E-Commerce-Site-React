import type { Meta, StoryObj } from "@storybook/react";

import { Test } from "./Test";

// meta情報作成
const meta = {
    title: "Example/Test",
    component: Text,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TestIn: Story = { };