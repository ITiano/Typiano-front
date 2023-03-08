import PageLayout from "components/layout/PageLayout";
import ModalContainer from "components/utils/ModalContainer";
import LandingContainer from "../containers/landing/Landing";

const Landing = () => {
  return (
    <PageLayout className="!pt-0">
      <LandingContainer />
    </PageLayout>
  );
};

export default Landing;
