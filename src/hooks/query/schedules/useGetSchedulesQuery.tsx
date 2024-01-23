import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { ScheduleDataType } from '@/types/schedule/scheduleDataType';

const fetchAPI = async (page: number): Promise<ScheduleDataType[]> => {
  try {
    const list = await axiosAuth.get(`/schedules?size=10&page=${page}`);
    return list.data.content;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const useGetSchedulesQuery = () => {
  const {
    data: schedulesList,
    isLoading: schedulesListIsLoading,
    fetchNextPage: schedulesListFetchNextPage,
    hasNextPage: schedulesListhasNextPage
  } = useInfiniteQuery({
    queryKey: ['schedulesList'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => fetchAPI(pageParam),
    getNextPageParam: (lastPage, allPage) => {
      const nextpage = allPage.length;
      return lastPage.length === 0 ? null : nextpage;
    }
    // staleTime: Infinity
  });

  return {
    schedulesList,
    schedulesListIsLoading,
    schedulesListFetchNextPage,
    schedulesListhasNextPage
  };
};

export default useGetSchedulesQuery;
