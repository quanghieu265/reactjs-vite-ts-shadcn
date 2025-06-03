import i18next, { Resource } from 'i18next';
import ChainedBackend from 'i18next-chained-backend';
import rootLocaleResource from '@/locales';
import { initReactI18next } from 'react-i18next';
import { EnumLanguages } from '@/ts/enum/locale';
import { LOCALE_ID_STORAGE } from '@/utilities/constants';
import { getValueFromStorage } from '@/utilities/functions';

// Resources in source code
const resources = {
  ...rootLocaleResource,
} as Resource;

i18next
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    lng: (getValueFromStorage(LOCALE_ID_STORAGE) as string) || EnumLanguages.en,
    interpolation: {
      // Not needed for react as it escapes by default
      escapeValue: false,
    },
    resources,
  });

export default i18next;
