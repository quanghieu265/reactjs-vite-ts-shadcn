import { EnumLanguages } from '@/ts/enum/locale';

// Define content txt translate
const contentTranslate = {
  menu: {
    dashboard: 'Trang chủ',
    tableManagement: 'Quản lý bảng',
    reservations: 'Đặt bàn',
    waitlist: 'Danh sách chờ',
    customers: 'Khách hàng',
    notifications: 'Thông báo',
    settings: 'Cài đặt',
  },
};

export default {
  [`${EnumLanguages.vi}`]: {
    translation: {
      ...contentTranslate,
    },
  },
};
