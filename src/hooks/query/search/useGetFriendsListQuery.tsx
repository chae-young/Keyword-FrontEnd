import { useInfiniteQuery } from '@tanstack/react-query';
import { BASE_URL, axiosAuth } from '@/apis';
import { FriendsDataType } from '@/types/friend/friendsDataType';

const fetchAPI = async (
  page: number,
  keyword: string
): Promise<FriendsDataType[]> => {
  try {
    const list = await axiosAuth(
      `${BASE_URL}/friends?keyword=${keyword}&size=10&page=${page}`
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
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => fetchAPI(pageParam, keyword),
    getNextPageParam: (lastPage, allPage) => {
      const nextPage = allPage.length + 1;
      return lastPage.length === 0 ? null : nextPage;
    }
  });

  return {
    friendsList,
    friendsListIsLoading,
    friendsListFetchNextPage,
    friendsListHasNextPage
  };
};

export default useGetFriendsListQuery;
