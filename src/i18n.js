/** @format */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ["en", "zh-TW", "zh-CN"],
        defaultNS: "global",
        // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        load:"currentOnly",
        detection: {
            order: ["path", "cookie", "htmlTag"],
            caches: ["cookie"],
        },
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        fallbackLng: "en",
        debug: true,
        backend: {
            loadPath: "/locales/{{lng}}/global.json",
        },
    });

export default i18n;
