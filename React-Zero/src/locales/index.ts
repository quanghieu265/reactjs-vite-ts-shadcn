import helper from 'helper';
import ENTranslate from 'locales/en';
import VITranslate from 'locales/vi';
import utilities from 'utilities';

// Define language key in Object i18n
export const TEMPLATE_KEY_I18N = {
  login: '',
  hello: {
    demo: '',
  },
  tuMoi: '',
  menu: {
    dashboard: '',
    settings: '',
    calendar: '',
    reports: '',
    reports123: '',
    insights: '',
    automations: '',
    reports2: '',
  },
  userpopup: {
    userProfile: '',
    settings: '',
    signOut: '',
  },
  pageNotFound: {
    title: '',
    button: '',
  },
};

// Define Enum LOCALE_KEYS
export const LOCALE_KEYS = helper.func.convertObjToEnum(utilities.func.convertObjectDefLocale(TEMPLATE_KEY_I18N));

const rootLocaleResource = {
  ...ENTranslate,
  ...VITranslate,
};

export default rootLocaleResource;
