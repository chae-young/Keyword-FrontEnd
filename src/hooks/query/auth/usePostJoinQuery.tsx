import { useMutation } from '@tanstack/react-query';
import { axiosDefault } from '@/apis';
import { JoinDataType } from '@/types/auth/authDataType';

const responsAPI = async (data: JoinDataType) => {
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
  const {
    mutate: joinIsMutate,
    isError: joinIsError,
    isSuccess: joinIsSuccess
  } = useMutation({
    mutationKey: ['join'],
    mutationFn: ({ email, password, name, phone }: JoinDataType) =>
      responsAPI({ email, password, name, phone }),
    onSuccess: data => {}
  });

  return {
    joinIsMutate,
    joinIsError,
    joinIsSuccess
  };
};

export default usePostJoinQuery;
