import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';

const fetchAPI = async (noticeId: number): Promise<boolean> => {
  const res = await axiosAuth.delete(`/notification/${noticeId}`);
  return res.data;
};

const useDeleteAlarmQuery = () => {
  const queryClient = useQueryClient();
  const {
    data: IsAlarmDelete,
    mutate: alarmDeleteIsMutate,
    isError: alarmDeleteIsError,
    isSuccess: alarmDeleteIsSuccess
  } = useMutation({
    mutationKey: ['myFriendDelete'],
    mutationFn: (noticeId: number) => fetchAPI(noticeId),
    onError: err => {
      throw err;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['alarmList'] });
    }
  });

  return {
    IsAlarmDelete,
    alarmDeleteIsMutate,
    alarmDeleteIsError,
    alarmDeleteIsSuccess
  };
};

export default useDeleteAlarmQuery;
