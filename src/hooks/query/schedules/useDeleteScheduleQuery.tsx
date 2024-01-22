import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import useToast from '@/hooks/useToast';
import { ScheduleDeleteType } from '@/types/schedule/scheduleDataType';

const fetchAPI = async (scheduleId: number): Promise<ScheduleDeleteType> => {
  const res = await axiosAuth.delete(`/schedules/${scheduleId}`);
  return res.data;
};

const useDeleteScheduleQuery = () => {
  const { toastSuccess, toastError } = useToast();
  const {
    data: IsScheduleDelete,
    mutate: scheduleDeleteIsMutate,
    isError: scheduleDeleteIsError,
    isSuccess: scheduleDeleteIsSuccess
  } = useMutation({
    mutationKey: ['scheduleDelete'],
    mutationFn: (scheduleId: number) => fetchAPI(scheduleId),
    onError: err => {
      console.log(err);
      toastError('에러가 발생했습니다. 잠시후 다시 시도해주세요');
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
