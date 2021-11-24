import AppButton from "../../../common/AppButton";
import ContainerMedium from "../../../container/ContainerMedium";

type Props = {};

const AboutMe: React.FC<Props> = () => (
  <div className="bg-gray-800 py-6">
    <ContainerMedium className="space-y-2">
      <h1 className="font-bold text-3xl">Hi, I&lsquo;m Paweł</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iure
        soluta magni esse blanditiis temporibus maiores totam tempore, deserunt
        deleniti.
      </div>
      <div className="space-x-2">
        <AppButton>Read more</AppButton>
        <AppButton type="secondary">Projects</AppButton>
      </div>
    </ContainerMedium>
  </div>
);

export default AboutMe;
