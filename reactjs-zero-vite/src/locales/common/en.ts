import { EnumLanguages } from '@/ts/enum/locale';

// Define content txt translate
const contentTranslate = {
  login: 'Login',
  pageNotFound: {
    title: 'Page Not Found',
    button: 'Go to the Dashboard',
  },
};

export default {
  [`${EnumLanguages.en}`]: {
    translation: {
      ...contentTranslate,
    },
  },
};
