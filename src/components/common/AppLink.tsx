import { ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
  to: string;
};

const AppLink: React.FC<Props> = ({ children, to }) => (
  <Link href={to}>
    <a className="hover:underline">{children}</a>
  </Link>
);

export default AppLink;
