import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FullWidthCard } from "./FullWidthCard";

const meta = {
  title: "molecule/FullWidthCard",
  component: FullWidthCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof FullWidthCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullwidthCard: Story = {};
