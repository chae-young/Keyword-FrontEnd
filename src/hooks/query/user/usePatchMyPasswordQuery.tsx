import { useMutation } from '@tanstack/react-query';
import useToast from '@/hooks/useToast';
import { axiosAuth } from '@/apis';
import { UserPasswordType } from '@/types/user/userDataType';

const fetchAPI = async (password: string): Promise<UserPasswordType> => {
  const res = await axiosAuth.patch('/members/password', {
    password
  });
  return res.data;
};

const usePatchMyPasswordQuery = () => {
  const { toastSuccess, toastError } = useToast();
  const {
    data: IsMyPasswordUpdate,
    mutate: MyPasswordUpdateIsMutate,
    isError: MyPasswordUpdateIsError,
    isSuccess: MyPasswordUpdateIsSuccess
  } = useMutation({
    mutationKey: ['myPasswordUpdate'],
    mutationFn: (password: string) => fetchAPI(password),
    onSuccess: () => {
      toastSuccess('비밀번호 변경이 완료되었습니다.');
    },
    onError: () => {
      toastError('에러가 발생했습니다.');
    }
  });

  return {
    IsMyPasswordUpdate,
    MyPasswordUpdateIsMutate,
    MyPasswordUpdateIsError,
    MyPasswordUpdateIsSuccess
  };
};

export default usePatchMyPasswordQuery;
