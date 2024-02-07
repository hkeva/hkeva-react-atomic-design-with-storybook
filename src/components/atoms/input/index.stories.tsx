import type { Meta, StoryObj } from "@storybook/react";
import searchIcon from "assets/icons/search.svg";
import { Input } from ".";

const meta = {
  title: "components/atoms/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    placeholder: "Enter your name here",
  },
};

export const NumberInput: Story = {
  args: {
    placeholder: "Enter your name here",
    type: "number",
  },
};

export const InputWithValue: Story = {
  args: {
    placeholder: "Enter your name here",
    value: "Hello there!",
    setValue: (val: string) => {
      console.log(`Value changing to ${val}`);
    },
  },
};

export const SearchInput: Story = {
  args: {
    placeholder: "Search here",
    icon: searchIcon,
  },
};

export const Password: Story = {
  args: {
    placeholder: "Enter password here",
    type: "password",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    isDisabled: true,
  },
};
