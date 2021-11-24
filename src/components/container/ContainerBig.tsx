import { ReactNode } from "react";
import classNames from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
};

const ContainerBig: React.FC<Props> = ({ children, className }) => (
  <div className={classNames("px-4 w-full mx-auto", className)}>{children}</div>
);

ContainerBig.defaultProps = {
  className: "",
};

export default ContainerBig;
