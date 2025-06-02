import PageNotFound from 'layout/404';
import MenuLayout from 'layout/MenuLayout';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { EnumPathRouters } from 'ts/enum/menu';
import PermissionDenied from './components/PermissionDenied';
import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoutes from './components/PublicRoutes';
const ProfilePage = React.lazy(() => import('pages/Login'));

const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    {/** Wrap all Route under ProtectedRoutes element */}
    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/" element={<MenuLayout />}>
        <Route path="/" element={<Navigate replace to={EnumPathRouters.dashboard} />} />
        <Route path={EnumPathRouters.dashboard} element={<div>Dashboard</div>} />
        <Route
          path={EnumPathRouters.reports123}
          // element={<Tabs props={{ userName: 'Bikash web' }} />}
        >
          <Route path={EnumPathRouters.reports123} element={<Navigate replace to={EnumPathRouters.insights} />} />
          <Route path={EnumPathRouters.insights} element={<div>Tab1</div>} />
          <Route path={EnumPathRouters.automations} element={<ProtectedRoutes roleRequired="USER" />}>
            <Route path={EnumPathRouters.automations} element={<div>Tab2</div>} />
          </Route>
          <Route path={EnumPathRouters.reports2} element={<ProfilePage />} />
        </Route>
        <Route path={EnumPathRouters.settings} element={<ProtectedRoutes roleRequired="USER" />}>
          <Route path={EnumPathRouters.settings} element={<div>Setting</div>} />
        </Route>
        <Route path={EnumPathRouters.calendar} element={<div>Calender</div>} />
      </Route>
      <Route path={EnumPathRouters.reports} element={<div>Reports Page</div>} />
    </Route>

    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path={EnumPathRouters.landingPage} element={<PublicRoutes />}>
      <Route
        path={EnumPathRouters.landingPage}
        element={(() => {
          console.log('Langing Page Here :>> ');
          return <div>Landing Page</div>;
        })()}
      />
    </Route>

    <Route path={EnumPathRouters.login} element={<PublicRoutes />}>
      <Route
        path={EnumPathRouters.login}
        element={(() => {
          console.log('Login Page Here :>> ');
          return <div>Login Page</div>;
        })()}
      />
    </Route>
    {/* <Route path={EnumPathRouters.login} element={<PublicRoutes />}></Route> */}

    {/** Permission denied route */}
    <Route path={EnumPathRouters.denied} element={<PermissionDenied />} />

    <Route path="/*" element={<PageNotFound />} />
  </Routes>
);

export default MainRoutes;
