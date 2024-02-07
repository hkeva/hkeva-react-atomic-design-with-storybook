import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta = {
  title: "components/atoms/Text",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    children: "Text sample one",
    fontSize: "18",
  },
};

export const Small: Story = {
  args: {
    children: "Text sample two",
    fontSize: "14",
  },
};

export const Bold: Story = {
  args: {
    children: "Text sample three",
    fontSize: "18",
    fontWeight: "bold",
  },
};

export const Grey: Story = {
  args: {
    children: "Text sample four",
    fontSize: "16",
    fontWeight: "bold",
    color: "carbon-grey",
  },
};

export const Success: Story = {
  args: {
    children: "Text sample five",
    fontSize: "16",
    fontWeight: "bold",
    color: "green",
  },
};

export const Error: Story = {
  args: {
    children: "Text sample six",
    fontSize: "16",
    fontWeight: "bold",
    color: "cinnabar",
  },
};

export const SuccessBackground: Story = {
  args: {
    children: "Text sample seven",
    fontSize: "18",
    fontWeight: "bold",
    color: "white",
    hasBG: "success",
  },
};

export const ErrorBackground: Story = {
  args: {
    children: "Text sample seven",
    fontSize: "18",
    fontWeight: "bold",
    color: "white",
    hasBG: "error",
  },
};
