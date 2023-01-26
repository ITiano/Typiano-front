import Footer from "components/common/Footer";
import TopNav from "components/common/TopNav";
import LandingContainer from "../containers/landing/Landing";

const Landing = () => {
  return <LandingContainer />;
};

export default Landing;
Landing.TopNav = TopNav;
Landing.Footer = Footer;
