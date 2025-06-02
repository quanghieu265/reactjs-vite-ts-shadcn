import { TEMPLATE_KEY_I18N } from 'locales';
import { EnumLanguages } from 'ts/enum/locale';

// Define content txt translate
const contentTranslate: typeof TEMPLATE_KEY_I18N = {
  login: 'Ví dụ',
  hello: {
    demo: 'VI123',
  },
  tuMoi: 'A',
  menu: {
    dashboard: 'DashboardVI',
    settings: 'SettingsVI',
    calendar: 'CalendarVI',
    reports: 'ReportsVI',
    reports123: 'Reports2VI',
    insights: 'InsightsVI',
    automations: 'AutomationsVI',
    reports2: 'Reports3VI',
  },
  userpopup: {
    userProfile: 'User ProfileVI',
    settings: 'SettingsVI',
    signOut: 'Sign OutVI',
  },
  pageNotFound: {
    title: 'Page Not FoundVI',
    button: 'Go to the DashboardVI',
  },
};

export default {
  [`${EnumLanguages.vi}`]: {
    translation: {
      ...contentTranslate,
    },
  },
};
