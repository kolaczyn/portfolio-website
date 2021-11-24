import ContainerBig from "../container/ContainerBig";

type Props = {};

const Footer: React.FC<Props> = () => {
  const currentYear = new Date().getFullYear();
  return (
    <ContainerBig className="bg-gray-800 py-2">
      <footer className="flex justify-around">
        created by Paweł Kołaczyński &copy; {currentYear}
      </footer>
    </ContainerBig>
  );
};

export default Footer;
