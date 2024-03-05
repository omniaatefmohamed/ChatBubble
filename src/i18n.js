import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslationEn from './Translation/En.json'
import TranslationAr from './Translation/Ar.json'
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
const resources = {
    en: {
        translation: TranslationEn
    },
    ar: {
        translation: TranslationAr
    }
};

i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next) 
    .init({
        resources,
        lng: "en", 
        interpolation: {
            escapeValue: false 
        },
        react:{
            useSuspense: false
        }
    });

export default i18n;