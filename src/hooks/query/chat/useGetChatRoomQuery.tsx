import { useQuery } from '@tanstack/react-query';
import { ChatPrevDataType } from '@/types/chatting/chatDataType';
import { axiosAuth } from '@/apis';

const fetchAPI = async (roomId: number): Promise<ChatPrevDataType[]> => {
  try {
    const res = await axiosAuth.get(`/chats/room/${roomId}`);

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const useGetChatRoomQuery = (roomId: number) => {
  const {
    data: chatPrevMessage,
    isLoading: chatPrevIsLoading,
    isSuccess: chatPrevIsSuccess,
    isError: chatPrevIsError
  } = useQuery({
    queryKey: ['chatPrevMsg', roomId],
    queryFn: () => fetchAPI(roomId)

    // staleTime: Infinity
  });

  return {
    chatPrevMessage,
    chatPrevIsLoading,
    chatPrevIsSuccess,
    chatPrevIsError
  };
};
export default useGetChatRoomQuery;
