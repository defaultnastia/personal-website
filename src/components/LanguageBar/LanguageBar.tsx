import { useState } from "react";
import i18n from "../../localization/configi18n";
import { optionType, localeTypes } from "../../localization/locales";
import Dropdown from "../CustomElements/Dropdown/Dropdown";

const localeOptions: Array<optionType> = [
  { value: "en", label: "🇺🇸" },
  { value: "esp", label: "🇪🇸" },
  { value: "ukr", label: "🇺🇦" },
];

const LanguageBar = () => {
  const [currentLocale, setCurrentLocale] = useState(
    i18n.resolvedLanguage as localeTypes
  );

  const changeLocale = (locale: localeTypes) => {
    i18n.changeLanguage(locale);
    setCurrentLocale(locale);
  };

  return (
    <div>
      <Dropdown<localeTypes>
        id="locales"
        title="🌍"
        data={localeOptions}
        selectedValue={currentLocale}
        onSelect={changeLocale}
      />
    </div>
  );
};

export default LanguageBar;

// import { useState } from "react";
// import i18n from "../../localization/configi18n";
// import {
//   localeOptions,
//   localeTypes,
// } from "../../localization/locales";
// import css from "./LanguageBar.module.css";

// const LanguageBar = () => {
//   const [currentLocale, setCurrentLocale] = useState(i18n.resolvedLanguage);

//   const changeLocale = (locale) => {
//     setCurrentLocale(locale[0].value);
//     i18n.changeLanguage(locale[0].value);
//   };

//   return (
//     <select
//       className={css.localsSelect}
//       value={currentLocale}
//       onChange={(event) => {
//         const selectedLocale = event.target.value as localeTypes;
//         changeLocale(selectedLocale);
//       }}
//     >
//       {localeOptions.map((locale) => (
//         <option key={locale.value} value={locale.value}>
//           {locale.label}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default LanguageBar;
