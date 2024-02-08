import { Input } from "components/atoms/input";
import { Text } from "components/atoms/text";
import "./index.scss";

export interface InputWithErrorHandleProps {
  errorMessage: string;
  errorMsgHasBG: boolean;
}

export const InputWithErrorHandle: React.FC<InputWithErrorHandleProps> = ({
  errorMessage,
  errorMsgHasBG,
}) => {
  return (
    <div className="m-inputWithErrorHandle">
      <Input placeholder="Enter first name" setValue={() => {}} />
      <Text
        color={errorMsgHasBG ? "white" : "cinnabar"}
        fontSize="14"
        {...(errorMsgHasBG ? { hasBG: "error" } : {})}
      >
        {errorMessage}
      </Text>
    </div>
  );
};
