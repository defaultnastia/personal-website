import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { homePageText } from "./translations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: { homePageText: homePageText.en },
        },
      },
      ukr: {
        translation: {
          description: { homePageText: homePageText.ukr },
        },
      },
      esp: {
        translation: {
          description: { homePageText: homePageText.esp },
        },
      },
    },
  });

export default i18n;
