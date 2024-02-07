import "./index.scss";

export interface ButtonProps {
  children: React.ReactNode;
  fontWeight?: "regular" | "medium" | "semiBold" | "bold";
  size: "primarySize" | "secondarySize" | "tertiarySize" | "fullWidth";
  backgroundColor: "success" | "warning" | "danger" | "light" | "dark" | "info";
  color: "white" | "black" | "grey" | "primary" | "clearBlue";
  isDisabled?: boolean;
  isForm?: boolean;
  icon?: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  color,
  fontWeight,
  size,
  isDisabled,
  isForm,
  icon,
  onClick,
}) => {
  const className = `a-button 
  ${color && `a-button--${color}`}
  ${backgroundColor && `a-button--${backgroundColor}`}
  ${fontWeight && `a-button--${fontWeight}`}
  ${size && `a-button--${size}`}`;

  return (
    <button
      type={isForm ? "submit" : "button"}
      className={className}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon && <img src={icon} alt="button icon" />}
      {children}
    </button>
  );
};
