import type { Meta, StoryObj } from "@storybook/react";
import { Form } from ".";

const meta = {
  title: "components/organism/Form",
  component: Form,
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicForm: Story = {
  args: {},
};
