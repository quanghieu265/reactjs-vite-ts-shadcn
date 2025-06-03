import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

//protected Route state
type ProtectedRouteType = {
  roleRequired?: 'ADMIN' | 'USER';
};

const ProtectedRoutes = (props: ProtectedRouteType) => {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  const isAuthenticated = userInfo.isAuthenticated;

  //if the role required is there or not
  if (props.roleRequired) {
    return isAuthenticated ? props.roleRequired === userInfo.role ? <Outlet /> : <Navigate to="/denied" /> : <Navigate to="auth/login" />;
  } else {
    return isAuthenticated ? <Outlet /> : <Navigate to="auth/login" />;
  }
};

export default ProtectedRoutes;
