import AppLink from "../../common/AppLink";
import Logo from "./Logo";

type Props = {};

const Navbar: React.FC<Props> = () => (
  <header className="bg-gray-800 flex justify-between py-2">
    <Logo />
    <nav>
      <ul className="flex space-x-4">
        <AppLink to="/about-me">about me</AppLink>
        <AppLink to="/projects">projects</AppLink>
        <AppLink to="/light-mode">dark mode</AppLink>
      </ul>
    </nav>
  </header>
);

export default Navbar;
