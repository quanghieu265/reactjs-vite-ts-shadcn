import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ConfigProviderProps } from 'antd';
import viVN from 'antd/locale/vi_VN';
type Locale = ConfigProviderProps['locale'];

export interface AuthState {
  userInfo: {
    isAuthenticated?: boolean;
  };
  locale: Locale;
}

const getAuthenticated = () => {
  const userInfo = localStorage.getItem('userInfo');
  return userInfo ? JSON.parse(userInfo) : false;
};

const initialState: AuthState = {
  userInfo: getAuthenticated(),
  locale: viVN, // Default locale
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticate: (state, action: PayloadAction<{ isAuthenticated: boolean }>) => {
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      state.userInfo = action.payload;
    },
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthenticate, setLocale } = authSlice.actions;

export default authSlice.reducer;
