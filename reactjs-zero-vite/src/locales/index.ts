import enTranslateDashboard from '@/locales/dashboard/en';
import viTranslateDashboard from '@/locales/dashboard/vi';
import enTranslateMenu from '@/locales/menu/en';
import viTranslateMenu from '@/locales/menu/vi';
import enTranslateCommon from '@/locales/common/en';
import viTranslateCommon from '@/locales/common/vi';
import { EnumLanguages } from '@/ts/enum/locale';

const rootLocaleResource = {
  [EnumLanguages.en]: {
    translation: {
      ...enTranslateDashboard[EnumLanguages.en].translation,
      ...enTranslateMenu[EnumLanguages.en].translation,
      ...enTranslateCommon[EnumLanguages.en].translation,
    },
  },
  [EnumLanguages.vi]: {
    translation: {
      ...viTranslateDashboard[EnumLanguages.vi].translation,
      ...viTranslateMenu[EnumLanguages.vi].translation,
      ...viTranslateCommon[EnumLanguages.vi].translation,
    },
  },
};

export default rootLocaleResource;
