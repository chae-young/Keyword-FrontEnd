import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import useToast from '@/hooks/useToast';
import {
  ScheduleDataIdType,
  ScheduleDetailType
} from '@/types/schedule/scheduleDataType';
import usePostChatRoomQuery from '../chat/usePostChatRoomQuery';

const fetchAPI = async (
  data: ScheduleDetailType
): Promise<ScheduleDataIdType> => {
  const res = await axiosAuth.post('/schedules', data);
  return res.data;
};

const usePostSchedulesQuery = () => {
  const { toastSuccess } = useToast();
  const { chatRoomCreateIsMutate } = usePostChatRoomQuery();
  const {
    data: scheduleId,
    mutate: scheduleIsMutate,
    isError: scheduleIsError,
    isSuccess: scheduleIsSuccess
  } = useMutation({
    mutationKey: ['schedule'],
    mutationFn: (data: ScheduleDetailType) => fetchAPI(data),
    onSuccess: data => {
      toastSuccess('일정이 등록되었습니다.');
      chatRoomCreateIsMutate(data.scheduleId);
    },
    onError: err => {
      console.log(err);
    }
  });

  return {
    scheduleId,
    scheduleIsMutate,
    scheduleIsError,
    scheduleIsSuccess
  };
};

export default usePostSchedulesQuery;
