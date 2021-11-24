import classNames from "classnames";
import { ReactNode } from "react";

type ButtonType = "primary" | "secondary";

type Props = {
  children: ReactNode;
  onClick?: () => any;
  type?: ButtonType;
};

const PRIMARY_COLORS =
  "bg-blue-400 hover:bg-blue-300 border-blue-400 hover:border-blue-300 text-gray-900";
const SECONDARY_COLORS =
  "bg-transparent border-blue-400 hover:border-blue-300 text-blue-400 hover:text-blue-300";

const typeToColors: Record<ButtonType, string> = {
  primary: PRIMARY_COLORS,
  secondary: SECONDARY_COLORS,
};

const AppButton: React.FC<Props> = ({
  children,
  onClick,
  type = "primary",
}) => (
  <button
    className={classNames(
      "transition-colors uppercase px-3 py-1 rounded font-bold text-lg border-4",
      typeToColors[type]
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

AppButton.defaultProps = {
  onClick: () => {},
};

export default AppButton;
