import type { AuthData } from '@/utils/types/authTypes';
import api from './axios/api';

export default {
  handleLogin: function (data: AuthData) {
    const path = '/api/v1/user/login';
    return api.post(path, data);
  },

  handleRegister: function (data: AuthData) {
    const path = '/api/v1/user/signup';
    return api.post(path, data);
  },

  handleLogout: function () {
    const path = '/api/v1/user/logout';
    return api.post(path);
  },
};
