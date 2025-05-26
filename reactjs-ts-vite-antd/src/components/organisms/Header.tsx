import services from '@/services';
import { setAuthenticate } from '@/store/reducer/AuthReducer';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = useMutation({
    mutationFn: () => {
      return services.auth.handleLogout();
    },
    onSuccess: () => {
      dispatch(setAuthenticate({ isAuthenticated: false }));
      navigate('/auth/login');
    },
  });

  return (
    <>
      {' '}
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/users">
        <div>Users</div>
      </Link>
      <Link to="/auth/login">
        <div>Login</div>
      </Link>
      <Link to="/auth/register">
        <div>Register</div>
      </Link>
      <button
        onClick={() => {
          handleLogout.mutate();
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Header;
