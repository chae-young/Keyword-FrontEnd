import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import useToast from '@/hooks/useToast';

const responsAPI = async (memberId: number): Promise<boolean> => {
  const res = await axiosAuth.post(`/friends/${memberId}`);
  return res.data;
};

const usePostFriendAddQuery = (memberId: number) => {
  const { toastError } = useToast();
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
      queryClient.setQueryData(['friendAdd', reqMemberId], true);
      // 롤백
      return { prevMemberId };
    },
    onError: (_, reqMemberId, context) => {
      toastError('에러가 발생했습니다. 잠시후에 다시 시도해주세요');
      queryClient.setQueryData(
        ['friendAdd', reqMemberId],
        context?.prevMemberId
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['friendList'] });
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
