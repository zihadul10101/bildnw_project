import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ar from "./ar.json";

// console.log("Lineee", localStorage.getItem("lng"))
i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
  lng: localStorage.getItem("lng") || "en",
});

export default i18next;
