import type { NextPage } from "next";
import ContainerMedium from "../components/container/ContainerMedium";
import ContainerSmall from "../components/container/ContainerSmall";
import GeneralLayout from "../components/layout/GeneralLayout";

const Home: NextPage = () => {
  return (
    <GeneralLayout>
      <ContainerMedium>
        <h1>hello world</h1>
      </ContainerMedium>
      <ContainerSmall>
        <h1>hello world</h1>
      </ContainerSmall>
    </GeneralLayout>
  );
};

export default Home;
