import { useTranslation } from "react-i18next";
import css from "./Hero.module.css";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className={css.hero}>
      <div className={css.background}></div>
      <h1 className={css.heroText}>{t("description.homePageText.heroText")}</h1>
    </div>
  );
};

export default Hero;
