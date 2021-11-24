import { ReactNode } from "react";
import { BiLinkExternal as LinkExternalIcon } from "react-icons/bi";

type Props = {
  children: ReactNode;
  to: string;
};

const AppExternalLink: React.FC<Props> = ({ children, to }) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className="space-x-1 items-center inline-flex hover:underline"
  >
    <span>{children}</span>
    <LinkExternalIcon />
  </a>
);

export default AppExternalLink;
