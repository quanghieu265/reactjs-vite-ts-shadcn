import { lazy } from 'react';
import { withSuspense } from '@/utilities/functions';
const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));

const authRoutes = [
  {
    path: 'login',
    element: withSuspense(LoginPage),
  },
];

export default authRoutes;
