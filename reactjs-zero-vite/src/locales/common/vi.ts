import { EnumLanguages } from '@/ts/enum/locale';

// Define content txt translate
const contentTranslate = {
  login: 'Đăng nhập',
  pageNotFound: {
    title: 'Trang không tồn tại',
    button: 'Trở về trang chủ',
  },
};

export default {
  [`${EnumLanguages.vi}`]: {
    translation: {
      ...contentTranslate,
    },
  },
};
