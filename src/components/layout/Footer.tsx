import AppLink from "../common/AppLink";
import ContainerMedium from "../container/ContainerMedium";
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
      <ContainerMedium className="bg-gray-900 flex space-x-28 py-4">
        <div className="flex-1">
          <h4 className="uppercase font-bold text-center mb-2">Sitemap</h4>
          <ul className="space-x-3 flex justify-between">
            <AppLink to="/about-me">about me</AppLink>
            <AppLink to="/projects">projects</AppLink>
            <AppLink to="/light-mode">dark mode</AppLink>
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="uppercase font-bold text-center mb-2">Links</h4>
          <ul className="space-x-3 flex justify-between">
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
      </ContainerMedium>
      <div className="bg-gray-800 h-1" />
      <div className="bg-gray-900 flex justify-around py-4">
        created by Paweł Kołaczyński &copy; {currentYear}
      </div>
    </footer>
  );
};

export default Footer;
