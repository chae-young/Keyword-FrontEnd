import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { FriendAddType } from '@/types/friend/friendsDataType';

const responsAPI = async (memberId: number): Promise<FriendAddType> => {
  const res = await axiosAuth.post(`/friends/${memberId}`);
  return res.data;
};

const usePostFriendAddQuery = (memberId: number) => {
  const queryClient = useQueryClient();
  const {
    data: IsFriendAdd,
    mutate: friendAddIsMutate,
    isError: friendAddIsError,
    isSuccess: friendAddIsSuccess
  } = useMutation({
    mutationKey: ['friendAdd', memberId],
    mutationFn: () => responsAPI(memberId),
    onMutate: async reqMemberId => {
      // 발신 취소
      await queryClient.cancelQueries({ queryKey: ['friendAdd', reqMemberId] });
      // 현재 정보 저장
      const prevMemberId = queryClient.getQueriesData({
        queryKey: ['friendAdd', reqMemberId]
      });
      // 비동기전 예상 결과를 클라이언트에 반영
      queryClient.setQueryData(['friendAdd', reqMemberId], {
        isFriendRequest: true
      });
      // 롤백
      return { prevMemberId };
    },
    onError: (err, reqMemberId, context) => {
      queryClient.setQueryData(
        ['friendAdd', reqMemberId],
        context?.prevMemberId
      );
    },
    onSettled: reqMemberId => {
      queryClient.invalidateQueries({ queryKey: ['friendAdd', reqMemberId] });
    }
  });

  return {
    IsFriendAdd,
    friendAddIsMutate,
    friendAddIsError,
    friendAddIsSuccess
  };
};

export default usePostFriendAddQuery;
