import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { ChatListDataType } from '@/types/chatting/chatDataType';

const fetchAPI = async (page: number): Promise<ChatListDataType[]> => {
  try {
    const list = await axiosAuth.get(`/chats/room?size=10&page=${page}`);
    return list.data.content;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const useGetChatListQuery = () => {
  const {
    data: chatList,
    isLoading: chatListIsLoading,
    fetchNextPage: chatListFetchNextPage,
    hasNextPage: chatListhasNextPage
  } = useInfiniteQuery({
    queryKey: ['chatList'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => fetchAPI(pageParam),
    getNextPageParam: (lastPage, allPage) => {
      const nextpage = allPage.length;
      return lastPage.length === 0 ? null : nextpage;
    },
    staleTime: Infinity
  });

  return {
    chatList,
    chatListIsLoading,
    chatListFetchNextPage,
    chatListhasNextPage
  };
};

export default useGetChatListQuery;
