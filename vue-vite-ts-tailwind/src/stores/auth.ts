import { defineStore } from 'pinia';

const getAuthenticated = () => {
  const userInfo = localStorage.getItem('userInfo');
  return userInfo ? JSON.parse(userInfo) : false;
};

export const useAuthStore = defineStore('auth', {
  // for initially state
  state: () => {
    return {
      userInfo: getAuthenticated(),
    };
  },

  actions: {
    setAuthenticated(data: UserInfo) {
      localStorage.setItem('userInfo', JSON.stringify(data));
      this.userInfo = data;
    },
  },
});

interface UserInfo {
  isAuthenticated?: boolean;
}
