import PageNotFound from '@/layout/404';
import MenuLayout from '@/layout/MenuLayout';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import authRoutes from './authRoutes';
import PermissionDenied from './components/PermissionDenied';
import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoutes from './components/PublicRoutes';
import dashboardRoutes from './dashboardRoutes';

const privateRoutes = [
  {
    path: '/',
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/',
        element: <MenuLayout />,
        children: [{ path: '/', element: <Navigate replace to={'/dashboard'} /> }, ...dashboardRoutes],
      },
    ],
  },
];

const publicRoutes = [
  {
    path: '/auth',
    element: <PublicRoutes />,
    children: [...authRoutes],
  },
  {
    path: '/denied',
    element: <PermissionDenied />,
  },
  {
    path: '/*',
    element: <PageNotFound />,
  },
];

const routes = [...privateRoutes, ...publicRoutes];

const MainRoutes = () => useRoutes(routes as RouteObject[]);

export default MainRoutes;
