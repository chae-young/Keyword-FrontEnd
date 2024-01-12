import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { UserPasswordType } from '@/types/user/userDataType';

const fetchAPI = async (formData: FormData): Promise<UserPasswordType> => {
  const res = await axiosAuth.patch('/members/password', formData);
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
    mutationFn: (formData: FormData) => fetchAPI(formData)
  });

  return {
    IsMyPasswordUpdate,
    MyPasswordUpdateIsMutate,
    MyPasswordUpdateIsError,
    MyPasswordUpdateIsSuccess
  };
};

export default usePatchMyPasswordQuery;
