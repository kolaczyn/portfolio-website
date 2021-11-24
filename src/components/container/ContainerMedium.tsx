import { ReactNode } from "react";
import classNames from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
};

const ContainerMedium: React.FC<Props> = ({ children, className }) => (
  <div className={classNames("max-w-3xl mx-auto", className)}>{children}</div>
);

ContainerMedium.defaultProps = {
  className: "",
};

export default ContainerMedium;
