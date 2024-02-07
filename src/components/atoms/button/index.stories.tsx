import type { Meta, StoryObj } from "@storybook/react";
import backIcon from "assets/icons/backIcon.svg";
import { Button } from ".";

const meta = {
  title: "components/atoms/button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    children: "Success",
    fontWeight: "bold",
    size: "primarySize",
    backgroundColor: "success",
    color: "white",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    fontWeight: "bold",
    size: "primarySize",
    backgroundColor: "warning",
    color: "white",
  },
};

export const Delete: Story = {
  args: {
    children: "Delete",
    fontWeight: "bold",
    size: "primarySize",
    backgroundColor: "danger",
    color: "white",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    fontWeight: "bold",
    size: "primarySize",
    backgroundColor: "light",
    color: "grey",
    isDisabled: true,
  },
};

export const Back: Story = {
  args: {
    children: "Back",
    fontWeight: "bold",
    size: "primarySize",
    backgroundColor: "dark",
    color: "white",
  },
};

export const Cancel: Story = {
  args: {
    children: "Cancel",
    fontWeight: "bold",
    size: "primarySize",
    backgroundColor: "light",
    color: "grey",
  },
};

export const SaveAndContinue: Story = {
  args: {
    children: "Save and Continue",
    fontWeight: "bold",
    size: "tertiarySize",
    backgroundColor: "info",
    color: "white",
  },
};

export const ButtonWthIcon: Story = {
  args: {
    children: "Back",
    fontWeight: "bold",
    size: "primarySize",
    backgroundColor: "dark",
    color: "white",
    icon: backIcon,
  },
};

export const FullWidthButton: Story = {
  args: {
    children: "Full width button",
    fontWeight: "bold",
    size: "fullWidth",
    backgroundColor: "info",
    color: "white",
  },
};
