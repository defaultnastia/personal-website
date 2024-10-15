import classNames from "classnames";
import css from "./IntroSection.module.css";
import { Trans, useTranslation } from "react-i18next";
import photo from "../../images/profilePfoto.jpg";

const IntroSection = () => {
  // const { t } = useTranslation();
  return (
    <div className={classNames(css.intro, "container")}>
      {/* <div className={css.text}>{t("description.homePageText.introText")}</div> */}
      <div className={css.text}>
        <p>
          <Trans i18nKey="description.homePageText.introTextOne">
            As a <span>developer</span>, I strive to create dynamic, responsive
            and visually appealing web applications.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="description.homePageText.introTextTwo">
            As a <span>former QA</span>, I strive to do it well.
          </Trans>
        </p>
      </div>
      <div className={css.photo}>
        <img className={css.image} src={photo} alt="Photo of Anastasiia" />
      </div>
    </div>
  );
};

export default IntroSection;
