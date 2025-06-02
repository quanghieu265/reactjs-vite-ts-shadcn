import i18next, { Resource } from 'i18next';
import ChainedBackend from 'i18next-chained-backend';
import rootLocaleResource from 'locales';
import { initReactI18next } from 'react-i18next';
import utilities from 'utilities';
import { EnumLanguages } from 'ts/enum/locale';

// Resources in source code
const resources = {
  ...rootLocaleResource,
} as Resource;

i18next
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    lng: utilities.func.getValueFromStorage(utilities.const.LOCALE_ID_STORAGE) || EnumLanguages.en,
    interpolation: {
      // Not needed for react as it escapes by default
      escapeValue: false,
    },
    resources,
  });

export default i18next;

// import i18next from 'i18next';
// import rootLocaleResource from 'locales';
// import { initReactI18next } from 'react-i18next';
// import utilities from 'utilities';
// import ChainedBackend from 'i18next-chained-backend';
// import HttpBackend from 'i18next-http-backend';
// import resourcesToBackend from 'i18next-resources-to-backend';
// import { EnumLanguages } from 'ts/enum/locale';

// // Resources in source code
// const resources = {
//   ...rootLocaleResource,
// } as const;

// i18next
//   .use(ChainedBackend)
//   .use(initReactI18next)
//   .init({
//     lng:
//       utilities.func.getValueFromStorage(utilities.const.LOCALE_ID_STORAGE) ||
//       EnumLanguages.en,
//       // Flag debug in i18n
//       debug: true,
//     interpolation: {
//       // Not needed for react as it escapes by default
//       escapeValue: false,
//     },
//     // resources,
//     // Load file data i18n in BE
//     // translation: Namespace defined data in source code
//     // translations: Namespace defined data in folder public/file: "translations.json"
//     // translationsAPI: Namespace defined data when call API
//     ns: ['translation', 'translations', 'translationsAPI'],
//     defaultNS: 'translation',
//     backend: {
//       backends: [resourcesToBackend(resources), HttpBackend],
//     // Load file json in folder public
//       backendOptions: [
//         {
//           loadPath: '/locales/{{lng}}/translations.json',
//         },
//       ],
//     },
//   });

// export default i18next;

// translationsAPI: Namespace defined data when call API
// const getDataMultipleLanguagesI18n = () => {
//   return new Promise((r) =>
//     setTimeout(() => {
//       r({
//         a: 'E4',
//         b: 'E5',
//       });
//     }, 2000)
//   );
// };
// const dataLanguages = await getDataMultipleLanguagesI18n();
// i18n.addResourceBundle('en', 'translationsAPI', dataLanguages, true, true);
// i18n.addResourceBundle('vi', 'translationsAPI', dataLanguages, true, true);
