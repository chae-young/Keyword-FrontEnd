import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { FriendDeleteType } from '@/types/friend/friendsDataType';
import { ACCEPT } from '@/constants/friends';

const fetchAPI = async (memberReqId: number): Promise<FriendDeleteType> => {
  const res = await axiosAuth.delete(`/friends/${memberReqId}`);
  return res.data;
};

const useDeleteMyFriendQuery = () => {
  const queryClient = useQueryClient();
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
      queryClient.invalidateQueries({ queryKey: ['myFriends', ACCEPT] });
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
