import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {};

const GeneralLayout: React.FC<Props> = () => (
  <>
    <Navbar />
    <div>this is body</div>
    <Footer />
  </>
);

export default GeneralLayout;
