import TopTitle from '@/components/common/TopTitle';
import ModalInSelectedFriends from '@/components/Schedule/ModalInSelectedFriedns';
import ScheduleCreate from '@/components/Schedule/ScheduleCreate';
import useGetScheduleDetailQuery from '@/hooks/query/schedules/useGetScheduleDetailQuery';

const ScheduleEditPage = () => {
  const { scheduleDetail } = useGetScheduleDetailQuery({
    scheduleId: '1',
    noticeId: '1'
  });

  return (
    <>
      <TopTitle title="일정 수정" back />
      <ScheduleCreate scheduleToEdit={scheduleDetail} />
      <ModalInSelectedFriends />
    </>
  );
};

export default ScheduleEditPage;
