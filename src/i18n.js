/** @format */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

import global_en from "./translations/en/global.json";
import global_zhHant from "./translations/zh-Hant/global.json";
import global_zhHans from "./translations/zh-Hans/global.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        global: global_en,
    },
    zhHant: {
        global: global_zhHant,
    },
    zhHans: {
        global: global_zhHans,
    },
};

i18n
    // passes i18n down to react-i18next
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        supportedLngs: ['en', 'zhHant', 'zhHans'],
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        fallbackLng: "en",
        debug: true,
    });

export default i18n;
