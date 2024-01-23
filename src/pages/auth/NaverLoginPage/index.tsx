import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingPopup from '@/components/common/Loading/LoadingPopup';
import useUserState from '@/hooks/recoil/useUserState';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/auth';
import { setCookie } from '@/util/cookie';
import useGetProfileQuery from '@/hooks/query/user/useGetProfileQuery';

const NaverLoginPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { saveUserInfo } = useUserState();
  const accessToken = searchParams.get('access-token') as string;
  const refreshToken = searchParams.get('refresh-token') as string;

  localStorage.setItem(ACCESS_TOKEN, accessToken);
  setCookie(REFRESH_TOKEN, refreshToken, {
    path: '/'
  });

  const { user, userIsSuceess, userIsError } = useGetProfileQuery();

  if (userIsError) alert('로그인에 실패했습니다.');

  useEffect(() => {
    if (user) {
      saveUserInfo({
        ...user,
        isLogin: true
      });

      navigate('/', { replace: true });
    }
  }, [userIsSuceess]);

  return <LoadingPopup />;
};

export default NaverLoginPage;
