import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/auth', { replace: true });
    }
  }, []);

  return <Outlet />;
};

export default AuthLayout;
