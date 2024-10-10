import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { welcomeText } from "./translations";

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
          description: { welcome: welcomeText.en },
        },
      },
      ukr: {
        translation: {
          description: { welcome: welcomeText.ukr },
        },
      },
      esp: {
        translation: {
          description: { welcome: welcomeText.esp },
        },
      },
    },
  });

export default i18n;
