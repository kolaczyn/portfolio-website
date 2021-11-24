import { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

type Props = {
  children: ReactNode;
};

const GeneralLayout: React.FC<Props> = ({ children }) => (
  <div className="bg-gray-900 text-white min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-1 py-4">{children}</div>
    <Footer />
  </div>
);

export default GeneralLayout;
