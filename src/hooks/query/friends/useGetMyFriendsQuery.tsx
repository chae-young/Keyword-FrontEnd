import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { FriendsDataType } from '@/types/friend/friendsDataType';

const fetchAPI = async (
  page: number,
  state: string
): Promise<FriendsDataType[]> => {
  try {
    const list = await axiosAuth.get(
      `/friends/state?friend-state=${state}&size=10&page=${page}`
    );
    return list.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const useGetMyFriendsQuery = (state: string) => {
  const {
    data: friendsList,
    isLoading: friendsListIsLoading,
    fetchNextPage: friendsListFetchNextPage,
    hasNextPage: friendsListHasNextPage
  } = useInfiniteQuery({
    queryKey: ['myFriends'],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => fetchAPI(pageParam, state),
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

export default useGetMyFriendsQuery;
