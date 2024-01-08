import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { BASE_URL } from '@/apis';
import { ChatListDataType } from '@/types/chatting/chatDataType';

const fetchAPI = async (page: number): Promise<ChatListDataType[]> => {
  try {
    const list = await axios.get(`${BASE_URL}/chats?size=10&page=${page}`);
    return list.data;
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
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => fetchAPI(pageParam),
    getNextPageParam: (lastPage, allPage) => {
      const nextpage = allPage.length + 1;
      return lastPage.length === 0 ? null : nextpage;
    },
    staleTime: 20000
  });

  return {
    chatList,
    chatListIsLoading,
    chatListFetchNextPage,
    chatListhasNextPage
  };
};

export default useGetChatListQuery;
