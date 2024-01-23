import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { FriendsDataType } from '@/types/friend/friendsDataType';

const fetchAPI = async (
  page: number,
  keyword: string
): Promise<FriendsDataType[]> => {
  try {
    const list = await axiosAuth.get(
      `/friends?keyword=${keyword}&size=10&page=${page}`
    );
    return list.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const useGetFriendsListQuery = (keyword: string) => {
  const {
    data: friendsList,
    isLoading: friendsListIsLoading,
    fetchNextPage: friendsListFetchNextPage,
    hasNextPage: friendsListHasNextPage
  } = useInfiniteQuery({
    queryKey: ['friendList', keyword],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => fetchAPI(pageParam, keyword),
    getNextPageParam: (lastPage, allPage) => {
      const nextPage = allPage.length;
      return lastPage.length === 0 ? null : nextPage;
    },
    staleTime: 10000
  });

  return {
    friendsList,
    friendsListIsLoading,
    friendsListFetchNextPage,
    friendsListHasNextPage
  };
};

export default useGetFriendsListQuery;
