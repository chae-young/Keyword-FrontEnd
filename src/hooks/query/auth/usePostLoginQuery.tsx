import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { axiosDefault } from '@/apis';
import { LoginDataType, UserIsLoginDataType } from '@/types/auth/authDataType';
import { setCookie } from '@/util/cookie';
import useUserState from '@/hooks/recoil/useUserState';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/auth';

const fetchAPI = async (data: LoginDataType): Promise<UserIsLoginDataType> => {
  const { email, password } = data;

  const res = await axiosDefault.post('/members/signin', { email, password });
  return res.data;
};

const usePostLoginQuery = () => {
  const navigate = useNavigate();
  const { saveUserInfo } = useUserState();
  const {
    data: isLoginData,
    mutate: loginIsMutate,
    isError: loginIsError,
    isSuccess: loginIsSuccess,
    isPending: loginIsPending
  } = useMutation({
    mutationKey: ['login'],
    mutationFn: ({ email, password }: LoginDataType) =>
      fetchAPI({ email, password }),
    onSuccess: data => {
      localStorage.setItem(ACCESS_TOKEN, data.tokenResponse.accessToken);
      setCookie(REFRESH_TOKEN, data.tokenResponse.refreshToken, {
        path: '/'
      });
      saveUserInfo({
        ...data.myInfoResponse,
        isLogin: true
      });
      navigate('/', { replace: true });
    }
  });

  return {
    isLoginData,
    loginIsMutate,
    loginIsError,
    loginIsPending,
    loginIsSuccess
  };
};

export default usePostLoginQuery;
