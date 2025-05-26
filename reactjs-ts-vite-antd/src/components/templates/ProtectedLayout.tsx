import Header from '@/components/organisms/Header';
import type { RootState } from '@/store/store';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedLayout() {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);

  return userInfo?.isAuthenticated ? (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <h1>Protected Layout</h1>
          <Outlet />
        </div>
      </Suspense>
    </>
  ) : (
    <Navigate to="/auth/login" />
  );
}

export default ProtectedLayout;
