import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { FriendReqType } from '@/types/friend/friendsDataType';
import { ResToMyFriendType } from '@/recoil/atoms/modal/types';
import { REQUESTED } from '@/constants/friends';
import useToast from '@/hooks/useToast';

const fetchAPI = async (data: ResToMyFriendType): Promise<FriendReqType> => {
  const { memeberReqId, friendStatus } = data;
  const res = await axiosAuth.patch(`/friends/handle/${memeberReqId}`, {
    friendStatus
  });
  return res.data;
};

const usePatchMyFriendReqQuery = () => {
  const { toastError } = useToast();
  const queryClient = useQueryClient();
  const {
    data: isFriendReqAccept,
    mutate: FriendReqAcceptIsMutate,
    isError: FriendReqAcceptIsError,
    isSuccess: FriendReqAcceptIsSuccess
  } = useMutation({
    mutationKey: ['patchFriendReq'],
    mutationFn: (data: ResToMyFriendType) => fetchAPI(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myFriends', REQUESTED] });
    },
    onError: () => {
      toastError('에러가 발생했습니다. 잠시후 다시 시도해주세요');
    }
  });

  return {
    isFriendReqAccept,
    FriendReqAcceptIsMutate,
    FriendReqAcceptIsError,
    FriendReqAcceptIsSuccess
  };
};

export default usePatchMyFriendReqQuery;
