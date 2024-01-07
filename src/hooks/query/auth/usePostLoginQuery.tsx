import { useMutation } from '@tanstack/react-query';
import { axiosDefault } from '@/apis';
import { LoginDataType } from '@/types/auth/authDataType';
import { setCookie } from '@/util/cookie';

const fetchAPI = async (data: LoginDataType) => {
  const { email, password } = data;

  const res = await axiosDefault.post('/members/signin', { email, password });
  return res.data;
};

const usePostLoginQuery = () => {
  const {
    mutate: loginIsMutate,
    isError: loginIsError,
    isSuccess: loginIsSuccess
  } = useMutation({
    mutationKey: ['login'],
    mutationFn: ({ email, password }: LoginDataType) =>
      fetchAPI({ email, password }),
    onSuccess: data => {
      localStorage.setItem('accessToken', data.accessToken);
      setCookie('refreshToken', data.refreshToken, {
        path: '/'
      });
    }
  });

  return {
    loginIsMutate,
    loginIsError,
    loginIsSuccess
  };
};

export default usePostLoginQuery;
