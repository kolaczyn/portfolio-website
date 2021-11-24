import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {};

const GeneralLayout: React.FC<Props> = () => (
  <div className="bg-gray-900 text-white">
    <Navbar />
    <div>this is body</div>
    <Footer />
  </div>
);

export default GeneralLayout;
