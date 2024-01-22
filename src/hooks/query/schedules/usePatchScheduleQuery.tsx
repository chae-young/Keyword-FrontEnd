import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import {
  ScheduleDetailType,
  ScheduleEditDataType
} from '@/types/schedule/scheduleDataType';
import useToast from '@/hooks/useToast';

const fetchAPI = async (
  editData: ScheduleEditDataType
): Promise<ScheduleDetailType> => {
  const { scheduleId, schedule } = editData;

  const res = await axiosAuth.patch(`/schedules/${scheduleId}`, {
    ...schedule
  });
  return res.data;
};

const usePatchScheduleQuery = () => {
  const { toastSuccess, toastError } = useToast();

  const {
    data: scheduleId,
    mutate: patchedScheduleIsMutate,
    isError: patchedScheduleIsError,
    isSuccess: patchedScheduleIsSuccess
  } = useMutation({
    mutationKey: ['patchSchedule'],
    mutationFn: (editData: ScheduleEditDataType) => fetchAPI(editData),
    onSuccess: () => {
      toastSuccess('일정 수정이 완료되었습니다');
    },
    onError: () => {
      toastError('에러가 발생했습니다. 잠시후 다시 시도해주세요');
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
