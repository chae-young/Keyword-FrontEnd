import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { UserPasswordType } from '@/types/user/userDataType';

const fetchAPI = async (password: string): Promise<UserPasswordType> => {
  const res = await axiosAuth.patch('/members/password', password);
  return res.data;
};

const usePatchMyPasswordQuery = () => {
  const {
    data: IsMyPasswordUpdate,
    mutate: MyPasswordUpdateIsMutate,
    isError: MyPasswordUpdateIsError,
    isSuccess: MyPasswordUpdateIsSuccess
  } = useMutation({
    mutationKey: ['myPasswordUpdate'],
    mutationFn: (password: string) => fetchAPI(password)
  });

  return {
    IsMyPasswordUpdate,
    MyPasswordUpdateIsMutate,
    MyPasswordUpdateIsError,
    MyPasswordUpdateIsSuccess
  };
};

export default usePatchMyPasswordQuery;
