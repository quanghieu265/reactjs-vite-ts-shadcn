import { lazy } from 'react';

const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));

const authRoutes = [
  {
    path: 'login',
    element: LoginPage
  },
];

export default authRoutes;
