import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { ScheduleDetailType } from '@/types/schedule/scheduleDataType';
import useToast from '@/hooks/useToast';

const fetchAPI = async (scheduleId: number): Promise<ScheduleDetailType> => {
  const res = await axiosAuth.patch(`/schedules/${scheduleId}`);
  return res.data;
};

const usePatchScheduleQuery = () => {
  const { toastSuccess } = useToast();

  const {
    data: scheduleId,
    mutate: patchedScheduleIsMutate,
    isError: patchedScheduleIsError,
    isSuccess: patchedScheduleIsSuccess
  } = useMutation({
    mutationKey: ['patchSchedule'],
    mutationFn: (patchScheduleId: number) => fetchAPI(patchScheduleId),
    onSuccess: () => {
      toastSuccess('일정 수정이 완료되었습니다');
    }
  });

  return {
    scheduleId,
    patchedScheduleIsMutate,
    patchedScheduleIsError,
    patchedScheduleIsSuccess
  };
};

export default usePatchScheduleQuery;
