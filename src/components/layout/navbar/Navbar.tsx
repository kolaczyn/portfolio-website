import Logo from "./Logo";

type Props = {};

const Navbar: React.FC<Props> = () => (
  <header className="bg-gray-800 flex justify-between py-2">
    <Logo />
    <nav>
      <ul className="flex space-x-4">
        <li>about me</li>
        <li>projects</li>
        <li>light mode</li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
