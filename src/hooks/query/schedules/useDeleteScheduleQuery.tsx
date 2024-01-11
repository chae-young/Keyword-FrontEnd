import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import useToast from '@/hooks/useToast';
import { ScheduleDeleteType } from '@/types/schedule/scheduleDataType';

const fetchAPI = async (scheduleId: number): Promise<ScheduleDeleteType> => {
  const res = await axiosAuth.delete(`/schedule/${scheduleId}`);
  return res.data;
};

const useDeleteScheduleQuery = () => {
  const { toastSuccess } = useToast();
  const {
    data: IsScheduleDelete,
    mutate: scheduleDeleteIsMutate,
    isError: scheduleDeleteIsError,
    isSuccess: scheduleDeleteIsSuccess
  } = useMutation({
    mutationKey: ['scheduleDelete'],
    mutationFn: (scheduleId: number) => fetchAPI(scheduleId),
    onError: err => {
      throw err;
    },
    onSuccess: () => {
      toastSuccess('일정 삭제가 완료되었습니다.');
    }
  });

  return {
    IsScheduleDelete,
    scheduleDeleteIsMutate,
    scheduleDeleteIsError,
    scheduleDeleteIsSuccess
  };
};

export default useDeleteScheduleQuery;
