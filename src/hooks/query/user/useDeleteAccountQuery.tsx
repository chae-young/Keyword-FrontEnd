import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { axiosAuth } from '@/apis';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/auth';
import { removeCookie } from '@/util/cookie';

const fetchAPI = async (email: string): Promise<boolean> => {
  const res = await axiosAuth.delete('/members', {
    data: {
      email
    }
  });
  return res.data;
};

const useDeleteAccountQuery = () => {
  const navigate = useNavigate();
  const {
    data: AccountDeleteComplete,
    mutate: AccountDeleteIsMutate,
    isError: AccountDeleteIsError,
    isSuccess: AccountDeleteIsSuccess
  } = useMutation({
    mutationKey: ['accountDelete'],
    mutationFn: (email: string) => fetchAPI(email),
    onError: err => {
      throw err;
    },
    onSuccess: () => {
      // 토큰 삭제
      localStorage.removeItem(ACCESS_TOKEN);
      removeCookie(REFRESH_TOKEN);
      alert('회원 탈퇴가 완료되었습니다.');
      navigate('/auth', { replace: true });
    }
  });

  return {
    AccountDeleteComplete,
    AccountDeleteIsMutate,
    AccountDeleteIsError,
    AccountDeleteIsSuccess
  };
};

export default useDeleteAccountQuery;
