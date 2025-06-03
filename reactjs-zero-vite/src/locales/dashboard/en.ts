import { EnumLanguages } from '@/ts/enum/locale';

// Define content txt translate
const contentTranslate = {
  dashboard: {
    welcome: 'Welcome to Dashboard Page',
  },
};

export default {
  [`${EnumLanguages.en}`]: {
    translation: {
      ...contentTranslate,
    },
  },
};
