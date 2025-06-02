import PagePermissionDenied from 'layout/PermissionDenied';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  //Get Item from local storage
  let user = null;
  const _user = localStorage.getItem('user');
  if (_user) {
    user = JSON.parse(_user);
  }
  if (user) {
    return {
      auth: true,
      role: user.role,
    };
  } else {
    return {
      auth: false,
      role: null,
    };
  }
};

//protected Route state
type ProtectedRouteType = {
  roleRequired?: 'ADMIN' | 'USER';
};

const ProtectedRoutes = (props: ProtectedRouteType) => {
  const { auth, role } = useAuth();

  //if the role required is there or not
  if (props.roleRequired) {
    return auth ? props.roleRequired === role ? <Outlet /> : <PagePermissionDenied /> : <Navigate to="/landing" />;
  } else {
    return auth ? <Outlet /> : <Navigate to="/landing" />;
  }
};

export default ProtectedRoutes;
