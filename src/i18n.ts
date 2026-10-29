import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./assets/locale/en.json";
import th from "./assets/locale/th.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof en;
    };
  }
}

export type SupportedLanguage = "en" | "th";

const storedLanguage = localStorage.getItem("portfolio-language");
export const initialLanguage: SupportedLanguage =
  storedLanguage === "th" ? "th" : "en";

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    th: { translation: th },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (language) => {
  const selectedLanguage: SupportedLanguage =
    language === "th" ? "th" : "en";
  localStorage.setItem("portfolio-language", selectedLanguage);
  document.documentElement.lang = selectedLanguage;
  document.title =
    selectedLanguage === "th"
      ? "จักรินทร์ เกิดไธสง | พอร์ตโฟลิโอ"
      : "Jakkarin Kerdthaidee | Portfolio";
});

document.documentElement.lang = initialLanguage;
document.title =
  initialLanguage === "th"
    ? "จักรินทร์ เกิดไธสง | พอร์ตโฟลิโอ"
    : "Jakkarin Kerdthaidee | Portfolio";

export default i18n;
