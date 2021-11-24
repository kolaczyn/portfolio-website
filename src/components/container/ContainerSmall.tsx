import { ReactNode } from "react";
import classNames from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
};

const ContainerBig: React.FC<Props> = ({ children, className }) => (
  <div className={classNames("max-w-md mx-auto", className)}>{children}</div>
);

ContainerBig.defaultProps = {
  className: "",
};

export default ContainerBig;
