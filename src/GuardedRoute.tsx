import { Navigate, Outlet } from 'react-router-dom';
import useUserState from './hooks/recoil/useUserState';

const GuardedRoute = () => {
  const { userState } = useUserState();

  return userState.isLogin ? <Outlet /> : <Navigate to="/auth" />;
};
export default GuardedRoute;
