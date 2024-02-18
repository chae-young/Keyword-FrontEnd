import NoDataText from '@/components/common/NoDataText';
import useGetAlarmQuery from '@/hooks/query/alarm/useGetAlarmQuery';
import useInfinite from '@/hooks/useInfinite';
import AlarmItem from '../AlarmItem';

const AlarmList = () => {
  const { alarmList, alarmListFetchNextPage, alarmListHasNextPage } =
    useGetAlarmQuery();
  const { lastElement } = useInfinite(
    alarmListFetchNextPage,
    alarmListHasNextPage
  );
  return (
    <ul className="pt-5">
      {alarmList?.pages.map(page =>
        alarmList?.pages[0].length ? (
          page.map(list => (
            <AlarmItem
              type={list.type}
              noticeId={list.noticeId}
              scheduleId={list.scheduleId}
              key={list.infoId}
            />
          ))
        ) : (
          <NoDataText text="알림이 없어요" key={0} />
        )
      )}

      {lastElement()}
    </ul>
  );
};

export default AlarmList;
