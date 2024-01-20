import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN } from '@/constants/auth';

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
      navigate('/auth', { replace: true });
    }
  }, []);

  return <Outlet />;
};

export default AuthLayout;
