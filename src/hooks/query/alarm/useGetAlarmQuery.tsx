import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { AlarmDataType } from '@/types/alarm/alarmDataType';

const fetchAPI = async (page: number): Promise<AlarmDataType[]> => {
  try {
    const list = await axiosAuth.get(`/notification?size=10&page=${page}`);
    return list.data.content;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const useGetAlarmQuery = () => {
  const {
    data: alarmList,
    isLoading: alarmListIsLoading,
    fetchNextPage: alarmListFetchNextPage,
    hasNextPage: alarmListHasNextPage
  } = useInfiniteQuery({
    queryKey: ['alarmList'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => fetchAPI(pageParam),
    getNextPageParam: (lastPage, allPage) => {
      const nextPage = allPage.length;
      return lastPage.length === 0 ? null : nextPage;
    }
  });

  return {
    alarmList,
    alarmListIsLoading,
    alarmListFetchNextPage,
    alarmListHasNextPage
  };
};

export default useGetAlarmQuery;
