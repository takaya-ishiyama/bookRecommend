import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta = {
  title: "atom/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
