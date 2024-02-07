import "./index.scss";

export interface TextProps {
  children: React.ReactNode;
  isRequired?: boolean;
  fontSize?: "12" | "13" | "14" | "16" | "18" | "20";
  fontWeight?: "bold" | "regular" | "medium" | "semi-bold";
  fontStyle?: "italic";
  textAlign?: "center" | "left" | "right";
  color?:
    | "white"
    | "green"
    | "primary"
    | "cinnabar"
    | "black-cow"
    | "carbon-grey";
  hasBG?: "success" | "error";
}

export const Text: React.FC<TextProps> = ({
  children,
  isRequired,
  fontSize,
  fontWeight,
  fontStyle,
  textAlign,
  color,
  hasBG,
}) => {
  const className = `a-text ${fontSize && `a-text--${fontSize}`} ${
    fontWeight && `a-text--${fontWeight}`
  } ${fontStyle && `a-text--${fontStyle}`} ${
    textAlign && `a-text--${textAlign}`
  } ${color && `a-text--${color}`} ${
    hasBG && `a-text--${hasBG} a-text--background`
  }`;

  return (
    <p className={className}>
      {children} {isRequired && <span className="a-text__required">*</span>}
    </p>
  );
};
