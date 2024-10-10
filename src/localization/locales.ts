export type localeTypes = "en" | "esp" | "ukr";

export type optionType = {
  value: string;
  label: string;
};

export const localeOptions: Array<optionType> = [
  { value: "en", label: "🇺🇸" },
  { value: "esp", label: "🇪🇸" },
  { value: "ukr", label: "🇺🇦" },
];
