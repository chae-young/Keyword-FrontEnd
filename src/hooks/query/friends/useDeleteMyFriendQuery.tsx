import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { FriendDeleteType } from '@/types/friend/friendsDataType';
import useToast from '@/hooks/useToast';

const fetchAPI = async (memberReqId: number): Promise<FriendDeleteType> => {
  const res = await axiosAuth.delete(`/friends/${memberReqId}`);
  return res.data;
};

const useDeleteMyFriendQuery = () => {
  const { toastSuccess } = useToast();
  const {
    data: IsFriendDelete,
    mutate: friendDeleteIsMutate,
    isError: friendDeleteIsError,
    isSuccess: friendDeleteIsSuccess
  } = useMutation({
    mutationKey: ['myFriendDelete'],
    mutationFn: (memberReqId: number) => fetchAPI(memberReqId),
    onError: err => {
      throw err;
    },
    onSuccess: () => {
      toastSuccess('친구 삭제가 완료되었습니다.');
    }
  });

  return {
    IsFriendDelete,
    friendDeleteIsMutate,
    friendDeleteIsError,
    friendDeleteIsSuccess
  };
};

export default useDeleteMyFriendQuery;
