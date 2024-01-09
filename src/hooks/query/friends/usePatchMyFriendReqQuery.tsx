import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { FriendReqType } from '@/types/friend/friendsDataType';
import { ResToMyFriendType } from '@/recoil/atoms/modal/types';

const fetchAPI = async (data: ResToMyFriendType): Promise<FriendReqType> => {
  const { memeberReqId, friendState } = data;

  const res = await axiosAuth.patch(
    `/friends/handle/${memeberReqId}`,
    friendState
  );
  return res.data;
};

const usePatchMyFriendReqQuery = () => {
  const {
    data: isFriendReqAccept,
    mutate: FriendReqAcceptIsMutate,
    isError: FriendReqAcceptIsError,
    isSuccess: FriendReqAcceptIsSuccess
  } = useMutation({
    mutationKey: ['patchFriendReq'],
    mutationFn: (data: ResToMyFriendType) => fetchAPI(data)
  });

  return {
    isFriendReqAccept,
    FriendReqAcceptIsMutate,
    FriendReqAcceptIsError,
    FriendReqAcceptIsSuccess
  };
};

export default usePatchMyFriendReqQuery;
