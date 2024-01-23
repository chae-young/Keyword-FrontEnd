import useInfinite from '@/hooks/useInfinite';
import MySchedulesItem from './MySchdulesItem';
import useGetSchedulesQuery from '@/hooks/query/schedules/useGetSchedulesQuery';
import NoDataText from '@/components/common/NoDataText';

const MySchedulesList = () => {
  const {
    schedulesList,
    schedulesListFetchNextPage,
    schedulesListhasNextPage
  } = useGetSchedulesQuery();
  const { lastElement } = useInfinite(
    schedulesListFetchNextPage,
    schedulesListhasNextPage
  );

  return (
    <>
      {schedulesList?.pages[0].length === 0 && (
        <NoDataText text="등록된 일정이 없습니다." />
      )}
      <ul className="[&>*:last-child]:border-0">
        {schedulesList?.pages.map(page =>
          page.map(list => (
            <MySchedulesItem
              key={list.scheduleId}
              scheduleId={list.scheduleId}
              title={list.title}
              scheduleDateTime={list.scheduleDateTime}
              locationExplanation={list.locationExplanation}
              status={list.status}
            />
          ))
        )}
        {lastElement()}
      </ul>
    </>
  );
};

export default MySchedulesList;
