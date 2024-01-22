import { useParams } from 'react-router-dom';
import TopTitle from '@/components/common/TopTitle';
import ModalInSelectedFriends from '@/components/Schedule/ModalInSelectedFriedns';
import ScheduleCreate from '@/components/Schedule/ScheduleCreate';
import useGetScheduleDetailQuery from '@/hooks/query/schedules/useGetScheduleDetailQuery';

const ScheduleEditPage = () => {
  const params = useParams();
  const { scheduleDetail } = useGetScheduleDetailQuery({
    scheduleId: Number(params.id),
    noticeId: Number(params.id)
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
