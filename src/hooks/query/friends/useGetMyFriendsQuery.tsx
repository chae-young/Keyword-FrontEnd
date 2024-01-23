import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { FriendsDataType } from '@/types/friend/friendsDataType';

const fetchAPI = async (
  page: number,
  state: string
): Promise<FriendsDataType[]> => {
  try {
    const list = await axiosAuth.get(
      `/friends?friend-state=${state}&size=10&page=${page}`
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
    queryKey: ['myFriends', state],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => fetchAPI(pageParam, state),
    getNextPageParam: (lastPage, allPage) => {
      const nextPage = allPage.length;
      return lastPage.length === 0 ? null : nextPage;
    },
    staleTime: 20000
  });

  return {
    friendsList,
    friendsListIsLoading,
    friendsListFetchNextPage,
    friendsListHasNextPage
  };
};

export default useGetMyFriendsQuery;
