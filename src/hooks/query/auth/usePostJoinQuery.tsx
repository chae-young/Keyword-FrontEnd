import { useMutation } from '@tanstack/react-query';
import { axiosDefault } from '@/apis';
import { JoinDataType } from '@/types/auth/authDataType';
import useToast from '@/hooks/useToast';

const fetchAPI = async (data: JoinDataType) => {
  const { email, password, name, phone } = data;

  const res = await axiosDefault.post('/members/signup', {
    email,
    password,
    name,
    phone
  });
  return res.data;
};

const usePostJoinQuery = () => {
  const { toastSuccess } = useToast();
  const {
    mutate: joinIsMutate,
    isError: joinIsError,
    isSuccess: joinIsSuccess
  } = useMutation({
    mutationKey: ['join'],
    mutationFn: ({ email, password, name, phone }: JoinDataType) =>
      fetchAPI({ email, password, name, phone }),
    onSuccess: () => {
      toastSuccess('회원가입이 완료되었습니다.');
    },
    onError: err => {
      console.log(err);
    }
  });

  return {
    joinIsMutate,
    joinIsError,
    joinIsSuccess
  };
};

export default usePostJoinQuery;
