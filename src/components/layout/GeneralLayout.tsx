import { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

type Props = {
  children: ReactNode;
};

const GeneralLayout: React.FC<Props> = ({ children }) => (
  <div className="bg-gray-900 text-white min-h-screen">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default GeneralLayout;
