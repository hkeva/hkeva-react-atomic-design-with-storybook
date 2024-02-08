import { Text } from "components/atoms/text/index";
import "./index.scss";

export interface CardProps {
  title: string;
  createAt: string;
  lastModified: string;
  button?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  createAt,
  lastModified,
  button,
}) => {
  return (
    <div className="m-card">
      <div className="m-card__title">
        <Text fontSize="20" fontWeight="bold" color="primary">
          Question:
        </Text>
        <Text fontSize="20" fontWeight="bold" color="black-cow">
          {title}
        </Text>
      </div>
      <div className="m-card__date">
        <Text fontSize="14" color="carbon-grey" fontStyle="italic">
          Created: {createAt}
        </Text>
        <Text fontSize="14" color="carbon-grey" fontStyle="italic">
          Last modified: {lastModified}
        </Text>
      </div>
      {button}
    </div>
  );
};
