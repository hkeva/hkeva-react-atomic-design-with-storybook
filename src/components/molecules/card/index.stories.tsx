import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "components/atoms/button";
import finalizeIcon from "assets/icons/finalize.svg";
import { Card } from ".";

const meta = {
  title: "components/molecules/card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicCard: Story = {
  args: {
    title: "What is NodeJS?",
    createAt: "August 22 2023",
    lastModified: "September 23 2024",
  },
};

export const CardWithButton: Story = {
  args: {
    title: "What is NodeJS?",
    createAt: "August 22 2023",
    lastModified: "September 23 2024",
    button: (
      <Button
        backgroundColor="info"
        size="primarySize"
        color="white"
        onClick={() => {
          console.log("Hello there!");
        }}
        icon={finalizeIcon}
      >
        Finalize
      </Button>
    ),
  },
};
