import AppButton from "../../../common/AppButton";
import ContainerMedium from "../../../container/ContainerMedium";

type Props = {};

const AboutMe: React.FC<Props> = () => (
  <ContainerMedium>
    <h1>home about me</h1>
    <div className="space-x-2">
      <AppButton>Read more</AppButton>
      <AppButton type="secondary">Projects</AppButton>
    </div>
  </ContainerMedium>
);

export default AboutMe;
