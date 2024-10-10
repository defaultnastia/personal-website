import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("description.welcome.mainTitle")}</p>
    </div>
  );
};

export default HomePage;
