import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    react: {
      useSuspense: true,
    },
    fallbackLng: 'en',
    debug: false,
    compatibilityJSON: 'v3',
    detection: {
      order: ['queryString', 'cookie', 'navigator'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
