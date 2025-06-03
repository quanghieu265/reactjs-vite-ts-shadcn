import { LoginData } from '@/ts/types';
import api from '@/config/axios/api';

export default {
  handleLogin: function (data: LoginData) {
    const path = '/api/v1/user/login';
    return api.post(path, data);
  },

  handleRegister: function (data: LoginData) {
    const path = '/api/v1/user/signup';
    return api.post(path, data);
  },

  handleLogout: function () {
    const path = '/api/v1/user/logout';
    return api.post(path);
  },
};
