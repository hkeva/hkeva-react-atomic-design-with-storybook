import { Button } from "components/atoms/button";
import { Input } from "components/atoms/input";
import { Card } from "components/molecules/card";
import "./index.scss";

export interface FormProps {}

export const Form: React.FC<FormProps> = ({}) => {
  return (
    <div className="o-form">
      <Card
        title="What is 2+3?"
        createAt="August 22 2023"
        lastModified="September 23 2024"
      />
      <div className="o-form__inputsAndButton">
        <Input placeholder="Enter first name" setValue={() => {}} />
        <Input placeholder="Enter last name" setValue={() => {}} />
        <Input placeholder="Enter email" setValue={() => {}} />
        <Input placeholder="Enter your answer" setValue={() => {}} />

        <Button
          size="primarySize"
          backgroundColor="info"
          color="white"
          onClick={() => {}}
          isForm
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
