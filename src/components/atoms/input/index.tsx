import { ChangeEvent, useEffect, useState } from "react";
import eyeOnIcon from "assets/icons/eyeOnIcon.svg";
import eyeOffIcon from "assets/icons/eyeOffIcon.svg";
import "./index.scss";

export interface InputProps {
  icon?: string;
  placeholder: string;
  value?: string;
  type?: "password" | "number" | "email";
  setValue: (val: string) => void;
  isDisabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  icon,
  placeholder,
  value,
  type,
  setValue,
  isDisabled,
}) => {
  const [data, setData] = useState<string>();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const defineInputType: "text" | "password" | "number" | "email" =
    type === "password"
      ? isPasswordVisible
        ? "text"
        : "password"
      : type === "number"
      ? "number"
      : type === "email"
      ? "email"
      : "text";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e?.target;
    if (type === "password") {
      setValue?.(value.trim());
      setData(value.trim());
    } else {
      setValue?.(value);
      setData(value);
    }
  };

  const togglePasswordVisibility = () =>
    setIsPasswordVisible((isPasswordVisible: boolean) => !isPasswordVisible);

  useEffect(() => {
    setData(value);
  }, [value]);

  const className = `a-input ${isDisabled && `a-input--disabled`}`;

  return (
    <>
      <div className={className}>
        {icon && <img src={icon} alt="icon" />}
        <input
          className="a-input__input"
          type={defineInputType && defineInputType}
          placeholder={placeholder}
          value={data}
          onChange={handleChange}
          disabled={isDisabled}
        />
        {type == "password" && (
          <div onClick={togglePasswordVisibility}>
            <img src={isPasswordVisible ? eyeOnIcon : eyeOffIcon} alt="icon" />
          </div>
        )}
      </div>
    </>
  );
};
