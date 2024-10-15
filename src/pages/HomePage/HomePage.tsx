import ContactMe from "../../components/ContactMe/ContactMe";
import Hero from "../../components/Hero/Hero";
import IntroSection from "../../components/IntroSection/IntroSection";
import TechnologiesSection from "../../components/TechnologiesSection/TechnologiesSection";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.home}>
      <Hero />
      <TechnologiesSection />
      <IntroSection />
      <ContactMe />
    </div>
  );
};

export default HomePage;
