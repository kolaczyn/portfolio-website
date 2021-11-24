import GeneralLayout from "../../layout/GeneralLayout";
import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import ProjectsOverview from "./components/ProjectsOverviewe";

type Props = {};

const HomePage: React.FC<Props> = () => (
  <GeneralLayout>
    <HeroSection />
    <AboutMe />
    <ProjectsOverview />
  </GeneralLayout>
);

export default HomePage;
