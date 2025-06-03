import { EnumLanguages } from '@/ts/enum/locale';

// Define content txt translate
const contentTranslate = {
  menu: {
    dashboard: 'Dashboard',
    tableManagement: 'Table Management',
    reservations: 'Reservations',
    waitlist: 'Waitlist',
    customers: 'Customers',
    notifications: 'Notifications',
    settings: 'Settings',
  },
};

export default {
  [`${EnumLanguages.en}`]: {
    translation: {
      ...contentTranslate,
    },
  },
};
