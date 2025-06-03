import { buildPath } from '@/utilities/functions';
import api from '@/config/axios/api';

interface ParamsGetData {
  page?: number;
  size?: number;
  [key: string]: string | number | boolean | undefined;
}

export default {
  getListUser: function (params?: ParamsGetData) {
    const path = buildPath('/api/v1/user/all', params || {});
    return api.get(path);
  },

  deleteUser: function (id: number) {
    const path = `/api/v1/user/${id}`;
    return api.delete(path);
  },
};
