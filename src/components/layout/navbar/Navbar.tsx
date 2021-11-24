import AppLink from "../../common/AppLink";
import ContainerBig from "../../container/ContainerBig";
import Logo from "./Logo";

type Props = {};

const Navbar: React.FC<Props> = () => (
  <ContainerBig className="bg-gray-800 py-2">
    <header className="flex justify-between">
      <Logo />
      <nav>
        <ul className="flex space-x-4">
          <AppLink to="/about-me">about me</AppLink>
          <AppLink to="/projects">projects</AppLink>
          <AppLink to="/light-mode">dark mode</AppLink>
        </ul>
      </nav>
    </header>
  </ContainerBig>
);

export default Navbar;
