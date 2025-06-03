import { EnumLanguages } from '@/ts/enum/locale';

// Define content txt translate
const contentTranslate = {
  dashboard: {
    welcome: 'Chào mừng đến trang Dashboard',
  },
};

export default {
  [`${EnumLanguages.vi}`]: {
    translation: {
      ...contentTranslate,
    },
  },
};
