import type { Meta, StoryObj } from "@storybook/react";
import { InputWithErrorHandle } from ".";

const meta = {
  title: "components/molecules/InputWithErrorHandle",
  component: InputWithErrorHandle,
  tags: ["autodocs"],
} satisfies Meta<typeof InputWithErrorHandle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputWithErrorHandleExampleOne: Story = {
  args: {
    errorMessage: "This field is required!",
    errorMsgHasBG: false,
  },
};

export const InputWithErrorHandleExampleTwo: Story = {
  args: {
    errorMessage: "This field is required!",
    errorMsgHasBG: true,
  },
};
