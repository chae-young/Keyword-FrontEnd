import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import useToast from '@/hooks/useToast';

const fetchAPI = async (scheduleId: number) => {
  const res = await axiosAuth.post(`/chats/room/${scheduleId}`);
  return res.data;
};

const usePostChatRoomQuery = () => {
  const { toastError } = useToast();
  const {
    mutate: chatRoomCreateIsMutate,
    isError: chatRoomCreateIsError,
    isSuccess: chatRoomCreateIsSuccess
  } = useMutation({
    mutationKey: ['chatRoom'],
    mutationFn: (scheduleId: number) => fetchAPI(scheduleId),
    onSuccess: () => {},
    onError: err => {
      console.log(err);
      toastError('에러가 발생했습니다.');
    }
  });

  return {
    chatRoomCreateIsMutate,
    chatRoomCreateIsError,
    chatRoomCreateIsSuccess
  };
};

export default usePostChatRoomQuery;
