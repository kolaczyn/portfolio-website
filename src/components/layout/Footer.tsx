import AppLink from "../common/AppLink";
import ContainerBig from "../container/ContainerBig";
import { AiFillGithub as GithubIcon } from "react-icons/ai";
import { AiOutlineMail as MailIcon } from "react-icons/ai";
import { FiTwitter as TwitterIcon } from "react-icons/fi";
import AppExternalLink from "../common/AppExternalLink";

type Props = {};

const Footer: React.FC<Props> = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="bg-gray-800 h-1" />
      <ContainerBig className="bg-gray-900 py-2 flex">
        <div className="flex-1">
          <h4 className="uppercase font-bold">Sitemap</h4>
          <ul className="space-x-3">
            <AppLink to="/about-me">about me</AppLink>
            <AppLink to="/projects">projects</AppLink>
            <AppLink to="/light-mode">dark mode</AppLink>
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="uppercase font-bold">Links</h4>
          <ul className="space-x-3">
            <AppExternalLink to="https://github.com/kolaczyn">
              <div className="flex items-center space-x-1">
                <GithubIcon />
                <span>github</span>
              </div>
            </AppExternalLink>
            <AppExternalLink to="mailto:kolaczyn@protonmail.com">
              <div className="flex items-center space-x-1">
                <MailIcon />
                <span>mail</span>
              </div>
            </AppExternalLink>
            <AppExternalLink to="https://twitter.com/kolaczyn">
              <div className="flex items-center space-x-1">
                <TwitterIcon />
                <span>twitter</span>
              </div>
            </AppExternalLink>
          </ul>
        </div>
      </ContainerBig>
      <div className="bg-gray-800 h-1" />
      <div className="bg-gray-900 flex justify-around">
        created by Paweł Kołaczyński &copy; {currentYear}
      </div>
    </footer>
  );
};

export default Footer;
