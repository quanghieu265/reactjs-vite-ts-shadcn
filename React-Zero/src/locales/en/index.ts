import { TEMPLATE_KEY_I18N } from 'locales';
import { EnumLanguages } from 'ts/enum/locale';

// Define content txt translate
const contentTranslate: typeof TEMPLATE_KEY_I18N = {
  login: 'Demo',
  hello: {
    demo: 'EN123',
  },
  tuMoi: 'B',
  menu: {
    dashboard: 'DashboardEN',
    settings: 'SettingsEN',
    calendar: 'CalendarEN',
    reports: 'ReportsEN',
    reports123: 'Reports2EN',
    insights: 'InsightsEN',
    automations: 'AutomationsEN',
    reports2: 'Reports3EN',
  },
  userpopup: {
    userProfile: 'User ProfileEN',
    settings: 'SettingsEN',
    signOut: 'Sign OutEN',
  },
  pageNotFound: {
    title: 'Page Not FoundEN',
    button: 'Go to the DashboardEN',
  },
};

export default {
  [`${EnumLanguages.en}`]: {
    translation: {
      ...contentTranslate,
    },
  },
};
