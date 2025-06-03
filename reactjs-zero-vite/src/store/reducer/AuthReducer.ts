import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type Role = 'USER' | 'ADMIN';

export interface AuthState {
  userInfo: {
    isAuthenticated?: boolean;
    role?: Role;
  };
}

const getAuthenticated = () => {
  const userInfo = localStorage.getItem('userInfo');
  return userInfo ? JSON.parse(userInfo) : {
    isAuthenticated: true,
    role: 'USER',
  };
};

const initialState: AuthState = {
  userInfo: getAuthenticated(),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticate: (state: AuthState, action: PayloadAction<{ isAuthenticated: boolean }>) => {
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthenticate } = authSlice.actions;

export default authSlice.reducer;
